import * as v from "valibot";

export const UpdateUserInfoSchema = v.object({
    id: v.pipe(
        v.string("your id must be a string"),
        v.uuid("your id must be a valid uuid")    
    ),
    name: v.pipe(
        v.string("your name must be a string"),
        v.nonEmpty("your name must not be empty"),
        v.minLength(4, "your name must be less than 4 characters or more.")
    )
})

export type UpdateUserInfoInput = v.InferInput<typeof UpdateUserInfoSchema>;