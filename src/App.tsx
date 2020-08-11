import React from 'react';

// Ant Design Components
import { Col, Row, Layout } from 'antd'

// Page Views
import Page from './views/Page'

// Routes
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom'

const { Content, Sider } = Layout

function App() {
  return (
    <BrowserRouter>
      <Layout >
        <Sider >
          <div>Test</div>
        </Sider>
        <Switch>
          <Route>
            <Page title="TEST" />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
