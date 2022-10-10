import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { v4 as uuidv4 } from 'uuid'
import Multiselect from 'multiselect-react-dropdown'
import { Wrapper, Form, AddMatterButton } from './styles'
import { darkTheme } from '../../styles/theme'

function AddMatters() {
  const [matters, setMatters] = useState([])
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

  // useEffect(() => {
  //   MatterGet()
  // }, [])

  // const MatterGet = () => {
  //   // TODO: Mudar a api depois para a nossa api para pegar as materias

  //   fetch('https://www.mecallapi.com/api/users')
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setMatters(result)
  //     })
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(matters)
    // var data = {
    //   id: uuidv4(),
    //   matters: matters,
    // }
    // fetch('https://www.mecallapi.com/api/users/create', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/form-data',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     alert(result['message'])
    //     if (result['status'] === 'ok') {
    //       window.location.href = '/'
    //     }
    //   })
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
          options={[
            'Português',
            'Matemática',
            'História',
            'Geografia',
            'Física',
            'Química',
            'Inglês',
          ]}
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
