'use client';
import "./styles.css";
import NavItems from "@/components/NavItems";
import React, { useState, useEffect } from 'react';
import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import MapComponent from "@/components/Map"
import dynamic from 'next/dynamic';

const MapComponentFiltered = dynamic(() => import('@/components/Map'), {
  ssr: false,
});

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
  const [localizacao, setLocalizacao] = useState({latitude: 0, longitude: 0});

  useEffect(() => {
    if (typeof window !== 'undefined' && 'geolocation' in navigator) {
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

  const sendForm = async (event : any) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/denunciantes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "denuncias": [
            {
              "comentariosAdicionais": form.comentariosAdicionais,
              "data": new Date(),
              "descricao": form.descricao,
              "localizacao": localizacao ? `${localizacao.latitude},${localizacao.longitude}` : null,
              "origemResiduo": form.origemResiduo,
              "recorrenciaProblema": form.recorrenciaProblema,
              "tipoIncidente": form.tipoIncidente
            }
          ],
          "email": form.email,
          "nome": form.nome,
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

  const changeState = (type : any, value : any) => {
    setForm(prevState => ({
      ...prevState,
      [type]: value
    }));
  };


  return (
    <div className="pagina-cadastro">
      <div>
        <h2>A BlueFuture usa a sua localização em tempo real para coletar os dados do local do incidente.</h2>
        <MapComponentFiltered />
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