import React, { useState, useEffect } from 'react'
import Multiselect from 'multiselect-react-dropdown'
import { Wrapper, Form, AddMatterButton } from './styles'
import { darkTheme } from '../../styles/theme'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function AddMatters() {
  const [matters, setMatters] = useState([])
  const history = useHistory()

  const materias = [
    'Português',
    'Matemática',
    'História',
    'Geografia',
    'Física',
    'Química',
    'Inglês',
  ]
  const style = {
    option: {
      // To change css for dropdown options
      background: darkTheme.bg3,
      color: darkTheme.text,
    },
    chips: {
      background: darkTheme.bg3,
    },
  }
  const id = localStorage.getItem('user_id')

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/user?id=${id}`)
      .then(function (response) {
        setMatters(response.data.body.user.materias)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(matters)
    axios
      .put(`http://127.0.0.1:5000/materias`, {
        id: id,
        materias: matters,
      })
      .then(function (response) {
        console.log(response)
        setMatters(response.data.body.materias)
        history.push('/matters')
      })
      .catch(function (error) {
        console.error(error)
      })
  }
  return (
    <Wrapper>
      <h2>Lista de materias</h2>
      <Form onSubmit={handleSubmit}>
        <Multiselect
          isObject={false}
          onRemove={(e) => {
            setMatters(e)
          }}
          onSelect={(e) => {
            setMatters(e)
          }}
          options={materias}
          style={style}
        />
        <AddMatterButton
          type='submit'
          fullWidth
          variant='contained'
          color='primary'>
          Create
        </AddMatterButton>
      </Form>
    </Wrapper>
  )
}

export default AddMatters
