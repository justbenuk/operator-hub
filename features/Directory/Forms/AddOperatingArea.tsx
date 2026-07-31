"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "better-auth";
import { PlusIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { AddOperatingAreaAction } from "../DirectoryActions";
import { operatingArea } from "../DirectorySchemas";

export default function AddOperatingArea() {
  const form = useForm({
    resolver: zodResolver(operatingArea),
    defaultValues: {
      name: "",
    },
  });

  async function handleForm(values: z.infer<typeof operatingArea>) {
    const response = await AddOperatingAreaAction(values);

    if (response.success) {
      toast.success("Area Added");
      redirect("/admin/companies/operating-areas");
    } else {
      toast.error("Failed to add area");
    }
  }
  return (
    <form onSubmit={form.handleSubmit(handleForm)}>
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field className="flex flex-col md:flex-row gap-10">
            <FieldGroup>
              <FieldLabel>Area name</FieldLabel>
              <FieldDescription>
                This will be searchable, So by making sure we only create one
                operating area per area. This will keep things easy to maintain
              </FieldDescription>
            </FieldGroup>
            <FieldGroup>
              <Input {...field} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              <div className="flex flex-row justify-end items-center">
                <Button>
                  <PlusIcon />
                  <span>Create</span>
                </Button>
              </div>
            </FieldGroup>
          </Field>
        )}
      />
    </form>
  );
}
