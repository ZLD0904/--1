function Statistics() {

  const todayMinutes = 75
  const weekMinutes = 320
  const completionRate = 82


  // =========================
  // 本周专注趋势
  // =========================

  const weekData = [
    { day: '周一', minutes: 45 },
    { day: '周二', minutes: 60 },
    { day: '周三', minutes: 30 },
    { day: '周四', minutes: 75 },
    { day: '周五', minutes: 50 },
    { day: '周六', minutes: 35 },
    { day: '周日', minutes: 25 },
  ]


  const maxMinutes = Math.max(
    ...weekData.map((item) => item.minutes)
  )


  // =========================
  // 任务完成情况
  // =========================

  const taskData = {
    completed: 8,
    doing: 3,
    unfinished: 2,
  }


  const totalTasks =
    taskData.completed +
    taskData.doing +
    taskData.unfinished


  const completedPercent =
    (taskData.completed / totalTasks) * 100


  const doingPercent =
    (taskData.doing / totalTasks) * 100



  // =========================
  // 积分数据 PointsRecord
  // =========================

  const pointsData = {
    total: 1280,
    today: 50,
    week: 230,
  }


  const pointsRecords = [
    {
      action: "完成番茄钟",
      points: "+20"
    },
    {
      action: "每日打卡",
      points: "+10"
    },
    {
      action: "完成任务",
      points: "+30"
    },
  ]



  // =========================
  // 成就 Achievement
  // =========================

  const achievements = [
    {
      name: "🔥 专注达人",
      description: "累计专注超过10小时",
      unlocked: true
    },
    {
      name: "✅ 坚持打卡",
      description: "连续打卡7天",
      unlocked: true
    },
    {
      name: "🍅 番茄高手",
      description: "完成50次番茄钟",
      unlocked: false
    },
    {
      name: "🏆 学习王者",
      description: "累计获得1000积分",
      unlocked: true
    }
  ]


  return (

    <div className="statistics">

      <h2>📊 数据统计</h2>



      {/* 数据卡片 */}

      <div className="statistics-cards">


        <div className="statistics-card">

          <h3>今日专注</h3>

          <p className="statistics-number">
            {todayMinutes}
          </p>

          <span>分钟</span>

        </div>



        <div className="statistics-card">

          <h3>本周专注</h3>

          <p className="statistics-number">
            {weekMinutes}
          </p>

          <span>分钟</span>

        </div>



        <div className="statistics-card">

          <h3>完成率</h3>


          <div
            className="progress-circle"
            style={{
              '--progress': `${completionRate * 3.6}deg`,
            }}
          >

            <div className="progress-inner">

              <strong>
                {completionRate}%
              </strong>

            </div>

          </div>


          <span>本周</span>


        </div>


      </div>





      {/* 专注趋势 */}

      <div className="weekly-chart">

        <h3>📈 本周专注情况</h3>


        <div className="bar-chart">


          {weekData.map((item)=>(


            <div
              className="bar-item"
              key={item.day}
            >


              <span className="bar-value">
                {item.minutes}
              </span>


              <div
                className="bar"
                style={{
                  height:
                  `${(item.minutes / maxMinutes) * 180}px`
                }}
              />


              <span className="bar-label">
                {item.day}
              </span>


            </div>


          ))}


        </div>


      </div>






      {/* 任务完成情况 */}

      <div className="task-chart">


        <h3>🎯 任务完成情况</h3>



        <div className="task-content">



          <div
            className="task-donut"
            style={{
              '--completed': `${completedPercent}%`,
              '--doing':
              `${completedPercent + doingPercent}%`,
            }}
          >


            <div className="task-donut-inner">

              <strong>
                {totalTasks}
              </strong>


              <span>
                总任务
              </span>


            </div>


          </div>





          <div className="task-legend">


            <div className="task-item">

              <span className="task-dot completed"></span>

              已完成

              <strong>
                {taskData.completed}
              </strong>

            </div>



            <div className="task-item">

              <span className="task-dot doing"></span>

              进行中

              <strong>
                {taskData.doing}
              </strong>

            </div>



            <div className="task-item">

              <span className="task-dot unfinished"></span>

              未完成

              <strong>
                {taskData.unfinished}
              </strong>

            </div>



          </div>


        </div>


      </div>








      {/* =========================
          积分展示 PointsRecord
      ========================= */}


      <div className="points-section">


        <h3>
          ⭐ 我的积分
        </h3>


        <div className="points-card">


          <div>

            <span>
              当前积分
            </span>

            <strong>
              {pointsData.total}
            </strong>


          </div>



          <div>

            <span>
              今日获得
            </span>

            <strong>
              +{pointsData.today}
            </strong>


          </div>




          <div>

            <span>
              本周获得
            </span>

            <strong>
              +{pointsData.week}
            </strong>


          </div>


        </div>





        <h4>
          最近积分记录
        </h4>


        {
          pointsRecords.map((item,index)=>(

            <div
              className="point-record"
              key={index}
            >

              <span>
                {item.action}
              </span>


              <strong>
                {item.points}
              </strong>


            </div>


          ))
        }



      </div>








      {/* =========================
          成就 Achievement
      ========================= */}


      <div className="achievement-section">


        <h3>
          🏅 我的成就
        </h3>



        <div className="achievement-list">


          {
            achievements.map((item,index)=>(


              <div
                className={
                  item.unlocked
                  ?
                  "achievement unlocked"
                  :
                  "achievement locked"
                }

                key={index}
              >


                <h4>
                  {item.name}
                </h4>


                <p>
                  {item.description}
                </p>


                <span>

                  {
                    item.unlocked
                    ?
                    "已解锁"
                    :
                    "未解锁"
                  }

                </span>


              </div>


            ))
          }


        </div>


      </div>




    </div>

  )

}


export default Statistics