"use server"

import { revalidatePath } from "next/cache"


export async function getBatches(){
    let batches = await fetch(`${process.env.BASE_URL}api/batch`)
    batches = await batches.json()
    return batches
}

export async function addBatch(obj){
    let batch = await fetch(`${process.env.BASE_URL}api/batch`,{
        method: "POST",
        body: JSON.stringify(obj)
    })
    revalidatePath('/admin/batch')
}