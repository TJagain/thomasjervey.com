"use client"

import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { ContactFormData } from "@/types/contact"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit } = useForm<ContactFormData>();

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true)

    try {
      await sendEmail(data)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Get in Touch</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
          <div>
            <Input type="text" placeholder="Your Name" required {...register("name")}/>
          </div>
          <div>
            <Input type="email" placeholder="Your Email" required {...register("email")}/>
          </div>
          <div>
            <Textarea placeholder="Your Message" required {...register("message")}/>
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  )
}

