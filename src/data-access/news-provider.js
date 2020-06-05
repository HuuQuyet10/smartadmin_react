import client from "../utils/client-utils";
import stringUtils from "mainam-react-native-string-utils";
import constants from "../resources/strings";
import clientUtils from "../utils/client-utils";

export default {
    getAllNews(id) {
    let url = constants.api.news + "/" + id;
    return client.requestApi("get", url, {});
  },
  search(id, page, size) {
    let url =  `${constants.api.news.search}/?/id=${id}&page=${page}&size=${size}`;
        return client.requestApi("get", url, {});
  },
  delete(id) {
    return client.requestApi(
      "delete",
      constants.api.news.delete + "/" + id,
      {}
    );
  },
  getIndex(id, page, size, hightlights) {
    let url =  `${constants.api.news.getAllnewsIndex}/?/id=${id=-1}&page=${page=1}&size=${size=3}&hightlights=${hightlights=1}`;
        return client.requestApi("get", url, {});
  },
//   createOrEdit(id, name, active, value, description) {
//     if (!id) {
//       let url = constants.api.formTypes;
//       return client.requestApi("post", url, {
//         name,
//         value,
//         description,
//         active: active ? 1 : 0
//       });
//     } else {
//       let url = constants.api.formTypes + "/" + id;
//       return client.requestApi("put", url, {
//         name,
//         value,
//         description,
//         active: active ? 1 : 0
//       });
//     }
//   },
  setMyJob(jobs) {
    let url = constants.api.job.set_my_job;
    return client.requestApi("put", url, {
      jobs
    });
  }
};
