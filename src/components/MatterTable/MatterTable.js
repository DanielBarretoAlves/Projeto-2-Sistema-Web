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
import axios from 'axios'

export default function MatterTable() {
  const history = useHistory()
  const [matter, setMatter] = useState([])
  useEffect(() => {
    const id = localStorage.getItem('user_id')

    setTimeout(function () {
      axios
        .get(`http://127.0.0.1:5000/user?id=${id}`)
        .then(function (response) {
          setMatter(response.data.body.user.materias)
        })
        .catch(function (error) {
          console.error(error)
        })
    }, 1000)
  }, [matter])

  const MatterDelete = (materia) => {
    // TODO: Mudar a api depois para a nossa api para deletar as materias
    const id = localStorage.getItem('user_id')
    const newArray = []

    matter.map((mat) => {
      if (mat !== materia) {
        newArray.push(mat)
      }
    })

    axios
      .put(`http://127.0.0.1:5000/materias`, {
        id: id,
        materias: newArray,
      })
      .then(function (response) {
        console.log(response)
        setMatter(response.data.body.user.materias)
      })
      .catch(function (error) {
        console.error(error)
      })
  }
  return (
    <>
      <Wrapper>
        <AddMatterButton onClick={() => history.push('/addMatter')}>
          Adicionar
        </AddMatterButton>
        <Table>
          <TableTr>
            <th>Materias</th>
            <th>Ações</th>
          </TableTr>

          {matter.map((materia) => (
            <TableTr>
              <TableTd>{materia}</TableTd>
              <TableTd>
                <DeleteMatterButton onClick={() => MatterDelete(materia)}>
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
