'use client'
import "./styles.css";
import NavItems from "@/components/NavItems";
import React, { useState } from 'react';
import Button from "@/components/Button";
import FormInput from "@/components/FormInput";

export default function Cadastro() {
    const [form, setForm] = useState({
        username: "",
        password: "",
        nome: "",
        cpf:"",
        cargo: "",
        email: "",
        telefone: "",
        empresa: "",
        cnpj: "",
        tamanhoEmpresa: "",
        pais: "",
        segmento: ""
    });

    const sendForm = async (event: any) => {
        event.preventDefault(); 
    
        try {
            const response = await fetch('http://localhost:8080/cliente', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    "email": form.email,
                    "nomeCompleto": form.nome,
                    "nomeUsuario": form.username,
                    "senha": form.password,
                    "cargo": form.cargo,
                    "cpf": form.cpf,
                    "empresa": {
                        "cnpj": form.cnpj,
                        "nomeEmpresa": form.empresa,
                        "pais": form.pais,
                        "segmento": form.segmento,
                        "tamanhoEmpresa": form.tamanhoEmpresa
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
    

    const changeState = (type : any, value : any) => {
        setForm(prevState => ({
           ...prevState,
            [type]: value
        }));
    };

   
    return (
        <div className="pagina-cadastro">
            <div>
                <img src="salesforce-logo.png" alt="Logo da SalesForce"/>    
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
                    <div className="botoes">
                        <NavItems id="saiba-mais" link="http://salesforce.com" text="Saiba Mais"/>
                        <NavItems id="teste-gratis-section" link="http://salesforce.com" text="Teste Grátis"/>     
                    </div>   
                </div>
                
            </div>
            <div className="form">
                <h3>Preencha com os seus dados</h3>
                <FormInput className="input-field" placeholder="Nome de Usuário" value={form.username} onChange={
                    (event: any) => {
                    changeState('username', event.target.value);
                } }/>

                <FormInput className="input-field" placeholder="Senha" value={form.password} onChange={
                    (event: any) => {
                    changeState('password', event.target.value);
                } }/>


                <FormInput className="input-field" placeholder="Nome Completo" value={form.nome} onChange={
                    (event: any) => {
                    changeState('nome', event.target.value);
                } }/>


                <FormInput className="input-field" placeholder="CPF" value={form.cpf} onChange={
                    (event: any) => {
                    changeState('cpf', event.target.value);
                } }/>
                

                <FormInput className="input-field" placeholder="Cargo" value={form.cargo} onChange={
                    (event: any) => {
                    changeState('cargo', event.target.value);
                } }/>

                <FormInput className="input-field" placeholder="Email Corporativo" value={form.email} onChange={
                    (event: any) => {
                    changeState('email', event.target.value);
                } }/>

                <FormInput className="input-field" placeholder="Telefone" value={form.telefone} onChange={
                    (event: any) => {
                    changeState('telefone', event.target.value);
                } }/>

                <FormInput className="input-field" placeholder="Nome da empresa" value={form.empresa} onChange={
                    (event: any) => {
                    changeState('empresa', event.target.value);
                } }/>

                
                <FormInput className="input-field" placeholder="CNPJ" value={form.cnpj} onChange={
                    (event: any) => {
                    changeState('cnpj', event.target.value);
                } }/>

                
                <FormInput className="input-field" placeholder="Segmento" value={form.segmento} onChange={
                    (event: any) => {
                    changeState('segmento', event.target.value);
                } }/>

                <FormInput className="input-field" placeholder="Tamanho da Empresa" value={form.tamanhoEmpresa} onChange={
                    (event: any) => {
                    changeState('tamanhoEmpresa', event.target.value);
                } }/>

                <FormInput className="input-field" placeholder="País" value={form.pais} onChange={
                    (event: any) => {
                    changeState('pais', event.target.value);
                } }/>

                <Button type="button" className="submit-button" text="Login" onClick={sendForm}/>

            </div>

        </div>
    )
}