import client from "../utils/client-utils";
import constants from "../resources/strings";

export default {
  getById(id) {
    let url = constants.api.model.search + "/" + id;
    return client.requestApi("get", url, {});
  },

  search(params) {
    let url = constants.api.model.search + "?";
    url += "page=" + ((params && params.page - 1) || 0) + "&";
    url += "size=" + ((params && params.size) || 10) + "&sort=createdAt,desc";
    if (params && params.ma) url += "&ma=" + params.ma;
    if (params && params.ten) url += "&ten=" + params.ten;
    if (params && params.dmThietBiId)
      url += "&dmThietBiId=" + params.dmThietBiId;
    if (params && params.dmLoaiThietBiId)
      url += "&dmLoaiThietBiId=" + params.dmLoaiThietBiId;
    if (params && params.dmHangSanXuatId)
      url += "&dmHangSanXuatId=" + params.dmHangSanXuatId;
    if (params && params.hangSoHuuId)
      url += "&hangSoHuuId=" + params.hangSoHuuId;
    if (params && params.nuocSanXuatId)
      url += "&nuocSanXuatId=" + params.nuocSanXuatId;
    if (params && params.nuocSoHuuId)
      url += "&nuocSoHuuId=" + params.nuocSoHuuId;
    if (params && params.namSanXuat) url += "&namSanXuat=" + params.namSanXuat;
    if (params && params.nhaCungCapId)
      url += "&nhaCungCapId=" + params.nhaCungCapId;
    return client.requestApi("get", url, {});
  },
  delete(id) {
    let url = constants.api.model.search + "/" + id;
    return client.requestApi("delete", url, {});
  },
  createOrEdit(id, params) {
    if (!id) {
      let url = constants.api.model.search;
      return client.requestApi("post", url, params);
    } else {
      let url = constants.api.model.search + "/" + id;
      return client.requestApi("put", url, params);
    }
  },
};
