import { Component } from 'react'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import headerImage from '../../assets/home-header.svg'
import './index.scss'

interface TaskStats {
  pending: number
  inProgress: number
  completed: number
  draft: number
}

export default class Index extends Component {
  state: TaskStats = {
    pending: 5,
    inProgress: 3,
    completed: 12,
    draft: 2
  }

  componentDidMount() {
    // 设置导航栏颜色匹配背景图
    Taro.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#5b7bc6'  // 蓝色背景，匹配背景图
    })
  }

  componentWillUnmount() {
    // 恢复导航栏默认样式
    Taro.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#ffffff'
    })
  }

  handleNavigation = (page: string) => {
    Taro.navigateTo({
      url: `/pages/${page}/${page}`
    })
  }

  render() {
    const { pending, inProgress, completed, draft } = this.state

    return (
      <ScrollView scrollY className='index'>
        {/* 顶部欢迎区 */}
        <View className='header-section'>
          <Image
            className='background-image'
            src={headerImage}
            mode='cover'
          />
          <View className='header-overlay' />
          <View className='header-content'>
            <View className='greeting-container'>
              <Text className='greeting'>欢迎</Text>
              <Text className='username'>张先生，您好</Text>
            </View>
          </View>
        </View>

        {/* 主内容区 */}
        <View className='content-section'>
          {/* 我的任务卡片 */}
          <View className='task-card' onClick={() => this.handleNavigation('mytasks')}>
            <View className='card-header'>
              <Text className='card-title'>我的任务</Text>
              <Text className='arrow'>→</Text>
            </View>
            <View className='task-grid'>
              <View className='task-item'>
                <Text className='task-icon'>📋</Text>
                <Text className='task-label'>待审批</Text>
                <Text className='task-count'>{pending}</Text>
              </View>
              <View className='task-item'>
                <Text className='task-icon'>⏳</Text>
                <Text className='task-label'>进行中</Text>
                <Text className='task-count'>{inProgress}</Text>
              </View>
              <View className='task-item'>
                <Text className='task-icon'>✓</Text>
                <Text className='task-label'>已完成</Text>
                <Text className='task-count'>{completed}</Text>
              </View>
              <View className='task-item'>
                <Text className='task-icon'>📝</Text>
                <Text className='task-label'>草稿</Text>
                <Text className='task-count'>{draft}</Text>
              </View>
            </View>
          </View>

          {/* 快速功能区 */}
          <View className='quick-actions'>
            <View className='action-item' onClick={() => this.handleNavigation('report')}>
              <View className='action-icon'>📊</View>
              <Text className='action-text'>数据上报</Text>
            </View>
            <View className='action-item' onClick={() => this.handleNavigation('analytics')}>
              <View className='action-icon'>📈</View>
              <Text className='action-text'>分析报表</Text>
            </View>
            <View className='action-item' onClick={() => this.handleNavigation('profile')}>
              <View className='action-icon'>👤</View>
              <Text className='action-text'>个人中心</Text>
            </View>
          </View>

          {/* 功能项网格 */}
          <View className='feature-grid'>
            <View className='feature-item'>
              <View className='feature-icon'>🔒</View>
              <Text className='feature-name'>隐私政策</Text>
            </View>
            <View className='feature-item'>
              <View className='feature-icon'>⚖️</View>
              <Text className='feature-name'>法律条款</Text>
            </View>
            <View className='feature-item'>
              <View className='feature-icon'>ℹ️</View>
              <Text className='feature-name'>关于我们</Text>
            </View>
            <View className='feature-item'>
              <View className='feature-icon'>📞</View>
              <Text className='feature-name'>联系客服</Text>
            </View>
          </View>

          {/* 猜你喜欢模块 */}
          <View className='guess-like-section'>
            <Text className='section-header'>猜你喜欢</Text>
            <View className='product-grid'>
              <View className='product-card'>
                <View className='product-image'>
                  <Text className='product-placeholder'>🎒</Text>
                  <View className='heart-btn'>
                    <Text>🤍</Text>
                  </View>
                </View>
                <Text className='product-name'>【明星同款】Prada Explore中号Re-Nylon单肩包</Text>
                <Text className='product-price'>¥ 17,900</Text>
              </View>

              <View className='product-card'>
                <View className='product-image'>
                  <Text className='product-placeholder'>👜</Text>
                  <View className='heart-btn'>
                    <Text>🤍</Text>
                  </View>
                </View>
                <Text className='product-name'>【预售】Prada Explore中号Nappa羊皮革单肩包</Text>
                <Text className='product-price'>¥ 26,400</Text>
              </View>

              <View className='product-card'>
                <View className='product-image'>
                  <Text className='product-placeholder'>🎒</Text>
                  <View className='heart-btn'>
                    <Text>🤍</Text>
                  </View>
                </View>
                <Text className='product-name'>Re-Nylon双肩背包</Text>
                <Text className='product-price'>¥ 21,800</Text>
              </View>

              <View className='product-card'>
                <View className='product-image'>
                  <Text className='product-placeholder'>👢</Text>
                  <View className='heart-btn'>
                    <Text>🤍</Text>
                  </View>
                </View>
                <Text className='product-name'>【预售】皮革中筒靴</Text>
                <Text className='product-price'>¥ 15,200</Text>
              </View>
            </View>
          </View>

          {/* 底部推广区 */}
          <View className='footer-promotion'>
            <View className='qrcode-section'>
              <View className='qrcode-placeholder'>█ █ █</View>
              <Text className='promotion-text'>扫码关注我们</Text>
              <Text className='promotion-subtitle'>获取更多督查资讯</Text>
            </View>
          </View>

          <View style={{ height: '40px' }} />
        </View>
      </ScrollView>
    )
  }
}
