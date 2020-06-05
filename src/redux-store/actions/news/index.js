import newsProvider from "@data-access/news-provider";
import stringUtils from "mainam-react-native-string-utils";
import snackbar from "@utils/snackbar-utils";
import moment from "moment";
import { Modal } from "antd";
const { confirm } = Modal;

function updateData(data) {
  return dispatch => {
    dispatch({
      type: "NEWS-UPDATE-DATA",
      data: data
    });
  };
}

function onSizeChange(size) {
  return (dispatch, getState) => {
    dispatch(
      updateData({
        size: size
      })
    );
    dispatch(gotoPage(0));
  };
}

function onSearch(title, hightlights, link, createdDate, createdUser) {
  return (dispatch, getState) => {
    if (title === undefined && hightlights === undefined && link === undefined && createdDate === undefined && createdUser === undefined){
    } else {
      dispatch(
        updateData({
          searchTitle: title,
          searchHightlights: hightlights,
          searchLink: link,
          searchCreatedDate: createdDate,
          searchCreatedUser: createdUser,
        })
      );
    }
    dispatch(gotoPage(0));
  };
}

function gotoPage(page) {
  return (dispatch, getState) => {
    dispatch(updateData({ page: page }));
    let size = getState().news.size;
    let title = getState().news.title;
    let hightlights = getState().news.hightlights;
    let link = getState().news.link;
    let createdDate = getState().news.createdDate;
    let createdUser = getState().news.createdUser;
    newsProvider.search(page, size, title, hightlights, link, createdDate, createdUser).then(s => {
      if (s && s.code === 0) {
        dispatch(
          updateData({
            total: s.totalElements || size,
            data: s.data.data || []
          })
        );
      }
    });
  };
}
function syncs() {
  return (dispatch, getState) => {
    newsProvider.syncs().then(s => {
      if (s && s.code === 0) {
        dispatch(gotoPage(0));
      }
    }).catch(e => { })
  }
}

function onSort(key, value) {
  return (dispatch, getState) => {
    dispatch(
      updateData({
        sort: {
          key,
          value
        }
      })
    );
    dispatch(gotoPage(0));
  };
}

function changeNoibat(hightlights, link) {
  return (dispatch, getState) => {
    if (hightlights === undefined && link === undefined) {
    } else {
      dispatch(
        updateData({
          searchHightlights: hightlights,
          searchLink: link
        })
      );
    }
    dispatch(gotoPage(0));
  };
}


function onDeleteItem(item) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      confirm({
        title: "Xác nhận",
        content: `Bạn có muốn xóa công việc này?`,
        okText: "Xóa",
        okType: "danger",
        cancelText: "Hủy",
        onOk() {
          newsProvider
            .delete(item.id)
            .then(s => {
              if (s.code == 0) {
                let data = (getState().news.data || []).filter(
                  item2 => item2.id != item.id
                );
                dispatch(
                  updateData({
                    data: data
                  })
                );
                snackbar.show("Xóa thành công", "success");
                resolve();
              } else {
                snackbar.show("Xóa không thành công", "danger");
                reject();
              }
            })
            .catch(e => {
              snackbar.show("Xóa không thành công", "danger");
              reject();
            });
        },
        onCancel() {
          reject();
        }
      });
    });
  };
}

export default {
  syncs,
  updateData,
  gotoPage,
  onSearch,
  onSizeChange,
  onSort,
  changeNoibat,
  onDeleteItem,
};
