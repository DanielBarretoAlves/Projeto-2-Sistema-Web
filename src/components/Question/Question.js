import {TextArea, Card } from './styles'

addQuestion(textTitle, textBody)
{
  const content = {
    title : textTitle,
    contentBody : textBody
  }
}

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

            <li><div>Vai ter um card aqui com titulo + Contudo</div></li>
            <li><div>Vai ter um card aqui com titulo + Contudo</div></li>
            <li><div>Vai ter um card aqui com titulo + Contudo</div></li>

          </ul>
        </Card>

    </>

  )


}

export default Question