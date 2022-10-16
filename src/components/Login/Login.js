import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import {
  GlobalStyle,
  Wrapper,
  Form,
  Input,
  Button,
  Title,
  Label,
} from './styles'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://127.0.0.1:5000/login', {
        email: email,
        senha: senha,
      })
      .then(function (response) {
        if (response.data.statusCode !== 200) {
          NotificationManager.error(response.data.body.message)
        }
        if (response.data.statusCode === 200) {
          localStorage.setItem('user_id', response.data.body.data.user_id)
          history.push(`/home`)
        }
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Title>Online Booster</Title>
          <Label>Email</Label>
          <Input
            type='email'
            name='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <Label>Password</Label>
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
