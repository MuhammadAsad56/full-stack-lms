"use server"


export async function getCourses(){
    let courses = await fetch(`${process.env.BASE_URL}api/course`)
    courses = await courses.json()
    return courses
}

export async function addCourses(obj){
    let courses = await fetch(`${process.env.BASE_URL}api/course`,{
        method: "POST",
        body: JSON.stringify(obj)
    })
}