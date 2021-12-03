import { CHECK_SESSION, SET_ANSWERED, ADD_SCORE, REMOVE_SCORE }  from './ActionTypes/ActionTypes'

export const reducer = (state, action) => {
  switch (action.type) {
    case CHECK_SESSION:
      return {
        ...state, user: action.payload
      }
    case ADD_SCORE:
      return {
        ...state,
        user: {
          ...state.user,
          result: state.user.result + action.payload,
        }
      }
      case REMOVE_SCORE:
        return {
          ...state,
          user: {
            ...state.user,
            result: state.user.result - action.payload,
          }
        }
      case SET_ANSWERED: {

        return {
          ...state,
          gameStore: state.gameStore.map((topic) => {
            if(topic.id === action.payload.topicId) {
              return {
                ...topic,
                questions: topic.questions.map((question) => {
                  if (question.id === action.payload.questionId) {
                    return {
                      ...question,
                      isAnswered: true,
                    }
                  }
                  return question;
                })
              }
            }
            return topic;
          })
        }
      }
    default:
      return state;
  }
}
