import React, { useState, useEffect } from 'react';
import styles from './Question.module.css';
import { useContext } from 'react';
import GlobalContext from '../../context/context'
import { ADD_SCORE, REMOVE_SCORE, SET_ANSWERED }  from '../../reducer/ActionTypes/ActionTypes'


const Question = ({question, topicId}) => {
  const { state, dispatch } = useContext(GlobalContext);
  const [ isAnswered, setIsAnswered ] = useState(false);
  const [ isRightAnswer, setIsRightAnswer ] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);
  const [ userAnswer, setUserAnswer ] = useState('');

  const handleGetAnswer = async () => {

    const answerResult = userAnswer.toLowerCase().trim() === question.answer.toString().toLowerCase().trim();

    setIsRightAnswer(answerResult);
    
    setIsAnswered(true);
    
    if(answerResult) {
      dispatch({ type: ADD_SCORE, payload: question.points})
    } else {
      dispatch({ type: REMOVE_SCORE, payload: question.points})
    }

    dispatch({ type: SET_ANSWERED, payload: { topicId, questionId: question.id}})

  }

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:5000/result', {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({userId: state.user.id, result: state.user.result})
    });
    })();
  }, [state.user.result]);

  return (
    <div className={!isOpen && question.isAnswered ? 'answered' : ''} style={{width: '300px', borderRight:'1px solid whitesmoke', fontSize: '3rem', paddingTop: '11px', cursor: 'pointer'}}>
      <div className='text-center' onClick={() => setIsOpen(!isOpen)}>{question.points}</div>
      {isOpen && 
        <section onClick={(event) => {
          if(event.target.tagName === 'SECTION') {
            setIsOpen(!isOpen)
          }
        }} className={styles.modal}>
          <div className={styles.modalBody}>
            <h1>{question.title}</h1>
            {isAnswered && 
            <>
              <button className={`btn mt-4 mb-4 ${isRightAnswer ? 'btn-success' : 'btn-danger'}`}>
                {`Ответ ${isRightAnswer ? 'правильный' : 'не правильный'}`}
              </button>
              {!isRightAnswer && 
                <div>Правильный ответ: {question.answer}</div>
              }
              
            </>
            }
            {
              !isAnswered && 
              <>
                <input value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
                <button onClick={handleGetAnswer}>Ответить</button>
              </>
            }
            
            
          </div>
          
        </section>
      }
      
    </div>
  )
}

export default Question
