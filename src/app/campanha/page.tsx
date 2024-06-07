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

  // useEffect(() => {
  //   fetch("http://localhost:8080/denuncias", {
  //     method: "GET",
  //   })
  //     .then((response) => {
  //       const json = response.json();
  //       return json;
  //     })
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch((error) => {
  //       console.log("ERROR", error);
  //     });
  // }, []);

  return (
    <div className="dados-denuncia">
      <div className="problema-aba-campanha">
        <h1>O Problema</h1>
        <p>
          Fundamentais para a biodiversidade do planeta, os oceanos
          enfrentam enormes desafios como as ameças aos ecossistemas
          marinhos, poluição, mudanças climáticas, entre outros, causando
          impacto direto na economia global. À medida que esses
          problemas ambientais aumentam, o mundo precisa cada
          vez mais de nós. Esses problemas afetam não apenas os ecossistemas
          marinhos, mas também têm impacto direto na economia global.
        </p>
      </div>
      <div className="campanha-aba-campanha">
        <h1>A campanha</h1>
        <p>
          A campanha <b>"Juntos Pelos Mares"</b> da Blue Future é uma iniciativa nacional focada na preservação e recuperação dos ecossistemas marinhos e das águas brasileiras.
          Diferente de outras campanhas que se concentram apenas na poluição por plásticos, "Juntos Pelos Mares" aborda a questão de todos os tipos de resíduos que ameaçam nossos mares,
          rios e costas.
        </p>
        <h3>Importância da campanha</h3>
        <ul>
          <li>
            <img src="plant.svg" alt="ícone referente a biodiversidade" /><br />
            <b>Proteção da Biodiversidade:</b> Ao combater a poluição de todas as formas, a campanha "Blue Future" ajuda a preservar a rica biodiversidade marinha
            e fluvial do Brasil, garantindo a sobrevivência de inúmeras espécies.</li>
          <li>
            <img src="medical_services.svg" alt="ícone referente a serviços médicos" /><br />
            <b>Saúde Pública:</b> Reduzindo a poluição das águas, contribuímos para a saúde pública, evitando a contaminação de alimentos e água potável.
          </li>
          <li>
            <img src="savings.svg" alt="ícone referente a sustentabilidade econômica" /><br />
            <b>Sustentabilidade Econômica:</b> A campanha promove uma economia mais sustentável, incentivando práticas empresariais e comunitárias que minimizam a geração de resíduos.
          </li>
          <li>
            <img src="groups.svg" alt="ícone referente a responsabilidade social" /><br />
            <b>Responsabilidade Social:</b> Envolvendo todos os setores da sociedade, "Blue Future" fortalece a responsabilidade social e o engajamento cívico,
            criando uma cultura de cuidado e respeito pelo meio ambiente.
          </li>
        </ul>
        <p>
          "Juntos Pelos Mares" é uma campanha abrangente e inovadora que visa transformar a maneira como lidamos com os resíduos e a poluição das águas no Brasil.
          Através de ações educativas, parcerias estratégicas e um sistema eficiente de denúncias, buscamos construir um futuro mais limpo e sustentável para nossos mares,
          rios e comunidades. Junte-se a nós nessa missão e ajude a garantir um futuro azul para as próximas gerações.
        </p>
      </div>

      <div className="solucao-aba-campanha">
        <h1>A Solução</h1>
        <p id="solucao-p">
          Criação da plataforma digital dedicada à coleta, organização e divulgação de informações sobre locais afetados pela poluição no mar. Este portal
          permite que cidadãos e organizações enviem denúncias de focos de poluição, incluindo a localização geográfica e fotos do local afetado.
        </p>
        <h3>Vantagens</h3>
        <p>
          Um portal inovador para denúncias de focos de poluição marinha não apenas empodera cidadãos a contribuírem para a proteção ambiental,
          mas também fornece dados valiosos que podem orientar políticas públicas e ações de preservação. Ao combinar tecnologia, engajamento
          comunitário e colaboração entre diversos atores, é possível criar um impacto positivo significativo na luta contra a poluição marinha.
        </p>
        <ul>
          <li>
            <img src="comunidade.svg" alt="ícone referente ao tema engajamento comunitário" /><br />
            <b>Engajamento Comunitário:</b><br /> Incentiva a participação cidadã e a responsabilidade ambiental, aumentando a conscientização sobre os problemas de poluição marinha.</li>
          <li>
            <img src="dados.svg" alt="ícone referente ao tema dados" /><br />
            <b>Dados em Tempo Real:</b><br /> Proporciona dados em tempo real sobre a extensão e a localização da poluição, facilitando respostas rápidas e eficientes.</li>
          <li>
            <img src="padroes.svg" alt="ícone referente ao tema padrões" /><br />
            <b>Identificação de Padrões:</b><br /> Ajuda na identificação de padrões de poluição, possibilitando ações preventivas e políticas públicas mais eficazes.</li>
          {/* <li>
            <img src="planejamento.svg" alt="ícone referente ao tema planejamento" /><br />
            <b>Ferramenta de Planejamento:</b><br /> As informações coletadas podem ser usadas por autoridades e ONGs para planejar e executar ações de limpeza e mitigação.</li> */}
          <li>
            <img src="responsabilidade.svg" alt="ícone referente ao tema responsabilização" /><br />
            <b>Transparência e Responsabilização:</b><br /> Aumenta a transparência e a responsabilização de empresas e indivíduos que causam poluição, incentivando práticas mais sustentáveis.</li>
          <li>
            <img src="eco.svg" alt="ícone referente ao tema ecossistemas" /><br />
            <b>Preservação dos Ecossistemas:</b><br /> Contribui para a proteção dos ecossistemas marinhos, que são cruciais para a biodiversidade e o equilíbrio ambiental.</li>
          <li>
            <img src="saudeseguranca.svg" alt="ícone referente ao tema saúde pública" /><br />
            <b>Saúde Pública:</b><br /> Reduz os riscos à saúde pública associados à poluição local e marinha, como contaminação de alimentos e águas recreativas.</li>
        </ul>

        <h1 id="nosso-projeto">Nosso Projeto</h1>
        <div className="nosso-projeto">
          <div>
            <img src="naja-bertolt-jensen-BJUoZu0mpt0-unsplash.jpg" alt="Logo da BlueFuture" />
            <h2>20-12-23</h2>
            <h2>Derramaneto Petroleo</h2>
            <p>Visto perto da area costeira</p>
          </div>

          <div>
            <img src="naja-bertolt-jensen-BJUoZu0mpt0-unsplash.jpg" alt="Logo da BlueFuture" />
            <h2>20-12-23</h2>
            <h2>Derramaneto Petroleo</h2>
            <p>Visto perto da area costeira</p>
          </div>
        </div>

      </div>




      {data.map((item: Item) => {

        const [latitude, longitude, ...address] = item.localizacao.split(', ')
        const uniqueMapId = `map-${item.id}`;

        return (
          <div key={item.id}>
            <MapComponentGot mapId={uniqueMapId} latitude={parseFloat(latitude)} longitude={parseFloat(longitude)} />
            <h2>{item.data}</h2>
            <h2>{item.tipoIncidente}</h2>
            <p>{item.descricao}</p>
          </div>
        );
      })}
    </div>
  );
}

