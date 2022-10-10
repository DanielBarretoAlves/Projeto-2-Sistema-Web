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

export default function MatterTable() {
  const history = useHistory()
  const [matter, setMatter] = useState([])
  useEffect(() => {
    MatterGet()
  }, [])

  const MatterGet = () => {
    // TODO: Mudar a api depois para a nossa api para pegar as materias

    fetch('https://www.mecallapi.com/api/users')
      .then((res) => res.json())
      .then((result) => {
        setMatter(result)
      })
  }

  const MatterDelete = (id) => {
    var data = {
      id: id,
    }
    // TODO: Mudar a api depois para a nossa api para deletar as materias

    fetch('https://www.mecallapi.com/api/users/delete', {
      method: 'DELETE',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert(result['message'])
        if (result['status'] === 'ok') {
          MatterGet()
        }
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
            <TableTd>Ids</TableTd>
            <TableTd>Materias</TableTd>
            <TableTd>Ações</TableTd>
          </TableTr>

          {matter.map((materia) => (
            <TableTr>
              <TableTd>{materia.id}</TableTd>
              <TableTd>{materia.username}</TableTd>
              <TableTd>
                <DeleteMatterButton onClick={() => MatterDelete(materia.id)}>
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
