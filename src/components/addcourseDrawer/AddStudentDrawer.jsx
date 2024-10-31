"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Mock Data for Courses and Batches
const courses = ["Web Development", "Graphic Designing", "Video Editing"]
const batches = ["Batch 1", "Batch 2", "Batch 3"]

export function AddStudentDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button >Add Student</Button>
      </DrawerTrigger>
      <DrawerContent className="max-w-[60vh] mx-auto px-3">
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Student</DrawerTitle>
        </DrawerHeader>
        <div className="overflow-y-auto max-h-[75vh] ">
          <StudentForm className="px-3" />
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function StudentForm({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="first-name">First Name</Label>
        <Input required type="text" id="first-name" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="last-name">Last Name</Label>
        <Input required type="text" id="last-name" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gender">Gender</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input required type="email" id="email" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="education">Education</Label>
        <Input required type="text" id="education" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="course">Course</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Select course" />
          </SelectTrigger>
          <SelectContent>
            {courses.map((course, index) => (
              <SelectItem key={index} value={course}>
                {course}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="batch">Batch</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Select batch" />
          </SelectTrigger>
          <SelectContent>
            {batches.map((batch, index) => (
              <SelectItem key={index} value={batch}>
                {batch}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="roll-number">Roll Number</Label>
        <Input required type="text" id="roll-number" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="profile-picture">Profile Picture</Label>
        <Input required type="file" id="profile-picture" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="address">Address</Label>
        <Input required type="text" id="address" />
      </div>

      <Button type="submit">Add Student</Button>
    </form>
  )
}
