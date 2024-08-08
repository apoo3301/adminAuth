"use server"

import { signOut } from "../../auth";

export async function SignoutUserAction() {
    try {
        await signOut({ redirectTo: "/" });
    } catch (err) {
        console.error(err);
    }
}