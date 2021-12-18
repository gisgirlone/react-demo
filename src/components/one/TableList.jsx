import React, { Component } from 'react'
import { Table } from 'antd'
import PropTypes from 'prop-types'
export default class TableList extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
  }

  state = {
    data: [],
  }

  columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ]
  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
  }
  render() {
    return (
      <div>
        <Table
          rowSelection={{
            type: 'checkbox',
            ...this.rowSelection,
          }}
          columns={this.columns}
          dataSource={this.props.list}
          pagination={false}
        />
      </div>
    )
  }
}
