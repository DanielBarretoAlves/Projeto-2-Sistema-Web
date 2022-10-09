import {TextArea, Card } from './styles'

const Question = () => {
  return (
    <>
     
        <h2>Nome do Usuario</h2>
        <Card class="questions">
          <form>
            <p>Titulo:</p>
            <input type="text"></input>
            <p>Dúvida:</p>
            <TextArea></TextArea>
            <button type="submit">Enviar</button>

          </form>
        </Card>

        <Card class="answers">
          <ul>

            <li>Vai ter um card aqui com titulo + Contudo</li>
            <li>Vai ter um card aqui com titulo + Contudo</li>
            <li>Vai ter um card aqui com titulo + Contudo</li>

          </ul>
        </Card>

    </>

  )


}

export default Question