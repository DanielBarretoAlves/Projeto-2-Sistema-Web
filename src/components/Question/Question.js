import { TextArea, Card } from './styles'
import { useState } from 'react'


// const questionList = '{"title":"Problema de Matematica", "contentBody":"Preciso de aprender a fazer calculo fatorial"}'



// TODO: passar user ID e receber lista de duvidas do USER.

// TODO: Cadastrar duvida no USER


const Question = () => {
  const [title, setTitle] = useState("")
  const [question, setQuestion] = useState("")

  function getQuestion(e) {
    // var title = document.getElementById("title").value
    e.preventDefault();
    console.log(title, question)

  }
  return (
    <>
      {/* ************************************************** */}



      {/* ************************************************** */}


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

          <li><div>Vai ter um card aqui com titulo + Contudo</div></li>
          <li><div>Vai ter um card aqui com titulo + Contudo</div></li>
          <li><div>Vai ter um card aqui com titulo + Contudo</div></li>

        </ul>
      </Card>

    </>

  )


}

export default Question