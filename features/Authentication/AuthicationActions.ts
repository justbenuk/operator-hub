"use server";

import { auth } from "@/lib/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import z from "zod";
import { AddLogItem } from "../Activity/ActivityAction";
import { LoginUserSchema, RegisterUserSchema } from "./AuthenticationScemas";

export async function registerUserAction(
  data: z.infer<typeof RegisterUserSchema>,
) {
  try {
    const validated = RegisterUserSchema.parse(data);

    const session = await auth.api.signUpEmail({
      body: {
        name: validated.name,
        email: validated.email,
        password: validated.password,
        image: "/assets/profile.png",
      },
      headers: await headers(),
    });

    await AddLogItem({
      userId: session.user.id,
      feature: "AUTH",
      action: "LOGIN",
      description: "User Registered",
    });

    return { success: true };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    throw new Error(`Registration Error: ${error}`);
  }
}

export async function loginUserAction(data: z.infer<typeof LoginUserSchema>) {
  try {
    const validated = LoginUserSchema.parse(data);
    const session = await auth.api.signInEmail({
      body: {
        email: validated.email,
        password: validated.password,
      },
      headers: await headers(),
    });

    await AddLogItem({
      userId: session.user.id,
      feature: "AUTH",
      action: "LOGIN",
      description: "User Logged In",
    });

    return { success: true };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    throw new Error(`Login Error: ${error}`);
  }
}

export async function isLoggedIn() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) return null;

  return session.user;
}

export async function isAdmin() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/login");

  if (session.user.role !== "admin") redirect("/unauthorised");

  return session.user;
}
