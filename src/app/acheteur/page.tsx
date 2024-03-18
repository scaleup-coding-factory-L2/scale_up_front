"use strict";

import React, { useState } from "react";
import { TypeList } from "@/components/acheteurCRUD/TypeList";
import { ElementFormSelect } from "@/components/acheteurCRUD/ElementFormSelect";

const AcheteurPage = () => {

  const [selectedInt, setSelectedInt] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string>("category");
  const handleSelectedCard = (valeur: number) => {
    setSelectedInt(valeur);
  };
  const handleTypeCard = (valeur: string) => {
    setSelectedType(valeur)
  };
console.log(selectedInt)
console.log(selectedType)
    return (
      <div className="flex flex-row">
        <div className="ml-48">
          <div>
            <div>
              <p>Searchbar</p>
            </div>
          </div>
          <div>
            <p>Choix type liste</p>
          </div>
          <div>
            <TypeList SelectElement={handleSelectedCard} TypeElement={handleTypeCard} />
          </div>
        </div>
        <div>
          <ElementFormSelect TypeCard={selectedType} IdCard={selectedInt}/>
        </div>
      </div>
    );
  };
  
  export default AcheteurPage;
