'use client';
import "./styles.css"
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

export function Proposal() {


  const [data, setData] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
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
    }
  }, []);
  




  return (
    <section className="proposal">
      <div className="image-proposal">
        <img src="poluicao-agua.jpg" alt="icone de lupa" />
        <img src="denuncia1.jpeg" alt="icone de lupa" />
      </div>



      <div className="text-control">


        {
          data.slice(0, 2).map((item: Item) => {
            return (
              <div key={item.id} >

                <h2>{item.data}</h2>
                <h2>{item.tipoIncidente}</h2>
                <p>{item.descricao}</p>

              </div>
            );
          })
        }
        <div>
          <h2>20-12-23</h2>
          <h2>Derramaneto Petroleo</h2>
          <p>Visto perto da area costeira</p>
        </div>

        <div>
          <h2>20-12-23</h2>
          <h2>Descarte de lixo</h2>
          <p>Visto perto da nas margens do rio</p>
        </div>
      </div>



    </section>
  );
}