"use server"

import * as v from "valibot";
import { SignupSchema } from "@/validators/signup-validator";

type Res = 
    | { success: true }
    | { success: false, error: v.FlatErrors<undefined>, statusCode: 400 }
    | { success: false, error: string, statusCode: 500 };

async function signupUserAction(values: unknown): Promise<Res> {
        console.log("values", values)
    // @ts-ignore
    values.email = undefined
    console.log("values", values)
    const parsedValues = v.safeParse(SignupSchema, values);

    if (!parsedValues.success) {
        const flatErrors = v.flatten(parsedValues.issues);
        console.error(flatErrors);
        return { success: false, error: flatErrors, statusCode: 400 };
    }

    const { name, email, password } = parsedValues.output;
    console.log("success", name, email, password)
    try {
        return { success: true };
    } catch (err) {
        console.error(err);
        return { success: false, error: "server error", statusCode: 500 };
    }
}

export default signupUserAction;
