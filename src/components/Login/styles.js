import styled, { createGlobalStyle } from 'styled-components'
import { darkTheme } from '../../styles/theme'

export const GlobalStyle = createGlobalStyle`
  body, html, #root {
    height: 100%;
  }
`

export const Wrapper = styled.section`
  height: 100%;
  width: 100%;
`

export const Label = styled.b`
  margin-bottom: 20px;
  color: ${darkTheme.text};
`

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: ${darkTheme.bg2};
  color: ${darkTheme.text};
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`

export const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: ${darkTheme.text};
  font-weight: 600;
  text-transform: uppercase;
  background: ${darkTheme.bg3};
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
`

export const Title = styled.h2`
  font-weight: normal;
  color: ${darkTheme.text};
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding-bottom: 3rem;
`
