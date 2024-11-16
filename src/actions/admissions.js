"use server"

export async function getAdmissions(){
    let admissions = await fetch(`${process.env.BASE_URL}api/admission`)
    admissions = await admissions.json()
    return admissions
}

export async function addAdmission(obj){
    let admission = await fetch(`${process.env.BASE_URL}api/admission`,{
        method: "POST",
        body: JSON.stringify(obj)
    })
}
export async function updateAdmission(id, status){
    let admission = await fetch(`${process.env.BASE_URL}api/admission`,{
        method: "PUT",
        body: JSON.stringify({id, status})
    })
}