import z from "zod";

export const RegisterUserSchema = z.object({
  name: z.string().min(1, "What's your name?"),
  email: z.email("What's your email address?"),
  password: z.string().min(8, 'Your password needs to be at least 8 charactors'),
  confirmPassword: z.string().min(8, 'Your password needs to be at least 8 charactors'),
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword', 'password'],
  message: 'Passwords don&apos;t match '
})

export const LoginUserSchema = z.object({
  email: z.email("What's your email address?"),
  password: z.string().min(8, 'What&apos;s your password'),
})
