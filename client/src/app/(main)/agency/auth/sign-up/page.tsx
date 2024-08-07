import { Button } from "@/components/ui/button";
import SignupForm from "./_components/signupForm";
import Link from "next/link";

export default function SignupPage() {
    return (
        <main className="mt-4">
            <div className="container">
                <h1 className="text-3xl font-bold tracking-tight">Sign Up</h1>
                <div className="h-1 bg-muted my-4" />
                    <SignupForm />
                    {/* OAuth */}
                <div className="my-4 h-1 bg-muted" />
                    <p>Already have an account? Click{" "}
                        <Button variant="link" size="sm" className="px-0" asChild>
                            <Link href="/agency/auth/sign-in">here</Link>
                        </Button> {" "}
                        to sign in.
                    </p>
            </div>
        </main>
    )
}