import cityProvider from "@data-access/city-provider";

function updateData(data) {
  return (dispatch) => {
    dispatch({
      type: "LIST-CITY-UPDATE-DATA",
      data: data,
    });
  };
}

function getCity() {
  return (dispatch, getState) => {
    cityProvider
      .search(0, 99999)
      .then((s) => {
        if (s && s.code === 0) {
          let data = [
            {
              id: "",
              ten: "Chọn tỉnh/ thành phố",
            },
          ];
          dispatch(
            updateData({
              listCitys: data.concat(s.data),
            })
          );
        }
      })
      .catch((e) => {});
  };
}

export default {
  getCity,
  updateData,
};
