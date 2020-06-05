const prefix = "/";
module.exports = {
  api: {
    user: {
      login: prefix + "user/login",
      search: prefix + "user/get-all"
    },
    news: {
      getAllnewsIndex: prefix + "news/get-all",
      search: prefix + "news/get-all",
    },
    training: {
      Mdelete: prefix + "training/delete",
      create: prefix + "training/create",
      search: prefix + "training/search",
      edit: prefix + "training/update",
      getDetail: prefix + "training/get-all",
    },
    teamOfExperts: {
      Mdelete: prefix + "team_of_experts/delete",
      search: prefix + "team_of_experts/get-all",
      getslider: prefix + "team_of_experts/search",
      create: prefix + "team_of_experts/create",
      edit: prefix + "team_of_experts/update"
    },
    landing_page: {
      create: prefix + "landing_page/create",
      delete: prefix + "landing_page/delete",
      update: prefix + "landing_page/update",
      search: prefix + "landing_page/search",
      getDetail: prefix + "landing_page/get-all",
      getAllslider: prefix + "landing_page/get-all",
    },
    image: {
      upload: prefix + "image/upload",
      viewimage: prefix + "image/view",
    },
    cooperative_basis: {
      create: prefix + "cooperative_basis/create",
      delete: prefix + "cooperative_basis/delete",
      getIndex: prefix + "cooperative_basis/search",
      search: prefix + "cooperative_basis/search",
      edit: prefix + "cooperative_basis/update",
      getDetail: prefix + "cooperative_basis/get-detail",
    },
    menu: {
      search: prefix + "menu/get-hearder-menu",
    },
    slider: {
      search: prefix + "slide-item/get-all",
    },
    luotxem: {
      nguoitruycap: prefix + "user-access-count/get-access",
      nguoionline: prefix + "user-access-count/load",
      luottruycap: prefix + "user-access-count/total-count",
    }
  },
};
