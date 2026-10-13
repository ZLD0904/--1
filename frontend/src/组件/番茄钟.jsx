import { useEffect, useState } from 'react'

function 番茄钟() {
  // 用户设置的专注时间
  const [duration, setDuration] = useState(25)

  // 剩余秒数
  const [remainingSeconds, setRemainingSeconds] = useState(25 * 60)

  // 是否正在计时
  const [isRunning, setIsRunning] = useState(false)

  // 本次已经专注了多少秒
  const [focusedSeconds, setFocusedSeconds] = useState(0)

  // 倒计时
  useEffect(() => {
    if (!isRunning) return

    const timer = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          setIsRunning(false)
          return 0
        }

        return prev - 1
      })

      setFocusedSeconds((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [isRunning])

  const minutes = Math.floor(remainingSeconds / 60)
  const seconds = remainingSeconds % 60

  // 开始 / 继续
  const startTimer = () => {
    if (remainingSeconds > 0) {
      setIsRunning(true)
    }
  }

  // 暂停
  const pauseTimer = () => {
    setIsRunning(false)
  }

  // 结束本次专注
  const endTimer = () => {
    setIsRunning(false)
    setRemainingSeconds(0)
  }

  // 重置
  const resetTimer = () => {
    setIsRunning(false)
    setRemainingSeconds(duration * 60)
    setFocusedSeconds(0)
  }

  // 修改专注时间
  const changeDuration = (e) => {
    const value = Number(e.target.value)

    if (value >= 1 && value <= 180) {
      setDuration(value)

      // 如果当前没有在计时，就直接更新倒计时
      if (!isRunning) {
        setRemainingSeconds(value * 60)
      }
    }
  }

  return (
    <div className="pomodoro">
      <h2>番茄钟 🍅</h2>

      {/* 设置时间 */}
      <div>
        <label>
          专注时间：
          <input
            type="number"
            min="1"
            max="180"
            value={duration}
            onChange={changeDuration}
          />
          分钟
        </label>
      </div>

      {/* 倒计时 */}
      <div className="timer">
        {String(minutes).padStart(2, '0')}:
        {String(seconds).padStart(2, '0')}
      </div>

      {/* 已专注时间 */}
      <p>
        本次已专注：
        {Math.floor(focusedSeconds / 60)} 分钟
        {focusedSeconds % 60} 秒
      </p >

      {/* 按钮 */}
      <div className="timer-buttons">
        {!isRunning ? (
          <button onClick={startTimer}>
            {focusedSeconds > 0 ? '继续' : '开始'}
          </button>
        ) : (
          <button onClick={pauseTimer}>
            暂停
          </button>
        )}

        <button onClick={endTimer}>
          结束专注
        </button>

        <button onClick={resetTimer}>
          重置
        </button>
      </div>

      {/* 完成提示 */}
      {remainingSeconds === 0 && focusedSeconds > 0 && (
        <p>
          🎉 本次专注完成！
        </p >
      )}
    </div>
  )
}

export default 番茄钟