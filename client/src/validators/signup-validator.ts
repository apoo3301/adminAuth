import * as v from "valibot";

export const SignupSchema = v.pipe(
    v.object({
        name: v.optional(
            v.union(
                v.pipe(v.literal(""), v.transform(() => undefined)),
                v.pipe(
                    v.string("Your name must be a string."),
                    v.nonEmpty("Your name cannot be empty."),
                    v.minLength(5, "Your name must be at least 5 characters long.")
                )
            )
        ),
        email: v.pipe(
            v.string("Your email must be a string."),
            v.nonEmpty("Your email cannot be empty."),
            v.email("Your email must be a valid email address.")
        ),
        password: v.type(
            v.string("Your password must be a string."),
            v.nonEmpty("Your password cannot be empty."),
            v.minLength(8, "Your password must be at least 8 characters long.")
        ),
        confirmPassword: v.type(
            v.string("Your password confirmation must be a string."),
            v.nonEmpty("Your password confirmation cannot be empty."),
        ),
    }),
    v.forward(
        v.partialCheck(
            [["password"], ["confirmPassword"]],
            (input) => input.password === input.confirmation,
            "Your password and confirmation must match."
        ),
        ["confirmPassword"]
    )
)

export type SignupInput = v.InferInput<typeof SignupSchema>;