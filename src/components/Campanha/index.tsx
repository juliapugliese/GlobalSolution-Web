import "./styles.css";

export function Campanha() {
  return (

    <div className="campanha-component">
      <div className="campanha-aba-campanha">
        <h1>A campanha</h1>
        <p>
          &quot;Juntos Pelos Mares&quot; é uma campanha abrangente e inovadora que visa transformar a maneira como lidamos com os resíduos e a poluição das águas no Brasil.
          Através de ações educativas, parcerias estratégicas e um sistema eficiente de denúncias, buscamos construir um futuro mais limpo e sustentável para nossos mares,
          rios e comunidades. Junte-se a nós nessa missão e ajude a garantir um futuro azul para as próximas gerações.
        </p>
        <h3>Objetivos</h3>
        <ul>
          <li>
            <img src="reciclagem.svg" alt="ícone referente a biodiversidade" /><br />
            <b>Eliminação de Resíduos:</b> Reduzir drasticamente a quantidade de resíduos sólidos e líquidos despejados nos oceanos e cursos d&apos;água brasileiros.
          </li>
          <li>
            <img src="communication.svg" alt="ícone referente a serviços médicos" /><br />
            <b>Engajamento e Conscientização:</b> Sensibilizar a população sobre os impactos da poluição marinha e incentivar práticas mais sustentáveis em todos os setores da sociedade.
          </li>
          <li>
            <img src="delete.svg" alt="ícone referente a sustentabilidade econômica" /><br />
            <b>Ações Concretas e Sustentáveis:</b> Implementar políticas públicas e incentivar ações empresariais e comunitárias voltadas para a limpeza e a preservação dos ambientes aquáticos.
          </li>
        </ul>

      </div>
      <img src="pexels-alohaphotostudio-4628309.jpg" alt="" />
    </div>

  );
}