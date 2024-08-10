"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { type UpdateUserInfoInput, UpdateUserInfoSchema } from "@/validators/update-user-info-validator"
import { valibotResolver } from "@hookform/resolvers/valibot"
import { Pencil1Icon } from "@radix-ui/react-icons"
import { type User } from "next-auth"
import { useForm } from "react-hook-form"
import { value } from "valibot"
import { CardContent } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Label } from "../ui/label"

type UpdateUserInfoFormProps = { user: User }

export const UpdateUserInfoForm = ({ user }: UpdateUserInfoFormProps) => {

    const { id, name: defaultName } = user

    const form = useForm<UpdateUserInfoInput>({
        resolver: valibotResolver(UpdateUserInfoSchema),
        defaultValues: { id, name: defaultName || "" } 
    })

    const {handleSubmit, control, formState } = form;
    const submit = async (values: UpdateUserInfoInput) => {
        console.log(values)
    }
    return (
        <CardContent>
            <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="grid gap-2">
                <Button variant="outline">Change Photo</Button>
                <Button variant="secondary">Remove Photo</Button>
            </div>
            </div>
            <div className="grid gap-4">
            <Form {...form}>
                <form onSubmit={handleSubmit(submit)} className="space-y-4">
                    <FormField
                    control={control} 
                    name="name" 
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField 
                    name="id"
                    render={({ field }) => <FormMessage />}/>
                    <Button type="submit" disabled={formState.isSubmitting}>Update Profile</Button>
                </form>
            </Form>
            </div>
        </CardContent>      
    )
}
                    