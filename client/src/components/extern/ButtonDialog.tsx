"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Link from "next/link";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { SigninSchema, type SigninInput } from "@/validators/signin-validator";
import { signinUserAction } from "@/actions/signin-user-action";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { OauthSigninButton } from "./OauthSigninButton";

export const ButtonDialog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const form = useForm<SigninInput>({
        resolver: valibotResolver(SigninSchema),
        defaultValues: { email: "", password: "" },
    });

    const { handleSubmit, control, formState, setError } = form;

    const submit = async (values: SigninInput) => {
        const res = await signinUserAction(values);

        if (res.success) {
            window.location.href = "/agency/profile";
        } else {
            switch (res.statusCode) {
                case 401:
                    setError("password", { message: "invalid credentials" });
                    break;
                case 500:
                default:
                    const error = res.error || "internal server error";
                    setError("password", { message: error });
            }
        }
    };

    const handleSignUpClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Sign In</Button>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <VisuallyHidden>
                        <DialogTitle>Sign In</DialogTitle>
                    </VisuallyHidden>
                    <div className="space-y-6">
                        <div className="space-y-2 text-center">
                            <h2 className="text-3xl font-bold">Welcome</h2>
                            <p className="text-muted-foreground">Log in or Sign up to continue</p>
                        </div>

                        <Form {...form}>
                            <form onSubmit={handleSubmit(submit)} className="space-y-4" autoComplete="off">
                                <FormField
                                    control={control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="m@example.xyz" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="*******" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <OauthSigninButton />
                                <Button
                                    type="submit"
                                    disabled={formState.isSubmitting}
                                    className="w-full"
                                >
                                    Log In
                                </Button>
                            </form>
                        </Form>

                        <p className="text-center text-sm text-muted-foreground">
                            Don&apos;t have an account?{" "}
                            <Link 
                                href="/agency/auth/sign-up" 
                                className="underline" 
                                prefetch={false}
                                onClick={handleSignUpClick}
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ButtonDialog;
