"use server"

export async function getAdmissions(status = ""){
    let admissions = await fetch(`${process.env.BASE_URL}api/admission${status &&'?status='+status}`)
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