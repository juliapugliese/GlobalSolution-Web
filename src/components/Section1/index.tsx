'use client'
import "./styles.css"
import NavItems from "../NavItems";



export function Section1() {
    return (

        <section className="section1">

          <h2>Nosso Proposito</h2>
          <p>A Oceana se dedica à proteção e restauração dos oceanos em uma escala global.</p>

          <div className="social-media">
            <ul>
              <NavItems id="icone-busca" link="" img={<img className="logo-barra-pesquisa" src="search-icon2.svg" alt="icone de lupa"/>}/>
              <NavItems id="icone-busca" link="" img={<img className="logo-barra-pesquisa" src="search-icon2.svg" alt="icone de lupa"/>}/>
              <NavItems id="icone-busca" link="" img={<img className="logo-barra-pesquisa" src="search-icon2.svg" alt="icone de lupa"/>}/>
            </ul>
            
          </div>
        </section>
    );
}