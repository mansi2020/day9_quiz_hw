import {useState} from 'react'

const QuizCard = (props) => {

    

    // onClickBtn
    let onClickBtn = (key,idx)=>{
        props.onClickOption(key,idx);
    }
    // onClickSkip
    let onClickSkip = ()=>{
        props.onClickSkip();
    }
    
  return (
    <div className='quizcard-container'>
      <h1>Question {props.questionNum}</h1>
      <p>{props.question}</p>
      <ul>
        
        {
            Object.entries(props.answers).map(([key,value],idx)=>{
                if(value != null){
                    return  (<button  key={key} onClick={()=>onClickBtn(key,idx)} style={{display:"block"}}><li>{value}</li></button>)
                } 
               
            })
        }
      </ul>
        <p>Time Left: 0 seconds</p>
        <button onClick={onClickSkip}>Skip Question</button>
    </div>
  )
}

export default QuizCard
