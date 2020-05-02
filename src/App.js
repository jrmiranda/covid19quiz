import React from 'react'
import GlobalStyle from 'globalStyle'
import { Wrapper } from 'components/Layout'
import Quiz from 'components/Quiz'

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Quiz />
    </Wrapper>
  );
}

export default App;
