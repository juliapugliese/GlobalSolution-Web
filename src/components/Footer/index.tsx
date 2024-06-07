import "./styles.css";
import FooterItem from "../FooterItem";
import LinkFooter from "../LinkFooter";
import NavItems from "../NavItems";

export function Footer() {
  return (
    <footer>


      <div className="conteudo-ilustrativo-footer">
        <img className="logo-footer" src="logo-footer.svg" alt="logo salesforce" />

        <div>
          <div className="copyright">
            <img
              id="logo-copyright"
              src="ph-copyright.png"
              alt="logo copyright"
            />
            <p>2023 Powerpro, Inc.</p>
          </div>

          <div className="redes-sociais-grupo">

            <ul>
              <NavItems link="https://www.instagram.com/fiapoficial/" img={<img src="instagram.svg" alt="Logo do instagram" />} />
              <NavItems link="https://www.facebook.com/fiap/?locale=pt_BR" img={<img src="facebook.svg" alt="Logo do facebook" />} />
              <NavItems link="https://www.linkedin.com/school/fiap/mycompany/verification/" img={<img src="linkedin.svg" alt="Logo do Linkedin" />} />
              <NavItems link="https://twitter.com/FIAP" img={<img src="twitter.svg" alt="Logo do x" />} />
              <NavItems link="https://www.youtube.com/@FiapBrasil" img={<img src="youtube.svg" alt="Logo do YouTube" />} />

            </ul>
          </div>
        </div>

        <div className="baixe-nosso-app">
          <p>Fiap 2024 todos os direitos reservados</p>
          <ul>
            <NavItems link="" img={<img src="logo-e-mec-desktop.png" alt="QRcode que leva ao e-mac" />} />
          </ul>
        </div>
      </div>

      <FooterItem title="A FIAP">

        <LinkFooter link="https://www.fiap.com.br/institucional/#a-fiap" text="A FIAP" />
        <LinkFooter link="https://www.fiap.com.br/institucional/#fotos" text="Fotos" />
        <LinkFooter link="https://www.fiap.com.br/institucional/#videos" text="Vídeos" />
        <LinkFooter link="https://www.fiap.com.br/institucional/#premios-e-reconhecimentos" text="Prêmios e reconhecimentos" />
        <LinkFooter link="https://www.fiap.com.br/institucional/#parcerias-estrategicas" text="Parcerias estratégicas" />
        <LinkFooter link="https://www.fiap.com.br/institucional/#hub" text="HUB FIAP" />
        <LinkFooter link="https://www.fiap.com.br/institucional/#unidades-polos" text="Unidades" />

      </FooterItem>

      <FooterItem title="HUB FIAP">
        <LinkFooter link="https://www.fiap.com.br/graduacao/" text="Graduação" />
        <LinkFooter link="https://www.fiap.com.br/online/graduacao/" text="Graduação Online" />
        <LinkFooter link="https://postech.fiap.com.br/" text="Pós Tech" />
        <LinkFooter link="https://www.fiap.com.br/mba/" text="MBA" />
        <LinkFooter link="https://www.fiap.com.br/shift/" text="SHIFT" />
        <LinkFooter link="https://www.fiap.com.br/empresas/" text="FIAP Empresas" />
        <LinkFooter link="https://www.fiap.com.br/colegio/" text="FIAP School" />

      </FooterItem>


      <div>
        <FooterItem title="Links Úteis">
          <LinkFooter link="https://www.fiap.com.br/fale-conosco/" text="Fale Conosco" />
          <LinkFooter link="https://www.fiap.com.br/trabalhe-conosco/" text="Trabalhe Conosco" />
          <LinkFooter link="https://www.fiap.com.br/privacidade/" text="Política de Privacidade" />

        </FooterItem>

        <FooterItem title="Unidades">
          <LinkFooter link="https://www.fiap.com.br/institucional/#unidades-polos" text="Aclimação" />
          <LinkFooter link="https://www.fiap.com.br/institucional/#unidades-polos" text="Paulista" />
        </FooterItem>

      </div>


      <FooterItem title="Mídia">
        <LinkFooter link="https://www.fiap.com.br/acontece/noticias/" text="Notícias" />
        <LinkFooter link="https://www.fiap.com.br/imprensa/" text="Imprensa" />
        <LinkFooter link="https://www.fiap.com.br/acontece/fiap-na-china/" text="FIAP na China" />
        <LinkFooter link="https://www.fiap.com.br/acontece/fiap-no-vale-do-silicio/" text="FIAP no Vale do Silício" />
        <LinkFooter link="https://www.fiap.com.br/acontece/fiap-no-sxsw-2018/" text="FIAP no SxSW 2018" />
        <LinkFooter link="https://www.fiap.com.br/acontece/next-fiap-festival/" text="NEXT FIAP Festival" />

      </FooterItem>



      <div>
        <FooterItem title="Suporte">
          <LinkFooter link="https://api.whatsapp.com/send?1=pt_BR&phone=5511981700028" text="11 98170-0028" />
          <LinkFooter link="tel:+551133858010" text="11 3385-8010" />

        </FooterItem>

        <FooterItem title="Dev Team">
          <LinkFooter link="https://www.github.com/gabrieltf1901" text="Gabriel Torres Fernandes, 553635 - 1TDSPC-2023" />
          <LinkFooter link="https://www.linkedin.com/in/julia-pugliese" text="Julia Gonzalez Pugliese Ribeiro, 553427 - 1TDSPC-2023" />
          <LinkFooter link="https://www.linkedin.com/in/lucas-ponciani-marinelli" text="Lucas Ponciani Marinelli, 553112 - 1TDSPC-2023" />
        </FooterItem>

      </div>



    </footer>
  );
}
