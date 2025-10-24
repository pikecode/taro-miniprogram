import { Component } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import './analytics.scss'

export default class Analytics extends Component {
  state = {
    selectedPeriod: 'month',
    overallScore: 92,
    completionRate: 85,
    qualityTrend: [
      { month: '8月', score: 85 },
      { month: '9月', score: 88 },
      { month: '10月', score: 92 }
    ],
    departmentScores: [
      { name: '骨科', score: 95, trend: '↑' },
      { name: '内科', score: 92, trend: '→' },
      { name: '手术室', score: 88, trend: '↓' },
      { name: '感染科', score: 90, trend: '↑' },
      { name: '护理部', score: 94, trend: '↑' },
      { name: '药房', score: 86, trend: '→' }
    ],
    taskStats: {
      total: 42,
      completed: 35,
      pending: 5,
      inProgress: 2
    }
  }

  getScoreColor = (score: number) => {
    if (score >= 90) return '#10b981'
    if (score >= 80) return '#f59e0b'
    return '#ef4444'
  }

  getScoreGrade = (score: number) => {
    if (score >= 90) return 'A'
    if (score >= 80) return 'B'
    if (score >= 70) return 'C'
    return 'D'
  }

  render() {
    const { overallScore, completionRate, qualityTrend, departmentScores, taskStats } = this.state
    const { total, completed, pending, inProgress } = taskStats

    return (
      <ScrollView scrollY className='analytics-page'>
        {/* 总体评分卡 */}
        <View className='card-container'>
          <View className='score-card'>
            <View className='score-main'>
              <View className='score-circle'>
                <Text className='score-value'>{overallScore}</Text>
                <Text className='score-grade'>{this.getScoreGrade(overallScore)}</Text>
              </View>
              <View className='score-info'>
                <Text className='score-title'>本月总体评分</Text>
                <Text className='score-subtitle'>优秀 (A级)</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 完成率统计 */}
        <View className='card-container'>
          <View className='stat-card'>
            <Text className='card-title'>任务完成率</Text>
            <View className='stat-content'>
              <View className='stat-item'>
                <Text className='stat-label'>完成</Text>
                <Text className='stat-number'>{completed}</Text>
                <Text className='stat-unit'>个</Text>
              </View>
              <View className='stat-item'>
                <Text className='stat-label'>待处理</Text>
                <Text className='stat-number'>{pending}</Text>
                <Text className='stat-unit'>个</Text>
              </View>
              <View className='stat-item'>
                <Text className='stat-label'>进行中</Text>
                <Text className='stat-number'>{inProgress}</Text>
                <Text className='stat-unit'>个</Text>
              </View>
              <View className='stat-item'>
                <Text className='stat-label'>总计</Text>
                <Text className='stat-number'>{total}</Text>
                <Text className='stat-unit'>个</Text>
              </View>
            </View>

            <View className='progress-row'>
              <Text className='progress-label'>完成率</Text>
              <View className='progress-bar'>
                <View
                  className='progress-fill'
                  style={{
                    width: `${(completed / total) * 100}%`,
                    backgroundColor: this.getScoreColor((completed / total) * 100)
                  }}
                />
              </View>
              <Text className='progress-percent'>{Math.round((completed / total) * 100)}%</Text>
            </View>
          </View>
        </View>

        {/* 质量趋势 */}
        <View className='card-container'>
          <View className='trend-card'>
            <Text className='card-title'>质量评分趋势</Text>
            <View className='trend-chart'>
              {qualityTrend.map((item, index) => (
                <View key={index} className='trend-item'>
                  <View className='trend-bar-container'>
                    <View
                      className='trend-bar'
                      style={{
                        height: `${(item.score / 100) * 100}px`,
                        backgroundColor: this.getScoreColor(item.score)
                      }}
                    />
                  </View>
                  <View className='trend-labels'>
                    <Text className='trend-score'>{item.score}</Text>
                    <Text className='trend-month'>{item.month}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* 部门排名 */}
        <View className='card-container'>
          <View className='rank-card'>
            <Text className='card-title'>部门质量排名</Text>
            <View className='rank-list'>
              {departmentScores.map((dept, index) => (
                <View key={index} className='rank-item'>
                  <View className='rank-left'>
                    <View className='rank-badge'>{index + 1}</View>
                    <View className='rank-info'>
                      <Text className='dept-name'>{dept.name}</Text>
                    </View>
                  </View>
                  <View className='rank-right'>
                    <Text className='dept-trend' style={{ color: dept.trend === '↑' ? '#10b981' : dept.trend === '↓' ? '#ef4444' : '#9ca3af' }}>
                      {dept.trend}
                    </Text>
                    <View
                      className='score-badge'
                      style={{ backgroundColor: this.getScoreColor(dept.score) }}
                    >
                      <Text className='badge-text'>{dept.score}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* 数据概览 */}
        <View className='card-container'>
          <View className='overview-card'>
            <Text className='card-title'>数据概览</Text>
            <View className='overview-grid'>
              <View className='overview-item'>
                <Text className='overview-label'>检查总次数</Text>
                <Text className='overview-value'>156</Text>
              </View>
              <View className='overview-item'>
                <Text className='overview-label'>问题发现数</Text>
                <Text className='overview-value'>18</Text>
              </View>
              <View className='overview-item'>
                <Text className='overview-label'>整改完成率</Text>
                <Text className='overview-value'>100%</Text>
              </View>
              <View className='overview-item'>
                <Text className='overview-label'>满意度评分</Text>
                <Text className='overview-value'>4.8/5</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ height: '40px' }} />
      </ScrollView>
    )
  }
}
