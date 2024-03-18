import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Category } from "./ListingCategory"
import { Subjects } from "./ListingSubject"
import { useState,useEffect } from "react"
import axios from "axios"
import ReturnCategory from "./CategoryForSubject"
import { Label } from "../ui/label"
type CardProps = React.ComponentProps<typeof Card>

interface TypeCardInterface{
    TypeCard:string;
    IdCard:number|null;
}

export function ElementFormSelect({TypeCard="category", IdCard}:TypeCardInterface ,{  className, ...props }: CardProps) {
    const [cardSubject, setCardSubject] = useState<Subjects[]>([]);
    const [cardCategory, setCardCategory] = useState<Category[]>([]);
    useEffect(() => {
        if(TypeCard===null){
            console.log("null")
        }else if (TypeCard === "subject") {
            if(IdCard!==null){
                const apiEndPoint = `http://localhost:3000/api/subject/${IdCard}`;
                const getCard = async () => {
                    const { data: res } = await axios.get(apiEndPoint);
                    setCardSubject(res);
                    console.log('idsubject',IdCard)
                    console.log('testsubject',cardSubject)
                };
                getCard();
            }
        } else if (TypeCard === "category") {
            if(IdCard!==null){
                const apiEndPointCardCategory = `http://localhost:3000/api/category/${IdCard}`;
                const getCard = async () => {
                    const { data: res } = await axios.get(apiEndPointCardCategory);
                    setCardCategory(res);
                    console.log('idCategory',IdCard)
                    console.log('testcategory',cardCategory)
                };
                getCard();
            }
        }
    }, [TypeCard, IdCard]); 

    
    if (TypeCard === "category") {
        return (
          <>
            {cardCategory.length > 0 && (
              <Card className={cn("w-[780px] h-[780px]", className)} {...props}>
                <CardHeader>
                  <CardTitle>Description de categorie</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center space-x-4 rounded-md border p-4">
                    <p className="text-sm text-muted-foreground">
                      {cardCategory[0].name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
            {cardCategory.length === 0 && (
              <Card className={cn("w-[780px] h-[780px]", className)} {...props}>
                <CardHeader>
                  <CardTitle>Description de categorie</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center space-x-4 rounded-md border p-4">
                    <Label className="text-sm text-muted-foreground">
                      Name: (selectionner une categorie)
                    </Label>
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        );
      } else if (TypeCard === "subject") {
        return (
          <>
            {cardSubject.length > 0 && (
              <Card className={cn("w-[780px] h-[780px]", className)} {...props}>
                <CardHeader>
                  <CardTitle>Description de matière/module</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center space-x-4 rounded-md border p-4">
                    <Label className="text-sm text-muted-foreground">
                      Nom: {cardSubject[0].name}
                    </Label>
                    <br />
                    <ReturnCategory categoryId={cardSubject[0].categoryId} />
                    <br />
                    <Label className="text-sm text-muted-foreground">
                      Level: {cardSubject[0].level}
                    </Label>
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        );
    }
}  