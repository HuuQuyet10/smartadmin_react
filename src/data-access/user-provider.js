import client from "../utils/client-utils";
import stringUtils from "mainam-react-native-string-utils";
import constants from "../resources/strings";
import clientUtils from "../utils/client-utils";

export default {
  login(username, password) {
    let object = {
      user: {username,
            password}
    };
    return new Promise((resolve, reject) => {
      clientUtils
        .requestApi("put", constants.api.user.login, object)
        .then(x => {
          resolve(x);
        })
        .catch(e => {
          reject(e);
        });
    });
  },
  search(id, page, size) {
    let url =  `${constants.api.user.search}/?/id=${id=-1}&page=${page=1}&size=${size=10}`;
    return client.requestApi("get", url, {});
  },
  createOrEdit(id, name, username, email, title, blocked) {
    if (!id) {
      let url = constants.api.user.getAllUser;
      return client.requestApi("post", url, {
        name, 
        username, 
        email, 
        title, 
        blocked
      });
    } else {
      let url = constants.api.user.getAllUser + "/update/" + id;
      return client.requestApi("put", url, {
        name, 
        username, 
        email, 
        title, 
        blocked
      });
    }
  },
  
  changePass(id, password, newPassword) {
    let url = constants.api.user.search + "/change-password/" + id;
    return client.requestApi("put", url, {
      password,
      newPassword
    });
  },

  roles(page, size, ma, ten, createdAt) {
    let url = constants.api.user.roles + "?";
    url += "page=" + ((page - 1) || 0) + "&";
    url += "size=" + (size || 10) + "&sort=createdAt,desc";
    if (ma) url += "&ma=" + ma
    if (ten) url += "&ten=" + ten;
    if (createdAt) url += "&createdAt=" + createdAt;
    return client.requestApi("get", url, {});
  },
  rolesCreateOrEdit(id, ten, ma) {
    if (!id) {
      let url = constants.api.user.roles;
      return client.requestApi("post", url, {
        ten,
        ma
      });
    } else {
      let url = constants.api.user.roles + "/" + id;
      return client.requestApi("put", url, {
        ten,
        ma
      });
    }
  },
  rolesDelete(id) {
    let url = constants.api.user.roles + "/" + id;
    return client.requestApi("delete", url, {});
  },
};
