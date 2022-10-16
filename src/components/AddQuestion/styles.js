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
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
`

export const Input = styled.textarea`
  width: 50rem;
  height: 25rem;

  background-color: ${darkTheme.bg};
  color: ${darkTheme.text};
  font-size: 1.5rem;
  resize: none;
  border-radius: 0.5rem;
`
export const P = styled.p`
  font-size: 1.5rem;
`

export const Select = styled.select`
  width: 10rem;
  height: 4.5rem;
  font-size: 1.5rem;
  background-color: ${darkTheme.bg};
  color: ${darkTheme.text};
`
