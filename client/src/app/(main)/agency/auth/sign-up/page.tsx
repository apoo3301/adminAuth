import { Button } from "@/components/ui/button";
import {SignupFormDemo} from "./_components/signupForm";
import Link from "next/link";

export default function SignupPage() {
    return (
        <main className="mt-4">
            <div className="container">
                    <SignupFormDemo />
            </div>
        </main>
    )
}