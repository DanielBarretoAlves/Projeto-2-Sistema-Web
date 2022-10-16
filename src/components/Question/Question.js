import { TextArea, Card } from './styles'
import { useState } from 'react'
import { NoMeetingRoom } from '@material-ui/icons'


// const questionList = '{"title":"Problema de Matematica", "contentBody":"Preciso de aprender a fazer calculo fatorial"}'



// TODO: passar user ID e receber lista de duvidas do USER.

// TODO: Cadastrar duvida no USER




// id,nome,materia,titulo, conteudo, resposta, idDuvida







const Question = () => {
  const [title, setTitle] = useState("")
  const [question, setQuestion] = useState("")

  const myJSON = {usuarios:[{"id":"1", "name":"teste", "materias":["Matematica", "Programação"], duvidas:[{"titulo":"duvida em Python", conteudo:"como ler json em python", resposta:"", idDuvida:"12312423412"}]}]};
  function getQuestion(e) {
    // var title = document.getElementById("title").value
    e.preventDefault();
    console.log(title, question)
    refreshList();

  }


  // TODO: Função de refresh
  function refreshList() {

    const myNode = document.getElementById("contentList");
    myNode.textContent = '';

    const node = document.createElement("li");

    const para = document.createElement("li");
    para.innerHTML = "<div id=" + myJSON.usuarios[0].duvidas[0].idDuvida + ">" +"<h2>"+ myJSON.usuarios[0].duvidas[0].titulo + "</h2> <br/> " + myJSON.usuarios[0].duvidas[0].conteudo + "</div>";
    document.getElementById("contentList").appendChild(para);
  }


  return (
    <>

      <h2>Nome do Usuario</h2>
      <Card className="questions">
        <form onSubmit={getQuestion}>
          <p>Titulo:</p>
          <input onChange={(e) => { setTitle(e.target.value) }}></input>

          <p>Dúvida:</p>
          <TextArea onChange={(e) => { setQuestion(e.target.value) }}></TextArea>
          <button>Enviar</button>

        </form>
      </Card>

      <Card className="answers">
        <ul id="contentList">

          <li><div id="randomCode">Vai ter um card aqui com titulo + Contudo</div></li>
          <li><div>Vai ter um card aqui com titulo + Contudo</div></li>
          <li><div>Vai ter um card aqui com titulo + Contudo</div></li>

        </ul>
      </Card>

    </>

  )


}

export default Question