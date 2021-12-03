import React from 'react'
import Question from '../Question/Question'

const TopicRaw = ({ topicName, questions, topicId }) => {
  return (
    <div style={{border: '1px solid whitesmoke', width: '100%', height: '100px'}} className='d-flex'>
      <li style={{width: '350px', borderRight:'1px solid whitesmoke', listStyle: 'none', fontSize: '2.2rem', textAlign: 'center', padding: '20px 4px 0'}}>{topicName}</li>
      {questions.map((question) => <Question key={question.id} topicId={topicId} question={question} />)}
    </div>
  )
}

export default TopicRaw
