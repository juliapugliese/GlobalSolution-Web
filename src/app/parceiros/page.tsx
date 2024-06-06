"use client";
import MapComponentGot from "@/components/MapGot";

import { useState, useEffect } from "react";

interface Item {
  userId: number;
  id: number;
  title: string;
  body: string;
  endereco: string;
}

export default function FetchPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("url-java", {
      method: "GET",
    })
      .then((response) => {
        const json = response.json();
        return json;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  }, []);

  return (
    <div>
      <h1>Fetch Page</h1>
      <br />
      <h2>Lista de itens</h2>

      {data.map((item: Item) => {
        
        const [latitude, longitude, ...address] = item.endereco.split(', ')

        return (
          <div key={item.id} className="">
            <MapComponentGot latitude={parseFloat(latitude)} longitude={parseFloat(longitude)}/>
            <h1>{item.id}</h1>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
}

