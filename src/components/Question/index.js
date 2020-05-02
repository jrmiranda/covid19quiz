import React, { useState } from 'react'
import { Button, FinishButton, ButtonContainer } from 'components/Button'
import { Question, QuestionWrapper, QuestionHeader, QuestionStatus, Options, Option } from './styles'

const QuestionContainer = props => {
  const [selected, setSelected] = useState(null);

  return (
    <QuestionWrapper>
      <Question active={props.active}>
        <QuestionStatus>Pergunta {props.question.id} de {props.total}</QuestionStatus>
        <QuestionHeader>{props.question.text}</QuestionHeader>

        <Options>
          {props.question.options.map((opt, optIndex) => (
            <Option
            key={optIndex}
            onClick={() => {
              setSelected(optIndex);
              props.onSelect(props.index, opt.value);
            }}
            selected={selected === optIndex}
            >
              {opt.text}
            </Option>
          ))}
        </Options>

        <ButtonContainer>
          <Button onClick={props.onPrev} disabled={props.question.id <= 1}>Anterior</Button>
          <Button onClick={props.onNext} disabled={props.question.id >= props.total || selected === null}>Próxima</Button>
        </ButtonContainer>

        {(props.question.last && selected !== null) && <FinishButton onClick={props.onFinish}>Finalizar</FinishButton>}

      </Question>
    </QuestionWrapper>
  );
}

export default QuestionContainer;