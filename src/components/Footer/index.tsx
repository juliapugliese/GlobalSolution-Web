import "./styles.css";
import FooterItem from "../FooterItem";
import LinkFooter from "../LinkFooter";
import NavItems from "../NavItems";

export function Footer() {
  return (
    <footer>

      
      <div className="conteudo-ilustrativo-footer">
        <img className="logo-footer" src="logo-footer.svg" alt="logo salesforce"/>

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
              <NavItems link="https://www.instagram.com/salesforcebrasil/" img={<img src="vector-k4R.png" alt="Logo do instagram"/>}/>
              <NavItems link="https://www.facebook.com/SalesforceBrasil/" img={<img src="vector-WTB.png" alt="Logo do facebook"/>}/>
              <NavItems link="https://br.linkedin.com/company/salesforce" img={<img src="vector-GyX.png" alt="Logo do Linkedin"/>}/>
              <NavItems link="https://twitter.com/salesforce" img={<img src="x-logo.svg" alt="Logo do x"/>}/>
              <NavItems link="https://www.youtube.com/c/SalesforceBrasil" img={<img src="vector-Rmj.png" alt="Logo do YouTube"/>}/>

            </ul>
          </div>
        </div>

        <div className="baixe-nosso-app">
          <p>Baixe nosso app</p>
          <ul>
            <NavItems link="https://apps.apple.com/us/app/salesforce/id404249815" img={<img src="app-apple-appstore.png" alt="Logo da appstore"/>}/>
            <NavItems link="https://play.google.com/store/apps/details?id=com.salesforce.chatter" img={<img src="app-google-play.png" alt="Logo da googleplay"/>}/>
          </ul>
        </div>
      </div>

      <FooterItem title="Ainda não conhece a Salesforce?">
        
        <LinkFooter link="https://www.salesforce.com/br" text="O que é CRM?"/>
        <LinkFooter link="https://www.salesforce.com/br/" text="O que é a Salesforce?"/>
        <LinkFooter link="https://www.salesforce.com/br/" text="Software de automação de marketing"/>
        <LinkFooter link="https://www.salesforce.com/br/" text="Explorar todos os produtos"/>
        <LinkFooter link="https://www.salesforce.com/br/" text="O que é computação na nuvem?"/>
        <LinkFooter link="https://www.salesforce.com/br/" text="Histórias de Clientes"/>
        <LinkFooter link="https://www.salesforce.com/br/" text="Edições e Preços"/>
        <LinkFooter link="https://www.salesforce.com/br/" text="Política de Privacidade"/>

      </FooterItem>

      <FooterItem title="Empresa">
        <LinkFooter link="https://www.salesforce.com/br/company/our-story/" text="Nossa história"/>
        <LinkFooter link="https://www.salesforce.com/br/blog/" text="Blog"/>
        <LinkFooter link="https://careers.salesforce.com/en/" text="Carreiras"/>
        <LinkFooter link="https://trust.salesforce.com/" text="Segurança"/>
        <LinkFooter link="https://www.salesforce.org/" text="Salesforce.org"/>
        <LinkFooter link="https://www.salesforce.com/company/sustainability/" text="Sustentabilidade"/>
        <LinkFooter link="https://investor.salesforce.com/overview/default.aspx" text="Investidores"/>
        <LinkFooter link="https://www.salesforce.com/company/feedback/" text="Dê-nos o seu feedback"/>
      
      </FooterItem>
      
      <FooterItem title="Links populares">


        <LinkFooter link="https://www.salesforce.com/br/" text="Novos recursos e lançamentos"/>
        <LinkFooter link="https://www.salesforce.com/br/" text="Salesforce para pequenas empresas"/>
        <LinkFooter link="https://www.salesforce.com/br/" text="Encontre ou torne-se um parceiro"/>
        <LinkFooter link="https://www.salesforce.com/br/" text="CRM Software"/>
        <LinkFooter link="https://www.salesforce.com/br/" text="Salesforce LIVE"/>
        <LinkFooter link="https://www.salesforce.com/br/" text="Dreamforce"/>
        <LinkFooter link="https://www.salesforce.com/br/" text="Salesforce Mobile"/>


      </FooterItem>

      <div>
        <FooterItem title="Suporte">
          <LinkFooter link="https://www.salesforce.com/br/" text="Entre em contato"/>
          <LinkFooter link="https://www.salesforce.com/br/" text="0800 891 1887"/>
        </FooterItem>

        <FooterItem title="Dev Team">
          <LinkFooter link="https://www.github.com/gabrieltf1901" text="Gabriel Torres Fernandes - 553635"/> 
          <LinkFooter link="https://www.linkedin.com/in/julia-pugliese" text="Julia Gonzalez Pugliese Ribeiro - 553427"/>
          <LinkFooter link="https://www.linkedin.com/in/lucas-ponciani-marinelli" text="Lucas Ponciani Marinelli - 553112"/> 
        </FooterItem>
        
      </div>

    

    </footer>
  );
}
