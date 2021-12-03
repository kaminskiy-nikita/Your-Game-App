import React, { useEffect, useContext } from 'react'
import GlobalContext from '../../context/context'
import TopicRaw from '../TopicRaw/TopicRaw';

const Game = () => {

  const { state } = useContext(GlobalContext);

  // useEffect(() => {        //  Обнулить счетчик очков
    
  //   (async () => { className='container'
  //     const response = await fetch()
  //   })();
  // })

  return (
    <div style={{height: '1200px', padding: '0', width: '1600px', margin: '0 auto'}}>
      {state.gameStore.map((theme) => <TopicRaw key={theme.id} topicName={theme.topic} topicId={theme.id} questions={theme.questions} />)}
    </div>
  )
}

export default Game

