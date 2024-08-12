import { SigninSchema } from "@/validators/signin-validator";
import { findUserByEmail } from "./resources/user-queries";
import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import * as v from "valibot";
import argon2 from "argon2";
import { OAuthAccountAlreadyLinkedError } from "@/lib/customErrors";
import { authConfig } from "./auth.config";

const { providers: authConfigProviders, ...authConfigRest } = authConfig

const nextAuth = NextAuth({
    ...authConfigRest,
    providers: [
        ...authConfigProviders,
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = v.safeParse(SigninSchema, credentials);
                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.output;
                    const user = await findUserByEmail(email);
                    if (!user) return null;
                    if (!user.password) throw new OAuthAccountAlreadyLinkedError();

                    const passwordMatch = await argon2.verify(user.password, password);
                    if (passwordMatch) {
                        const { password: _, ...userWithoutPassword} = user;
                        return userWithoutPassword;
                    }
                }

                return null;
            },
        }),
    ]
});

export const { signIn, auth, signOut, handlers } = nextAuth;