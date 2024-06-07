'use client'
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


      </div>
      <Footer />
    </>

  );
};
export default Page;