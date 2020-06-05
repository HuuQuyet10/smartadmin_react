import client from "@utils/client-utils";
import constants from "../resources/strings";

export default {
  getById(id) {
    let url = constants.api.device.search + "/" + id;
    return client.requestApi("get", url, {});
  },

  search(params) {
    let url = constants.api.device.search + "?";
    url += "page=" + ((params && params.page - 1) || 0) + "&";
    url += "size=" + ((params && params.size) || 10) + "&sort=createdAt,desc";
    if (params && params.ma) url += "&ma=" + params.ma;
    if (params && params.ten) url += "&ten=" + params.ten;
    if (params && params.serial) url += "&serial=" + params.serial;
    if (params && params.model) url += "&model=" + params.model;
    if (params && params.dmHangSanXuat)
      url += "&dmHangSanXuatTen=" + params.dmHangSanXuat;
    if (params && params.namSanXuat) url += "&namSanXuat=" + params.namSanXuat;
    if (params && params.donViSuDung)
      url += "&donViSuDung=" + params.donViSuDung;
    if (params && params.namSuDung) url += "&namSuDung=" + params.namSuDung;
    if (params && params.createdAt) url += "&createdAt=" + params.createdAt;
    if (params && params.dmTrangThaiId)
      url += "&dmTrangThaiId=" + params.dmTrangThaiId;
    if (params && params.coSoYTeId) url += "&dmCoSoYTeId=" + params.coSoYTeId;
    if (params && params.dmTinhThanhPhoId)
      url += "&dmTinhThanhPhoId=" + params.dmTinhThanhPhoId;
    if (params && params.dmQuanHuyenId)
      url += "&dmQuanHuyenId=" + params.dmQuanHuyenId;
    if (params && params.dmXaPhuongId)
      url += "&dmXaPhuongId=" + params.dmXaPhuongId;
    return client.requestApi("get", url, {});
  },

  getAllDevice() {
    let url =
      constants.api.device.get_all + "?page=0&size=1000000&sort=createdAt,desc";
    return client.requestApi("get", url, {});
  },
  report(quanHuyenId, tinhThanhPhoId, dmTrangThaiId, xaPhuongId) {
    let url = constants.api.device.report + "?";
    // url += "coSoYTeId=" + coSoYTeId;
    if (tinhThanhPhoId) url += "&tinhThanhPhoId=" + tinhThanhPhoId;
    if (quanHuyenId) url += "&quanHuyenId=" + quanHuyenId;
    if (dmTrangThaiId) url += "&dmTrangThaiId=" + dmTrangThaiId;
    if (xaPhuongId) url += "&xaPhuongId=" + xaPhuongId;
    return client.requestApiReport("get", url, {});
  },
  delete(id) {
    let url = constants.api.device.search + "/" + id;
    return client.requestApi("delete", url, {});
  },
  createOrEdit(id, param) {
    if (!id) {
      let url = constants.api.device.create;
      return client.requestApi("post", url, param);
    } else {
      let url = constants.api.device.create + "/" + id;
      return client.requestApi("put", url, param);
    }
  },
  setMyProduct(products) {
    let url = constants.api.product.set_my_product;
    return client.requestApi("put", url, {
      products,
    });
  },
};
