import React from 'react'
import { auth } from '../../../../../auth'
import { Button } from '@/components/ui/button';
import Link from 'next/link'; // Use 'next/link' instead of 'lucide-react'
import { type User } from 'next-auth';
import SignoutButton from '@/components/extern/SignoutButton';

export default async function ProfilePage() {
    const session = await auth();
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

const SignedIn = ({ user }: { user: User }) => {
    return (
        <>
            <h2 className='text-2xl font-bold tracking-tight'>User Information</h2>
            <table className="mt-4 table-auto divide-y">
                <thead>
                    <tr className='divide-x'>
                        <th className='bg-gray-50 px-6 py-3 text-start'>Name</th>
                        <th className='bg-gray-50 px-6 py-3 text-start'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='divide-x'>
                        <td className='px-6 py-3'>{user.name}</td>
                        <td className='px-6 py-3'>{user.email}</td>
                    </tr>
                </tbody>
            </table>
            <div className='my-2 h-1 bg-muted' />
            <SignoutButton />
        </>
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
