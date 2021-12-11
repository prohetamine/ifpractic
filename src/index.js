import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import styled from 'styled-components'
import queryString from 'query-string'
import LeftMenu from './components/left-menu'
import RightMenu from './components/right-menu'

import TASKS from './tasks.js'

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background: #E4E4E4;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const MainMenu = styled.div`
  min-width: 595px;
  width: 595px;
  min-height: 595px;
  height: 595px;
  margin-left: 87px;
  margin-right: 87px;
  display: flex;
  flex-wrap: wrap;
`

const Block = styled.div`
  width: 35px;
  min-width: 35px;
  height: 35px;
  min-height: 35px;
  background: ${props => props.isConfirm ? '#1FC169' : '#F9F9F9'};
  border: 1px solid #E4E4E4;
  box-sizing: border-box;
  border-radius: 3px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
`

const App = () => {
  let taskConfirmerDefault = []

  try {
    taskConfirmerDefault = JSON.parse(localStorage.taskConfirmer)
  } catch (e) {
    taskConfirmerDefault = []
  }

  const [taskConfirmer, setTaskConfirmer] = useState(taskConfirmerDefault)

  useEffect(() => {
    try {
      localStorage.taskConfirmer = JSON.stringify(taskConfirmer)
    } catch (e) {}
  }, [taskConfirmer.length])

  const taskId = parseInt(queryString.parse(window.location.search).id) || 1

  const tasks = TASKS.map(task => taskConfirmer.includes(task.id.toString()) ? ({ ...task, confirm: true }) : task)
  const task = tasks.find(task => task.id === taskId)

  return (
    <Main>
      <LeftMenu
        taskId={task.id}
        description={task.description}
        defaultCodeFunction={task.defaultCodeFunction}
        testedCodeFunction={task.testedCodeFunction}
        onConfirm={
          id =>
            setTaskConfirmer(
              ids =>
                Object.keys(
                  [...ids, id].reduce((ctx, id) => {
                    ctx[id] = true
                    return ctx
                  }, {})
                )
          )
        }
      />
      <MainMenu>
        {
          tasks.map((task, key) => (<Block key={key} onClick={() => window.location.href = '?id='+task.id} isConfirm={task.confirm}>{task.emoji}</Block>))
        }
      </MainMenu>
      <RightMenu confirmed={taskConfirmer.length} count={tasks.length - taskConfirmer.length} />
    </Main>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
