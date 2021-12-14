import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import queryString from 'query-string'
import { encode, decode } from 'js-base64'

const LeftMenu = styled.div`
  width: 425px;
  min-width: 400px;
  height: 100vh;
  background: #1FC169;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 20px; 0px;
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
  white-space: nowrap;
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
  position: fixed;
  left: 0px;
  top: 0px;
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

const CircleButton = styled.div`
  width: 36px;
  height: 36px;
  background: #FFFFFF;
  border-radius: 12px 0px;
  position: fixed;
  left: 0px;
  top: 0px;
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
  &:active {
    background: #E4E4E4;
  }
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

const Main = ({ taskId, description, emoji, defaultCodeFunction, testedCodeFunction, testedTime = 300, updateTime = 1000, onConfirm }) => {
  const logRef = useRef()
  const codeTextareaRef = useRef()
  const textareaRef = useRef()

  const hash = window.location.hash.slice(1).split('#')

  const hashCode = hash[0] ? window.decodeURI(hash[0]) : false
  const hashLog = hash[1] ? window.decodeURI(hash[1]) : false
  const hashPause = hash[2] ? window.decodeURI(hash[2]) : false


  const codeParse = hashCode ? decode(hashCode) : false
  const logParse = hashLog ? decode(hashLog) === 'true' : false
  const pauseParse = hashPause ? decode(hashPause) === 'true' : false

  const [isLog, setIsLog] = useState(logParse || false)
  const [isPause, setIsPause] = useState(pauseParse || false)
  const [isCopy, setIsCopy] = useState(false)
  const [logs, setLogs] = useState([])
  const [isWork, setWork] = useState(false)
  const [isError, setError] = useState(false)
  const [testing, setTesting] = useState(0)
  const [defautCode, setDefaultCode] = useState(defaultCodeFunction(''))

  const downline = '\n'.repeat(defautCode.code.split('\n').length)

  const defaultMainCode = codeParse || localStorage[`code${taskId}`] || downline

  const [mainCode, setMainCode] = useState(defaultMainCode)

  useEffect(() => {
    if (isCopy) {
      setTimeout(() => {
        setIsCopy(false)
      }, 1000)
    }
  }, [isCopy])

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
    if (isPause) {
      return
    }

    const timeId = setInterval(() => {
      setDefaultCode(defaultCodeFunction)
    }, isError ? 1000 : isLog ? testedTime : updateTime)

    return () => clearInterval(timeId)
  }, [isLog, isError, testedTime, updateTime, isPause])

  useEffect(() => {
     try {
      const normalizeCode = mainCode
                              .replace(/console\.log/gi, 'log')
                              .replace(/for(\s?)+\(([^\)]?)+\)(\s?)+\{([^\}]?)+\}/gi, '__forNotFound__')
                              .replace(/while(\s?)+\(([^\)]?)+\)(\s?)+\{([^\}]?)+\}/gi, '__forNotFound__')
                              .replace(/eval(\s?)+\(([^\)]?)+\)/gi, '__evalNotFound__')

      window.log = (...args) => {
        const _args = (args || [])
        setLogs(l => [...l, _args.join(' ')].slice(-100))
        if (isLog) {
          setTesting(s => testedCodeFunction({ testCounter: s, ...defautCode.varData }, ..._args) ? (s > 9 ? s : s + 1) : 0)
        }
      }

      window.hiddeLog = (...args) => {
        const _args = (args || [])
        if (isLog) {
          setTesting(s => testedCodeFunction({ testCounter: s, ...defautCode.varData }, ..._args) ? (s > 9 ? s : s + 1) : 0)
        }
      }

      eval(
        defautCode.code +
        normalizeCode +
        '\n\n\n' +
        (defautCode.endCode || '')
      )

      setError(false)
    } catch (e) {
      const error = e.toString()

      if (error.match(/__forNotFound__/)) {
        setLogs(l => [...l, 'Внимание: Вы пытаетесь использовать цикл, это может привести к непредсказуемым последствиям, поэтому мы исключаем его запуск. ⚠️'].slice(-100))
        setError(true)
        return
      }

      if (error.match(/__evalNotFound__/)) {
        setLogs(l => [...l, 'Внимание: Вы пытаетесь использовать eval, это может привести к непредсказуемым последствиям, поэтому мы исключаем его запуск. ⚠️'].slice(-100))
        setError(true)
        return
      }

      setError(true)
      setLogs(l => [...l, 'Ошибка: '+error].slice(-100))
    }
  }, [defautCode.code, mainCode, (defautCode.endCode || ''), isLog, taskId])

  useEffect(() => {
    const encodedCode = encode(mainCode)
    const encodedLog = encode(isLog ? 'true' : 'false')
    const encodedPause = encode(isPause ? 'true' : 'false')

    window.location.href = window.location.origin + window.location.pathname + `?id=${window.encodeURI(taskId)}#${window.encodeURI(encodedCode)}#${window.encodeURI(encodedLog)}#${window.encodeURI(encodedPause)}`
  }, [mainCode, isLog, taskId, isPause])

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
        <BoldTitle>Задание #{taskId} {emoji}</BoldTitle>
        <Description dangerouslySetInnerHTML={{ __html: description }}></Description>
      </TaskDescription>
      <CodeTextarea ref={codeTextareaRef} id='codeTextArea'>
        <Numbers style={{ height: isLog ? '350px' : 'auto', overflow: isLog ? 'hidden' : 'visible' }}>
          {
            lines.map((_, key) => <Number key={key}>{key+1}</Number>)
          }
        </Numbers>
        <Textarea style={{ height: isLog ? '350px' : ((lines.length * 18) + 10)+'px' }} value={defautCode.code}></Textarea>
        <Textarea
          name='textarea'
          ref={textareaRef}
          style={{ height: isLog ? '350px' : ((lines.length * 18) + 10)+'px' }}
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
              <Console ref={logRef} id='console'>
                {
                  logs.map((row, key) => <Row key={key}>{row}</Row>)
                }
              </Console>
            )
            : null
        }
        <Button style={(({ bottom, right }) => ({ top: (bottom - 36)+'px', left: (right - 156)+'px' }))(document.getElementById('codeTextArea') ? document.getElementById('codeTextArea').getBoundingClientRect() : ({}))} onClick={() => setIsLog(s => !s)}>{isLog ? 'Перейти в код 💻' : 'Начать тест 🚀'}</Button>
        <CircleButton
          style={(({ bottom, right }) => ({ top: (bottom - 36 - 36 - 5)+'px', left: (right - 36)+'px', borderRadius: '12px 0px 0px 12px' }))(document.getElementById('codeTextArea') ? document.getElementById('codeTextArea').getBoundingClientRect() : ({}))}
          onClick={() => {
            const encodedCode = encode(mainCode)
            const encodedLog = encode(isLog ? 'true' : 'false')
            const encodedPause = encode(isPause ? 'true' : 'false')

            navigator.clipboard.writeText(window.location.origin + window.location.pathname + `?id=${window.encodeURI(taskId)}#${window.encodeURI(encodedCode)}#${window.encodeURI(encodedLog)}#${window.encodeURI(encodedPause)}`)
            setIsCopy(true)
          }}
        >🔗</CircleButton>
        <CircleButton
          style={(({ bottom, right }) => ({ top: (bottom - 36 - 36 - 36 - 10)+'px', left: (right - 36)+'px', borderRadius: '12px 0px 0px 12px' }))(document.getElementById('codeTextArea') ? document.getElementById('codeTextArea').getBoundingClientRect() : ({}))}
          onClick={() => {
            setIsPause(s => !s)
          }}
        >{isPause ? '▶️' : '⏸'}</CircleButton>
      </CodeTextarea>
      <Status>
        <StatusTitle>
          {
            isCopy
              ? 'Ссылка скопированна!'
              : testing > 9
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
            isCopy
              ? '👌'
              : testing > 9
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
