import React, { Component } from 'react'

export default class IntelAnalyticsDashboard extends Component {

    getAndCreateJS = async src => {
        return fetch(src)
          .then(res => res.text())
          .then(res => {
            var script = document.createElement("script");
            script.innerHTML = res;
            script.dataset.src = src;
            document.body.appendChild(script);
          });
        
    }

    async componentDidMount() {

    }

    disabledClick = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <ol className="breadcrumb page-breadcrumb">
                    <li className="breadcrumb-item"><a href="/" onClick={this.disabledClick}>SmartAdmin</a></li>
                    <li className="breadcrumb-item">Application Intel</li>
                    <li className="breadcrumb-item active">Analytics Dashboard</li>
                    <li className="position-absolute pos-top pos-right d-none d-sm-block"><span className="js-get-date" /></li>
                </ol>
                <div className="subheader">
                    <h1 className="subheader-title">
                        <i className="subheader-icon fal fa-chart-area" /> Analytics <span className="fw-300">Dashboard</span>
                        <small>
                        </small>
                    </h1>
                    <div className="subheader-block d-lg-flex align-items-center">
                        <div className="d-inline-flex flex-column justify-content-center mr-3">
                            <span className="fw-300 fs-xs d-block opacity-50">
                                <small>EXPENSES</small>
                            </span>
                            <span className="fw-500 fs-xl d-block color-primary-500">
                                $47,000
                            </span>
                        </div>
                        <span className="sparklines hidden-lg-down" sparktype="bar" sparkbarcolor="#886ab5" sparkheight="32px" sparkbarwidth="5px" values="3,4,3,6,7,3,3,6,2,6,4" />
                    </div>
                    <div className="subheader-block d-lg-flex align-items-center border-faded border-right-0 border-top-0 border-bottom-0 ml-3 pl-3">
                        <div className="d-inline-flex flex-column justify-content-center mr-3">
                            <span className="fw-300 fs-xs d-block opacity-50">
                                <small>MY PROFITS</small>
                            </span>
                            <span className="fw-500 fs-xl d-block color-danger-500">
                                $38,500
                            </span>
                        </div>
                        <span className="sparklines hidden-lg-down" sparktype="bar" sparkbarcolor="#fe6bb0" sparkheight="32px" sparkbarwidth="5px" values="1,4,3,6,5,3,9,6,5,9,7" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div id="panel-1" className="panel panel-locked" data-panel-lock="false" data-panel-close="false" data-panel-fullscreen="false" data-panel-collapsed="false" data-panel-color="false" data-panel-locked="false" data-panel-refresh="false" data-panel-reset="false">
                            <div className="panel-hdr">
                                <h2>
                                    Live Feeds
                                    </h2>
                                <div className="panel-toolbar pr-3 align-self-end">
                                    <ul id="demo_panel-tabs" className="nav nav-tabs border-bottom-0 nav-tabs-clean" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="tab" href="#tab_default-1" role="tab">Live Stats</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#tab_default-2" role="tab">Revenue</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="panel-container show">
                                <div className="panel-content border-faded border-left-0 border-right-0 border-top-0">
                                    <div className="row no-gutters">
                                        <div className="col-lg-7 col-xl-8">
                                            <div className="position-relative">
                                                <div className="custom-control custom-switch position-absolute pos-top pos-left ml-5 mt-3 z-index-cloud">
                                                    <input type="checkbox" className="custom-control-input" id="start_interval" />
                                                    <label className="custom-control-label" htmlFor="start_interval">Live Update</label>
                                                </div>
                                                <div id="updating-chart" style={{ height: 242 }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-xl-4 pl-lg-3">
                                            <div className="d-flex mt-2">
                                                My Tasks
                                                <span className="d-inline-block ml-auto">130 / 500</span>
                                            </div>
                                            <div className="progress progress-sm mb-3">
                                                <div className="progress-bar bg-fusion-400" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <div className="d-flex">
                                                Transfered
                                                <span className="d-inline-block ml-auto">440 TB</span>
                                            </div>
                                            <div className="progress progress-sm mb-3">
                                                <div className="progress-bar bg-success-500" role="progressbar" style={{ width: '34%' }} aria-valuenow={34} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <div className="d-flex">
                                                Bugs Squashed
                                                <span className="d-inline-block ml-auto">77%</span>
                                            </div>
                                            <div className="progress progress-sm mb-3">
                                                <div className="progress-bar bg-info-400" role="progressbar" style={{ width: '77%' }} aria-valuenow={77} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <div className="d-flex">
                                                User Testing
                                                <span className="d-inline-block ml-auto">7 days</span>
                                            </div>
                                            <div className="progress progress-sm mb-g">
                                                <div className="progress-bar bg-primary-300" role="progressbar" style={{ width: '84%' }} aria-valuenow={84} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <div className="row no-gutters">
                                                <div className="col-6 pr-1">
                                                    <a href="/" onClick={this.disabledClick} className="btn btn-default btn-block">Generate PDF</a>
                                                </div>
                                                <div className="col-6 pl-1">
                                                    <a href="/" onClick={this.disabledClick} className="btn btn-default btn-block">Report a Bug</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-content p-0">
                                    <div className="row row-grid no-gutters">
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                                            <div className="px-3 py-2 d-flex align-items-center">
                                                <div className="js-easy-pie-chart color-primary-300 position-relative d-inline-flex align-items-center justify-content-center" data-percent={75} data-piesize={50} data-linewidth={5} data-linecap="butt" data-scalelength={0}>
                                                    <div className="d-flex flex-column align-items-center justify-content-center position-absolute pos-left pos-right pos-top pos-bottom fw-300 fs-lg">
                                                        <span className="js-percent d-block text-dark" />
                                                    </div>
                                                </div>
                                                <span className="d-inline-block ml-2 text-muted">
                                                    SERVER LOAD
                                                    <i className="fal fa-caret-up color-danger-500 ml-1" />
                                                </span>
                                                <div className="ml-auto d-inline-flex align-items-center">
                                                    <div className="sparklines d-inline-flex" sparktype="line" sparkheight={30} sparkwidth={70} sparklinecolor="#886ab5" sparkfillcolor="false" sparklinewidth={1} values="5,6,5,3,8,6,9,7,4,2" />
                                                    <div className="d-inline-flex flex-column small ml-2">
                                                        <span className="d-inline-block badge badge-success opacity-50 text-center p-1 width-6">97%</span>
                                                        <span className="d-inline-block badge bg-fusion-300 opacity-50 text-center p-1 width-6 mt-1">44%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                                            <div className="px-3 py-2 d-flex align-items-center">
                                                <div className="js-easy-pie-chart color-success-500 position-relative d-inline-flex align-items-center justify-content-center" data-percent={79} data-piesize={50} data-linewidth={5} data-linecap="butt">
                                                    <div className="d-flex flex-column align-items-center justify-content-center position-absolute pos-left pos-right pos-top pos-bottom fw-300 fs-lg">
                                                        <span className="js-percent d-block text-dark" />
                                                    </div>
                                                </div>
                                                <span className="d-inline-block ml-2 text-muted">
                                                    DISK SPACE
                                                    <i className="fal fa-caret-down color-success-500 ml-1" />
                                                </span>
                                                <div className="ml-auto d-inline-flex align-items-center">
                                                    <div className="sparklines d-inline-flex" sparktype="line" sparkheight={30} sparkwidth={70} sparklinecolor="#1dc9b7" sparkfillcolor="false" sparklinewidth={1} values="5,9,7,3,5,2,5,3,9,6" />
                                                    <div className="d-inline-flex flex-column small ml-2">
                                                        <span className="d-inline-block badge badge-info opacity-50 text-center p-1 width-6">76%</span>
                                                        <span className="d-inline-block badge bg-warning-300 opacity-50 text-center p-1 width-6 mt-1">3%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                                            <div className="px-3 py-2 d-flex align-items-center">
                                                <div className="js-easy-pie-chart color-info-500 position-relative d-inline-flex align-items-center justify-content-center" data-percent={23} data-piesize={50} data-linewidth={5} data-linecap="butt">
                                                    <div className="d-flex flex-column align-items-center justify-content-center position-absolute pos-left pos-right pos-top pos-bottom fw-300 fs-lg">
                                                        <span className="js-percent d-block text-dark" />
                                                    </div>
                                                </div>
                                                <span className="d-inline-block ml-2 text-muted">
                                                    DATA TTF
                                                    <i className="fal fa-caret-up color-success-500 ml-1" />
                                                </span>
                                                <div className="ml-auto d-inline-flex align-items-center">
                                                    <div className="sparklines d-inline-flex" sparktype="line" sparkheight={30} sparkwidth={70} sparklinecolor="#51adf6" sparkfillcolor="false" sparklinewidth={1} values="3,5,2,5,3,9,6,5,9,7" />
                                                    <div className="d-inline-flex flex-column small ml-2">
                                                        <span className="d-inline-block badge bg-fusion-500 opacity-50 text-center p-1 width-6">10GB</span>
                                                        <span className="d-inline-block badge bg-fusion-300 opacity-50 text-center p-1 width-6 mt-1">10%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                                            <div className="px-3 py-2 d-flex align-items-center">
                                                <div className="js-easy-pie-chart color-fusion-500 position-relative d-inline-flex align-items-center justify-content-center" data-percent={36} data-piesize={50} data-linewidth={5} data-linecap="butt">
                                                    <div className="d-flex flex-column align-items-center justify-content-center position-absolute pos-left pos-right pos-top pos-bottom fw-300 fs-lg">
                                                        <span className="js-percent d-block text-dark" />
                                                    </div>
                                                </div>
                                                <span className="d-inline-block ml-2 text-muted">
                                                    TEMP.
                                                    <i className="fal fa-caret-down color-success-500 ml-1" />
                                                </span>
                                                <div className="ml-auto d-inline-flex align-items-center">
                                                    <div className="sparklines d-inline-flex" sparktype="line" sparkheight={30} sparkwidth={70} sparklinecolor="#fd3995" sparkfillcolor="false" sparklinewidth={1} values="5,3,9,6,5,9,7,3,5,2" />
                                                    <div className="d-inline-flex flex-column small ml-2">
                                                        <span className="d-inline-block badge badge-danger opacity-50 text-center p-1 width-6">124</span>
                                                        <span className="d-inline-block badge bg-info-300 opacity-50 text-center p-1 width-6 mt-1">40F</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div id="panel-2" className="panel" data-panel-fullscreen="false">
                            <div className="panel-hdr">
                                <h2>
                                    Smart Chat
                                </h2>
                            </div>
                            <div className="panel-container show">
                                <div className="panel-content p-0">
                                    <div className="d-flex flex-column">
                                        <div className="bg-subtlelight-fade custom-scroll" style={{ height: 244 }}>
                                            <div className="h-100">
                                                <div className="d-flex flex-row px-3 pt-3 pb-2">
                                                    <span className="status status-danger">
                                                        <span className="profile-image rounded-circle d-inline-block" style={{ backgroundImage: 'url("img/demo/avatars/avatar-j.png")' }} />
                                                    </span>
                                                    <div className="ml-3">
                                                        <a href="/;" onClick={this.disabledClick} title="Lisa Hatchensen" className="d-block fw-700 text-dark">Lisa Hatchensen</a>
                                                        Hey did you meet the new board of director? He's a bit of a geek if you ask me...anyway here is the report you requested. I am off to launch with Lisa and Andrew, you wanna join?
                                                        <div className="d-flex mt-3 flex-wrap">
                                                            <div className="btn-group mr-1 mt-1" role="group" aria-label="Button group with nested dropdown ">
                                                                <button type="button" className="btn btn-default btn-xs btn-block px-1 py-1 fw-500" data-action="toggle">
                                                                    <span className="d-block text-truncate text-truncate-sm">
                                                                        <i className="fal fa-file-pdf mr-1 color-danger-700" /> Report-2013-demographic-repo
                                                                    </span>
                                                                </button>
                                                                <div className="btn-group" role="group">
                                                                    <button id="btnGroupDrop1" type="button" className="btn btn-default btn-xs dropdown-toggle px-2 js-waves-off" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                                                    <div className="dropdown-menu p-0 fs-xs" aria-labelledby="btnGroupDrop1">
                                                                        <a className="dropdown-item px-3 py-2" href="/" onClick={this.disabledClick}>Forward</a>
                                                                        <a className="dropdown-item px-3 py-2" href="/" onClick={this.disabledClick}>Open</a>
                                                                        <a className="dropdown-item px-3 py-2" href="/" onClick={this.disabledClick}>Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="btn-group mr-1 mt-1" role="group" aria-label="Button group with nested dropdown ">
                                                                <button type="button" className="btn btn-default btn-xs btn-block px-1 py-1 fw-500" data-action="toggle">
                                                                    <span className="d-block text-truncate text-truncate-sm">
                                                                        <i className="fal fa-file-pdf mr-1 color-danger-700" /> Bloodworks Patient 34124BA
                                                                    </span>
                                                                </button>
                                                                <div className="btn-group" role="group">
                                                                    <button id="btnGroupDrop2" type="button" className="btn btn-default btn-xs dropdown-toggle px-2 js-waves-off" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                                                    <div className="dropdown-menu p-0 fs-xs" aria-labelledby="btnGroupDrop2">
                                                                        <a className="dropdown-item px-3 py-2" href="/" onClick={this.disabledClick}>Forward</a>
                                                                        <a className="dropdown-item px-3 py-2" href="/" onClick={this.disabledClick}>Open</a>
                                                                        <a className="dropdown-item px-3 py-2" href="/" onClick={this.disabledClick}>Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row px-3 pt-3 pb-2">
                                                    <span className="status status-danger">
                                                        <span className="profile-image rounded-circle d-inline-block" style={{ backgroundImage: 'url("img/demo/avatars/avatar-admin.png")' }} />
                                                    </span>
                                                    <div className="ml-3">
                                                        <a href="/;" onClick={this.disabledClick} title="Lisa Hatchensen" className="d-block fw-700 text-dark">Dr. Codex Lantern</a>
                                                    Thanks for the file! You guys go ahead, I have to call some of my patients.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-content border-faded border-left-0 border-right-0 border-bottom-0 bg-faded">
                                    <textarea rows={3} className="form-control rounded-top border-bottom-left-radius-0 border-bottom-right-radius-0 border" placeholder="write a reply..." defaultValue={""} />
                                    <div className="d-flex align-items-center py-2 px-2 bg-white border border-top-0 rounded-bottom bg-primary">
                                        <div className="btn-group dropup">
                                            <button type="button" className="btn btn-icon fs-lg dropdown-toggle no-arrow" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fal fa-smile" />
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-animated text-center rounded-pill overflow-hidden" style={{ width: 280 }}>
                                                <div className="px-1 py-0">
                                                    <a href="/;" onClick={this.disabledClick} className="emoji emoji--like" data-toggle="tooltip" data-placement="top" data-original-title="Like">
                                                        <div className="emoji__hand">
                                                            <div className="emoji__thumb" />
                                                        </div>
                                                    </a>
                                                    <a href="/;" onClick={this.disabledClick} className="emoji emoji--love" data-toggle="tooltip" data-placement="top" data-original-title="Love">
                                                        <div className="emoji__heart" />
                                                    </a>
                                                    <a href="/;" onClick={this.disabledClick} className="emoji emoji--haha" data-toggle="tooltip" data-placement="top" data-original-title="Haha">
                                                        <div className="emoji__face">
                                                            <div className="emoji__eyes" />
                                                            <div className="emoji__mouth">
                                                                <div className="emoji__tongue" />
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="/;" onClick={this.disabledClick} className="emoji emoji--yay" data-toggle="tooltip" data-placement="top" data-original-title="Yay">
                                                        <div className="emoji__face">
                                                            <div className="emoji__eyebrows" />
                                                            <div className="emoji__mouth" />
                                                        </div>
                                                    </a>
                                                    <a href="/;" onClick={this.disabledClick} className="emoji emoji--wow" data-toggle="tooltip" data-placement="top" data-original-title="Wow">
                                                        <div className="emoji__face">
                                                            <div className="emoji__eyebrows" />
                                                            <div className="emoji__eyes" />
                                                            <div className="emoji__mouth" />
                                                        </div>
                                                    </a>
                                                    <a href="/;" onClick={this.disabledClick} className="emoji emoji--sad" data-toggle="tooltip" data-placement="top" data-original-title="Sad">
                                                        <div className="emoji__face">
                                                            <div className="emoji__eyebrows" />
                                                            <div className="emoji__eyes" />
                                                            <div className="emoji__mouth" />
                                                        </div>
                                                    </a>
                                                    <a href="/;" onClick={this.disabledClick} className="emoji emoji--angry" data-toggle="tooltip" data-placement="top" data-original-title="Angry">
                                                        <div className="emoji__face">
                                                            <div className="emoji__eyebrows" />
                                                            <div className="emoji__eyes" />
                                                            <div className="emoji__mouth" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" className="btn btn-icon fs-lg">
                                            <i className="fal fa-paperclip" />
                                        </button>
                                        <div className="custom-control custom-checkbox custom-control-inline ml-auto hidden-sm-down">
                                            <input type="checkbox" className="custom-control-input" id="defaultInline1" />
                                            <label className="custom-control-label" htmlFor="defaultInline1">Press <strong>ENTER</strong> to send</label>
                                        </div>
                                        <button className="btn btn-primary btn-sm ml-auto ml-sm-0">
                                            Reply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="panel-3" className="panel">
                            <div className="panel-hdr">
                            </div>
                            <div className="panel-container show">
                                <div className="panel-content">
                                    <div id="calendar" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div id="panel-4" className="panel">
                            <div className="panel-hdr">
                                <h2>Bird's Eyes</h2>
                            </div>
                            <div className="panel-container show">
                                <div className="panel-content jqvmap-bg-ocean p-0" style={{ height: 330 }}>
                                    <div id="vector-map" className="w-100 h-100 p-4" />
                                </div>
                                <div className="panel-content jqvmap-bg-ocean">
                                    <div className="d-flex align-items-center">
                                        <img className="d-inline-block js-jqvmap-flag mr-3 border-faded" alt="flag" src="https://lipis.github.io/flag-icon-css/flags/4x3/us.svg" style={{ width: 55, height: 'auto' }} />
                                        <h4 className="d-inline-block fw-300 m-0 text-muted fs-lg">
                                            Showcasing information:
                                        <small className="js-jqvmap-country mb-0 fw-500 text-dark">United States of America - $3,760,125.00</small>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="panel-5" className="panel">
                            <div className="panel-hdr">
                                <h2>Subscriptions Hourly</h2>
                            </div>
                            <div className="panel-container show">
                                <div className="panel-content">
                                    <h5>Subscription Views / hour</h5>
                                    <div id="flotBar1" style={{ width: '100%', height: 160 }} />
                                </div>
                            </div>
                        </div>
                        <div id="panel-6" className="panel">
                            <div className="panel-hdr">
                                <h2>Secession Scale </h2>
                            </div>
                            <div className="panel-container show">
                                <div className="panel-content p-0 mb-g">
                                    <div className="alert alert-success alert-dismissible fade show border-faded border-left-0 border-right-0 border-top-0 rounded-0 m-0" role="alert">
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true"><i className="fal fa-times" /></span>
                                        </button>
                                        <strong>Last update was on <span className="js-get-date" /></strong> - Your logs are all up to date.
                                    </div>
                                </div>
                                <div className="panel-content">
                                    <div className="row  mb-g">
                                        <div className="col-md-6 d-flex align-items-center">
                                            <div id="flotPie" className="w-100" style={{ height: 250 }} />
                                        </div>
                                        <div className="col-md-6 col-lg-5 mr-lg-auto">
                                            <div className="d-flex mt-2 mb-1 fs-xs text-primary">
                                                Current Usage
                                            </div>
                                            <div className="progress progress-xs mb-3">
                                                <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <div className="d-flex mt-2 mb-1 fs-xs text-info">
                                                Net Usage
                                            </div>
                                            <div className="progress progress-xs mb-3">
                                                <div className="progress-bar bg-info-500" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <div className="d-flex mt-2 mb-1 fs-xs text-warning">
                                                Users blocked
                                            </div>
                                            <div className="progress progress-xs mb-3">
                                                <div className="progress-bar bg-warning-500" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <div className="d-flex mt-2 mb-1 fs-xs text-danger">
                                                Custom cases
                                            </div>
                                            <div className="progress progress-xs mb-3">
                                                <div className="progress-bar bg-danger-500" role="progressbar" style={{ width: '15%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <div className="d-flex mt-2 mb-1 fs-xs text-success">
                                                Test logs
                                            </div>
                                            <div className="progress progress-xs mb-3">
                                                <div className="progress-bar bg-success-500" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <div className="d-flex mt-2 mb-1 fs-xs text-dark">
                                                Uptime records
                                            </div>
                                            <div className="progress progress-xs mb-3">
                                                <div className="progress-bar bg-fusion-500" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
