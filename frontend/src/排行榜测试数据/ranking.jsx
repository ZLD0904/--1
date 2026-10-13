function Ranking() {
  const rankingData = [
    { rank: 1, name: '小明', minutes: 520 },
    { rank: 2, name: '小红', minutes: 430 },
    { rank: 3, name: 'Renee', minutes: 320 },
    { rank: 4, name: '小王', minutes: 280 },
    { rank: 5, name: '小李', minutes: 240 },
  ]

  return (
    <div>
      <h2>🏆 专注排行榜</h2>

      {rankingData.map((item) => (
        <div key={item.rank}>
          <span>{item.rank}. </span>
          <span>{item.name}</span>
          <span> - {item.minutes} 分钟</span>
        </div>
      ))}
    </div>
  )
}

export default Ranking