"use server"

import { signIn } from "../../auth";

type Res = 
    | { success: true }
    | { success: false, error: string, statusCode: 500 };
  
export async function signinUserAction(values: unknown): Promise<Res> {
    try {
        if (typeof values !== "object" || values == null ||     Array.isArray(values)) {
            throw new Error("invalid input");
        }
        await signIn("credentials", {...values, redirect: false});

        return { success: true };
    } catch (err) {
        console.error(err);
        return { success: false, error: "internal server error", statusCode: 500 };
    }
    
}