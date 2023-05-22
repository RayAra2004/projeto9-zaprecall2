import styled from 'styled-components';
import cards from '../../cards'
import Pergunta from './Pergunta';

export default function Perguntas(){
    return(
        <SCPerguntas>
            {cards.map((card, i) => <Pergunta key = {card.question} card = {card} indice = {i}/>)}
        </SCPerguntas>
    );
}

const SCPerguntas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
`