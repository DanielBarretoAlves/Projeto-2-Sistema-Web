import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { GlobalStyle, Wrapper, Form, Input, Button, Title } from './styles'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import HomePage from '../../pages/HomePage'

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ email, senha })
    // TODO: Chamada para rota de auth da API.
    if (senha === '123') {
      history.push('/duvidas')
    } else {
      NotificationManager.error('Email ou Senha inválida')
    }
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Title>Online Booster</Title>
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
