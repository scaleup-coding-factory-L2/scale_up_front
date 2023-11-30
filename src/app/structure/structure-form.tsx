"use client";

import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

type Company = {
  name: string;
  siret: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
};

type Person = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

type Structure = Company | Person;

interface Employee {}

const tempWorkerSchema = z.object({
  status: z.literal("temp-worker"),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

const freelanceSchema = z.object({
  status: z.literal("freelance"),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

const companySchema = z.object({
  status: z.literal("llc"),
  name: z.string(),
  siret: z.string(),
  address: z.string(),
  zipCode: z.string(),
  city: z.string(),
  country: z.string(),
});

// Schema must be either companySchema or personSchema
const structureSchema = z.discriminatedUnion("status", [
  tempWorkerSchema,
  freelanceSchema,
  companySchema,
]);

export default function StructureForm() {
  const form = useForm<z.infer<typeof structureSchema>>({
    resolver: zodResolver(structureSchema),
  });

  const { watch } = useForm<z.infer<typeof structureSchema>>({
    resolver: zodResolver(structureSchema),
  });

  const [canEdit, setCanEdit] = useState(false);

  const [status, setStatus] = useState<string>();
  // const status = watch("status");

  const personValues = ["temp-worker", "freelance"];
  const companyValues = ["llc"];

  function onSubmit(values: z.infer<typeof structureSchema>) {
    console.log(values);
  }

  return (
    <Card className="mx-auto mt-8 max-w-6xl px-8">
      <CardHeader>
        <CardTitle>Ma Structure</CardTitle>
        <CardDescription>Informations sur ma structure</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardContent>
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="status">Statut</FormLabel>
                  <Select
                    onValueChange={() => {
                      setStatus(field.value);
                      field.onChange;
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
                      <SelectItem value="freelance">
                        Auto-entrepreneur
                      </SelectItem>
                      <SelectItem value="llc">SARL</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {status && personValues.includes(status) ? (
              <PersonForm form={form} />
            ) : (
              <CompanyForm />
            )}
          </CardContent>
          <CardFooter className="flex gap-1">
            <pre>{JSON.stringify(watch(), null, 2)}</pre>
            <Button variant="destructive">Annuler</Button>
            <Button
              type="submit"
              onClick={() => {
                console.log(status);
                setCanEdit(false);
              }}
            >
              Enregistrer
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
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
            <FormLabel htmlFor="firstName">Prénom</FormLabel>
            <FormControl>
              <Input id="firstName" placeholder="Prénom" />
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
            <FormLabel htmlFor="lastName">Nom</FormLabel>
            <FormControl>
              <Input id="lastName" placeholder="Nom" />
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
            <FormLabel htmlFor="phone">Téléphone</FormLabel>
            <FormControl>
              <Input id="phone" placeholder="Téléphone" />
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
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormControl>
              <Input id="email" placeholder="Email" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}

function CompanyForm() {
  return (
    <>
      <Label htmlFor="name">Nom</Label>
      <Input id="name" placeholder="Nom" />

      <Label htmlFor="siret">SIRET</Label>
      <Input id="siret" placeholder="SIRET" />

      <Label htmlFor="address">Adresse</Label>
      <Input id="address" placeholder="Adresse" />

      <Label htmlFor="zipCode">Code postal</Label>
      <Input id="zipCode" placeholder="Code postal" />

      <Label htmlFor="city">Ville</Label>
      <Input id="city" placeholder="Ville" />

      <Label htmlFor="country">Pays</Label>
      <Input id="country" placeholder="Pays" />
    </>
  );
}
