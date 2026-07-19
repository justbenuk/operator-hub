'use server'

import z from "zod"
import { LoginUserSchema, RegisterUserSchema } from "./AuthenticationScemas"
import { isRedirectError } from "next/dist/client/components/redirect-error"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export async function registerUserAction(data: z.infer<typeof RegisterUserSchema>) {
  try {
    const validated = RegisterUserSchema.parse(data)
    await auth.api.signUpEmail({
      body: {
        name: validated.name,
        email: validated.email,
        password: validated.password,
        image: '/assets/profile.png'
      },
      asResponse: true,
      headers: await headers()
    })
    return { success: true }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error
    }
    throw new Error(`Registration Error: ${error}`)
  }
}

export async function loginUserAction(data: z.infer<typeof LoginUserSchema>) {
  try {
    const validated = LoginUserSchema.parse(data)
    await auth.api.signInEmail({
      body: {
        email: validated.email,
        password: validated.password,
      },
      asResponse: true,
      headers: await headers()
    })
    return { success: true }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error
    }
    throw new Error(`Login Error: ${error}`)
  }
}

export async function isLoggedIn() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session?.user) return null

  return session.user
}
