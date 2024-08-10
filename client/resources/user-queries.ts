import "server-only"

import db from "@/drizzle/index";
import { users, lower } from "@/drizzle/schema";
import { eq, getTableColumns } from "drizzle-orm";
import { ErrorPageLoop } from "@auth/core/errors";
import { auth } from "../auth";

export const findUserByEmail = async (email: string): Promise<typeof users.$inferSelect | null> => {
    const user = await db
    .select()
    .from(users)
    .where(eq(lower(users.email), email.toLowerCase()))
    .then(res => res[0] ?? null)

    return user;
};

type userWithoutPassword = Omit<typeof users.$inferSelect, "password">

// export const findUserById = async (id: string): Promise<userWithoutPassword> => {
//     const { password, ...rest } = getTableColumns(users);
    
    // const user = await db
    // .select(rest)
    // .from(users)
    // .where(eq(users.id, id))
    // .then(res => res[0] ?? null)

    // if (!user) throw new Error("User not found");
    // return user;
// }

export const findUserByAuth = async () => {
    const session = await auth();
    const sessionUserId = session?.user?.id;
    if (!sessionUserId) throw new Error("unathorized");
    const { password, ...rest } = getTableColumns(users);

    const user = await db
    .select(rest)
    .from(users)
    .where(eq(users.id, sessionUserId))
    .then((res) => res[0] ?? null)
    
    if (!user) throw new Error("User not found");
    return user;
}