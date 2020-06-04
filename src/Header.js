import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <header className="page-header" role="banner">
                {/* we need this logo when user switches to nav-function-top */}
                <div className="page-logo">
                    <a href="/" className="page-logo-link press-scale-down d-flex align-items-center position-relative" data-toggle="modal" data-target="#modal-shortcut">
                        <img src="img/logo.png" alt="SmartAdmin WebApp" aria-roledescription="logo"/>
                        <span className="page-logo-text mr-1">SmartAdmin WebApp</span>
                        <span className="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"/>
                        <i className="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"/>
                    </a>
                </div>
                {/* DOC: nav menu layout change shortcut */}
                <div className="hidden-md-down dropdown-icon-menu position-relative">
                    <a href="/" className="header-btn btn js-waves-off" data-action="toggle" data-class="nav-function-hidden" title="Hide Navigation">
                        <i className="ni ni-menu"/>
                    </a>
                    <ul>
                        <li>
                            <a href="/" className="btn js-waves-off" data-action="toggle" data-class="nav-function-minify" title="Minify Navigation">
                                <i className="ni ni-minify-nav"/>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="btn js-waves-off" data-action="toggle" data-class="nav-function-fixed" title="Lock Navigation">
                                <i className="ni ni-lock-nav"/>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* DOC: mobile button appears during mobile width */}
                <div className="hidden-lg-up">
                    <a href="/" className="header-btn btn press-scale-down" data-action="toggle" data-class="mobile-nav-on">
                        <i className="ni ni-menu"/>
                    </a>
                </div>
                
                <div className="ml-auto d-flex">
                    {/* activate app search icon (mobile) */}
                    <div className="hidden-sm-up">
                        <a href="/" className="header-icon" data-action="toggle" data-class="mobile-search-on" data-focus="search-field" title="Search">
                            <i className="fal fa-search"/>
                        </a>
                    </div>
                    {/* app settings */}
                    <div className="hidden-md-down">
                        <a href="/" className="header-icon" data-toggle="modal" data-target=".js-modal-settings">
                            <i className="fal fa-cog"/>
                        </a>
                    </div>
                    <div>
                        <a href="/" data-toggle="dropdown" title="drlantern@gotbootstrap.com" className="header-icon d-flex align-items-center justify-content-center ml-2">
                            <img src="img/demo/avatars/avatar-admin.png" className="profile-image rounded-circle" alt="Dr. Codex Lantern"/>
                            {/* you can also add username next to the avatar with the codes below:
              <span class="ml-1 mr-1 text-truncate text-truncate-header hidden-xs-down">Me</span>
              <i class="ni ni-chevron-down hidden-xs-down"></i> */}
                        </a>
                        <div className="dropdown-menu dropdown-menu-animated dropdown-lg">
                            <div className="dropdown-header bg-trans-gradient d-flex flex-row py-4 rounded-top">
                                <div className="d-flex flex-row align-items-center mt-1 mb-1 color-white">
                                    <span className="mr-2">
                                        <img src="img/demo/avatars/avatar-admin.png" className="rounded-circle profile-image" alt="Dr. Codex Lantern"/>
                                    </span>
                                    <div className="info-card-text">
                                        <div className="fs-lg text-truncate text-truncate-lg">Hữu Quyết</div>
                                        <span className="text-truncate text-truncate-md opacity-80">huuquyet10@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown-divider m-0"/>
                            <a href="/" className="dropdown-item" data-action="app-reset">
                                <span data-i18n="drpdwn.reset_layout">Reset Layout</span>
                            </a>
                            <a href="/" className="dropdown-item" data-toggle="modal" data-target=".js-modal-settings">
                                <span data-i18n="drpdwn.settings">Settings</span>
                            </a>
                            <div className="dropdown-divider m-0"/>
                            <a href="/" className="dropdown-item" data-action="app-fullscreen">
                                <span data-i18n="drpdwn.fullscreen">Fullscreen</span>
                                <i className="float-right text-muted fw-n">F11</i>
                            </a>
                            <a href="/" className="dropdown-item" data-action="app-print">
                                <span data-i18n="drpdwn.print">Print</span>
                                <i className="float-right text-muted fw-n">Ctrl + P</i>
                            </a>
                            <div className="dropdown-multilevel dropdown-multilevel-left">
                                <div className="dropdown-item">
                                    Language
                                </div>
                                <div className="dropdown-menu">
                                    <a href="#?lang=fr" className="dropdown-item" data-action="lang" data-lang="fr">Français</a>
                                    <a href="#?lang=en" className="dropdown-item active" data-action="lang" data-lang="en">English (US)</a>
                                    <a href="#?lang=es" className="dropdown-item" data-action="lang" data-lang="es">Español</a>
                                    <a href="#?lang=ru" className="dropdown-item" data-action="lang" data-lang="ru">Русский язык</a>
                                    <a href="#?lang=jp" className="dropdown-item" data-action="lang" data-lang="jp">日本語</a>
                                    <a href="#?lang=ch" className="dropdown-item" data-action="lang" data-lang="ch">中文</a>
                                </div>
                            </div>
                            <div className="dropdown-divider m-0"/>
                            <a className="dropdown-item fw-500 pt-3 pb-3" href="page_login-alt.html">
                                <span data-i18n="drpdwn.page-logout">Logout</span>
                                <span className="float-right fw-n">@codexlantern</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
