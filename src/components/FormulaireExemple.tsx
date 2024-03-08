import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "./ui/card"
import { Label } from "./ui/label"
const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border bg-white	">
      <div className="p-4">
        {tags.map((tag) => (
          <>
            
            <Card className="my-2 bg-slate-500" >
                <Label>{tag}</Label>
            </Card>
          </>
        ))}
      </div>
    </ScrollArea>
  )
}
