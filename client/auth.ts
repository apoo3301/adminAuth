import { SigninSchema } from "@/validators/signin-validator";
import { findUserByEmail } from "./resources/user-queries";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import db from "@/drizzle"
import * as v from "valibot";
import argon2 from "argon2";

const nextAuth = NextAuth({
    adapter: DrizzleAdapter(db),
    session: { strategy: "jwt" },
    secret: process.env.NEXTAUTH_SECRET,
    pages: { signIn: "/agency/auth/sign-in" },
    callbacks: {
        jwt({ token, user}) {
            //console.log("token in jwt",token)
            if (user?.id) token.id = user.id;
            return token;
        },
        session({ session, token}) {
            session.user.id = token.id;
            // console.log(session)
            // console.log(token)
            return session;
        }
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = v.safeParse(SigninSchema, credentials);
                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.output;
                    const user = await findUserByEmail(email);
                    if (!user) return null;
                    if (!user.password) return null;

                    const passwordMatch = await argon2.verify(user.password, password);
                    if (passwordMatch) {
                        const { password: _, ...userWithoutPassword} = user;
                        return userWithoutPassword;
                    }
                }

                return null;
            },
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ]
});

export const { signIn, auth, signOut, handlers } = nextAuth;