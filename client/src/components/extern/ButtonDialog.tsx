"use client"

import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Link from "next/link";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const ButtonDialog: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
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
                        <div className="grid gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="m@example.xyz"></Input>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="*******"></Input>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button type="submit">Log In</Button>
                            <p className="text-center text-sm text-muted-foreground">Don't have an account?{" "}
                                <Link href="#" className="underline" prefetch={false}>
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ButtonDialog;
