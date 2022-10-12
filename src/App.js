import React from 'react'

function App() {

  const [tarefas,setTarefas] = React.useState([]);
  const [valor,setValor] = React.useState();
  const d = new Date(Date.now());

  function add_valor(event){
    setValor(event.target.value);
  }
  

  return (
    <div>
      <div className='container p-3'>
        <div className='row d-flex justify-content-between'>
        <div className='col-sm-5 card-add-tarefa'>
        <div data-emojiarea data-type="unicode" data-global-picker="false">
        <textarea className='col-sm-12 areadetexto' id="input1" onChange={add_valor}></textarea>
        <div className='emoji-button'>🙂</div>
        </div>
          <button className='btn btn-success' onClick={()=>setTarefas([...tarefas,valor])}>Cadastrar</button>
        </div>
        <div className='col-sm-5 card-tarefas'>       
          {tarefas.map((item)=>    
             <>   
              <div className='tarefa' key={item}>{item}</div>
              </>
          )}
        </div>
        </div>
      </div>
    </div>
  )
}

export default App