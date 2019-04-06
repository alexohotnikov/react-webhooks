import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

const Clock = (props) => {
  const getCurrentTime = () => {
    return (new Date().toLocaleString()).split(',')[1]
  }
  const [{currentTime, timer}, setState] = useState({ currentTime: getCurrentTime()})
  useEffect(() => {
    let timer = setInterval(() => {
      setState({ currentTime: getCurrentTime() })
    }, 1000)
    return () => { 
      clearInterval(timer)
    }
  }, [])
  return(
      <Alert {...props}>
        <Alert.Heading> Hook useState </Alert.Heading>
        <p> Current Time: { currentTime } </p>
      </Alert>

  )
}


export default Clock;