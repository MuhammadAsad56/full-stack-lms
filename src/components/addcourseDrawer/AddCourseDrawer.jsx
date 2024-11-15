"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
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
import { addCourses } from "@/actions/courses"

export function AddCourseDrawer() {
  const [open, setOpen] = useState(false)
  const isDesktop = true

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Add Course</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Course</DialogTitle>
          </DialogHeader>
          <CourseForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you{`'`}re done.
          </DrawerDescription>
        </DrawerHeader>
        <CourseForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function CourseForm({ className }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddCourse = async (event) => {
    setIsSubmitting(true)
    event.preventDefault();
    const formdata = new FormData(event.target);
    const obj = {
      title: formdata.get('title'),
      description: formdata.get('description'),
      eligibility: formdata.get('eligibility').split(','),
      duration: formdata.get('duration'),
      thumbnail: formdata.get('thumbnail'),
    };
    await addCourses(obj)
    setIsSubmitting(false)
    event.target.reset();
  };
  return (
    <form onSubmit={handleAddCourse} className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="course">Course Title</Label>
        <Input required type="text" id="title" name="title" placeholder="Course Title" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="eligibility">Eligibility</Label>
        <Input required id="eligibility" name={'eligibility'} placeholder="Eligibility" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="duration">Duration</Label>
        <Input type="text" required id="duration" name={'duration'} placeholder="Duration" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="thumbnail">Thumbnail</Label>
        <Input type="url" required id="thumbnail" name={'thumbnail'} placeholder="Thumbnail" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <textarea className="px-2" required id="description" name={'description'} placeholder="Description" />
      </div>
      {/* <div className="grid gap-2">
        <Label htmlFor="status">Status</Label>
        <Select required>
          <SelectTrigger >
            <SelectValue placeholder="Active - Not-Active " />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="not-active">Not-Active</SelectItem>
          </SelectContent>
        </Select>
      </div> */}
      <Button type="submit">{isSubmitting ? <ButtonLoaderSpinner/> : "Add Course"}</Button>
    </form>
  )
}
