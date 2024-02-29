'use client';

import React, { useEffect, useRef, useState } from "react";

export default function Verify() {
    const [preValidMp, setPreValidMp] = useState(false);
    const [validAssist, setValidAssist] = useState(false);
    const fctrRef = useRef<HTMLInputElement>(null);
    let suivi = "Non-traité"

    function Auth(){
        const {data: session, status} = useSession();
        useEffect(()=>{
            if (status === "unauthentificated"){
                signIn("keycloak", {
                callbackUrl: ´${process.env.NEXT_PUBLIC_BASE_URL}/´,
                });
            }
        },[session]);
    }
    
    function verif() {
        if(preValidMp != false && validAssist != false){
            suivi = "Validé"
        }
        if(preValidMp != false && validAssist == false){
            suivi = "Pré-validé"
        }
      }

    return(
        <>
        <div className="flex bg-slate-200 p-4 rounded-md items-center">
            <p>Votre contrat est: {suivi}</p>
        </div>
        </>
    )
}