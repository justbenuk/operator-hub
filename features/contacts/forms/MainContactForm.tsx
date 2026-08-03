"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { MainContactSchema } from "../ContactSchema";
import z from "zod";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function MainContactForm() {
  const form = useForm({
    resolver: zodResolver(MainContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function handleMainContactForm(
    values: z.infer<typeof MainContactSchema>,
  ) {
    console.log(values);
  }
  return (
    <form
      onSubmit={form.handleSubmit(handleMainContactForm)}
      className="grid gap-6"
    >
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Name</FieldLabel>
            <FieldContent>
              <Input {...field} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )}
      />
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Email</FieldLabel>
            <FieldContent>
              <Input {...field} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )}
      />
      <Controller
        name="subject"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Subject</FieldLabel>
            <FieldContent>
              <Input {...field} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )}
      />
      <Controller
        name="message"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Message</FieldLabel>
            <FieldContent>
              <Textarea {...field} className="h-36" />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          </Field>
        )}
      />
      <Button size={"lg"}>
        <Send />
        <span>Send Message</span>
      </Button>
    </form>
  );
}
