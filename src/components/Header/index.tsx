'use client';
import "./styles.css";
import NavItems from "../NavItems";
import React, { useState } from 'react';

export function Header() {
    const [isNavActive, setIsNavActive] = useState(false);

    return (
        <header>
            <div>
                <ul className="ul2">
                    <NavItems link="" text="+55 (11) 98170-0028 "/>                      
                    <NavItems id="icone-busca" link="" img={<img className="logo-barra-pesquisa" src="search-icon2.svg" alt="icone de lupa"/>}/>
                    <NavItems link="participe" text="Participe"/>
                </ul>
            </div>
            <nav className={`nav ${isNavActive ? 'active' : ''}`}>
                <div>
                    <NavItems link="/" id="logo" img={<img src="logo.svg" alt="Logo da BlueFuture"/>}/>
                    <button className="hamburguer" onClick={() => setIsNavActive(!isNavActive)}></button>

                    <ul className="ul1">
                        <NavItems link="campanha" text="Nossa Campanha"/>
                        <NavItems link="proposito" text="O Nosso Propósito"/>
                        <NavItems link="parceiros" text="Parceiros"/>
                        <NavItems link="devteam" text="Suporte"/>
                        <NavItems link="participe" text="Participe"/>
                    </ul>
                </div>


            </nav>
        </header>
    );
}
