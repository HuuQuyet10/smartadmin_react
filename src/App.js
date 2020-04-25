import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import  $, {Popper, jQuery, Waves, classHolder, bootbox, i18n } from "jquery";
// import { throttle, debounce } from 'throttle-debounce';

import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import Shortcuts from "./Shortcuts";
import QuickMenu from "./QuickMenu";
import Messenger from "./Messenger";
import PageSettings from "./PageSettings";

import IntelAnalyticsDashboard from "./components/IntelAnalyticsDashboard";
import IntelMarketingDashboard from "./components/IntelMarketingDashboard";
import Blank from "./components/Blank";
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

    // await this.getAndCreateJS('js/dependency/moment/moment.js');
    // await this.getAndCreateJS('js/miscellaneous/fullcalendar/fullcalendar.bundle.js');
    // await this.getAndCreateJS('js/statistics/sparkline/sparkline.bundle.js');
    // await this.getAndCreateJS('js/statistics/easypiechart/easypiechart.bundle.js');
    // await this.getAndCreateJS('js/statistics/flot/flot.bundle.js');
    // await this.getAndCreateJS('js/miscellaneous/jqvmap/jqvmap.bundle.js');
  }

  render() {
    return (
      <div ref={el => this.el = el}>
      <Router>
        <div className="page-wrapper">
          <div className="page-inner">
            <Menu/>
            <div className="page-content-wrapper">
              <Header/>
              <main id="js-page-content" role="main" className="page-content">
                <Route path="/intel_analytics_dashboard" component={IntelAnalyticsDashboard}/>
                <Route path="/intel_marketing_dashboard" component={IntelMarketingDashboard}/>
                <Route path="/blank" component={Blank}/>
              </main>
              <div className="page-content-overlay" data-action="toggle" data-class="mobile-nav-on"></div>
              <Footer/>
              <Shortcuts></Shortcuts>
            </div>
          </div>
        </div>
        <QuickMenu/>
        <Messenger/>
        <PageSettings/>
      </Router>
      </div>
    );
  }
}
