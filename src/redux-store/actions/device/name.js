import nameDeviceProvider from "@data-access/commercial-name-provider";

function updateData(data) {
  return (dispatch) => {
    dispatch({
      type: "DEVICE-NAME-UPDATE-DATA",
      data: data,
    });
  };
}

function getAllName() {
  return (dispatch, getState) => {
    let params = {
      page: 1,
      size: 9999,
    };
    nameDeviceProvider
      .search(params)
      .then((s) => {
        if (s && s.code === 0) {
          dispatch(
            updateData({
              list_name: s.data,
            })
          );
        }
      })
      .catch((e) => {});
  };
}

export default {
  getAllName,
  updateData,
};
