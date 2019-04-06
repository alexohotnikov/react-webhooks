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

  const seconds = parseInt(currentTime.split(':')[2])
  return(
      <Alert {...props}>
        <Alert.Heading> Hook useEffect </Alert.Heading>
        <p> Current Time: { currentTime } </p>
        <div className = 'circle'>
          <span className = 'hour_arrow' style = {{ transform: `rotate(${seconds * 6}deg)`}}></span>
        </div>
      </Alert>

  )
}


export default Clock;