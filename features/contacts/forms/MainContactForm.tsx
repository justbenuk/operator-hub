"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { MainContactSchema } from "../ContactSchema";
import z from "zod";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { CreateSiteContactAction } from "../ContactActions";
import { toast } from "sonner";

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
    const response = await CreateSiteContactAction(values);

    if (response.success) {
      toast.success("Message sent");
      form.reset();
    } else {
      toast.error("Failed to send message");
    }
  }
  return (
    <form
      onSubmit={form.handleSubmit(handleMainContactForm)}
      className="grid gap-6"
    >
      <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Name</FieldLabel>
              <FieldContent>
                <Input {...field} />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
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
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </FieldContent>
            </Field>
          )}
        />
      </FieldGroup>
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
