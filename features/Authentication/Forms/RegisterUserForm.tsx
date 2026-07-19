'use client'

import { Button } from "@/components/ui/button"
import { FieldGroup, Field, FieldLabel, FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Controller, useForm } from 'react-hook-form'
import { RegisterUserSchema } from "../AuthenticationScemas"
import { zodResolver } from '@hookform/resolvers/zod'
import z from "zod"
import { registerUserAction } from "../AuthicationActions"
import { toast } from "sonner"
import { redirect } from "next/navigation"

export default function RegisterUserForm() {
  const form = useForm({
    resolver: zodResolver(RegisterUserSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  async function handleRegisterUser(values: z.infer<typeof RegisterUserSchema>) {
    const response = await registerUserAction(values)

    if (response.success) {
      toast.success('You have registered')
      redirect('/dashboard')
    } else {
      toast.error('Failed to register')
    }
  }

  return (
    <form onSubmit={form.handleSubmit(handleRegisterUser)}>
      <FieldGroup>
        <Controller name="name" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <Input {...field} placeholder="John Doe" />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )} />
        <Controller name="email" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input {...field} placeholder="m@example.com" />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )} />
        <Field>
          <Field className="grid grid-cols-2 gap-4">
            <Controller name="password" control={form.control} render={({ field, fieldState }) => (
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input {...field} type="password" />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )} />
            <Controller name="confirmPassword" control={form.control} render={({ field, fieldState }) => (
              <Field>
                <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
                <Input {...field} type="password" />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )} />
          </Field>
        </Field>
        <Field>
          <Button type="submit">Create Account</Button>
        </Field>
      </FieldGroup>
    </form>)
}

