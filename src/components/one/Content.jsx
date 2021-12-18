import React, { Component } from 'react'
import { Button, Collapse, Form, Input, DatePicker, Select, Pagination } from 'antd'
import {  DeleteOutlined } from '@ant-design/icons'
import './content.scss'
import TableList from './TableList'
import AddRecord from './AddRecord'

const FormItem = Form.Item
const { Panel } = Collapse
const { RangePicker } = DatePicker
const { Option } = Select

class Content extends Component {
  formRef = React.createRef()
  state = {
    list: [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
      },
    ],
  }
  
  onFinish = (values) => {
    console.warn(values)
  }
  onReset = () => {
    this.formRef.current.resetFields()
  }
  componentDidMount() {
    this.formRef.current.setFieldsValue({ projectName: 'lucy' })
  }

  render() {
    return (
      <div className='content'>
        <div className='btn-group'>
          <AddRecord></AddRecord>
          <Button icon={<DeleteOutlined />}>删除</Button>
        </div>
        <Collapse defaultActiveKey={['1']} expandIconPosition='right'>
          <Panel key='1'>
            <div className='collapse-box'>
              <Form ref={this.formRef} onFinish={this.onFinish} onReset={this.onReset}>
                <FormItem label='日期范围' name='date'>
                  <RangePicker showTime={{ format: 'HH:mm' }} format='YYYY-MM-DD HH:mm' />
                </FormItem>
                <FormItem label='项目名' name='projectName'>
                  <Select>
                    <Option value='jack'>Jack</Option>
                    <Option value='lucy'>Lucy</Option>
                    <Option value='Yiminghe'>yiminghe</Option>
                  </Select>
                </FormItem>
                <FormItem label='状态' name='status'>
                  <Select>
                    <Option value='0'>不限</Option>
                    <Option value='1'>已上传</Option>
                    <Option value='2'>未上传</Option>
                  </Select>
                </FormItem>
                <FormItem label='上传人' name='userName'>
                  <Input placeholder='请输入' />
                </FormItem>
                <div className='btn'>
                  <Button type='primary' htmlType='submit'>
                    查询
                  </Button>
                  <Button htmlType='reset'>重置</Button>
                </div>
              </Form>
            </div>
          </Panel>
        </Collapse>
        <div className='table-list'>
          <TableList list={this.state.list}></TableList>
        </div>
        <div className='footer'>
          <Pagination size='small' total={50} showSizeChanger showQuickJumper />
        </div>
      </div>
    )
  }
}

export default Content
