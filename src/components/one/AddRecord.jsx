import React, { Component } from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
export default class AddRecord extends Component {

  add = () => {
    console.warn('add')
  }
  
  render() {
    return (
      <div>
         <Button onClick={this.add} icon={<PlusOutlined />}>
            添加
          </Button>
      </div>
    )
  }
}
