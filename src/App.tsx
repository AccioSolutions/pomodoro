import React from 'react'
import { render } from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyle'

import Greetings from './components/Greetings'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Greetings />
    </>
  )
}

render(<App />, document.getElementById('root'))
