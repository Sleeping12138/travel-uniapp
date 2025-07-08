"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_up_search2 = common_vendor.resolveComponent("up-search");
  const _easycom_up_swiper2 = common_vendor.resolveComponent("up-swiper");
  const _easycom_up_notice_bar2 = common_vendor.resolveComponent("up-notice-bar");
  const _easycom_up_lazy_load2 = common_vendor.resolveComponent("up-lazy-load");
  const _easycom_up_waterfall2 = common_vendor.resolveComponent("up-waterfall");
  const _easycom_up_loadmore2 = common_vendor.resolveComponent("up-loadmore");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  (_easycom_up_search2 + _easycom_up_swiper2 + _easycom_up_notice_bar2 + _easycom_up_lazy_load2 + _easycom_up_waterfall2 + _easycom_up_loadmore2 + _easycom_up_icon2)();
}
const _easycom_up_search = () => "../../uni_modules/uview-plus/components/u-search/u-search.js";
const _easycom_up_swiper = () => "../../uni_modules/uview-plus/components/u-swiper/u-swiper.js";
const _easycom_up_notice_bar = () => "../../uni_modules/uview-plus/components/u-notice-bar/u-notice-bar.js";
const _easycom_up_lazy_load = () => "../../uni_modules/uview-plus/components/u-lazy-load/u-lazy-load.js";
const _easycom_up_waterfall = () => "../../uni_modules/uview-plus/components/u-waterfall/u-waterfall.js";
const _easycom_up_loadmore = () => "../../uni_modules/uview-plus/components/u-loadmore/u-loadmore.js";
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  (_easycom_up_search + _easycom_up_swiper + _easycom_up_notice_bar + _easycom_up_lazy_load + _easycom_up_waterfall + _easycom_up_loadmore + _easycom_up_icon)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let keyword = common_vendor.ref("");
    let photpList = common_vendor.ref([]);
    let notice = common_vendor.ref("this is a test... 如果出现任何错误，请及时和管理员进行联系...");
    let flowList = common_vendor.ref([]);
    let showButton = common_vendor.ref(false);
    let status = common_vendor.ref("loading");
    async function getBanner() {
      let ret = await api_api.apiGetBanner();
      photpList.value = ret.bannerList;
      common_vendor.index.__f__("log", "at pages/index/index.vue:95", ret);
    }
    getBanner();
    async function getHomeList() {
      let ret = await api_api.apiGetHomeList();
      flowList.value = ret;
      common_vendor.index.__f__("log", "at pages/index/index.vue:106", ret);
    }
    getHomeList();
    common_vendor.onReachBottom(() => {
      setTimeout(() => {
        addRandomData();
      }, 500);
    });
    function addRandomData() {
      for (let i = 0; i < 10; i++) {
        let index = common_vendor.index.$u.random(0, flowList.value.length - 1);
        let item = JSON.parse(JSON.stringify(flowList.value[index]));
        item.id = common_vendor.index.$u.guid();
        flowList.value.push(item);
      }
    }
    common_vendor.onPageScroll((e) => {
      if (e.scrollTop > 1e3) {
        showButton.value = true;
      } else {
        showButton.value = false;
      }
    });
    function goToTop() {
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    }
    function goDetail(item) {
      let res = JSON.stringify(item);
      common_vendor.index.navigateTo({
        url: `/pages/detail/detail?item=${encodeURIComponent(res)}`
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => common_vendor.isRef(keyword) ? keyword.value = $event : keyword = $event),
        b: common_vendor.p({
          placeholder: "搜索景点",
          modelValue: common_vendor.unref(keyword)
        }),
        c: common_vendor.p({
          list: common_vendor.unref(photpList),
          keyName: "image",
          showTitle: true,
          radius: "8",
          autoplay: true,
          height: "160"
        }),
        d: common_vendor.p({
          text: common_vendor.unref(notice)
        }),
        e: common_vendor.w(({
          leftList
        }, s0, i0) => {
          return {
            a: common_vendor.f(leftList, (item, index, i1) => {
              return common_vendor.e({
                a: "1cf27b2a-4-" + i0 + "-" + i1 + ",1cf27b2a-3",
                b: common_vendor.p({
                  threshold: "-450",
                  ["border-radius"]: "10",
                  image: item.img,
                  index
                }),
                c: common_vendor.t(item.title),
                d: common_vendor.t(item.times),
                e: common_vendor.t(item.tag[0]),
                f: common_vendor.t(item.tag[1]),
                g: item.isDot
              }, item.isDot ? {
                h: common_vendor.t(item.isDot)
              } : {}, {
                i: index,
                j: common_vendor.o(($event) => goDetail(item), index)
              });
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "left",
          path: "e",
          vueId: "1cf27b2a-3"
        }),
        f: common_vendor.w(({
          rightList
        }, s0, i0) => {
          return {
            a: common_vendor.f(rightList, (item, index, i1) => {
              return common_vendor.e({
                a: "1cf27b2a-5-" + i0 + "-" + i1 + ",1cf27b2a-3",
                b: common_vendor.p({
                  threshold: "-450",
                  ["border-radius"]: "10",
                  image: item.img,
                  index
                }),
                c: common_vendor.t(item.title),
                d: common_vendor.t(item.times),
                e: common_vendor.t(item.tag[0]),
                f: common_vendor.t(item.tag[1]),
                g: item.dot
              }, item.dot ? {
                h: common_vendor.t(item.isDot)
              } : {}, {
                i: index,
                j: common_vendor.o(($event) => goDetail(item), index)
              });
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "right",
          path: "f",
          vueId: "1cf27b2a-3"
        }),
        g: common_vendor.o(($event) => common_vendor.isRef(flowList) ? flowList.value = $event : flowList = $event),
        h: common_vendor.p({
          modelValue: common_vendor.unref(flowList)
        }),
        i: common_vendor.p({
          status: common_vendor.unref(status)
        }),
        j: common_vendor.unref(showButton)
      }, common_vendor.unref(showButton) ? {
        k: common_vendor.p({
          name: "arrow-upward",
          color: "#fff",
          size: "28"
        }),
        l: common_vendor.o(goToTop)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
