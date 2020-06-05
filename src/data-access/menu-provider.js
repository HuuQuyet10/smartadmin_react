import client from "../utils/client-utils";
import constants from "../resources/strings";
// loaiDonVi : 10 csyt, 20 công ty, 30 cơ quan quản lý
export default {
    search(isActive, level) {
        let url = `${constants.api.menu.search}?isActive=${isActive}&level=${level}`;
        return client.requestApi("get", url, {});
    },

};
