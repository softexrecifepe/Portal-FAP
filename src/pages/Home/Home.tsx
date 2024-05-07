//Components
import background from "../../assets/images/background.svg";
import BackgroundContainer from "../../components/Elements/BackgroundContainer";

//Elements
import InfoTitle from "../../components/Elements/InfoTitle";

//Images
import softexOffice from "../../assets/images/escritoriosoftexpe.jpg";

//Styles
import * as S from "./styles";

const Home = () => {
  return (
    <main>
      <BackgroundContainer background={background} />
      <S.InfoHomeContent>
        <div>
          <span>
            <p>
              Formação em
              <strong> Programação</strong>
            </p>
          </span>
          <p>
            O programa de Formação Acelerada em Programação visa{" "}
            <strong>
              formar 1.500 desenvolvedores em programação Front-end e Back-end
            </strong>
            , combinando conhecimentos teóricos e práticos. Os alunos deverão
            concluir um curso de 144 horas presenciais e 56 horas de atividades
            complementares, totalizando <strong>200 horas</strong> de formação.
          </p>
        </div>
        <img src={softexOffice} alt="ITBC" />
      </S.InfoHomeContent>
      <InfoTitle/>
    </main>
  );
};

export default Home;
