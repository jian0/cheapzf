import React from 'react';
import { TabBar } from 'antd-mobile';
import { Route } from 'react-router-dom'
import Index from "../index/index.js"
import Found from "../found"
import Ask from "../ask"
import Mine from "../mine"

class Home extends React.Component {
    // 一般用来组件的初始化工作
    constructor(props) {
        super(props);
        // console.log(props.location.pathname); //  /home
        if (props.location.pathname === "/home") {
            props.history.push("/home/index")
        }
    }

    render() {
        // console.log(this.props);

        const { location, history } = this.props;
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="index"
                        icon={<i className="iconfont icon-ind" />}
                        selectedIcon={<i className="iconfont icon-ind" />}
                        selected={location.pathname === '/home/index'}
                        onPress={() => history.push('/home/index')}
                    >
                        <Route path='/home/index' component={Index}></Route>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i className="iconfont icon-findHouse" />}
                        selectedIcon={<i className="iconfont icon-findHouse" />}
                        title="找房"
                        key="house"
                        selected={location.pathname === '/home/found'}
                        onPress={() => history.push('/home/found')}
                    >
                        <Route path='/home/found' component={Found}></Route>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i className="iconfont icon-infom" />}
                        selectedIcon={
                            <i className="iconfont icon-infom" />}
                        title="咨询"
                        key="ask"
                        selected={location.pathname === '/home/ask'}
                        onPress={() => history.push('/home/ask')}
                    >
                        <Route path='/home/ask' component={Ask}></Route>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i className="iconfont icon-my"></i>}
                        selectedIcon={<i className="iconfont icon-my"></i>}
                        title="我的"
                        key="mine"
                        selected={location.pathname === '/home/mine'}
                        onPress={() => history.push('/home/mine')}
                    >
                        <Route path='/home/mine' component={Mine}></Route>
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
export default Home