"use strict";
const utils_request = require("../utils/request.js");
function apiGetBanner() {
  return utils_request.request({
    url: "/user/getBanner"
  });
}
function apiGetHomeList() {
  return utils_request.request({
    url: "/user/getHomeList"
  });
}
function apiLogin(code) {
  return utils_request.request({
    url: "/login",
    method: "post",
    data: {
      code
    }
  });
}
function apiGetUserInfo() {
  return utils_request.request({
    url: "/getUserInfo"
  });
}
function apiDetailProject() {
  return utils_request.request({
    url: "/detail/project"
  });
}
function apiProjectInfo(data) {
  return utils_request.request({
    url: "/project/info",
    data
  });
}
function likeList() {
  return utils_request.request({
    url: "/like/list"
  });
}
exports.apiDetailProject = apiDetailProject;
exports.apiGetBanner = apiGetBanner;
exports.apiGetHomeList = apiGetHomeList;
exports.apiGetUserInfo = apiGetUserInfo;
exports.apiLogin = apiLogin;
exports.apiProjectInfo = apiProjectInfo;
exports.likeList = likeList;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/api.js.map
