import client from "../utils/client-utils";
import constants from "../resources/strings";
import clientUtils from "../utils/client-utils";

export default {
  login(username, password) {
    let object = {
      username,
      password,
    };
    return new Promise((resolve, reject) => {
      clientUtils
        .requestApi("post", constants.api.user.login, object)
        .then((x) => {
          resolve(x);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  search(params) {
    let url = constants.api.user.search + "?";
    url += "page=" + ((params && params.page - 1) || 0) + "&";
    url += "size=" + ((params && params.size) || 10) + "&sort=createdAt,desc";
    if (params && params.dmDonViTen) url += "&dmDonViTen=" + params.dmDonViTen;
    if (params && params.username) url += "&username=" + params.username;
    if (params && params.roleId) url += "&roleId=" + params.roleId;
    if (params && params.email) url += "&email=" + params.email;
    if (params && params.createdAt) url += "&createdAt=" + params.createdAt;
    if (params && params.trangThai) url += "&trangThai=" + params.trangThai;
    return client.requestApi("get", url, {});
  },
  getById(id) {
    let url = constants.api.user.search + "/" + id;
    return client.requestApi("get", url, {});
  },
  createOrEdit(id, params) {
    if (!id) {
      let url = constants.api.user.search;
      return client.requestApi("post", url, params);
    } else {
      let url = constants.api.user.search + "/" + id;
      return client.requestApi("put", url, params);
    }
  },
  changePass(id, password, newPassword) {
    let url = constants.api.user.search + "/change-password/" + id;
    return client.requestApi("put", url, {
      password,
      newPassword,
    });
  },

  roles(params) {
    let url = constants.api.user.roles + "?";
    url += "page=" + ((params && params.page - 1) || 0) + "&";
    url += "size=" + ((params && params.size) || 10) + "&sort=createdAt,desc";
    if (params && params.ma) url += "&ma=" + params.ma;
    if (params && params.ten) url += "&ten=" + params.ten;
    if (params && params.createdAt) url += "&createdAt=" + params.createdAt;
    return client.requestApi("get", url, {});
  },
  rolesCreateOrEdit(id, body) {
    if (!id) {
      let url = constants.api.user.roles;
      return client.requestApi("post", url, body);
    } else {
      let url = constants.api.user.roles + "/" + id;
      return client.requestApi("put", url, body);
    }
  },
  rolesDelete(id) {
    let url = constants.api.user.roles + "/" + id;
    return client.requestApi("delete", url, {});
  },
};
