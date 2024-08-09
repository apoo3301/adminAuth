"use server"

import { isRedirectError } from "next/dist/client/components/redirect";
import { signOut } from "../../auth";

export async function SignoutUserAction() {
    try {
        await signOut({ redirect: false });
    } catch (err) {
        console.error(err);
    }
}