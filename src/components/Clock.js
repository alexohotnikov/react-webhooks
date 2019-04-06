import React, { useState, useEffect } from 'react';

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
    <p> Current Time: { currentTime } </p>
  )
}


export default Clock;