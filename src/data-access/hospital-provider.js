import client from "../utils/client-utils";
import constants from "../resources/strings";
// loaiDonVi : 10 csyt, 20 công ty, 30 cơ quan quản lý
export default {
  getById(id) {
    let url = constants.api.hospital.search + "/" + id;
    return client.requestApi("get", url, {});
  },

  search(params) {
    let url = constants.api.hospital.search + "?";
    url += "page=" + ((params && params.page - 1) || 0) + "&";
    url += "size=" + ((params && params.size) || 10) + "&sort=createdAt,desc";
    if (params && params.loaiDonVi) url += "&loaiDonVi=" + params.loaiDonVi;
    if (params && params.ma) url += "&ma=" + params.ma;
    if (params && params.maSoThue) url += "&maSoThue=" + params.maSoThue;
    if (params && params.ten) url += "&ten=" + params.ten;
    if (params && params.loaiCsyt) url += "&loaiCsyt=" + params.loaiCsyt;
    if (params && params.createdAt) url += "&createdAt=" + params.createdAt;
    if (params && params.soDienThoai)
      url += "&soDienThoai=" + params.soDienThoai;
    if (params && params.dmTinhThanhPhoId)
      url += "&dmTinhThanhPhoId=" + params.dmTinhThanhPhoId;
    if (params && params.dmQuanHuyenId)
      url += "&dmQuanHuyenId=" + params.dmQuanHuyenId;
    if (params && params.dmCoQuanQuanLyId)
      url += "&coQuanQuanLyId=" + params.dmCoQuanQuanLyId;
    if (params && params.loaiCongTy) url += "&loaiCongTy=" + params.loaiCongTy;
    if (params && params.nguoiLienHe)
      url += "&nguoiLienHe=" + params.nguoiLienHe;
    if (params && params.coQuanQuanLyTen)
      url += "&coQuanQuanLyTen=" + params.coQuanQuanLyTen;
    return client.requestApi("get", url, {});
  },
  report(params) {
    let url = constants.api.hospital.report + "?";
    if (params && params.loaiDonVi)
      url += "loaiDonVi=" + params.loaiDonVi + "&sort=createdAt,desc";
    if (params && params.ma) url += "&ma=" + params.ma;
    if (params && params.maSoThue) url += "&maSoThue=" + params.maSoThue;
    if (params && params.ten) url += "&ten=" + params.ten;
    if (params && params.loaiCsyt) url += "&loaiCsyt=" + params.loaiCsyt;
    if (params && params.createdAt) url += "&createdAt=" + params.createdAt;
    if (params && params.soDienThoai)
      url += "&soDienThoai=" + params.soDienThoai;
    if (params && params.dmTinhThanhPhoId)
      url += "&dmTinhThanhPhoId=" + params.dmTinhThanhPhoId;
    if (params && params.dmQuanHuyenId)
      url += "&dmQuanHuyenId=" + params.dmQuanHuyenId;
    if (params && params.dmCoQuanQuanLyId)
      url += "&dmCoQuanQuanLyId=" + params.dmCoQuanQuanLyId;
    if (params && params.loaiCongTy) url += "&loaiCongTy=" + params.loaiCongTy;
    if (params && params.nguoiLienHe)
      url += "&nguoiLienHe=" + params.nguoiLienHe;
    if (params && params.coQuanQuanLyTen)
      url += "&coQuanQuanLyTen=" + params.coQuanQuanLyTen;
    return client.requestApiReport("get", url, {});
  },
  delete(id) {
    let url = constants.api.hospital.search + "/" + id;
    return client.requestApi("delete", url, {});
  },
  createOrEdit(id, object) {
    if (!id) {
      let url = constants.api.hospital.search;
      return client.requestApi("post", url, object);
    } else {
      let url = constants.api.hospital.search + "/" + id;
      return client.requestApi("put", url, object);
    }
  },
};
