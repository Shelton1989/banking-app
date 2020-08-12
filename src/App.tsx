import React from 'react';

// Ant Design Components
import {
  Layout, 
  Menu,
  Typography,
  Divider
} from 'antd'

// Page Views
import Page from './views/Page'

// Components
import UserDetails from './components/UserDetails'

// Routes
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom'

const { Content, Sider } = Layout
const {Title} = Typography

const style: any = {
  app: {
    height: '100vh'
  },
  whiteBg: {
    background: '#FFF'
  },
  container: {
    padding: '10px 15px'
  }
}

function App() {
  return (
    <div >
      <BrowserRouter>
        <Layout >
          <Sider width={280} style={style.whiteBg} >
            <div style={style.container}>
              <UserDetails />
            </div>
            <Divider ><Title level={4}>Menu</Title></Divider>
            <Menu defaultSelectedKeys={['menu-item-1']}>
              <Menu.Item key="menu-item-1">
                <Link to="/" >Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="menu-item-2">
                <Link to="/settings" >Settings</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={style.app} >
            <Switch>
              <Route path="/" exact>
                <Page title="Dashboard" />
              </Route>
              <Route path="/settings">
                <Page title="Settings" />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
