
import { ComboBox, ComboBoxItem } from '@ui5/webcomponents-react';
import React, { useState, useEffect } from "react";


export default function Combox()
{
  const  [loading, setloading] = useState(true);
  const [Details, setDetails] = useState([]);

  useEffect(()=>{
    console.log("using useeffect");
      fetch("https://run.mocky.io/v3/a2e1b059-144e-47de-b175-f070e560ab13")
      .then((res) => res.json())
      .then((result) =>setDetails(result));   
      setloading(false);
  }, []);

  
  return(
    <>
     {loading ? <p>Loading....</p> : Details.map((Detail) => {
       return(
        <ComboBox
        className=""
        
        onChange={function noRefCheck(){}}
        onInput={function noRefCheck(){}}
        onSelectionChange={function noRefCheck(){}}
        slot=""
        style={{}}
        tooltip=""
      >
      
        <ComboBoxItem text={Detail.id} />
        <ComboBoxItem text={Detail.name} />
        <ComboBoxItem text={Detail.Address} />
      </ComboBox>

       )
     })}
      
        
</>
    );
}