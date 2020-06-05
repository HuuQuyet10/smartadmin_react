import client from "../utils/client-utils";
import constants from "../resources/strings";

export default {
    search(page, size, name, createdDate, createdUser) {
        // let url = `${constants.api.landing_page.search}/?/page=${page}&size=${size}`;
        let url = constants.api.cooperative_basis.search + "?";
        url += "page=" + ((page = 1) || 0) + "&";
        url += "size=" + (size || 10);
        if (name) url += "&name=" + name;
        if (createdDate) url += "&createdDate=" + createdDate;
        if (createdUser) url += "&createdUser=" + createdUser;
        return client.requestApi("get", url, {});
    },
    createOrEdit(
        id,
        params
    ) {
        if (!id) {
            let url = constants.api.cooperative_basis.create;
            return client.requestApi("post", url, params);
        } else {
            let url = constants.api.cooperative_basis.edit + "/" + id;
            return client.requestApi("put", url, params);
        }
    },
    delete(id) {
        let url = constants.api.cooperative_basis.delete + "/" + id;
        return client.requestApi("delete", url, {});
    },
    getByAll(id){
        let url = `${constants.api.cooperative_basis.getDetail}/?id=${id}`;
        return client.requestApi("get", url, {});
    },
    getIndexCoso(page, size){
        let url = `${constants.api.cooperative_basis.getIndex}?page=${page=1}&size=${size=3}`;
        return client.requestApi("get", url, {});
    }
}