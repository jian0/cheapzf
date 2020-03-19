import React from 'react';
import './App.css';
// import  TabBar  from "./demo/Tabbar"

import Home from "./pages/home"
import Found from "./pages/found"
import Ask from "./pages/ask"
import Mine from "./pages/mine"

// 引入路由
import { HashRouter as Router, Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* <TabBar></TabBar> */}
      <Router>
        <nav>
          <Link to="/">首页</Link>
          <Link to="/found">找房</Link>
          <Link to="/ask">咨询</Link>
          <Link to="/mine">我的</Link>
        </nav>

        <section>
          <Route  path= '/' component= {Home} exact></Route>
          <Route  path= '/found' component= {Found} exact></Route>
          <Route  path= '/ask' component= {Ask} exact></Route>
          <Route  path= '/mine' component= {Mine} exact></Route>
        </section>
      </Router>
    </div>
  );
}

export default App;
