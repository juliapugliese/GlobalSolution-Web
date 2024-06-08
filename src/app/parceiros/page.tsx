'use client';
import "./styles.css";
import React, { useState } from 'react';
import NavItems from "@/components/NavItems";
import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import { Footer } from "@/components/Footer";
const Page = () => {
 
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: ""
  });
 
  const sendForm = (event: any) => {
    fetch('http://localhost:8080/cliente', {
      method: 'post',
      body: JSON.stringify({
        "email": form.email,
        "nome": form.nome,
        "telefone": form.telefone
      })
 
    })
  };
 
  const changeState = (type: string, value: string) => {
    setForm({
      ...form,
      [type]: value
    })
  }
 
  return (
    <>
      <div className="form-page">
 
 
        <div className="form">
          <h1>Faça Parte do Nosso Time</h1>
 
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
 
 
          <Button type="submit" className="submit-button" text="Enviar" onClick={sendForm} />
 
        </div>
 
 
        <div className="parceiros">
          <h2>Nossos Parceiros</h2>
          <h3>Oceans 20 (O20)</h3>
          <img src="o20logo.png" alt="" />
          <p>Estreando sob a presidência brasileira do G20, o Oceans 20 surge como um desdobramento
            natural dos esforços liderados pelos ciclos anteriores, encabeçados pela Indonésia e
            Índia. Sua inauguração no Brasil desempenha um papel histórico de reconhecimento do
            oceano nas agendas globais e do engajamento da sociedade civil.
          </p>
 
          <ul className="butons-participe">
            <NavItems id="saiba-mais" link="campanha" text="Saiba Mais" />
            <NavItems id="participe-section" link="participe" text="Participe" />
          </ul>
 
          <div className="imagens-parceiros">
            <img src="rede-oceano-limpo-logo.svg" alt="Logo rede oceano limpo" />
            <img src="unesco.svg" alt="Logo unesco" />
            <img src="softtek-logo.svg" alt="Logo softtek" />
            <img src="select.svg" alt="Logo select" />
 
          </div>
 
 
        </div>
 
 
      </div>
      <Footer />
    </>
 
  );
};
export default Page;