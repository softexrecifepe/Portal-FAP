import * as S from "./styles";

const Card = () => {
  return (
    <S.Styledcard>
      <div>
        <h1>Innovaday</h1>
        <h2>Incentivos fiscais e financiamento à inovação!</h2>

        <img
          src="https://img.freepik.com/fotos-gratis/esfera-azul-brilhante-segurada-por-mao-humana-gerada-por-ia_188544-41033.jpg"
          alt=""
        />
      </div>
      <header>
        <article>
          <h1>Conteúdo do Evento</h1>
          <p>Beneficios fiscais(Lei do bem e lei da informática)-</p>
          <p>Beneficios fiscais(Lei do bem e lei da informática)-</p>
          <p>Beneficios fiscais(Lei do bem e lei da informática)-</p>
        </article>

        <footer>
          <h1>Financiamento à inovação</h1>
          <p>Objetivos principais e indicadores:</p>
        </footer>
        <aside>
          <p>Programação em java!</p>
          <p>programação em Python!</p>
        </aside>
        <span>
          <button>Inscreva-se</button>
        </span>
      </header>
    </S.Styledcard>
  );
};

export default Card;
