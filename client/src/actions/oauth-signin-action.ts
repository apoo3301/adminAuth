"use server"

import { isRedirectError } from "next/dist/client/components/redirect"
import { signIn } from "../../auth"

export async function oauthSigninAction(provider: "google") {
    try {
       await signIn(provider, { redirectTo: "/agency/profile" }) 
    } catch (err) {
        if (isRedirectError(err)) {
            throw err
        }
        console.error(err)
    }
}