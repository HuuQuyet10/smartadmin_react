import client from "../utils/client-utils";
import constants from "../resources/strings";

export default {
    search(page, size, name, createdUser, createdDate) {
        // let url = `${constants.api.landing_page.search}/?/page=${page}&size=${size}`;
        let url = constants.api.landing_page.search + "?";
        url += "page=" + ((page = 1) || 0) + "&";
        url += "size=" + (size || 10);
        if (name) url += "&name=" + name;
        if (createdUser) url += "&createdUser=" + createdUser;
        if (createdDate) url += "&createdDate=" + createdDate;
        return client.requestApi("get", url, {});
    },
    createOrEdit(
        id,
        params
    ) {
        if (!id) {
            let url = constants.api.landing_page.create;
            return client.requestApi("post", url, params);
        } else {
            let url = constants.api.landing_page.update + "/" + id;
            return client.requestApi("put", url, params);
        }
    },
    delete(id) {
        let url = constants.api.landing_page.delete + "/" + id;
        return client.requestApi("delete", url, {});
    },
    getByAll(id){
        let url = `${constants.api.landing_page.getDetail}/?id=${id}`;
        return client.requestApi("get", url, {});
    },
    getByAllLanding(id, page, size){
        let url = `${constants.api.landing_page.getAllslider}/?id=${id=-1}&page=${page=1}&size=${size=10}`;
        return client.requestApi("get", url, {});
    }
}