import 番茄钟 from './组件/番茄钟'
import Ranking from './排行榜测试数据/ranking'
import Statistics from './数据统计/statistics'

function App() {
  return (
    <div>
      <h1>大学生反拖延系统</h1>

      <番茄钟 />

      <hr />

      <Statistics />

      <hr />

      <Ranking />
    </div>
  )
}

export default App