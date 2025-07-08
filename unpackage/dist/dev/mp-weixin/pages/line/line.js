"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_up_rate2 = common_vendor.resolveComponent("up-rate");
  const _easycom_up_scroll_list2 = common_vendor.resolveComponent("up-scroll-list");
  (_easycom_up_rate2 + _easycom_up_scroll_list2)();
}
const _easycom_up_rate = () => "../../uni_modules/uview-plus/components/u-rate/u-rate.js";
const _easycom_up_scroll_list = () => "../../uni_modules/uview-plus/components/u-scroll-list/u-scroll-list.js";
if (!Math) {
  (_easycom_up_rate + _easycom_up_scroll_list)();
}
const _sfc_main = {
  __name: "line",
  setup(__props) {
    let detailInfo = common_vendor.ref({});
    common_vendor.onLoad((data) => {
      common_vendor.index.__f__("log", "at pages/line/line.vue:44", data.id);
      projectInfo(data.id);
    });
    async function projectInfo(id) {
      let ret = await api_api.apiProjectInfo({
        id
      });
      common_vendor.index.__f__("log", "at pages/line/line.vue:57", ret);
      detailInfo.value = ret;
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(detailInfo).id
      }, common_vendor.unref(detailInfo).id ? {
        b: common_vendor.unref(detailInfo).markers,
        c: common_vendor.unref(detailInfo).location[0],
        d: common_vendor.unref(detailInfo).location[1]
      } : {}, {
        e: common_vendor.t(common_vendor.unref(detailInfo).title),
        f: common_vendor.o(($event) => common_vendor.unref(detailInfo).count = $event),
        g: common_vendor.p({
          count: _ctx.count,
          modelValue: common_vendor.unref(detailInfo).count
        }),
        h: common_vendor.f(common_vendor.unref(detailInfo).other, (item, k0, i0) => {
          return {
            a: item.url,
            b: common_vendor.t(item.name),
            c: item.id
          };
        }),
        i: common_vendor.p({
          indicator: true,
          indicatorColor: "#fff0f0",
          indicatorActiveColor: "#f56c6c"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f29b02c7"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/line/line.js.map
