"use server"

import { AuthError } from "next-auth";
import { signIn } from "../../auth";

type Res = 
    | { success: true }
    | { success: false, error: string, statusCode: 401 | 500 };
  
export async function signinUserAction(values: unknown): Promise<Res> {
    try {
        if (typeof values !== "object" || values == null ||     Array.isArray(values)) {
            throw new Error("invalid input");
        }
        await signIn("credentials", {...values, redirect: false});

        return { success: true };
    } catch (err) {
        if (err instanceof AuthError) {
            switch(err.type) {
                case "CredentialsSignin":
                case "CallbackRouteError":
                    return { success: false, error: "invalid credentials", statusCode: 401 };
                    case "OAuthAccountAlreadyLinked" as AuthError["type"]:
                        return {
                            success: false,
                            error: "oauth account already linked",
                            statusCode: 401,
                        }
                default:
                    return { success: false, error: "internal server error", statusCode: 500 };
            }
        }
        
        console.error(err);
        return { success: false, error: "internal server error", statusCode: 500 };
    }
    
}