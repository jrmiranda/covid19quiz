import React from 'react'
import { ResultContainer, ResultTitle, ResultText } from './styles'

const Result = ({ answers }) => {
  if ((answers[19]+answers[20]+answers[21] === 3) || (answers[33]+answers[34]+answers[35] === 3) || (answers[36] === 1)) {
    return (
      <ResultContainer>
        <ResultTitle>R1</ResultTitle>
        <ResultText>
          Bom, pelo que você me contou, seu caso pode ser suspeito de COVID-19. Identificamos alguns sinais de alarme. Minha orientação é que você busque atendimento especializado em uma Unidade de Pronto Atendimento (UPA) perto de casa para ser avaliado (a) por um profissional imediatamente. Também recomendo que você siga algumas orientações durante o seu trajeto até a Unidade de Saúde, para você se proteger e evitar transmitir o vírus para outras pessoas. Como: Ir de máscara, higienizar bem as mãos com álcool gel, andar com uma distância mínima de 1,5 metros de cada pessoa.
        </ResultText>
      </ResultContainer>
    );
  }

  if (answers[1] === 1) {
    return (
      <ResultContainer>
        <ResultTitle>R4</ResultTitle>
        <ResultText>
          Bom, pelo que você me contou, seu caso não necessita de atendimento imediato, eu sugiro você entrar em contato com o seu obstetra ou com o Enfermeiro Obstetra que lhe acompanha durante o pré-Natal para informar seus sintomas e ser examinada. Minha orientação é: Evite sair de casa; Evite aglomerações, a sua melhor forma de proteção à sua vida e a vida do bebê é não ser infectada.  E se você começar a apresentar novos sintomas, você pode voltar aqui para uma nova avaliação ou se surgirem sinais de alerta buscar uma Unidade de Saúde perto da sua casa para ser avaliado por um profissional. 
        </ResultText>
      </ResultContainer>
    );
  }

  return (
    <ResultContainer>
      <ResultTitle>R7</ResultTitle>
      <ResultText>
        Olha, você não apresenta sintomas compatíveis com a COVID-19, recomendo que você se mantenha em quarentena, em isolamento social, para evitar contrair a doença, não apenas por você mas pelas pessoas que convivem com você. Aumente a ingestão de líquidos e alimentos ricos em vitamina C, essas medidas lhe ajudarão a se manter saudável durante a quarentena. Se necessitar sair do isolamento mantenha uma distância mínima de 1,5 metros de cada pessoa, higiene bem as mãos, evite levar as mãos ao rosto.E se você começar a apresentar novos sintomas, você pode voltar aqui para uma nova avaliação ou se surgirem sinais de alerta buscar uma Unidade de Saúde perto da sua casa para ser avaliado por um profissional.
      </ResultText>
    </ResultContainer>
  );
}

export default Result;