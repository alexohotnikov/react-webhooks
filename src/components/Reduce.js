import React, { useReducer } from 'react';

function reduces(state, action) {
  const { type } = action;
  switch(type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      new Error()
  }
}

export default (props) => {
  const [state, dispatch] = useReducer(reduces, { count: 0 })
  const { count } = state

  function actionDo(e, action) {
    e.preventDefault()
    dispatch({ type: action })
  }

  return(
    <React.Fragment>
      <p> Counter: {count}</p>
      <button onClick = {(e) => actionDo(e, 'increment')}> + </button>
      <button onClick = {(e) => actionDo(e, 'decrement')}> - </button>
    </React.Fragment>
  )
}