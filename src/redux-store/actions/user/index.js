import usersProvider from "@data-access/user-provider";
import stringUtils from "mainam-react-native-string-utils";
import moment from "moment";
import { Modal } from "antd";
const { confirm } = Modal;

function updateData(data) {
  return dispatch => {
    dispatch({
      type: "USERS-UPDATE-DATA",
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

function onSearch(name, username, email) {
  return (dispatch, getState) => {
    if (name === undefined && username === undefined && email === undefined){
    } else {
      dispatch(
        updateData({
          searchName: name,
          searchFullName: username,
          searchEmail: email
        })
      );
    }
    dispatch(gotoPage(0));
  };
}

function gotoPage(page) {
  return (dispatch, getState) => {
    dispatch(updateData({ page: page }));
    let size = getState().users.size;
    let name = getState().users.name;
    let username = getState().users.username;
    let email = getState().users.email;
    usersProvider.search(page, size, name, username, email).then(s => {
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
    usersProvider.syncs().then(s => {
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

function changeStatus(item) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      let id = item.user.id;
      let name = item.user.name;
      let username = item.user.username;
      let email = item.user.email;
      let title = item.user.title;
      let blocked = ""
        if (item.user.blocked === 0 ){
            blocked = 1
        } else {
            blocked = 0
        }
      usersProvider.createOrEdit(id, name, username, email, title, blocked).then(s => {
        if (s.code === 0) {
          dispatch(updateData({
            id: "",
            name: "",
            username: "",
            email: "",
            title: "",
            blocked: "",
          }));
          alert("Cập nhật trạng thái thành công", "success");
          resolve(s.data);
          dispatch(gotoPage(0));
        } else {
          alert("Cập nhật trạng thái không thành công", "danger");
        }
      }).catch(e => {
        alert("Cập nhật trạng thái không thành công", "danger");
      });
    });
  }
}


function onDeleteItem(item) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      confirm({
        title: "Xác nhận",
        content: `Bạn có muốn xóa quyền ký ${item.name}?`,
        okText: "Xóa",
        okType: "danger",
        cancelText: "Hủy",
        onOk() {
          usersProvider
            .delete(item.id)
            .then(s => {
              if (s.code == 0) {
                // snackbar.show("Xóa thành công", "success");
                let data = getState().users.data || [];
                let index = data.findIndex(x => x.id == item.id);
                if (index != -1);
                data.splice(index, 1);
                dispatch(
                  updateData({
                    data: [...data]
                  })
                );
                resolve();
              } else {
                // snackbar.show("Xóa không thành công", "danger");
                reject();
              }
            })
            .catch(e => {
            //   snackbar.show("Xóa không thành công", "danger");
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
  onDeleteItem,
  changeStatus,
};
