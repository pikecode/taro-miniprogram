import { Component } from 'react'
import { View, Text, ScrollView, Input, Textarea, Picker } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './report.scss'

interface FormData {
  department: string
  reportType: string
  caseNumber: string
  patientName: string
  caseDescription: string
  findings: string
  recommendations: string
  attachments: string[]
}

export default class Report extends Component {
  state: FormData = {
    department: '',
    reportType: '',
    caseNumber: '',
    patientName: '',
    caseDescription: '',
    findings: '',
    recommendations: '',
    attachments: []
  }

  departments = ['骨科', '内科', '手术室', '感染科', '护理部', '药房', '财务科', '质管科']
  reportTypes = ['月度报告', '季度报告', '年度报告', '专项检查', '日常巡查']

  handleDepartmentChange = (e: any) => {
    this.setState({
      department: this.departments[e.detail.value]
    })
  }

  handleReportTypeChange = (e: any) => {
    this.setState({
      reportType: this.reportTypes[e.detail.value]
    })
  }

  handleInputChange = (field: string, value: string) => {
    this.setState({
      [field]: value
    })
  }

  handleSubmit = () => {
    const { department, reportType, caseNumber, findings } = this.state

    if (!department || !reportType || !caseNumber || !findings) {
      Taro.showToast({
        title: '请填写必填项',
        icon: 'none',
        duration: 2000
      })
      return
    }

    Taro.showLoading({
      title: '提交中...'
    })

    // 模拟 API 调用
    setTimeout(() => {
      Taro.hideLoading()
      Taro.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000
      })

      // 清空表单
      this.setState({
        department: '',
        reportType: '',
        caseNumber: '',
        patientName: '',
        caseDescription: '',
        findings: '',
        recommendations: '',
        attachments: []
      })

      // 返回列表
      setTimeout(() => {
        Taro.navigateBack()
      }, 500)
    }, 1500)
  }

  handleSaveDraft = () => {
    Taro.showToast({
      title: '草稿已保存',
      icon: 'success',
      duration: 2000
    })
  }

  render() {
    const { department, reportType, caseNumber, patientName, caseDescription, findings, recommendations } = this.state

    return (
      <ScrollView scrollY className='report-page'>
        <View className='form-container'>
          {/* 基本信息 */}
          <View className='form-section'>
            <Text className='section-title'>基本信息</Text>

            {/* 部门选择 */}
            <View className='form-group'>
              <Text className='form-label'>
                <Text className='required'>*</Text> 部门
              </Text>
              <Picker
                mode='selector'
                range={this.departments}
                onChange={this.handleDepartmentChange}
              >
                <View className='picker-input'>
                  <Text className={department ? 'input-value' : 'placeholder'}>
                    {department || '请选择部门'}
                  </Text>
                </View>
              </Picker>
            </View>

            {/* 报告类型 */}
            <View className='form-group'>
              <Text className='form-label'>
                <Text className='required'>*</Text> 报告类型
              </Text>
              <Picker
                mode='selector'
                range={this.reportTypes}
                onChange={this.handleReportTypeChange}
              >
                <View className='picker-input'>
                  <Text className={reportType ? 'input-value' : 'placeholder'}>
                    {reportType || '请选择报告类型'}
                  </Text>
                </View>
              </Picker>
            </View>

            {/* 病案编号 */}
            <View className='form-group'>
              <Text className='form-label'>
                <Text className='required'>*</Text> 病案编号
              </Text>
              <Input
                type='text'
                placeholder='请输入病案编号'
                value={caseNumber}
                onInput={(e) => this.handleInputChange('caseNumber', e.detail.value)}
                className='form-input'
              />
            </View>

            {/* 患者姓名 */}
            <View className='form-group'>
              <Text className='form-label'>患者姓名</Text>
              <Input
                type='text'
                placeholder='请输入患者姓名'
                value={patientName}
                onInput={(e) => this.handleInputChange('patientName', e.detail.value)}
                className='form-input'
              />
            </View>
          </View>

          {/* 详细信息 */}
          <View className='form-section'>
            <Text className='section-title'>详细信息</Text>

            {/* 案例描述 */}
            <View className='form-group'>
              <Text className='form-label'>案例描述</Text>
              <Textarea
                placeholder='请输入案例描述...'
                value={caseDescription}
                onInput={(e) => this.handleInputChange('caseDescription', e.detail.value)}
                className='form-textarea'
              />
            </View>

            {/* 检查发现 */}
            <View className='form-group'>
              <Text className='form-label'>
                <Text className='required'>*</Text> 检查发现
              </Text>
              <Textarea
                placeholder='请输入检查发现...'
                value={findings}
                onInput={(e) => this.handleInputChange('findings', e.detail.value)}
                className='form-textarea'
              />
            </View>

            {/* 整改建议 */}
            <View className='form-group'>
              <Text className='form-label'>整改建议</Text>
              <Textarea
                placeholder='请输入整改建议...'
                value={recommendations}
                onInput={(e) => this.handleInputChange('recommendations', e.detail.value)}
                className='form-textarea'
              />
            </View>
          </View>

          {/* 提交按钮 */}
          <View className='form-actions'>
            <View className='button-group'>
              <View
                className='btn btn-secondary'
                onClick={this.handleSaveDraft}
              >
                <Text>保存草稿</Text>
              </View>
              <View
                className='btn btn-primary'
                onClick={this.handleSubmit}
              >
                <Text>提交上报</Text>
              </View>
            </View>
          </View>

          <View style={{ height: '40px' }} />
        </View>
      </ScrollView>
    )
  }
}
