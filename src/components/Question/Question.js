import {TextArea, Card } from './styles'


// criar JSON
const questionList = '{"title":"Problema de Matematica", "contentBody":"Preciso de aprender a fazer calculo fatorial"}'


function newQuestion(textTitle, textBody)
{
  const obj = JSON.parse(questionList);
  obj.push({title:textTitle, contentBody:textBody})
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
          <ul id="contentList">

            <li><div>Vai ter um card aqui com titulo + Contudo</div></li>
            <li><div>Vai ter um card aqui com titulo + Contudo</div></li>
            <li><div>Vai ter um card aqui com titulo + Contudo</div></li>

          </ul>
        </Card>

    </>

  )


}

export default Question