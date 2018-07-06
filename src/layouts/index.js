import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import Link from 'umi/link';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function Master(props) {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/page2">page2</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/page2/page22">page22</Link></Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />path2</span>}>
                <Menu.Item key="1">page2</Menu.Item>
                <Menu.Item key="2">page22</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />path3</span>}>
                <Menu.Item key="5">page3</Menu.Item>
                <Menu.Item key="6">page33</Menu.Item>
              </SubMenu>
                <Menu.Item key="12"><span><Icon type="notification" />home</span></Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <h1>{ props.text }</h1>
            { props.children }
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  )
}

function mapStateToProps(state) {
  return {
    text: state.global.text,
  };
}

export default withRouter(
  connect(mapStateToProps)(Master)
);
