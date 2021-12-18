import React, { Component } from 'react'
import { Menu } from 'antd'

import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import One from './One'
import Two from './Two'
import Three from './Three'
import routers from '../router'
import '../styles/home.scss'

class Home extends Component {
  changeRoute = (item) => {
    this.props.history.replace(item.component)
  }

  render() {
    return (
      <div className='home'>
        <div className='home-left' style={{ width: 250 }}>
          <Menu defaultSelectedKeys={['0']} defaultOpenKeys={['sub1']} mode='inline' theme='dark'>
            {routers.map((item, index) => {
              return (
                <Menu.Item
                  key={index}
                  icon={item.icon}
                  onClick={() => {
                    this.changeRoute(item)
                  }}>
                  {item.label}
                </Menu.Item>
              )
            })}
          </Menu>
        </div>
        <div className='home-right'>
          <Switch>
            <Route path='/one' component={One} />
            <Route path='/two' component={Two} />
            <Route path='/three' component={Three} />
            <Redirect to='/one' />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(Home)
