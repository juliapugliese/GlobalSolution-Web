'use client'
import "./styles.css";
import NavItems from "@/components/NavItems";
import React, { useState, useEffect } from 'react';
import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import MapComponent from "@/components/Map"

const handleGeolocation = () => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (error) => {
        console.log(error);
      }
    );
  } else {
    alert("Ops Não foi possível pegar a localização");
  }

};


interface Localizacao {
  latitude: number;
  longitude: number;
}

export default function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    descricao: "",
    data: "",
    localizacao: "",
    tamanhoEmpresa: "",
    tipoIncidente: "",
    origemResiduo: "",
    recorrenciaProblema: "",
    comentariosAdicionais: "",
  });

  const [localizacao, setLocalizacao] = useState<Localizacao | null>(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocalizacao({ latitude, longitude });
      }, (error) => {
        console.error('Erro ao obter a localização', error);
      });
    } else {
      console.error('O navegador não suporta Geolocation.');
    }
  }, []);

  const sendForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/denunciante', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": form.email,
          "nome": form.nome,
          "denuncia": {
            "descricao": form.descricao,
            "data": Date.now(),
            "localizacao": localizacao ? { latitude: localizacao.latitude, longitude: localizacao.longitude } : null,
            "tipoIncidente": form.tipoIncidente,
            "origemResiduo": form.origemResiduo,
            "recorrenciaProblema": form.recorrenciaProblema,
            "comentariosAdicionais": form.comentariosAdicionais
          },
          "telefone": form.telefone
        })
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  const changeState = (type: keyof typeof form, value: any) => {
    setForm(prevState => ({
      ...prevState,
      [type]: value
    }));
  };


  return (
    <div className="pagina-cadastro">
      <div>
        <h2>A BlueFuture usa a sua localização em tempo real para coletar os dados do local do incidente.</h2>
        <MapComponent />
        <div>
          <div className="bg-b">
            <p>Fornecendo os dados do incidente você contribue para:</p>
            <ul>
              <li>Dados pré-carregados e recursos para integrar os dados da sua empresa;</li>
              <li>Processos, relatórios e dashboards pré-configurados;</li>
              <li>Experiências guiadas para representantes, líderes e gestores de vendas;</li>
              <li>Guias e outros materiais sobre boas práticas de vendas;</li>
            </ul>
          </div>
          <ul className="botoes">
            <NavItems id="parceiros" link="parceiros" text="Parceiros" />
            <NavItems id="nossa-campanha" link="nossa-campanha" text="Nossa Campanha" />
          </ul>
        </div>

      </div>
      <div className="form">
        <h3>Preencha com os seus dados pessoais</h3>
        <FormInput className="input-field" placeholder="Nome" value={form.nome} onChange={
          (event: any) => {
            changeState('nome', event.target.value);
          }} />


        <FormInput className="input-field" placeholder="Email" value={form.email} onChange={
          (event: any) => {
            changeState('email', event.target.value);
          }} />


        <FormInput className="input-field" placeholder="Telefone" value={form.telefone} onChange={
          (event: any) => {
            changeState('telefone', event.target.value);
          }} />

        <h3>Preencha os seus dados da denúncia</h3>

        <FormInput className="input-field" placeholder="Tipo de Incidente ex: derramamento de resíduos químicos" value={form.tipoIncidente} onChange={
          (event: any) => {
            changeState('tipoIncidente', event.target.value);
          }} />

        <FormInput className="input-field" placeholder="Origem do resíduo" value={form.origemResiduo} onChange={
          (event: any) => {
            changeState('origemResiduo', event.target.value);
          }} />

        <FormInput className="input-field" placeholder="Recorrência do Problema" value={form.recorrenciaProblema} onChange={
          (event: any) => {
            changeState('recorrenciaProblema', event.target.value);
          }} />

        <FormInput className="input-field" id="caixa-comentarios" placeholder="Descrição" value={form.descricao} onChange={
          (event: any) => {
            changeState('descricao', event.target.value);
          }} />

        <FormInput className="input-field" id="caixa-comentarios" placeholder="Comentários Adicionais" value={form.comentariosAdicionais} onChange={
          (event: any) => {
            changeState('comentariosAdicionais', event.target.value);
          }} />

        {/* <button onClick={handleGeolocation}>Get Location</button> */}

        <Button type="button" className="submit-button" text="Enviar" onClick={sendForm} />

      </div>

    </div>
  )
}