import {Card} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import ListingCategory from "./ListingCategory"
import { ListingSubject } from "./ListingSubject"
import { Label } from "@radix-ui/react-label"
export function TypeList() {
  return (
    <Tabs defaultValue="category" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="subject">Matières/Modules</TabsTrigger>
        <TabsTrigger value="category">Catégorie</TabsTrigger>
        <TabsTrigger value="place">{`Lieu d'enseignements`}</TabsTrigger>
      </TabsList>
      <TabsContent value="subject">
        <Card>
          <ListingSubject/>
        </Card>
      </TabsContent>
      <TabsContent value="category">
        <Card>
        <ListingCategory/>
        </Card>
      </TabsContent>
      <TabsContent value="place">
        <Card>
        <Label>{`on doit attendre la story 2 du baklog 2 ou on fait l'ajout des lieux d'enseignements`}</Label>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
