import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer" role="contentinfo">
        <div className="d-flex align-items-center flex-1 text-muted">
          <span className="hidden-md-down fw-700">
            Quản lý vật tư By Hữu Quyết
          </span>
        </div>
      </footer>
    );
  }
}
