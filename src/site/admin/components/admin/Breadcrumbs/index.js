import React, { useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
function index(props) {
  const getBreadcrumbs = () => {
    let url = (window.location.pathname || "").toLowerCase();
    let obj = [];
    switch (url) {
      case "/admin":
      case "/admin/quan-ly-tai-khoan":
        obj = [
          {
            icon: "fal fa-home mr-1",
            url: "/admin",
            name: "Trang chủ",
          },
          {
            url: "/admin/quan-ly-tai-khoan",
            name: "Tài khoản",
          },
        ];
        break;
      case "/admin/quan-ly-tai-khoan/them-moi":
        obj = [
          {
            icon: "fal fa-home mr-1",
            url: "/admin/quan-ly-tai-khoan",
            name: "Tài khoản",
          },
          {
            url: "/admin/quan-ly-tai-khoan/them-moi",
            name: "Thêm mới Tài khoản",
          },
        ];
        break;
      case "/admin/quan-ly-tin-tuc":
        obj = [
          {
            icon: "fal fa-home mr-1",
            url: "/admin",
            name: "Trang chủ",
          },
          {
            url: "/admin/quan-ly-tin-tuc",
            name: "Tin tức",
          },
        ];
        break;
      case "/admin/quan-ly-tin-tuc/them-moi":
        obj = [
          {
            icon: "fal fa-home mr-1",
            url: "/admin/quan-ly-tin-tuc",
            name: "Trang chủ",
          },
          {
            url: "/admin/quan-ly-tin-tuc/them-moi",
            name: "Thêm mới tin tức",
          },
        ];
        break;
      case "/admin/quan-ly-dao-tao/chinh-sua/:id":
        obj = [
          {
            icon: "fal fa-home mr-1",
            url: "/admin/quan-ly-tin-tuc",
            name: "Trang chủ",
          },
          {
            url: "/admin/quan-ly-dao-tao/chinh-sua/:id",
            name: "Chỉnh sửa tin tức",
          },
        ];
        break;
      case "/admin/quan-ly-side/side-item":
        obj = [
          {
            icon: "fal fa-home mr-1",
            url: "/admin",
            name: "Trang chủ",
          },
          {
            url: "/admin/quan-ly-side/side-item",
            name: "Side Item",
          },
        ];
        break;
      case "/admin/quan-ly-side/side-place":
        obj = [
          {
            icon: "fal fa-home mr-1",
            url: "/admin",
            name: "Trang chủ",
          },
          {
            url: "/admin/quan-ly-side/side-place",
            name: "Side Place",
          },
        ];
        break;
      case "/admin/quan-ly-side/side-page":
        obj = [
          {
            icon: "fal fa-home mr-1",
            url: "/admin",
            name: "Trang chủ",
          },
          {
            url: "/admin/quan-ly-side/side-page",
            name: "Side Page",
          },
        ];
        break;
      case "/admin/quan-ly-menu":
        obj = [
          {
            icon: "fal fa-home mr-1",
            url: "/admin",
            name: "Trang chủ",
          },
          {
            url: "/admin/quan-ly-menu",
            name: "Quản lý menu cấp 1",
          },
        ];
        break;
      case "/admin/quan-ly-page":
        obj = [
          {
            icon: "fal fa-home mr-1",
            url: "/admin",
            name: "Trang chủ",
          },
          {
            url: "/admin/quan-ly-menu",
            name: "Quản lý Page",
          },
        ];
        break;
      case "/admin/quan-ly-dao-tao":
        obj = [
          {
            icon: "fal fa-home mr-1",
            url: "/admin",
            name: "Trang chủ",
          },
          {
            url: "/admin/quan-ly-dao-tao",
            name: "Quản lý Đào tạo - NCKH",
          },
        ];
        break;
      case "/admin/quan-ly-chuyen-gia":
        obj = [
          {
            icon: "fal fa-home mr-1",
            url: "/admin",
            name: "Trang chủ",
          },
          {
            url: "/admin/quan-ly-chuyen-gia",
            name: "Đội ngũ chuyên gia",
          },
        ];
        break;
      case "/admin/quan-ly-langding-page":
        obj = [
          {
            icon: "fal fa-home mr-1",
            url: "/admin",
            name: "Trang chủ",
          },
          {
            url: "/admin/quan-ly-langding-page",
            name: "Quản lý Landing Page",
          },
        ];
        break;
      case "/admin/quan-ly-hop-tac-benh-vien":
        obj = [
          {
            icon: "fal fa-home mr-1",
            url: "/admin",
            name: "Trang chủ",
          },
          {
            url: "/admin/quan-ly-hop-tac-benh-vien",
            name: "Quản lý Cơ sở hợp tác",
          },
        ];
        break;
    }
    return obj;
  };
  const breadCrumb = getBreadcrumbs();
  return (
    <ol className="breadcrumb bg-info-400">
      {breadCrumb.map((item, index) => {
        if (index < breadCrumb.length - 1)
          return (
            <li className="breadcrumb-item" key={index}>
              <Link to={item.url || "#"} className="text-white">
                {item.icon && <i className="fal fa-home mr-1"></i>}
                {item.name}
              </Link>
            </li>
          );
        return (
          <li className="breadcrumb-item active text-white" key={index}>
            {item.name}
          </li>
        );
      })}
    </ol>
  );
}
export default index;
