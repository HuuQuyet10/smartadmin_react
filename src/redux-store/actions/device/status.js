import statusProvider from "@data-access/status-provider";

function updateData(data) {
  return (dispatch) => {
    dispatch({
      type: "DEVICE-STATUS-UPDATE-DATA",
      data: data,
    });
  };
}

function getAllStatus() {
  return (dispatch, getState) => {
    let params = {
      page: 1,
      size: 9999,
    };
    statusProvider
      .search(params)
      .then((s) => {
        if (s && s.code === 0) {
          dispatch(
            updateData({
              list_status: s.data,
            })
          );
        }
      })
      .catch((e) => {});
  };
}

export default {
  getAllStatus,
  updateData,
};
