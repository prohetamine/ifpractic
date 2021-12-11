import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Body = styled.div`
  width: 250px;
  min-width: 230px;
  height: 100vh;
  padding-top: 62px;
  box-sizing: border-box;
`

const Title = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #464646;
  margin-bottom: 12px;
`

const Statistic = styled.div`
`

const Main = ({ confirmed, count }) => {
  const [time, setTime] = useState(localStorage.t ? parseInt(localStorage.t) : 0)

  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(t => t + 30)
    }, 30000)

    return () => clearInterval(timeId)
  }, [])

  useEffect(() => {
    localStorage.t = time
  }, [time])

  return (
    <Body>
      <Title>Статистика</Title>
      <Statistic>
        <div>выполненно: {confirmed}</div>
        <div>осталось: {count}</div>
        <div>время на сайт: {parseInt(time / 60)} минут</div>
      </Statistic>
    </Body>
  )
}

export default Main
