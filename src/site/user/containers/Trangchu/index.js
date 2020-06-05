import React, { useState, useEffect } from "react";
import { Menu, Row, Col, Card } from 'antd';
import images from "@src/resources/images";
import axios from "axios";
import OwlCarousel from 'react-owl-carousel';
import menuProvider from "@data-access/menu-provider";
import sliderProvider from "@data-access/slider-provider";
import landingpageProvider from "@data-access/landingpage-provider";
import trainingProvider from "@data-access/daotao-provider";
import newsProvider from "@data-access/news-provider";
import chuyengiaProvider from "@data-access/chuyengia-provider";
import cosohoptacProvider from "@data-access/cosohoptac-provider";
import luottruycapProvider from "@data-access/luottruycap-provider";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './style.scss';

const { Meta } = Card;
function onChange(a, b, c) {
  console.log(a, b, c);
};
const { SubMenu } = Menu;
function index(props) {
  const [state, _setState] = useState({
    current: 'mail',
    data: [],
    data: [],
    isActive: 1,
    level: 1,
    getAllslider: [],
    getAllLanding: [],
    getLuottruycap0: [],
    listTrainning2: [],
    getChuyengia: [],
    nameImg: "",
    hightlights: 1,
  })
  const [nameImg, setNameImg] = useState("");
  const [ipAccess, setIpAccess] = useState("");
  const [status, setStatus] = useState("");
  const [ipTotal, setIpTotal] = useState("");
  const setState = (data = { props }) => {
    _setState((state) => {
      return { ...state, ...data, };
    })
  };
  useEffect(() => {
    onSearch();
    getSlider();
    getAllLandingpage();
    getTintuc();
    getTrainingone();
    getChuyengia();
    getCosohoptac();
    getLuottruycap();
    getNguoionline();
    getTongtruycap();
  }, []);
  const getTongtruycap = (action, item) => {
    let ipTotal = action === "ipTotal" ? item : state.ipTotal;
    luottruycapProvider
      .gettongtruycap(
        ipTotal,
      )
      .then((s) => {
        setIpTotal(s.data.ipTotal)
      })
      .catch((s) => { });
  };
  const getLuottruycap = (action, item) => {
    let ipAccess = action === "ipAccess" ? item : state.ipAccess;
    luottruycapProvider
      .getluottruycapto(
        ipAccess,
      )
      .then((s) => {
        setIpAccess(s.data.ipAccess)
      })
      .catch((s) => { });
  };
  const getNguoionline = (action, item) => {
    let status = action === "status" ? item : state.status;
    luottruycapProvider
      .getnguoionline(
        status,
      )
      .then((s) => {
        setStatus(s.data.status)
      })
      .catch((s) => { });
  }
  const getCosohoptac = (action, item) => {
    let link = action === "link" ? item : state.link;
    let icons = action === "icons" ? item : state.icons;
    cosohoptacProvider
      .getIndexCoso(
        link,
        icons
      )
      .then((s) => {
        setState({
          getCosohoptac: s.data.data,
        })
      })
      .catch((s) => { });
  };
  const getChuyengia = (action, item) => {
    let experts = action === "experts" ? item : state.experts;
    let title = action === "title" ? item : state.title;
    let image = action === "image" ? item : state.image;
    let link = action === "link" ? item : state.link;
    chuyengiaProvider
      .getByIndex(
        experts,
        title,
        image,
        link
      )
      .then((s) => {
        if (s.code == 0) {
          setState({
            getchuyengia0: s.data.data,
          })
        }
      })
      .catch((s) => { });
  };
  const getTrainingone = (action, item) => {
    let title = action === "title" ? item : state.title;
    let describe = action === "describe" ? item : state.describe;
    let updatedDate = action === "updatedDate" ? item && new Date(item).format("YYYY-MM-dd") : state.updatedDate ? new Date(state.updatedDate).format("YYYY-MM-dd") : "";

    let image = action === "image" ? item : state.image;
    trainingProvider
      .getIndex(
        title,
        describe,
        updatedDate,
        image
      )
      .then((s) => {
        if (s.code == 0) {
          setState({
            // getdaotaochituyen: s.data.data,
            getdaotaotructuyen: s.data.data.slice(0, 1),
            getkienthucchuyenmon: s.data.data.slice(3, 4),
            getkienthucchuyenmon2: s.data.data.slice(4, 6),
            listTrainning2: s.data.data.slice(1, 2),
            getdaotaotructuyen3: s.data.data.slice(1, 3)
          })
        }
      })
      .catch((s) => { });
  };

  const getAllLandingpage = (action, item) => {
    let name = action === "name" ? item : state.name;
    let content = action === "content" ? item : state.content;
    let link = action === "link" ? item : state.link;
    let image = action === "image" ? item : state.image;
    let icons = action === "icons" ? item : state.icons;
    landingpageProvider
      .getByAllLanding(
        name,
        content,
        link,
        image,
        icons,
      )
      .then((s) => {
        if (s.code == 0) {
          setState({
            getAllLanding: s.data.data
          })
        }
      })
      .catch((e) => { });
  };
  const getTintuc = (action, item) => {
    let title = action === "title" ? item : state.title;
    let describe = action === "describe" ? item : state.describe;
    let image = action === "image" ? item : state.image;
    let updatedDate =
      action === "updatedDate"
        ? item && new Date(item).format("YYYY-MM-dd")
        : state.updatedDate
          ? new Date(state.updatedDate).format("YYYY-MM-dd")
          : "";
    let hightlights = action === "hightlights" ? item : state.hightlights;
    let link = action === "link" ? item : state.link;
    newsProvider
      .getIndex(
        title,
        describe,
        hightlights,
        image,
        updatedDate,
        link,
      )
      .then((s) => {
        if (s.code == 0) {
          setState({
            gettatcanew: s.data.data.slice(0),
            gettatcanew0: s.data.data.slice(0, 1),
            getyhocthuongthuc0: s.data.data.slice(0, 1),
            getyhocthuongthuc2: s.data.data.slice(1, 3),
            gettatcanew2: s.data.data.slice(1, 3),
          })
        }
      })
      .catch((e) => { });
  };
  const onSearch = (action, item) => {
    let isActive = action === "isActive" ? item : state.isActive;
    let level = action === "level" ? item : state.level;
    menuProvider
      .search(
        isActive,
        level,
      )
      .then((s) => {
        if (s.code == 0) {
          setState({
            total: s.totalElements,
            data: s.data.data
          });
        }
      })
      .catch((e) => { });


  };
  const getSlider = (action, item) => {
    let nameImg = action === "nameImg" ? item : state.nameImg;
    sliderProvider
      .search(
        nameImg,
      )
      .then((s) => {
        if (s.code == 0) {

          setState({
            getAllslider: s.data.data
          })
        }
      })
      .catch((e) => { });
  };

  return (
    <div>
      <div className="background-top1"></div>
      <div className="style-menu">
        <div className="menu-01">
          <img src={images.logobve.logobve_index}></img>
        </div>
        <div className="menu-02">
          <div>
            <ul className="style-ul">
              <li><a href="#">Phone: 086.889.1318</a></li>
              <li><a href="#">Thứ 2 - thứ 7 (8am - 6pm)</a></li>
              <li><a href="#">bvetuvanonline@gmail.com</a></li>
              <li className="ul-style">
                <a href="#" className="styl-e-icon-name">
                  <img src={images.faceb.icon_fb} className="styl-e-image"></img>
                  <p>Bệnh viện E</p>
                </a>
              </li>
              <li><a href="#">Đăng xuất</a></li>
            </ul>
          </div>
        </div>
        <div className="menu-03">
          <ul>
            {
              state.data && state.data.length ? state.data.map((item, index) => {

                if (index == 0) {
                  return <li key={index}>
                    <a href={item.menu ? item.menu.link : ""}>{item.menu ? item.menu.name : ""}</a>
                  </li>
                } else {
                  return <li key={index}>
                    <a href={item.menu ? item.menu.link : ""} className="style-before">{item.menu ? item.menu.name : ""}</a>
                    <ul className="sub-menu">
                      {
                        (item.childMenu && item.childMenu.length) ? item.childMenu.map((item2, index2) => {
                          return <li key={index2}>
                            <a href={item2.menu ? item2.menu.link : ""} className="style-before">{item2.menu ? item2.menu.name : ""}</a>
                            <div>
                              {
                                (item2.childMenu && item2.childMenu.length) ? item2.childMenu.map((item3, index3) => {
                                  return <li key={index3}><a href={item2.menu ? item2.menu.link : ""}>{item3.name ? item3.name : ""}</a></li>
                                }) : ""
                              }
                            </div>
                          </li>
                        }) : ""
                      }
                    </ul>
                  </li>
                }
              }) : ''
            }
          </ul>
        </div>
        <div className="clear"></div>
        <div className="style-slider">
          <OwlCarousel
            className="owl-theme style-z-index"
            loop
            items={1}
            autoplay={true}
            dots={false}
            margin={10}
          >
            {
              state.getAllslider && state.getAllslider.length ? state.getAllslider.map((item, index) => {
                return (
                  <div className="item" key={index}><img src={"http://123.24.206.9:9560/" + item.slideitem.nameImg} className="style-img-slider"></img></div>
                )
              }) : ''
            }
          </OwlCarousel>
        </div>
        <div className="datkham-yba">
          <Row>
            <Col span={24} className="style-comlum-yba">
              {
                state.getAllLanding && state.getAllLanding.length ? state.getAllLanding.map((item, index) => {
                  return (
                    <div className="dat-kham dongchung" key={index}>
                      <a href={item.landing_page.link}>
                        <Row>
                          <Col span={8}>
                            <div className="sty-icon-bo-yte">
                              <img src={"http://123.24.206.9:9560/" + item.landing_page.icons}></img>
                            </div>
                          </Col>
                          <Col span={16}>
                            <div className="style-text-cart">
                              <h3>{item.landing_page.name}</h3>
                              <p>{item.landing_page.content}</p>
                              <p src={item.landing_page.link}>Xem chi tiết</p>
                            </div>
                          </Col>
                        </Row>
                      </a>
                    </div>
                  )
                }) : ''
              }
            </Col>
          </Row>
        </div>
        <div className="sukien-video">
          <div>
            
            <Row>
              <Col span={10}>
                <h3 className="style-video-hienlin"><a href="#" className="style-videonoibat">TIN TỨC SỰ KIỆN</a></h3>
              </Col>
              <Col span={5}></Col>
              <Col span={9}>
                <h3 className="style-video-hienlin2"><a href="#" className="style-videonoibat">VIDEO NỔI BẬT</a></h3>
              </Col>
            </Row>
            <Row key={index}>
              <Col span={10}>

                <OwlCarousel
                  className="owl-theme style-z-index"
                  loop
                  autoplay={true}
                  items={1}
                  dots={false}
                  margin={10}
                >
                  {
                    state.gettatcanew && state.gettatcanew.length ? state.gettatcanew.map((item, index) => {
                      return (

                        <div className="item" key={index}>
                          <a href={item.news.link}>
                            <img src={"http://123.24.206.9:9560/" + item.news.image} className="style-img-slider"></img>
                          </a>
                        </div>
                      )
                    }) : ''
                  }
                </OwlCarousel>

              </Col>
              <Col span={5}>
                <div className="bai1">
                  {
                    state.gettatcanew && state.gettatcanew.length ? state.gettatcanew.map((item, index) => {
                      return (
                        <a href={item.news.link} className="style-comum" key={index}>
                          <div className="style-colum-pic">
                            <img src={"http://123.24.206.9:9560/" + item.news.image} />
                          </div>
                          <div className="">
                            <strong className="style-title-trong">{item.news.title}</strong>
                            <p>{new Date(item.news.updatedDate).format("dd-MM-YYYY")}</p>
                          </div>
                        </a>
                      )
                    }) : ''
                  }
                </div>
              </Col>
              <Col span={9}>
                <div className="style-csss-ung37">
                  <OwlCarousel
                    className="owl-theme style-z-index"
                    loop
                    items={1}
                    autoplay={true}
                    dots={false}
                    margin={10}
                  >
                    {
                      state.gettatcanew && state.gettatcanew.length ? state.gettatcanew.map((item, index) => {
                        return (
                          <div>
                            <a href={item.news.link}>
                              <div className="item"><img src={"http://123.24.206.9:9560/" + item.news.image} className="style-img-slider37"></img></div>
                            </a>
                          </div>
                        )
                      }) : ''
                    }

                  </OwlCarousel>
                </div>
              </Col>
            </Row>

          </div>

        </div>
        <div className="daotao-hoptac">
          <Row>
            <Col span={8} className="style-colum-daotao-hoptac">
              <div className="can-style-tile"><a href="#"><strong>ĐÀO TẠO CHỈ ĐẠO TUYẾN</strong></a></div>
              <div>
                <Card
                  className="style-card"
                  hoverable
                  cover={<img alt="example" src={images.benhvien.benhvien} />}
                >
                  <div>
                    <div>
                      {
                        state.gettatcanew0 && state.gettatcanew0.length ? state.gettatcanew0.map((item, index) => {
                          return (
                            <div className="style-dev-one" key={index}>
                              <a href={item.news.link}>
                                <h3 className="style-dev-one-h3">{item.news.title} ...</h3>
                                <p className="style-class-p-news">{item.news.describe} ...</p>
                                <p>{new Date(item.news.updatedDate).format("dd-MM-YYYY")}</p>
                              </a>
                            </div>
                          )
                        }) : ''
                      }
                    </div>
                    <div>
                      {
                        state.gettatcanew2 && state.gettatcanew2.length ? state.gettatcanew2.map((item, index) => {
                          return (
                            <div>
                              <div key={index}>
                                <a href={item.news.link} className="style-itle-news2">
                                  <div className="style-class-div1">
                                    <img src={"http://123.24.206.9:9560/" + item.news.image} className="style-image-news"></img>
                                  </div>
                                  <div className="style-class-div2">
                                    <h3>{item.news.title}</h3>
                                    <p>{new Date(item.news.updatedDate).format("dd-MM-YYYY")}</p>
                                  </div>
                                </a>
                              </div>
                              <div></div>
                            </div>
                          )
                        }) : ''
                      }
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
            <Col span={8} className="style-colum-daotao-hoptac">
              <div className="can-style-tile"><a href="#"><strong>HỢP TÁC QUỐC TẾ</strong></a></div>
              <div>
                <Card
                  className="style-card"
                  hoverable
                  cover={<img alt="example" src={images.benhvien.benhvien} />}
                >
                  <div>
                    <div>
                      {
                        state.getdaotaotructuyen && state.getdaotaotructuyen.length ? state.getdaotaotructuyen.map((item, index) => {
                          return (
                            <div className="style-dev-one" key={index}>
                              <a href={item.training.link}>
                                <h3 className="style-dev-one-h3">{item.training.title} ...</h3>
                                <p className="style-class-p-news">{item.training.describe} ...</p>
                                <p>{new Date(item.training.updatedDate).format("dd-MM-YYYY")}</p>
                              </a>
                            </div>
                          )
                        }) : ''
                      }
                    </div>
                    <div>
                      {
                        state.getdaotaotructuyen3 && state.getdaotaotructuyen3.length ? state.getdaotaotructuyen3.map((item, index) => {
                          return (
                            <div>
                              <div key={index}>
                                <a href={item.training.link} className="style-itle-news2">
                                  <div className="style-class-div1">
                                    <img src={"http://123.24.206.9:9560/" + item.training.image} className="style-image-news"></img>
                                  </div>
                                  <div className="style-class-div2">
                                    <h3>{item.training.title}</h3>
                                    <p>{new Date(item.training.updatedDate).format("dd-MM-YYYY")}</p>
                                  </div>
                                </a>
                              </div>
                              <div></div>
                            </div>
                          )
                        }) : ''
                      }
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
            <Col span={8} className="style-colum-daotao-hoptac">
              <div className="can-style-tile"><a href="#"><strong>KIẾN THỨC CHUYÊN MÔN</strong></a></div>
              <div>
                <Card
                  className="style-card"
                  hoverable
                  cover={<img alt="example" src={images.benhvien.benhvien} />}
                >
                  <div>
                    <div>
                      {
                        state.getdaotaotructuyen && state.getdaotaotructuyen.length ? state.getdaotaotructuyen.map((item, index) => {
                          return (
                            <div className="style-dev-one" key={index}>
                              <a href={item.training.link}>
                                <h3 className="style-dev-one-h3">{item.training.title} ...</h3>
                                <p className="style-class-p-news">{item.training.describe} ...</p>
                                <p>{new Date(item.training.updatedDate).format("dd-MM-YYYY")}</p>
                              </a>
                            </div>
                          )
                        }) : ''
                      }
                    </div>
                    <div>
                      {
                        state.getdaotaotructuyen3 && state.getdaotaotructuyen3.length ? state.getdaotaotructuyen3.map((item, index) => {
                          return (
                            <div>
                              <div key={index}>
                                <a href={item.training.link} className="style-itle-news2">
                                  <div className="style-class-div1">
                                    <img src={"http://123.24.206.9:9560/" + item.training.image} className="style-image-news"></img>
                                  </div>
                                  <div className="style-class-div2">
                                    <h3>{item.training.title}</h3>
                                    <p>{new Date(item.training.updatedDate).format("dd-MM-YYYY")}</p>
                                  </div>
                                </a>
                              </div>
                              <div></div>
                            </div>
                          )
                        }) : ''
                      }
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
        <div className="yhoc-thuongthuc">
          <Row>
            <Col span={8} className="style-colum-yhoc-thuongthuc">
              <div className="can-style-tile"><a href="#"><strong>Y HỌC THƯỜNG THỨC</strong></a></div>
              <div>
                <Card
                  className="style-card"
                  hoverable
                  cover={<img alt="example" src={images.benhvien.benhvien} />}
                >
                  <div>
                    <div>
                      {
                        state.getyhocthuongthuc0 && state.getyhocthuongthuc0.length ? state.getyhocthuongthuc0.map((item, index) => {
                          return (
                            <div className="style-dev-one" key={index}>
                              <a href={item.news.link}>
                                <h3 className="style-dev-one-h3">{item.news.title} ...</h3>
                                <p className="style-class-p-news">{item.news.describe} ...</p>
                                <p>{new Date(item.news.updatedDate).format("dd-MM-YYYY")}</p>
                              </a>
                            </div>
                          )
                        }) : ''
                      }
                    </div>
                    <div>
                      {
                        state.getyhocthuongthuc0 && state.getyhocthuongthuc0.length ? state.getyhocthuongthuc0.map((item, index) => {
                          return (
                            <div>
                              <div key={index}>
                                <a href={item.news.link} className="style-itle-news2">
                                  <div className="style-class-div1">
                                    <img src={"http://123.24.206.9:9560/" + item.news.image} className="style-image-news"></img>
                                  </div>
                                  <div className="style-class-div2">
                                    <h3>{item.news.title}</h3>
                                    <p>{new Date(item.news.updatedDate).format("dd-MM-YYYY")}</p>
                                  </div>
                                </a>
                              </div>
                              <div></div>
                            </div>
                          )
                        }) : ''
                      }
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
            <Col span={8} className="style-colum-yhoc-thuongthuc">
              <div className="can-style-tile"><a href="#"><strong>Ý KIẾN KHÁCH HÀNG</strong></a></div>
              <div>
                <Card
                  className="style-card"
                  hoverable
                  cover={<img alt="example" src={images.benhvien.benhvien} />}
                >
                  <div>
                    <div>
                      {
                        state.getdaotaotructuyen && state.getdaotaotructuyen.length ? state.getdaotaotructuyen.map((item, index) => {
                          return (
                            <div className="style-dev-one" key={index}>
                              <a href={item.training.link}>
                                <h3 className="style-dev-one-h3">{item.training.title} ...</h3>
                                <p className="style-class-p-news">{item.training.describe} ...</p>
                                <p>{new Date(item.training.updatedDate).format("dd-MM-YYYY")}</p>
                              </a>
                            </div>
                          )
                        }) : ''
                      }
                    </div>
                    <div>
                      {
                        state.getdaotaotructuyen3 && state.getdaotaotructuyen3.length ? state.getdaotaotructuyen3.map((item, index) => {
                          return (
                            <div>
                              <div key={index}>
                                <a href={item.training.link} className="style-itle-news2">
                                  <div className="style-class-div1">
                                    <img src={"http://123.24.206.9:9560/" + item.training.image} className="style-image-news"></img>
                                  </div>
                                  <div className="style-class-div2">
                                    <h3>{item.training.title}</h3>
                                    <p>{new Date(item.training.updatedDate).format("dd-MM-YYYY")}</p>
                                  </div>
                                </a>
                              </div>
                              <div></div>
                            </div>
                          )
                        }) : ''
                      }
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
            <Col span={8} className="style-colum-yhoc-thuongthuc">
              <div className="can-style-tile"><a href="#"><strong>GÓC TỪ THIỆN</strong></a></div>
              <div>
                <Card
                  className="style-card"
                  hoverable
                  cover={<img alt="example" src={images.benhvien.benhvien} />}
                >
                  <div>
                    <div>
                      {
                        state.getdaotaotructuyen && state.getdaotaotructuyen.length ? state.getdaotaotructuyen.map((item, index) => {
                          return (
                            <div className="style-dev-one" key={index}>
                              <a href={item.training.link}>
                                <h3 className="style-dev-one-h3">{item.training.title} ...</h3>
                                <p className="style-class-p-news">{item.training.describe} ...</p>
                                <p>{new Date(item.training.updatedDate).format("dd-MM-YYYY")}</p>
                              </a>
                            </div>
                          )
                        }) : ''
                      }
                    </div>
                    <div>
                      {
                        state.getdaotaotructuyen3 && state.getdaotaotructuyen3.length ? state.getdaotaotructuyen3.map((item, index) => {
                          return (
                            <div>
                              <div key={index}>
                                <a href={item.training.link} className="style-itle-news2">
                                  <div className="style-class-div1">
                                    <img src={"http://123.24.206.9:9560/" + item.training.image} className="style-image-news"></img>
                                  </div>
                                  <div className="style-class-div2">
                                    <h3>{item.training.title}</h3>
                                    <p>{new Date(item.training.updatedDate).format("dd-MM-YYYY")}</p>
                                  </div>
                                </a>
                              </div>
                              <div></div>
                            </div>
                          )
                        }) : ''
                      }
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
        <div className="doi-ngu">
          <p className="sty-p-team"><strong>ĐỘI NGŨ CỦA CHÚNG TÔI</strong></p>
          <div><p>"Với truyền thống 50 năm thành lập - phát triển, bệnh viện E có đội ngũ cán bộ giàu kinh nghiệm, các bác sĩ có có trình độ sau đại học chiếm 70% gồm các Giáo sư, Phó giáo sư, Tiến sĩ, Thạc sĩ.... Đội ngũ bác sĩ không chỉ có trình độ chuyên môn cao, nhiều năm kinh nghiệm, giàu y đức, mà còn rất tâm huyết với sự nghiệp chăm sóc sức khỏe con người. "</p></div>
        </div>
        <div className="slider-bac-si">
          <OwlCarousel
            className="owl-theme"
            loop={true}
            nav={true}
            items={4}
            dots={false}
            margin={10}
          >
            {
              state.getchuyengia0 && state.getchuyengia0.length ? state.getchuyengia0.map((item, index) => {
                return (
                  <div className="item style-item-sliderbacsi">
                    <a href={item.teamOfExperts.link}>
                      <img src={"http://123.24.206.9:9560/" + item.teamOfExperts.image} className="style-mg-bacsi"></img>
                      <p className="style-tie-bacsi"><strong>{item.teamOfExperts.experts}</strong></p>
                      <p className="sytle-status">{item.teamOfExperts.title}</p>
                    </a>
                  </div>
                )
              }) : ''
            }
          </OwlCarousel>
        </div>
        <div class="footer-index">
          <Row>
            <Col span={6}>
              <img src={images.logobve.logobve_index}></img>
              <div id="fb-root"></div>
              <div className="fb-page" data-href="https://www.facebook.com/cuocsongcuadev/" data-tabs="timeline" data-width="250px" data-height="300px" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/cuocsongcuadev/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/cuocsongcuadev/">Uơm Mầm Tình Yêu</a></blockquote></div>
            </Col>
            <Col span={6}>
              <div className="style-hoptac">
                <h3>Hợp tác với các bệnh viện</h3>
              </div>
              <div className="style-border-bottom"></div>
              {
                state.getCosohoptac && state.getCosohoptac.length ? state.getCosohoptac.map((item, index) => {
                  return (
                    <a href={item.cooperativeBasis.link}>
                      <div className="style-logo-footer-1">
                        <img src={"http://123.24.206.9:9560/" + item.cooperativeBasis.icons} className="style-images-logofooter"></img>
                      </div>
                    </a>
                  )
                }) : ''
              }
            </Col>
            <Col span={6}>
              <div className="style-hoptac">
                <h3>Lượt truy cập</h3>
              </div>
              <div className="style-border-bottom"></div>
              <div className="style-colm-2">
                <p className="ngtruycap">Số người truy cập: {ipAccess}</p>
                <p className="ngonline">Số người online: {status}</p>
                <p className="luottruycap">Tổng lượt truy cập: {ipTotal}</p>
              </div>
            </Col>
            <Col span={6}>
              <div className="style-hoptac">
                <h3>Liên hệ</h3>
              </div>
              <div className="style-border-bottom"></div>
              <div>
                <div className="style-address style-all-title">
                  <p className="style-p-one">Địa chỉ</p>
                  <p className="style-p-two">89 Trần Cung - Nghĩa Tân - Cầu Giấy - Hà Nội</p>
                </div>
                <div className="style-phonefax style-all-title">
                  <p className="style-p-one">Phone & Fax</p>
                  <p className="style-p-two">0868891318</p>
                </div>
                <div className="style-email style-all-title">
                  <p className="style-p-one">E-mail</p>
                  <p className="style-p-two">bvetuvanonline@gmail.com</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="background-top2">
        <div className="background-strong-footer">
          <p>
            Bản quyền thuộc về <strong>Bệnh viện E</strong> / Một sản phẩm của <strong>ISOFH</strong>
          </p>
        </div>
      </div>
    </div>
  );
}


export default index;

