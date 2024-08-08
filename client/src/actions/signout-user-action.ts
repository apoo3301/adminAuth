"use server"

import { signOut } from "../../auth";

export async function SignoutUserAction() {
    try {
        await signOut({ redirect: false });
    } catch (err) {
        console.error(err);
    }
}