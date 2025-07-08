"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_up_navbar2 = common_vendor.resolveComponent("up-navbar");
  const _easycom_up_tag2 = common_vendor.resolveComponent("up-tag");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  (_easycom_up_navbar2 + _easycom_up_tag2 + _easycom_up_icon2)();
}
const _easycom_up_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_up_tag = () => "../../uni_modules/uview-plus/components/u-tag/u-tag.js";
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  (_easycom_up_navbar + _easycom_up_tag + _easycom_up_icon)();
}
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    let itemData = common_vendor.reactive({});
    let detailProjectList = common_vendor.ref([]);
    common_vendor.onLoad((data) => {
      let ret = JSON.parse(decodeURIComponent(data.item));
      common_vendor.index.__f__("log", "at pages/detail/detail.vue:58", ret);
      Object.assign(itemData, ret);
      common_vendor.index.__f__("log", "at pages/detail/detail.vue:60", itemData, "itemData");
    });
    async function detailProject() {
      common_vendor.index.__f__("log", "at pages/detail/detail.vue:68", "hello world");
      let ret = await api_api.apiDetailProject();
      detailProjectList.value = ret;
    }
    detailProject();
    function goLine(item) {
      common_vendor.index.__f__("log", "at pages/detail/detail.vue:81", item);
      common_vendor.index.navigateTo({
        url: `/pages/line/line?id=${item.id}`
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "",
          ["bg-color"]: "#00000000",
          autoBack: true,
          ["left-icon-color"]: "#fff"
        }),
        b: common_vendor.unref(itemData).img,
        c: common_vendor.t(common_vendor.unref(itemData).title),
        d: common_vendor.p({
          text: "5A级景区",
          size: "mini",
          shape: "circle"
        }),
        e: common_vendor.t(common_vendor.unref(itemData).introduce),
        f: common_vendor.t(common_vendor.unref(itemData).times),
        g: common_vendor.f(common_vendor.unref(detailProjectList), (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.t(item.tag),
            c: common_vendor.t(item.title),
            d: "eca06f3c-2-" + i0,
            e: common_vendor.t(item.desc),
            f: index,
            g: common_vendor.o(($event) => goLine(item), index)
          };
        }),
        h: common_vendor.p({
          name: "map",
          color: "#9c9c9c",
          size: "16"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eca06f3c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/detail/detail.js.map
