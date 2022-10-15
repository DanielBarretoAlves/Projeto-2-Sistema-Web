import { TextArea, Card } from './styles'



const questionList = '{"title":"Problema de Matematica", "contentBody":"Preciso de aprender a fazer calculo fatorial"}'


function getQuestion() {
  var title = document.getElementById("title").value
  document.getElementById("test").innerHTML = "whatever";
  alert("title")
}



const Question = () => {
  return (
    <>
      {/* ************************************************** */}

     

      {/* ************************************************** */}


      <h2>Nome do Usuario</h2>
      <Card class="questions">
        <form>
          <p>Titulo:</p>
          <input type="text" id="title"></input>
          <p id="test">Dúvida:</p>
          <TextArea id="contentBody"></TextArea>
          <button onclick="getQuestion()" type="submit">Enviar</button>



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