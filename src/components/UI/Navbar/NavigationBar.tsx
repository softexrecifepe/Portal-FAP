import * as S from "./styles";
import { Link } from "react-router-dom";
import softexLogo from "../../../assets/images/softexLogo.png";
const NavigationBar = ({}) => {
  return (
    <S.NavHeader>
      <ul>
        <li>
          <a href="/">
            <img src={softexLogo} alt="" />
          </a>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/editions">Edições</Link>
        </li>
        <li>
          <Link to="/projects">Projetos</Link>
        </li>
        <li>
          <Link to="/events">Eventos</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
    </S.NavHeader>
  );
};

export default NavigationBar;
