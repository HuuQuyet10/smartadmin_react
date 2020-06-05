import client from "../utils/client-utils";
import constants from "../resources/strings";

export default {
  getById(id) {
    let url = constants.api.nameDevice.search + "/" + id;
    return client.requestApi("get", url, {});
  },

  search(params) {
    let url = constants.api.nameDevice.search + "?";
    url += "page=" + ((params && params.page - 1) || 0) + "&";
    url += "size=" + ((params && params.size) || 10) + "&sort=createdAt,desc";
    if (params && params.ma) url += "&ma=" + params.ma;
    if (params && params.ten) url += "&ten=" + params.ten;
    if (params && params.tenVietTat) url += "&tenVietTat=" + params.tenVietTat;
    if (params && params.createdAt) url += "&createdAt=" + params.createdAt;
    return client.requestApi("get", url, {});
  },
  delete(id) {
    let url = constants.api.nameDevice.search + "/" + id;
    return client.requestApi("delete", url, {});
  },
  createOrEdit(id, body) {
    if (!id) {
      let url = constants.api.nameDevice.search;
      return client.requestApi("post", url, body);
    } else {
      let url = constants.api.nameDevice.search + "/" + id;
      return client.requestApi("put", url, body);
    }
  },
};
