"use client"

import { SignoutUserAction } from "@/actions/signout-user-action";
import { Button } from "@/components/ui/button";

export default function SignoutButton() {
    const clickHandler = async () => {
        await SignoutUserAction();
        window.location.href = "/";
    }
    return (
        <Button variant="destructive" size="sm" onClick={clickHandler}>
            Sign Out
        </Button>
    )
}