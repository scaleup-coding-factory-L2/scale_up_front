import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import EmployeesList from "./employees-list";
import StructureForm from "./structure-form";

export default function StructurePage() {
  return (
    <>
      <section className="mx-2">
        <Card className="mx-auto mt-4 md:max-w-[800px]">
          <CardHeader>
            <CardTitle>Ma Structure</CardTitle>
            <CardDescription>Informations sur ma structure</CardDescription>
          </CardHeader>
          <CardContent>
            <StructureForm />
          </CardContent>
        </Card>
      </section>
      <section>
        <Card className="mx-auto mt-4 md:max-w-[800px]">
          <CardHeader>
            <CardTitle>Mes Employés</CardTitle>
            <CardDescription>
              Employés et intervenants de ma structure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EmployeesList />
          </CardContent>
        </Card>
      </section>
    </>
  );
}
