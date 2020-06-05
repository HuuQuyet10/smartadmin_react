import client from "../utils/client-utils";
import constants from "../resources/strings";

export default {
    search(page, size, title, hightlights, createdDate, createdUser) {
        // let url =  `${constants.api.training.search}/?/page=${page}&size=${size}`;
        let url = constants.api.training.search + "?";
        url += "page=" + ((page = 1) || 0) + "&";
        url += "size=" + (size || 10);
        if (title) url += "&title=" + title;
        if (hightlights) url += "&hightlights=" + hightlights;
        if (createdDate) url += "&createdDate=" + createdDate;
        if (createdUser) url += "&createdUser=" + createdUser;
        return client.requestApi("get", url, {});
    },
    delete(id) {
        let url = constants.api.training.Mdelete + '/' + id;
        return client.requestApi("delete", url, {});
    },
    createOrEdit(
        id,
        params
    ) {
        if (!id) {
            let url = constants.api.training.create;
            return client.requestApi("post", url, params);
        } else {
            let url = constants.api.training.edit + "/" + id;
            return client.requestApi("put", url, params);
        }
    },
    getByAll(id){
        let url = `${constants.api.training.getDetail}/?id=${id}`;
        return client.requestApi("get", url, {});
    },
    getIndex(hightlights, page, size){
        let url = `${constants.api.training.search}/?hightlights=${hightlights=1}&page=${page=1}&size=${size=3}`;
        return client.requestApi("get", url, {});
    }
};
