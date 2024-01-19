'use server'

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteBoard(id:string) {
    await db.board.delete({
        where: {
            id
        }
    })
    revalidatePath("/organization/org_2aABJYVXDpw7fo77yj4ha83807o")
}