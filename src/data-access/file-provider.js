import client from "@utils/client-utils";
import stringUtils from "mainam-react-native-string-utils";
import constants from "@strings";

export default {
  uploadImage(file) {
    return new Promise((resolve, reject) => {
      client
        .uploadImage(constants.api.image.upload, file)
        .then((s) => {
          let data = s.data;
          data.file = file;
          resolve(data);
        })
        .catch((e) => {
          e.file = file;
          reject(e);
        });
    });
  },
  
};
