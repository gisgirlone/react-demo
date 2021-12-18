/*
 * @Author: 胡钟敏
 * @Date: 2021-12-17 14:31:50
 * @LastEditors: 胡钟敏
 * @LastEditTime: 2021-12-17 16:45:53
 * @Description: 
 */
import { PieChartOutlined, DesktopOutlined, ContainerOutlined } from '@ant-design/icons'
const router =  [
  {
    label: '页面1',
    icon: <PieChartOutlined />,
    component: '/one',
  },
  {
    label: '页面2',
    icon: <DesktopOutlined />,
    component: '/two',
  },
  {
    label: '页面3',
    icon: <ContainerOutlined />,
    component: '/three',
  },
]
export default router