import Link from "next/link"
import { Button } from "../ui/button"
import ButtonDialog from "./ButtonDialog"
import SignoutButton from "./SignoutButton"
import { auth } from "../../../auth"

export const HeaderLinks = async () => {
    const session = await auth();
    return !!session?.user ? <SignedIn /> : <SignedOut />
    return (
        <div>nav</div>
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