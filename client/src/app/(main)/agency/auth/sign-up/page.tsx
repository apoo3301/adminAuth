import SignupForm from "./_components/signupForm";

export default function SignupPage() {
    return (
        <main className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight">
                Sign Up
            </h1>
            <div className="h-1 bg-muted my-4">
                <SignupForm />
                {/* OAuth */}
            </div>
        </main>
    )
}