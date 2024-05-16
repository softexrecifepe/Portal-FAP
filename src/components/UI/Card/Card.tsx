import { styled } from "styled-components";
import * as S from "./styles";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card = ({ image, title, description }: CardProps) => {
  return (
    <S.StyledCard>
      <div>
        <img src={image} alt="" />
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button>Saiba mais</button>
    </S.StyledCard>
  );
};

export default Card;
