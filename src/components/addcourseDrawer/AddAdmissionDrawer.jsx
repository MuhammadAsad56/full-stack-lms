"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


import ButtonLoaderSpinner from "../ButtonLoaderSpinner"
import { addAdmission } from "@/actions/admissions"

export function AddAdmissionDrawer({courses, batches}) {
  const [open, setOpen] = useState(false)
  const isDesktop = true

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Add Admission</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Admission</DialogTitle>
          </DialogHeader>
          <AdmissionForm courses={courses} batches={batches} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Admission</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Admission</DrawerTitle>
        </DrawerHeader>
        <AdmissionForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function AdmissionForm({ className , courses, batches}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [chosenCourse, setChosenCourse] = useState(null);

  const handleAddAdmission = async (event) => {
    setIsSubmitting(true)
  event.preventDefault()
  const formData = new FormData(event.target)
  const obj = {
    course: formData.get('course'),
    batch: formData.get('batch'),
    startDate: formData.get('startDate'),
    endDate: formData.get('endDate')
  }
  console.log("obj>" , obj);
  await addAdmission(obj)
  setIsSubmitting(false)
  event.target.reset();
  }
  
  return (
    <form onSubmit={handleAddAdmission} className={cn("grid items-start gap-4", className)}>
       <div className="grid gap-2">
        <Label htmlFor="course">Course Name</Label>
        <Select required 
        name="course"
        onValueChange={(value) => setChosenCourse(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select course" />
          </SelectTrigger>
          <SelectContent>
            {courses?.map((course, index) => (
              <SelectItem key={index} value={course._id}>
                {course.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {chosenCourse && (
           <div className="grid gap-2">
           <Label htmlFor="batch">Batch</Label>
           <Select required name="batch">
             <SelectTrigger>
               <SelectValue placeholder="Select batch" />
             </SelectTrigger>
             <SelectContent>
               {batches?.filter(data => data.course._id == chosenCourse)
               .map((batch, index) => (
                 <SelectItem key={index} value={batch._id}>
                   {batch.title}
                 </SelectItem>
               ))}
             </SelectContent>
           </Select>
         </div>
      )
      }
      <div className="grid gap-2">
        <Label htmlFor="no-of-students">Start Date</Label>
        <Input className="px-2" name="startDate" required type="date" id="startDate" placeholder="Start-Date" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="no-of-students">End Date</Label>
        <Input className="px-2" name="endDate" required type="date" id="endDate" placeholder="End-Date" />
      </div>
      <Button type="submit">{isSubmitting ? <ButtonLoaderSpinner/> : 'Add Batch'}</Button>
    </form>
  )
}
