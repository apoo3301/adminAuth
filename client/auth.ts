import { SigninSchema } from "@/validators/signin-validator";
import { findUserByEmail } from "./resources/user-queries";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import db from "@/drizzle"
import * as schema from "@/drizzle/schema";
import * as v from "valibot";
import argon2 from "argon2";
import { oauthVerifyEmailAction } from "@/actions/oauth-verify-email-action";

const nextAuth = NextAuth({
    adapter: DrizzleAdapter(db,{
        accountsTable: schema.accounts,
        usersTable: schema.users,
        authenticatorsTable: schema.authenticators,
        sessionsTable: schema.sessions,
        verificationTokensTable: schema.verificationTokens
    }),
    session: { strategy: "jwt" },
    secret: process.env.NEXTAUTH_SECRET,
    pages: { signIn: "/agency/auth/sign-in" },
    callbacks: {
        jwt({ token, user}) {
            if (user?.id) token.id = user.id;
            if (user?.role) token.role = user.role;
            return token;
        },
        session({ session, token}) {
            session.user.id = token.id;
            session.user.role = token.role;
            return session;
        },
    },
    events: {
        async linkAccount({ user, account }) {
            if (['google'].includes(account.provider)) {
                if (user.email) await oauthVerifyEmailAction(user.email);
            }
        },
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