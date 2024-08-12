import { Button } from '@/components/ui/button'
import SigninForm from './_components/signinForm'
import Link from 'next/link'

export default function SigninPage() {
    return (
        <main className="mt-4">
            <div className="container">
                <h1 className="text-3xl font-bold tracking-tight">Sign in</h1>
                <div className="h-1 bg-muted my-4">
                    <SigninForm />
                    {/* oauth */}
                    <p>Don&apos;t have an account? Click{" "}
                        <Button variant="link" size="sm" className="px-0" asChild>
                            <Link href="/agency/auth/sign-up">here</Link>
                        </Button>{" "}
                        to sign up.
                    </p>
                </div>
            </div>
        </main>
    )
}