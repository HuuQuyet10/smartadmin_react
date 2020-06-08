import React, { Component } from 'react';

function index(props) {
    return (
        <aside className="page-sidebar">
            <div className="page-logo">
                <a href="/"
                    className="page-logo-link press-scale-down d-flex align-items-center position-relative"
                    data-toggle="modal"
                    data-target="#modal-shortcut"
                >
                    <img src="img/logo.png" alt="SmartAdmin WebApp" aria-roledescription="logo" />
                    <span className="page-logo-text mr-1">Quản lý vật tư</span>
                    {/* <span className="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2" /> */}
                    <i className="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300" />
                </a>
            </div>
            {/* BEGIN PRIMARY NAVIGATION */}
            <nav id="js-primary-nav" className="primary-nav" role="navigation">
                <div className="nav-filter">
                    <div className="position-relative">
                        <input type="text" id="nav_filter_input" placeholder="Filter menu" className="form-control" tabIndex={0} />
                        <a href="/" className="btn-primary btn-search-close js-waves-off" data-action="toggle" data-class="list-filter-active" data-target=".page-sidebar">
                            <i className="fal fa-chevron-up" />
                        </a>
                    </div>
                </div>
                <div className="info-card">
                    <img src="img/demo/avatars/avatar-admin.png" className="profile-image rounded-circle" alt="Dr. Codex Lantern" />
                    <div className="info-card-text">
                        <a href="/" className="d-flex align-items-center text-white">
                            <span className="text-truncate text-truncate-sm d-inline-block">
                                Hữu Quyết
                        </span>
                        </a>
                        <span className="d-inline-block text-truncate text-truncate-sm">Hà Nội, Việt Nam</span>
                    </div>
                    <img src="img/card-backgrounds/cover-2-lg.png" className="cover" alt="cover" />
                    <a href="/" className="pull-trigger-btn" data-action="toggle" data-class="list-filter-active" data-target=".page-sidebar" data-focus="nav_filter_input">
                        <i className="fal fa-angle-down" />
                    </a>
                </div>
                <ul id="js-nav-menu" className="nav-menu">
                    <li>
                        <a href="/quan-ly-trang-thiet-bi" title="Quản lý trang thiết bị" data-filter-tags="application intel">
                            <i className="fal fa-info-circle" />
                            <span className="nav-link-text" data-i18n="nav.application_intel">Quản lý trang thiết bị</span>
                        </a>
                    </li>
                    <li>
                        <a href="/quan-ly-vat-tu" title="Quản lý vật tư" data-filter-tags="application intel">
                            <i className="fal fa-info-circle" />
                            <span className="nav-link-text" data-i18n="nav.application_intel">Quản lý vật tư</span>
                        </a>
                    </li>
                    <li>
                        <a href="/da-cho-thue" title="Đã cho thuê" data-filter-tags="application intel">
                            <i className="fal fa-info-circle" />
                            <span className="nav-link-text" data-i18n="nav.application_intel">Đã cho thuê</span>
                        </a>
                    </li>
                    <li>
                        <a href="/" title="Test" data-filter-tags="application intel">
                            <i className="fal fa-info-circle" />
                            <span className="nav-link-text" data-i18n="nav.application_intel">Test</span>
                        </a>
                        <ul>
                            <li>
                                <a href="intel_build_notes.html" title="Build Notes" data-filter-tags="application intel build notes">
                                    <span className="nav-link-text" data-i18n="nav.application_intel_build_notes">Build Notes</span>
                                    <span>v4.0.1</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="filter-message js-filter-message bg-success-600" />
            </nav>
            {/* END PRIMARY NAVIGATION */}
            {/* NAV FOOTER */}
            <div className="nav-footer shadow-top">
                <a href="/" data-action="toggle" data-class="nav-function-minify" className="hidden-md-down">
                    <i className="ni ni-chevron-right" />
                    <i className="ni ni-chevron-right" />
                </a>
                <ul className="list-table m-auto nav-footer-buttons">
                    <li>
                        <a href="fake_url;" data-toggle="tooltip" data-placement="top" title="SDT: 0962630174">
                            <i className="fal fa-phone" />
                        </a>
                    </li>
                </ul>
            </div> {/* END NAV FOOTER */}
        </aside>
    );
}
export default index;
