'use client'

import { Button } from "@/components/ui/button"
import { FieldGroup, Field, FieldLabel, FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Controller, useForm } from 'react-hook-form'
import { LoginUserSchema } from "../AuthenticationScemas"
import { zodResolver } from '@hookform/resolvers/zod'
import z from "zod"
import { loginUserAction } from "../AuthicationActions"
import { toast } from "sonner"
import { redirect } from "next/navigation"

export default function LoginUserForm() {
  const form = useForm({
    resolver: zodResolver(LoginUserSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  })

  async function handleLoginUser(values: z.infer<typeof LoginUserSchema>) {
    const response = await loginUserAction(values)

    if (response.success) {
      toast.success('Logged in')
      redirect('/dashboard')
    } else {
      toast.error('Failed to sign in')
    }
  }

  return (
    <form onSubmit={form.handleSubmit(handleLoginUser)}>
      <FieldGroup>
        <Controller name="email" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input {...field} placeholder="m@example.com" />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )} />
        <Controller name="password" control={form.control} render={({ field, fieldState }) => (
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input {...field} type="password" />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )} />
        <Field>
          <Button type="submit">Operator Login</Button>
        </Field>
      </FieldGroup>
    </form >)
}

