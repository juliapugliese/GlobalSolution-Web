"use client";
import "./styles.css";
import MapComponentGot from "@/components/MapGot";

import { useState, useEffect } from "react";

interface Item {
  id: number;
  comentariosAdicionais: string;
  data: string;
  descricao: string;
  localizacao: string;
  origemResiduo: string;
  recorrenciaProblema: string;
  tipoIncidente: string;
}

export default function FetchPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/denuncias", {
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
    <div className="dados-denuncia">
      <h1>Fetch Page</h1>
      <br />
      <h2>Lista de itens</h2>

      {data.map((item: Item) => {
        
        const [latitude, longitude, ...address] = item.localizacao.split(', ')
        const uniqueMapId = `map-${item.id}`;

        return (
          <div key={item.id} className="">
            <MapComponentGot mapId={uniqueMapId} latitude={parseFloat(latitude)} longitude={parseFloat(longitude)}/>
            <h2>{item.data}</h2>
            <h2>{item.tipoIncidente}</h2>
            <p>{item.descricao}</p>
          </div>
        );
      })}
    </div>
  );
}

