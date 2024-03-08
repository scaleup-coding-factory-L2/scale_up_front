"use strict";

import * as React from "react"
import { TypeList } from "@/components/acheteurCRUD/TypeList";
const AcheteurPage = () => {
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
            <TypeList/>
          </div>
        </div>
        <div>
          <p>Affichage élément sélectionné de la liste</p>
        </div>
      </div>
    );
  };
  
  export default AcheteurPage;
