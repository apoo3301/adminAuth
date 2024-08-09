"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import ButtonDialog from "./ButtonDialog"
import SignoutButton from "./SignoutButton"
import {useSession} from "next-auth/react" 
import { Loader, Loader2Icon } from "lucide-react"

export const HeaderLinks = () => {
    const session = useSession();
    
    switch(session.status) {
        case "loading":
            return <Loading />;
        case "unauthenticated":
            return <SignedOut />;
        case "authenticated":
            return <SignedIn />;
        return <SignedIn />
        default:
            return null
    }
}

const Loading = () => {
    return (
        <li>
            <Button size="sm" variant="ghost">
                <Loader2Icon className="min-w-[8ch] animate-spin" />
            </Button>
        </li>
    )
}

const SignedIn = () => {
    return (
        <>
            <Button size="sm" asChild variant="outline">
                <Link href="/agency/profile">profile</Link>
            </Button>
        </>
    )
}

const SignedOut = () => {
    return (
        <div>
            <ButtonDialog />
        </div>
    )
}