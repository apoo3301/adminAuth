import React from 'react'
import SignupForm from '@/app/(main)/_components/signupForm';

function page() {
  return (
    <main className="mt-4">
        <div className="container">
            <h1 className="text-3xl font-bold tracking-tight">
                <div className="h-1 bg-muted my-4">
                    <SignupForm />
                    {/* Oauth */}

                </div>
            </h1>
        </div>
    </main>
  )
}

export default page