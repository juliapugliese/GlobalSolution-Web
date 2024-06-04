'use client'
import "./styles.css";
import NavItems from "@/components/NavItems";
import React, { useState, useEffect } from 'react';
import Button from "@/components/Button";
import FormInput from "@/components/FormInput";

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
    impactoPercebido: "",
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
            "localizacao": localizacao? { latitude: localizacao.latitude, longitude: localizacao.longitude } : null,
            "impactoPercebido": form.impactoPercebido,
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
              <img src="salesforce-logo.png" alt="Logo da SalesForce" />
              <h2>Experimente nossa solução completa de CRM e vendas, grátis por 30 dias.</h2>
              <div>
                  <p>Com o Sales Cloud Professional Edition, você tem acesso a:</p>
                  <ul>
                      <li>Dados pré-carregados e recursos para integrar os dados da sua empresa;</li>
                      <li>Processos, relatórios e dashboards pré-configurados;</li>
                      <li>Experiências guiadas para representantes, líderes e gestores de vendas;</li>
                      <li>Guias e outros materiais sobre boas práticas de vendas;</li>
                      <li>Onboarding integrado, treinamentos e webinars online;</li>
                      <li>Configuração de pontuação e roteamento de leads;</li>
                      <li>Ferramentas para automação de tarefas recorrentes;</li>
                      <li>Uma visão completa da performance de seus representantes e equipes de vendas.</li>
                  </ul>
                  <ul className="botoes">
                      <NavItems id="saiba-mais" link="http://salesforce.com" text="Saiba Mais" />
                      <NavItems id="teste-gratis-section" link="http://salesforce.com" text="Teste Grátis" />
                  </ul>
              </div>

          </div>
          <div className="form">
              <h3>Preencha com os seus dados</h3>
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

              <FormInput className="input-field" placeholder="Descrição" value={form.descricao} onChange={
                  (event: any) => {
                      changeState('descricao', event.target.value);
                  }} />


              <FormInput className="input-field" placeholder="Impacto visível" value={form.impactoPercebido} onChange={
                  (event: any) => {
                      changeState('impactoPercebido', event.target.value);
                  }} />


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


              <FormInput className="input-field" placeholder="Comentários Adicionais" value={form.comentariosAdicionais} onChange={
                  (event: any) => {
                      changeState('comentariosAdicionais', event.target.value);
                  }} />

              <button onClick={handleGeolocation}>Get Location</button>

              <Button type="button" className="submit-button" text="Login" onClick={sendForm} />

          </div>

      </div>
  )
}