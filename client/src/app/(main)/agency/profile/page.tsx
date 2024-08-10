import SignoutButton from '@/components/extern/SignoutButton';
import { Button } from '@/components/ui/button';
import { auth } from '../../../../../auth'
import { type User } from 'next-auth';
import Link from 'next/link';
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { findUserByAuth } from '../../../../../resources/user-queries';
import { UpdateUserInfoForm } from '@/components/extern/UpdateUserInfoForm';
  
export default async function ProfilePage() {
    const session = await auth();
    const databaseUser = await findUserByAuth();
    

    return (
        <div className='mt-4'>
            <div className='container'>
                <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
                <div className="my-4 h-1 bg-muted" />
                {!!session?.user ? <SignedIn user={session.user} /> : <SignedOut />}
            </div>
        </div>
    )
}

const SignedIn = async ({ user }: { user: User }) => {
    // const sessionsUserId = user.id;
    // // console.log(sessionsUserId);
    // const databaseUser = await findUserById(sessionsUserId)
    return (
            <div className="flex flex-col min-h-screen bg-muted/40">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <div className="flex items-center gap-4">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                <div className="flex items-center gap-2 p-2">
                    <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5 leading-none">
                    <div className="font-semibold">John Doe</div>
                    <div className="text-sm text-muted-foreground">john@example.com</div>
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <div className="h-4 w-4" />
                    <span>Account</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <div className="h-4 w-4" />
                    <span>Billing</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <div className="h-4 w-4" />
                    <span>Security</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <div className="h-4 w-4" />
                    <span>Notifications</span>
                    </Link>
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="grid gap-0.5 leading-none">
                <div className="font-semibold">{user.name}</div>
                <div className="text-sm text-muted-foreground">{user.email}</div>
            </div>
            </div>
        </header>
        <main className="flex-1 p-4 sm:p-6">
            <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
                <Card>
                <CardHeader>
                    <CardTitle>Account Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                        <Label htmlFor="plan">UID</Label>
                        <Input id="plan" defaultValue={user.id} disabled />
                        </div>
                        <div className="space-y-1">
                        <Label htmlFor="usage">Role</Label>
                        <Input id="usage" defaultValue={user.role} disabled />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                        <Label htmlFor="billing-date">Created At</Label>
                        <Input id="billing-date" defaultValue="June 1, 2023" disabled />
                        </div>
                        
                    </div>
                    
                    </div>
                </CardContent>
                
                </Card>
            </div>
            <div className="grid gap-6">
                <Card>
                <CardHeader>
                    <CardTitle>Profile</CardTitle>
                </CardHeader>
                <UpdateUserInfoForm user={user} />
                <CardFooter>
                    <SignoutButton />
                </CardFooter>
                </Card>
                <Card>
                <CardHeader>
                    <CardTitle>Security</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                    <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" defaultValue="********" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="2fa">Two-Factor Authentication</Label>
                        <div className="flex items-center gap-2">
                        <Switch id="2fa" defaultChecked />
                        <span>Enabled</span>
                        </div>
                    </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant="secondary">Update Security</Button>
                </CardFooter>
                </Card>
                {/* <Card>
                <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                    <div className="space-y-1">
                        <Label htmlFor="email-notifications">Email Notifications</Label>
                        <div className="flex items-center gap-2">
                        <Switch id="email-notifications" defaultChecked />
                        <span>Enabled</span>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="push-notifications">Push Notifications</Label>
                        <div className="flex items-center gap-2">
                        <Switch id="push-notifications" defaultChecked />
                        <span>Enabled</span>
                        </div>
                    </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant="secondary">Update Notifications</Button>
                </CardFooter>
                </Card> */}
            </div>
            </div>
        </main>
        </div>
    )
}

const SignedOut = () => {
    return (
        <>
            <h2 className='text-2xl font-bold tracking-tight'>Sign In Required</h2>
            <div className='my-2 h-1 bg-muted' />
            <Button asChild>
                <Link href='/agency/auth/sign-in'>Sign in</Link>
            </Button>
        </>
    )
}
