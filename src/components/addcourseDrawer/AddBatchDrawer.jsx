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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addBatch } from "@/actions/batches"
import ButtonLoaderSpinner from "../ButtonLoaderSpinner"

export function AddBatchDrawer({courses}) {
  const [open, setOpen] = useState(false)
  const isDesktop = true

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Add Batch</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Batch</DialogTitle>
          </DialogHeader>
          <BatchForm courses={courses} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Batch</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Batch</DrawerTitle>
        </DrawerHeader>
        <BatchForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function BatchForm({ className , courses}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddBatch = async (event) => {
    setIsSubmitting(true)
  event.preventDefault()
  const formData = new FormData(event.target)
  const obj = {
    title: formData.get('title'),
    description: formData.get('description'),
    course: formData.get('course')
  }
  await addBatch(obj)
  setIsSubmitting(false)
  event.target.reset();
  }
  
  return (
    <form onSubmit={handleAddBatch} className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="batch-name">Batch Name</Label>
        <Input required type="text" name="title" id="batch-name" placeholder="Batch Name" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="no-of-students">Description</Label>
        <textarea className="px-2" name="description" required type="text" id="description" placeholder="Description" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="course">Course</Label>
        <Select required name="course">
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
      <Button type="submit">{isSubmitting ? <ButtonLoaderSpinner/> : 'Add Batch'}</Button>
    </form>
  )
}
