import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { GlobalStyle, Wrapper, Form, Input, Button } from './styles'
import { NotificationContainer, NotificationManager } from 'react-notifications'

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ email, senha })
    if (senha === '123') {
      history.push('/home')
    } else {
      NotificationManager.error('Email ou Senha inválida')
    }
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            type='email'
            name='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <Input
            type='password'
            name='password'
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value)
            }}
          />
          <Button>Entrar</Button>
        </Form>
      </Wrapper>
      <NotificationContainer />
    </>
  )
}

export default Login
