"use client";

import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { FloatingLabelInput } from "@/components/floating-label-input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Separator } from "@/components/ui/separator";

type Company = {
  name: string;
  siret: string;
  address: string;
  zipCode: string;
  city: string;
};

type Person = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

type Structure = Company | Person;

interface Employee {}

const personBaseSchema = {
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  email: z.string().email(),
};

const tempWorkerSchema = z.object({
  status: z.literal("temp-worker"),
  ...personBaseSchema,
});

const freelanceSchema = z.object({
  status: z.literal("freelance"),
  ...personBaseSchema,
});

const companySchema = z.object({
  status: z.literal("llc"),
  name: z.string(),
  siret: z.string(),
  address: z.string(),
  zipCode: z.string(),
  city: z.string(),
});

// Schema must be either companySchema or personSchema
const structureSchema = z.discriminatedUnion("status", [
  tempWorkerSchema,
  freelanceSchema,
  companySchema,
]);

export type StructureSchemaType = z.infer<typeof structureSchema>;

interface StructureFormProps {
  onSubmit?: (values: StructureSchemaType) => void;
}

export default function StructureForm({ onSubmit }: StructureFormProps) {
  const form = useForm<StructureSchemaType>({
    resolver: zodResolver(structureSchema),
    // TODO : Define default values by fetching from the database  (Structure depends on the structure status)
    defaultValues: {
      status: "freelance",
      firstName: "John",
      lastName: "Doe",
      phone: "0123456789",
      email: "johndoe@gmail.com",
    },
  });

  const [status, setStatus] = useState<string>("temp-worker");

  const personValues = ["temp-worker", "freelance"];
  const companyValues = ["llc"];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log)}>
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  setStatus(value);
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Choisissez votre statut" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="temp-worker">Vacataire</SelectItem>
                  <SelectItem value="freelance">Auto-entrepreneur</SelectItem>
                  <SelectItem value="llc">SARL</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {status && (
          <>
            <Separator className="my-4" />
            {personValues.includes(status) ? (
              <PersonForm form={form} />
            ) : (
              <CompanyForm form={form} />
            )}
          </>
        )}
        <div className="flex justify-end gap-1">
          <Button variant="destructive">Annuler</Button>
          <Button type="submit">Enregistrer</Button>
        </div>
      </form>
    </Form>
  );
}

function PersonForm({ form }: { form: any }) {
  return (
    <>
      <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <FloatingLabelInput
                {...field}
                id="firstName"
                placeholder="Prénom"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lastName"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <FloatingLabelInput {...field} id="lastName" placeholder="Nom" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <FloatingLabelInput
                {...field}
                id="phone"
                placeholder="Téléphone"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <FloatingLabelInput {...field} id="email" placeholder="Email" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}

function CompanyForm({ form }: { form: any }) {
  return (
    <>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <FloatingLabelInput {...field} id="name" placeholder="Nom" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="siret"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <FloatingLabelInput {...field} id="siret" placeholder="SIRET" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <FloatingLabelInput
                {...field}
                id="address"
                placeholder="Adresse"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="zipCode"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <FloatingLabelInput
                {...field}
                id="zipCode"
                placeholder="Code postal"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="city"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <FloatingLabelInput {...field} id="city" placeholder="Ville" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
