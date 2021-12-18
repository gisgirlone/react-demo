import React, { Component } from 'react'
import { Menu } from 'antd'
import Content from '../components/one/Content'
import '../styles/one.scss'
export default class One extends Component {
  state = {
    current: 'daily',
  }
  handleClick = (e) => {
    this.setState({ current: e.key })
  }
  render() {
    return (
      <div className='one-page'>
        <div className='tab'>
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode='horizontal'>
            <Menu.Item key='daily'>每日维护及报告上传</Menu.Item>
            <Menu.Item key='month'>每月维护及报告上传</Menu.Item>
          </Menu>
        </div>
        <Content></Content>
      </div>
    )
  }
}
