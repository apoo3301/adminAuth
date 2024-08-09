import type { User as DefaultUser} from 'next-auth';
import type { JWT as DefaultJWT } from 'next-auth/jwt';
import { users } from "@/drizzle/schema"

declare module "next-auth" {
    interface User extends DefaultUser {}
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        id: (typeof users.$inferSelect)["id"]
    }
}