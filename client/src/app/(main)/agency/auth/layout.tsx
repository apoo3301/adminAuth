import { redirect } from "next/navigation";
import { auth } from "../../../../../auth";

export default async function layout({children}: {children: React.ReactNode}) {
    const session = await auth();
    if (session) redirect("/agency/profile")

    return (
        <>
            {children}
        </>
    );
}