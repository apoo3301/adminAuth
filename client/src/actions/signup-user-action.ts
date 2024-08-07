"use server"

import * as v from "valibot";
import { SignupSchema } from "@/validators/signup-validator";
import argon2 from "argon2";

type Res = 
    | { success: true }
    | { success: false, error: v.FlatErrors<undefined>, statusCode: 400 }
    | { success: false, error: string, statusCode: 500 };

async function signupUserAction(values: unknown): Promise<Res> {
    try {
        const parsedValues = v.safeParse(SignupSchema, values);

        if (!parsedValues.success) {
            const flatErrors = v.flatten(parsedValues.issues);
            console.error("Validation errors:", flatErrors);
            return { success: false, error: flatErrors, statusCode: 400 };
        }

        const { name, email, password } = parsedValues.output;
        const hashedPassword = await argon2.hash(password);
        return { success: true };
    } catch (err) {
        return { success: false, error: "server error", statusCode: 500 };
    }
}

export default signupUserAction;
