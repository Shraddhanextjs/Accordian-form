import { useEffect, useState } from 'react';
import './App.css';

function App() {


    const accordians = [
      {
      id:10,
      question: "Q1 Are you Indian citizen",
      options:[
          {ids:11, text:"No"},
          {ids:12, text:"Yes"},
          {ids:13, text:"NA"},      
      ]
    },
      {
      id:20,
      question: "Q2  Are you eligible to work in India",
      options:[
          {ids:21, text:"No"},
          {ids:22, text:"Yes"},
          {ids:23, text:"NA"},
      ]
    },
      {
      id:30,
      question: "Q3 Do you give permission to accept cookies",
      options:[
        { ids:31, text:"No"},
        { ids:32, text:"Yes"},
          {ids:33, text:"NA"}
      ]
    },
      {
      id:40,
      question: "Q4 Do accept privacy policy",
      options:[
        {ids:41, text:"No"},
        {ids:42, text:"Yes"},
        {ids:43, text:"NA",}
      ]
    }
  ]
    const questions = [
      {
      id:100,
      question: "Q1 Are you Indian citizen",
      options:[
          {ids:11, text:"No"},
          {ids:12, text:"Yes"},
          {ids:13, text:"NA"},      
      ]
    },
      {
      id:200,
      question: "Q2  Are you eligible to work in India",
      options:[
          {ids:24, text:"No"},
          {ids:25, text:"Yes"},
          {ids:26, text:"NA"},
      ]
    },
      {
      id:300,
      question: "Q3 Do you give permission to accept cookies",
      options:[
        { ids:31, text:"No"},
        { ids:32, text:"Yes"},
          {ids:33, text:"NA"}
      ]
    },
      {
      id:400,
      question: "Q4 Do accept privacy policy",
      options:[
        {ids:41, text:"No"},
        {ids:42, text:"Yes"},
        {ids:43, text:"NA",}
      ]
    }
  ]
  const query = [
    {
    id:1,
    question: "Q1 Are you Indian citizen",
    options:[
        {ids:11, text:"No"},
        {ids:12, text:"Yes"},
        {ids:13, text:"NA"},      
    ]
  },
    {
    id:2,
    question: "Q2  Are you eligible to work in India",
    options:[
        {ids:24, text:"No"},
        {ids:25, text:"Yes"},
        {ids:26, text:"NA"},
    ]
  },
    {
    id:3,
    question: "Q3 Do you give permission to accept cookies",
    options:[
      { ids:31, text:"No"},
      { ids:32, text:"Yes"},
        {ids:33, text:"NA"}
    ]
  },
    {
    id:4,
    question: "Q4 Do accept privacy policy",
    options:[
      {ids:41, text:"No"},
      {ids:42, text:"Yes"},
      {ids:43, text:"NA",}
    ]
  }
  ]
  const content = [
    {
    id:1000,
    question: "Q1 Are you Indian citizen",
    options:[
        {ids:11, text:"No"},
        {ids:12, text:"Yes"},
        {ids:13, text:"NA"},      
    ]
  },
    {
    id:2000,
    question: "Q2  Are you eligible to work in India",
    options:[
        {ids:24, text:"No"},
        {ids:25, text:"Yes"},
        {ids:26, text:"NA"},
    ]
  },
    {
    id:3000,
    question: "Q3 Do you give permission to accept cookies",
    options:[
      { ids:31, text:"No"},
      { ids:32, text:"Yes"},
        {ids:33, text:"NA"}
    ]
  },
    {
    id:4000,
    question: "Q4 Do accept privacy policy",
    options:[
      {ids:41, text:"No"},
      {ids:42, text:"Yes"},
      {ids:43, text:"NA",}
    ]
  }
  ]

  
  const [selectedAcc, setSelectedAcc] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState([]);
  const [selectedContent, setSelectedContent] = useState([]);
  const [open,setOpen]= useState(false);
  const [btn,setBtn]= useState(false);
  const [btnB,setBtnB]= useState(false);
  const [btnC,setBtnC]= useState(false);
  const [btnD,setBtnD]= useState(false);
  const [btnEnable,setbtnEnable]= useState(false);
  
  useEffect(() => {
    let acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
     window && acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  },[open]);

 const openhandler = () => {
  setOpen(!open);
 }
  const changeAccHandler =(quesId,optId,optText) => {
    setSelectedAcc( prevSelectedAcc =>({
      ...prevSelectedAcc,
      [quesId]: optId,
    }))
   setBtn(true);
 
  }
  const savebtnHnadler = () =>{
    const count = Object.keys(selectedAcc).length
    console.log(selectedAcc,"select acc")
    const fill = accordians?.map((acc)=>{ return acc?.options }).map((opt)=>{ 
       return opt[0].text === "No" && opt[0].ids })
       console.log(fill,"fill")
      if(count > 3){
       const data = fill.every((fit)=> !Object.values(selectedAcc).includes(fit))
         if(data){
          setbtnEnable(true)
        }
        else{
          setbtnEnable(false)
        }
      }
        

  }
  const cancelbtnhandler = () =>{
    setSelectedAcc("")
    setbtnEnable(false)

  }
  const changeAnsHandler =(quesId,optId) => {
    setSelectedAnswer( prevSelectedAnswer =>({
      ...prevSelectedAnswer,
      [quesId]: optId
    }))
    setBtnB(true)
  }
  const cancelBtnHnalder = () =>{
   setSelectedAnswer("")
  }
  const changeQueryHandler =(quesId,optId) => {
    setSelectedQuery( prevSelectedQuery =>({
      ...prevSelectedQuery,
      [quesId]: optId
    }))
    setBtnC(true)
  }
  const cancelBtnCHnalder = () =>{
    setSelectedQuery("")
   }
  const changeContentHandler =(quesId,optId) => {
    setSelectedContent( prevSelectedContent=>({
      ...prevSelectedContent,
      [quesId]: optId
    }))
    setBtnD(true);
  }
  const cancelBtnDHnalder = () =>{
    setSelectedContent("")
   }
 
  

  return (
    <div className="App">
      <div className='container'>
        Please fill the above to best of your knowledge
          <button className="accordion" onClick={openhandler}>Section 1</button>
          <div className="panel">
            { accordians.map((accor)=>(
                <div key={accor.id}>
                  <p>{accor.question}  </p>
                  {accor.options.map((opt)=>(
                      <label id='acc-1'>
                        <input 
                        type='radio'
                        name={`accor${opt.ids}`}
                        value={opt.ids}
                        // checked={ selectedAcc[accor.id] === opt.ids }
                        checked={ selectedAcc[accor.id]  ? selectedAcc[accor.id] === opt.ids : opt.text === "No" }
                        onChange={()=> changeAccHandler(accor.id,opt.ids,opt.text)}
                        // defaultChecked={opt.text === "No"}                  
                        />
                        {opt.text}
                      </label>         
                  ))
                  }
                </div>
              ))
            }     
            { btn ? (<> <button className='save' onClick={savebtnHnadler}>Save</button>    
                       <button className='cancel' onClick={cancelbtnhandler}>Cancel</button></>) : ""
            }      
          </div>  
              
          
          <button className="accordion" onClick={openhandler}>Section 2</button>
          <div className="panel">
            { questions.map((ques)=>(
                <div key={ques.id}>
                  <p>{ques.question}  </p>
                  {ques.options.map((opt)=>(
                      <label >
                        <input 
                        type='radio'
                        name={`questions_${opt.ids}`}
                        value={opt.ids}
                        checked={selectedAnswer[ques.id] ? selectedAnswer[ques.id] === opt.ids  : opt.text === "No" }
                        onChange={()=> changeAnsHandler(ques.id,opt.ids)}
                        disabled={btnEnable ? false : true}
                        />
                        {opt.text}
                      </label>         
                  ))
                  }
                </div>
              ))
            }
             { btnB ? (<> <button className='save'>Save</button>    
                       <button className='cancel' onClick={cancelBtnHnalder}>Cancel</button></>) : ""
            }
          </div>


          <button className="accordion" onClick={openhandler}>Section 3</button>
          <div className="panel">
            { query.map((quer)=>(
                <div key={quer.id}>
                  <p>{quer.question}  </p>
                  {quer.options.map((opt)=>(
                      <label id='acc-3'>
                        <input 
                        type='radio'
                        name={`quer${opt.ids}`}
                        value={opt.ids}
                        checked={selectedQuery[quer.id] ? selectedQuery[quer.id] === opt.ids : opt.text === "No"}
                        onChange={()=> changeQueryHandler(quer.id,opt.ids)}
                        disabled={btnEnable ? false : true}
                        />
                        {opt.text}
                      </label>         
                  ))
                  }
                </div>
              ))
            }
             { btnC ? (<> <button className='save'>Save</button>    
                       <button className='cancel' onClick={cancelBtnCHnalder}>Cancel</button></>) : ""
            }
          </div>

          <button className="accordion" onClick={openhandler}>Section 4</button>
          <div className="panel">
            { content.map((cont)=>(
                <div key={cont.id}>
                  <p>{cont.question}  </p>
                  {cont.options.map((opt)=>(               
                      <label id='acc-4'>
                        <input 
                        type='radio'
                        name={`cont${opt.ids}`}
                        value={opt.ids}
                        checked={selectedContent[cont.id] ? selectedContent[cont.id] === opt.ids : opt.text === "No"}
                        onChange={()=> changeContentHandler(cont.id,opt.ids)}
                        disabled={btnEnable ? false : true}
                        />
                        {opt.text}
                      </label>         
                  ))
                  }
                </div>
              ))
            }
             { btnD  ? (<> <button className='save'>Save</button>    
                       <button className='cancel' onClick={cancelBtnDHnalder}>Cancel</button></>) : ""
            }
          </div>
          
      </div>
    </div>
  );
}

export default App;
