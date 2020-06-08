import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';

import {  SiderBar, Header, Footer, Shortcuts, QuickMenu, PageSettings } from "../src/components/index.js";
import { Dachothue, Quanlytrangthietbi, Quanlyvattu } from "../src/components/container/index.js";
export default class App extends Component {

  getAndCreateJS = async src => {
    return  fetch(src)
      .then(res => res.text())
      .then(res => {
        var script = document.createElement("script");
        script.innerHTML = res;
        script.dataset.src = src;
        document.body.appendChild(script);
      });
  }

  componentDidMount = async () => {
    await this.getAndCreateJS('js/vendors.bundle.js');
    await this.getAndCreateJS('js/app.bundle.js');
  }

  render() {
    return (
      <div ref={el => this.el = el}>
      <Router>
        <div className="page-wrapper">
          <div className="page-inner">
            <SiderBar/>
            <div className="page-content-wrapper">
              <Header/>
              <main id="js-page-content" role="main" className="page-content">
                <Switch>
                  <Route exact path='/da-cho-thue' component={Dachothue}/>
                  <Route path='/quan-ly-trang-thiet-bi' component={Quanlytrangthietbi}/>
                  <Route path='/quan-ly-vat-tu' component={Quanlyvattu}/>
                </Switch>
              </main>
              <div className="page-content-overlay" data-action="toggle" data-class="mobile-nav-on"></div>
              <Footer/>
              <Shortcuts></Shortcuts>
            </div>
          </div>
        </div>
        <QuickMenu/>
        <PageSettings/>
      </Router>
      </div>
    );
  }
}
