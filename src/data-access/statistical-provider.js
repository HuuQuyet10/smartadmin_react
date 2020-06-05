import client from "../utils/client-utils";
import constants from "../resources/strings";

export default {
  status(
    trangThaiId,
    tinhThanhPhoId,
    quanHuyenId,
    xaPhuongId,
    coSoYTeId,
    tieuChi
  ) {
    let url = constants.api.statistical.status + "?";
    url += "&trangThaiId=" + (trangThaiId || "");
    url += "&tinhThanhPhoId=" + (tinhThanhPhoId || "");
    url += "&quanHuyenId=" + (quanHuyenId || "");
    url += "&xaPhuongId=" + (xaPhuongId || "");
    url += "&coSoYTeId=" + (coSoYTeId || "");
    url += "&tieuChi=" + (tieuChi || "");
    return client.requestApi("get", url, {});
  },
  importHospital(tinhThanhPhoId) {
    let url = constants.api.statistical.importHospital + "?";
    url += "&tinhThanhPhoId=" + (tinhThanhPhoId || "");
    return client.requestApi("get", url, {});
  },
  resource(tinhThanhPhoId, quanHuyenId, xaPhuongId, coSoYTeId, tenThietBi) {
    let url = constants.api.statistical.resource + "?";
    url += "&tinhThanhPhoId=" + (tinhThanhPhoId || "");
    url += "&quanHuyenId=" + (quanHuyenId || "");
    url += "&xaPhuongId=" + (xaPhuongId || "");
    url += "&coSoYTeId=" + (coSoYTeId || "");
    url += "&tenThietBi=" + (tenThietBi || "");
    return client.requestApi("get", url, {});
  },
  statusName(tinhThanhPhoId, quanHuyenId, xaPhuongId, coSoYTeId) {
    let url = constants.api.statistical.statusName + "?";
    url += "&tinhThanhPhoId=" + (tinhThanhPhoId || "");
    url += "&quanHuyenId=" + (quanHuyenId || "");
    url += "&xaPhuongId=" + (xaPhuongId || "");
    url += "&coSoYTeId=" + (coSoYTeId || "");
    return client.requestApi("get", url, {});
  },
};
