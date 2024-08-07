"use server"

type Res = 
    | { success: true }
    
export async function signinUserAction(values: unknown): Promise<Res> {
    return { success: true };
}