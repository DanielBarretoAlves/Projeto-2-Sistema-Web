import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Wrapper,
  AddMatterButton,
  DeleteMatterButton,
  Table,
  TableTd,
  TableTr,
} from './styles'

export default function Question() {
  const [duvidas, setDuvidas] = useState([])
  const history = useHistory()

  useEffect(() => {
    setTimeout(function () {
      axios
        .get(`http://127.0.0.1:5000/user?id=${localStorage.getItem('user_id')}`)
        .then(function (response) {
          setDuvidas(response.data.body.user.duvidas)
        })
        .catch(function (error) {
          console.error(error)
        })
    }, 1000)
  }, [duvidas])

  const deletarDuvida = (duvida_id) => {
    console.log(duvida_id)
    axios
      .delete(
        `http://127.0.0.1:5000/duvida?id=${localStorage.getItem(
          'user_id'
        )}&id_duvida=${duvida_id}`
      )
      .then(function (response) {
        console.log(response)
        // setDuvidas(response.data.body.user.duvidas)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  return (
    <>
      <Wrapper>
        <AddMatterButton onClick={() => history.push('/addQuestion')}>
          Adicionar
        </AddMatterButton>
        <Table>
          <TableTr>
            <th>Duvidas</th>
            <th>Materia</th>
            <th>Respostas</th>
            <th>Ações</th>
          </TableTr>
          {duvidas.map((duvida) => (
            <TableTr key={duvida.id_duvida}>
              <TableTd>{duvida.pergunta}</TableTd>
              <TableTd>{duvida.materia}</TableTd>
              <TableTd>{duvida.resposta}</TableTd>
              <TableTd>
                <DeleteMatterButton
                  onClick={() => {
                    console.log(duvida)
                    deletarDuvida(duvida.id_duvida)
                  }}>
                  Deletar
                </DeleteMatterButton>
              </TableTd>
            </TableTr>
          ))}
        </Table>
      </Wrapper>
    </>
  )
}
