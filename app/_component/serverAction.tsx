"use server";
import { sleep } from "@/utils/sleep"

export async function serverAction(data: string) {
    await sleep(2000)
    console.log(`server action called with ${data}`);
}
