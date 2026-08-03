import z from "zod";

export const MainContactSchema = z.object({
  name: z.string().min(1, "Please provide your name"),
  email: z.email("Please provid eyour email"),
  subject: z.string().optional(),
  message: z.string().min(1, "How can I help?"),
});
