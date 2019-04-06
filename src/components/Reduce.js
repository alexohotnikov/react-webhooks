import React, { useReducer } from 'react';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button';
import './styles.css';


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

    <Alert {...props}>
      <Alert.Heading> Hook useEffect </Alert.Heading>
      <p> Counter: { count } </p>
        <Button variant = "success" onClick={(e) => actionDo(e, 'increment')}> Плюсуем </Button>
        <Button variant = "danger"  onClick={(e) => actionDo(e, 'decrement')}> Удаляем </Button>
    </Alert>
  )
}