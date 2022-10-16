import styled from 'styled-components'
import { darkTheme } from '../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  max-height: 100vh;
  width: 65rem;
  margin-left: 2rem;
`
export const AddMatterButton = styled.button`
  color: ${darkTheme.text};
  background-color: ${darkTheme.bg3};
  align-self: flex-start;
  height: 3rem;
  border-radius: 0.6rem;
  font-size: 1rem;
  cursor: pointer;
`
export const DeleteMatterButton = styled.button`
  color: ${darkTheme.text};
  background-color: ${darkTheme.delete};
  align-items: center;
  height: 2rem;
  width: 50%;
  border-radius: 0.6rem;
  font-size: 1rem;
  cursor: pointer;
`
export const Table = styled.table`
  align-self: center;
  width: 100%;
  color: ${darkTheme.text};
  background-color: ${darkTheme.bg2};
`
export const TableTd = styled.td`
  align-self: center;
  color: ${darkTheme.text};
  background-color: ${darkTheme.bg3};
  max-width: 100%;
  padding: 0.2rem;
`

export const TableTr = styled.tr``
