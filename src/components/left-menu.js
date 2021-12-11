import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const LeftMenu = styled.div`
  width: 425px;
  min-width: 400px;
  height: 100vh;
  background: #1FC169;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TaskDescription = styled.div`
  width: 362px;
  box-sizing: border-box;
  background: #EFEFEF;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 20px;
`

const BoldTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
  box-sizing: border-box;
  margin-bottom: 12px;
`

const Description = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
`

const CodeTextarea = styled.div`
  background: #1BA85C;
  box-shadow: inset 0px 0px 5px rgba(159, 159, 159, 0.25);
  border-radius: 12px;
  width: 362px;
  height: 389px;
  padding: 15px 0px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  position: relative;
`

const Numbers = styled.div`
  width: 25px;
`

const Textarea = styled.textarea`
  margin-top: -2px;
  box-sizing: border-box;
  border: none;
  resize: none;
  outline: none;
  width: calc(362px - 25px);
  background: #00000000;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  padding-left: 10px;
  padding-right: 10px;
  color: #FFFFFF;
  overflow: hidden;
  position: absolute;
  top: 15px;
  left: 25px;
`

const Number = styled.div`
  height: 18px;
  width: 25px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  text-align: right;
  color: #F0F0F0;
  user-select: none;
`

const Button = styled.div`
  width: 156px;
  height: 36px;
  background: #FFFFFF;
  border-radius: 12px 0px;
  position: absolute;
  right: 0px;
  bottom: 0px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
`

const Console = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  border-radius: 12px;
  width: 362px;
  max-width: 362px;
  height: 389px;
  max-height: 389px;
  background: #000000bd;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  padding-left: 10px;
  padding-right: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
  color: #FFFFFF;
  padding: 15px 15px;
  backdrop-filter: blur(2px);
`

const Row = styled.div``

const Status = styled.div`
  width: 362px;
  box-sizing: border-box;
  background: #EFEFEF;
  border-radius: 12px;
  padding: 15px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StatusTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
`

const StatusEmoji = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 25px;
  color: #000000;
  display: flex;
  margin-right: 5px;
  align-items: center;
  text-align: center;
`

const shtamp = `

/*
 Сертифицированный рабочий код 👌
 Заверено печатью и подтверждено:
 https://prohetamine.github.io/ifpractic
*/`

const Main = ({ taskId, description, defaultCodeFunction, testedCodeFunction, onConfirm }) => {
  const logRef = useRef()
  const codeTextareaRef = useRef()
  const textareaRef = useRef()
  const [isLog, setIsLog] = useState(false)
  const [logs, setLogs] = useState([])
  const [isWork, setWork] = useState(false)
  const [isError, setError] = useState(false)
  const [testing, setTesting] = useState(0)
  const [defautCode, setDefaultCode] = useState(defaultCodeFunction(''))
  const downline = '\n'.repeat(defautCode.code.split('\n').length)
  const [mainCode, setMainCode] = useState(localStorage[`code${taskId}`] || downline)

  useEffect(() => {
    localStorage[`code${taskId}`] = mainCode
  }, [mainCode.length])

  useEffect(() => {
    const node = logRef.current

    if (node && isLog) {
      node.scrollTo(10000,10000)
    }
  }, [logs, logRef, isLog])

  useEffect(() => {
    setLogs(l => l.slice(-10))
    if (isLog) {
      setTesting(0)
    }
  }, [isLog])

  useEffect(() => {
    const timeId = setInterval(() => {
      setDefaultCode(defaultCodeFunction)
    }, 1000)

    return () => clearInterval(timeId)
  }, [])

  useEffect(() => {
     try {
      const normalizeCode = mainCode.replace(/console\.log/gi, 'log')

      window.log = (...args) => {
        const _args = (args || [])
        setLogs(l => [...l, _args.join(' ')].slice(-100)) ||
        setTesting(s => testedCodeFunction(defautCode.varData, ..._args) ? (s > 9 ? s : s + 1) : 0)
      }

      eval(
        defautCode.code +
        normalizeCode
      )
      setError(false)
    } catch (e) {
      setError(true)
      setLogs(l => [...l, 'Ошибка: '+e.toString()].slice(-100))
    }
  }, [defautCode.code, mainCode])

  useEffect(() => {
    const node = codeTextareaRef.current
    const focusNode = textareaRef.current

    if (node && focusNode) {
      const focusHandler = (e) => {
        if (e.target.name !== 'textarea') {
          focusNode.focus()
          focusNode.setSelectionRange(1000, 1000)
        }
      }
      node.addEventListener('click', focusHandler)
      return () => node.removeEventListener('click', focusHandler)
    }
  }, [codeTextareaRef, textareaRef])

  useEffect(() => {
    if (testing > 9) {
      setMainCode(s => s.replace(shtamp, '') + shtamp)
      onConfirm(taskId)
    }
  }, [testing > 9, taskId])

  useEffect(() => {
    const node = textareaRef.current

    if (node) {
      const focusHandler = () => setWork(true)
      const blurHandler = () => setWork(false)

      node.addEventListener('keydown', focusHandler)
      node.addEventListener('blur', blurHandler)

      return () => {
        node.removeEventListener('keydown', focusHandler)
        node.removeEventListener('blur', blurHandler)
      }
    }
  }, [textareaRef])

  const lines = mainCode.split('\n')

  return (
    <LeftMenu>
      <TaskDescription>
        <BoldTitle>Задание #{taskId}</BoldTitle>
        <Description dangerouslySetInnerHTML={{ __html: description }}></Description>
      </TaskDescription>
      <CodeTextarea ref={codeTextareaRef}>
        <Numbers>
          {
            lines.map((_, key) => <Number key={key}>{key+1}</Number>)
          }
        </Numbers>
        <Textarea style={{ height: ((lines.length * 18) + 10)+'px' }} value={defautCode.code}></Textarea>
        <Textarea
          name='textarea'
          ref={textareaRef}
          style={{ height: ((lines.length * 18) + 10)+'px' }}
          value={mainCode}
          onChange={({ target: { value } }) => {
            const regexp_downline = new RegExp('^'+downline)
            return value.match(regexp_downline) && setMainCode(value)
          }}
        >
        </Textarea>
        {
          isLog
            ? (
              <Console ref={logRef}>
                {
                  logs.map((row, key) => <Row key={key}>{row}</Row>)
                }
              </Console>
            )
            : null
        }
        <Button onClick={() => setIsLog(s => !s)}>{isLog ? 'Перейти в код 💻' : 'Начать тест 🚀'}</Button>
      </CodeTextarea>
      <Status>
        <StatusTitle>
          {
            testing > 9
              ? 'Статус: Задание выполненно!'
              : isLog
                  ? isError
                    ? 'Статус: В коде ошибка'
                    : `Статус: В процессе тестирования ${testing}/10`
                  : isWork
                      ? `Статус: В процессе разработки`
                      : `Статус: Разработчик осматривается`
          }
        </StatusTitle>
        <StatusEmoji>
          {
            testing > 9
              ? '👍'
              : isLog
                  ? isError
                      ? '🚫'
                      : testing > 0 ? `✅` : `❌`
                          : isWork
                              ? `👨‍💻`
                              : `👀`
          }
        </StatusEmoji>
      </Status>
    </LeftMenu>
  )
}

export default Main;
