import client from "../utils/client-utils";
import constants from "../resources/strings";
// loaiDonVi : 10 csyt, 20 công ty, 30 cơ quan quản lý
export default {
    search(itemid, page, size) {
        let url = `${constants.api.slider.search}?itemid=${itemid=-1}&page=${page=1}&size=${size=10}`;
        return client.requestApi("get", url, {});
    }

};
