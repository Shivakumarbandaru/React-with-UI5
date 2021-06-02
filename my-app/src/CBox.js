
import { ComboBox, ComboBoxItem } from '@ui5/webcomponents-react';
import { BusyIndicator } from '@ui5/webcomponents-react';
import React, { useState, useEffect } from "react";


export default function Combox() {
  const [loading, setloading] = useState(true);
  const [Details, setDetails] = useState([]);

  useEffect(() => {
    console.log("using useeffect");
    fetch("https://run.mocky.io/v3/79ffe872-ce35-4d04-8aa9-2a76a1d49796")
      .then((res) => res.json())
      .then((result) => setDetails(result));
    setloading(false);
  }, []);


  return (
    <>
      {loading ?
        <div> <BusyIndicator
          active
          className=""
          slot=""
          style={{}}
          tooltip=""
        /></div> : Details.map((Detail) => {
          return (
            <ComboBox
              className=""

              onChange={function noRefCheck() { }}
              onInput={function noRefCheck() { }}
              onSelectionChange={function noRefCheck() { }}
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
