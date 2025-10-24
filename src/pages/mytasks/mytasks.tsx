import { Component } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './mytasks.scss'

interface Task {
  id: string
  title: string
  department: string
  date: string
  status: 'pending' | 'inProgress' | 'completed'
  progress: number
}

export default class MyTasks extends Component {
  state = {
    activeTab: 'pending',
    pendingTasks: [
      {
        id: '1',
        title: '2024年Q4季度质量检查',
        department: '骨科',
        date: '2024-10-24',
        status: 'pending',
        progress: 0
      },
      {
        id: '2',
        title: '手术室规范性审查',
        department: '手术室',
        date: '2024-10-23',
        status: 'pending',
        progress: 0
      },
      {
        id: '3',
        title: '药房库存核查',
        department: '药房',
        date: '2024-10-22',
        status: 'pending',
        progress: 0
      }
    ] as Task[],
    inProgressTasks: [
      {
        id: '4',
        title: '病历规范性检查',
        department: '内科',
        date: '2024-10-20',
        status: 'inProgress',
        progress: 65
      },
      {
        id: '5',
        title: '感染控制督查',
        department: '感染科',
        date: '2024-10-18',
        status: 'inProgress',
        progress: 40
      },
      {
        id: '6',
        title: '护理安全巡检',
        department: '护理部',
        date: '2024-10-15',
        status: 'inProgress',
        progress: 85
      }
    ] as Task[],
    completedTasks: [
      {
        id: '7',
        title: '2024年9月质量总结',
        department: '质管科',
        date: '2024-10-10',
        status: 'completed',
        progress: 100
      },
      {
        id: '8',
        title: '医疗费用合理性审查',
        department: '财务科',
        date: '2024-10-05',
        status: 'completed',
        progress: 100
      },
      {
        id: '9',
        title: '前三季度工作总结',
        department: '质管科',
        date: '2024-09-30',
        status: 'completed',
        progress: 100
      }
    ] as Task[]
  }

  handleTaskClick = () => {
    Taro.showToast({
      title: '详情功能待实现',
      icon: 'none',
      duration: 2000
    })
  }

  handleTabChange = (tab: string) => {
    this.setState({ activeTab: tab })
  }

  getTasksByStatus = () => {
    const { activeTab } = this.state
    switch (activeTab) {
      case 'pending':
        return this.state.pendingTasks
      case 'inProgress':
        return this.state.inProgressTasks
      case 'completed':
        return this.state.completedTasks
      default:
        return []
    }
  }

  getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending':
        return '待审批'
      case 'inProgress':
        return '进行中'
      case 'completed':
        return '已完成'
      default:
        return ''
    }
  }

  getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return '#ef4444'
      case 'inProgress':
        return '#f59e0b'
      case 'completed':
        return '#10b981'
      default:
        return '#6b7280'
    }
  }

  render() {
    const { activeTab } = this.state
    const tasks = this.getTasksByStatus()

    return (
      <View className='mytasks-page'>
        {/* 头部统计 */}
        <View className='stats-header'>
          <View className='stats-item'>
            <Text className='stats-label'>待审批</Text>
            <Text className='stats-count'>{this.state.pendingTasks.length}</Text>
          </View>
          <View className='stats-divider' />
          <View className='stats-item'>
            <Text className='stats-label'>进行中</Text>
            <Text className='stats-count'>{this.state.inProgressTasks.length}</Text>
          </View>
          <View className='stats-divider' />
          <View className='stats-item'>
            <Text className='stats-label'>已完成</Text>
            <Text className='stats-count'>{this.state.completedTasks.length}</Text>
          </View>
        </View>

        {/* Tab 切换 */}
        <View className='tabs-container'>
          <View
            className={`tab-item ${activeTab === 'pending' ? 'active' : ''}`}
            onClick={() => this.handleTabChange('pending')}
          >
            <Text>待审批</Text>
          </View>
          <View
            className={`tab-item ${activeTab === 'inProgress' ? 'active' : ''}`}
            onClick={() => this.handleTabChange('inProgress')}
          >
            <Text>进行中</Text>
          </View>
          <View
            className={`tab-item ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => this.handleTabChange('completed')}
          >
            <Text>已完成</Text>
          </View>
        </View>

        {/* 任务列表 */}
        <ScrollView scrollY className='task-list'>
          {tasks.map((task) => (
            <View
              key={task.id}
              className='task-item'
              onClick={this.handleTaskClick}
            >
              <View className='task-header'>
                <View className='task-info'>
                  <Text className='task-title'>{task.title}</Text>
                  <Text className='task-dept'>{task.department}</Text>
                </View>
                <View
                  className='task-badge'
                  style={{ backgroundColor: this.getStatusColor(task.status) }}
                >
                  <Text className='badge-text'>{this.getStatusLabel(task.status)}</Text>
                </View>
              </View>

              <View className='task-meta'>
                <Text className='meta-date'>📅 {task.date}</Text>
              </View>

              {task.progress > 0 && (
                <View className='task-progress'>
                  <View className='progress-bar-bg'>
                    <View
                      className='progress-bar-fill'
                      style={{ width: `${task.progress}%` }}
                    />
                  </View>
                  <Text className='progress-text'>{task.progress}%</Text>
                </View>
              )}
            </View>
          ))}

          {tasks.length === 0 && (
            <View className='empty-state'>
              <Text className='empty-icon'>📭</Text>
              <Text className='empty-text'>暂无任务</Text>
            </View>
          )}

          <View style={{ height: '40px' }} />
        </ScrollView>
      </View>
    )
  }
}
