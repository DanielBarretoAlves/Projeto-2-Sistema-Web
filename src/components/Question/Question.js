import { TextArea, Card } from './styles'


// criar JSON
const questionList = '{"title":"Problema de Matematica", "contentBody":"Preciso de aprender a fazer calculo fatorial"}'


function newQuestion(textTitle, textBody) {
  const obj = JSON.parse(questionList);
  obj.push({ title: textTitle, contentBody: textBody })

  // --------------------------------------------------

  var ul = document.getElementById("contentList");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("Four"));
  li.setAttribute("id", "element4"); // added line
  ul.appendChild(li);
  alert(li.id);

  // --------------------------------------------------
}




const Question = () => {
  return (
    <>

      <h2>Nome do Usuario</h2>
      <Card class="questions">
        <form>
          <p>Titulo:</p>
          <input type="text" id="title"></input>
          <p>Dúvida:</p>
          <TextArea id="contentBody"></TextArea>
          {/* <button type="submit">Enviar</button> */}

          <input type="button" onClick="newQuestion(getElementbyId(title),getElementbyId(contentBody))">Confirmar</input>

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