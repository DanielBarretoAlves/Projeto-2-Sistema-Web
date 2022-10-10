import styled from 'styled-components'
import { darkTheme } from '../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin-left: 2rem;
`
export const AddMatterButton = styled.button`
  color: ${darkTheme.text};
  background-color: ${darkTheme.bg3};
  height: 3rem;
  width: 100%;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
`
export const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  flex-direction: column;
`
