import SigninForm from './_components/signinForm'

export default function SigninPage() {
    return (
        <main className="mt-4">
            <div className="container">
                <h1 className="text-3xl font-bold tracking-tight">Sign in</h1>
                <div className="h-1 bg-muted my-4">
                    <SigninForm />
                    {/* oauth */}

                </div>
            </div>
        </main>
    )
}