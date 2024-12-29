"use client"

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/hooks/use-toast"

export type FormData = {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {register, handleSubmit } = useForm<FormData>();

  console.log("set up form")
  function onSubmit(data: FormData) {
    console.log("testing submission")
    // setIsSubmitting(true)a
    // toast({
    //   title: "Message sent!",
    //   description: "Thanks for reaching out. I'll get back to you soon.",
    // })
    sendEmail(data);
    console.log(data)
    // setIsSubmitting(false)
  }

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()

  //   // Simulate form submission
  //   // await new Promise(resolve => setTimeout(resolve, 2000))

  //   toast({
  //     title: "Message sent!",
  //     description: "Thanks for reaching out. I'll get back to you soon.",
  //   })
    
  //   // Reset form
  //   event.currentTarget.reset()
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
      <div>
        <Input type="text" placeholder="Your Name" required />
      </div>
      <div>
        <Input type="email" placeholder="Your Email" required />
      </div>
      <div>
        <Textarea placeholder="Your Message" required />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

