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

const personSchema = z.object({
  status: z.literal("temp-worker") || z.literal("freelance"),
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
  companySchema,
  personSchema,
]);

export default function StructureForm() {
  const form = useForm<z.infer<typeof structureSchema>>({
    resolver: zodResolver(structureSchema),
  });

  const [canEdit, setCanEdit] = useState(false);

  const [structureType, setStructureType] = useState<string | null>(null);

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
                    onValueChange={(value) => {
                      setStructureType(value);
                    }}
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
            <Label htmlFor="status">Statut</Label>

            {structureType && personValues.includes(structureType) ? (
              <PersonForm />
            ) : (
              <CompanyForm />
            )}
          </CardContent>
          <CardFooter className="flex gap-1">
            <Button type="submit" variant="destructive">
              Annuler
            </Button>
            <Button>Enregistrer</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}

function PersonForm() {
  return (
    <>
      <Label htmlFor="firstName">Prénom</Label>
      <Input id="firstName" placeholder="Prénom" />

      <Label htmlFor="lastName">Nom</Label>
      <Input id="lastName" placeholder="Nom" />

      <Label htmlFor="phone">Téléphone</Label>
      <Input id="phone" placeholder="Téléphone" />

      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="Email" />
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
