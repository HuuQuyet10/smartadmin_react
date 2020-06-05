import client from "../utils/client-utils";
import constants from "../resources/strings";
// loaiDonVi : 10 csyt, 20 công ty, 30 cơ quan quản lý
export default {
    getByAll(id) {
        let url = `${constants.api.teamOfExperts.search}/?id=${id}`;
        return client.requestApi("get", url, {});
    },
    getByIndex(page, position, size) {
        let url = `${constants.api.teamOfExperts.getslider}?page=${page=1}&position=${position=-1}&size=${size=10}`;
        return client.requestApi("get", url, {});
    },
    search(page, size) {
        let url = `${constants.api.teamOfExperts.search}/?/page=${page}&size=${size}`;
        return client.requestApi("get", url, {});
    },
    delete(id) {
        // let url = `${constants.api.training.Mdelete}/id=${id}`;
        let url = constants.api.teamOfExperts.Mdelete + "/" + id;
        return client.requestApi("delete", url, {});
    },

    createOrEdit(
        id,
        params
    ) {
        if (!id) {
            let url = constants.api.teamOfExperts.create;
            return client.requestApi("post", url, params);
        } else {
            let url = constants.api.teamOfExperts.edit + "/" + id;
            return client.requestApi("put", url, params);
        }
    },

};
