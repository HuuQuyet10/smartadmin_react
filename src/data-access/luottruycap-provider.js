import client from "../utils/client-utils";
import constants from "../resources/strings";

export default {
    getluottruycapto(){
        let url = `${constants.api.luotxem.nguoitruycap}`;
        return client.requestApi("get", url, {});
    },
    getnguoionline(){
        let url = `${constants.api.luotxem.nguoionline}`;
        return client.requestApi("get", url, {});
    },
    gettongtruycap(){
        let url = `${constants.api.luotxem.luottruycap}`;
        return client.requestApi("get", url, {});
    }
}