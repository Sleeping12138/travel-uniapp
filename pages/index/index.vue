<template>
	<view class="content">
		<up-search placeholder="搜索景点" v-model="keyword"></up-search>
		<view class="photo-swiper">
			<up-swiper :list="photpList" keyName="image" showTitle radius="8" :autoplay="true" height="160"></up-swiper>
		</view>
		<up-notice-bar :text="notice"></up-notice-bar>
		<view class="waterfill">
			<up-waterfall v-model="flowList">
				<template v-slot:left="{leftList}">
					<view class="demo-warter" v-for="(item, index) in leftList" :key="index" @click="goDetail(item)">
						<up-lazy-load threshold="-450" border-radius="10" :image="item.img"
							:index="index"></up-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="demo-time">
							{{item.times}}
						</view>
						<view class="demo-tag">
							<view class="demo-tag-owner">
								{{ item.tag[0] }}
							</view>
							<view class="demo-tag-text">
								{{ item.tag[1] }}
							</view>
						</view>
						<view class="dot" v-if="item.isDot">
							{{item.isDot}}
						</view>
					</view>
				</template>
				<template v-slot:right="{rightList}">
					<view class="demo-warter" v-for="(item, index) in rightList" :key="index" @click="goDetail(item)">
						<up-lazy-load threshold="-450" border-radius="10" :image="item.img"
							:index="index"></up-lazy-load>
						<view class="demo-title">
							{{item.title}}
						</view>
						<view class="demo-time">
							{{item.times}}
						</view>
						<view class="demo-tag">
							<view class="demo-tag-owner">
								{{ item.tag[0] }}
							</view>
							<view class="demo-tag-text">
								{{ item.tag[1] }}
							</view>
						</view>
						<view class="dot" v-if="item.dot">
							{{item.isDot}}
						</view>
					</view>
				</template>
			</up-waterfall>
			<view class="wrap">
				<up-loadmore :status="status" />
			</view>
		</view>
		<view class="topButtom" v-if="showButton" @click="goToTop">
			<up-icon name="arrow-upward" color="#fff" size="28"></up-icon>
		</view>

	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		apiGetBanner,
		apiGetHomeList
	} from '../../api/api';
	import {
		onReachBottom,
		onPageScroll
	} from '@dcloudio/uni-app'

	let keyword = ref('')
	let photpList = ref([])
	let notice = ref('this is a test... 如果出现任何错误，请及时和管理员进行联系...')
	let flowList = ref([])
	let showButton = ref(false)
	let status = ref('loading');


	/**
	 * 获取首页banner数据
	 */
	async function getBanner() {
		let ret = await apiGetBanner();
		photpList.value = ret.bannerList
		console.log(ret);
	}
	getBanner()


	/**
	 * 获取瀑布流数据
	 */
	async function getHomeList() {
		let ret = await apiGetHomeList()
		flowList.value = ret
		console.log(ret);
	}
	getHomeList()

	onReachBottom(() => {
		setTimeout(() => {
			addRandomData()
		}, 500)
	})


	/**
	 * 添加随机数据
	 */
	function addRandomData() {
		for (let i = 0; i < 10; i++) {
			let index = uni.$u.random(0, flowList.value.length - 1);
			let item = JSON.parse(JSON.stringify(flowList.value[index]));
			item.id = uni.$u.guid()
			flowList.value.push(item)
		}
	}


	/**
	 * 检测页面滚动
	 */
	onPageScroll((e) => {
		if (e.scrollTop > 1000) {
			showButton.value = true
		} else {
			showButton.value = false
		}
	})


	/**
	 * 返回页面顶部
	 */
	function goToTop() {
		uni.pageScrollTo({
			scrollTop: 0,
			duration: 300
		})
	}


	function goDetail(item) {
		let res = JSON.stringify(item)
		uni.navigateTo({
			url: `/pages/detail/detail?item=${encodeURIComponent(res)}`
		})
	}
</script>

<style>
	page {
		background-color: rgb(240, 240, 240);
	}
</style>
<style lang="scss" scoped>
	.content {
		padding: 20rpx;
	}

	.photo-swiper {
		padding: 20rpx 0;
	}

	.demo-warter {
		margin: 20rpx 10rpx 10rpx 0;
		background-color: #fff;
		border-radius: 16rpx;
		padding: 16rpx;
		border: 1px solid #ccc;
		position: relative;
	}

	.demo-title {
		font-size: 30rpx;
		margin-top: 10rpx;
		color: #303133;
	}

	.demo-time {
		font-size: 24rpx;
		color: #777;
		margin-top: 10rpx;
	}

	.demo-tag {
		display: flex;
		margin-top: 10rpx;

		.demo-tag-owner {
			border: 1px solid rgb(252, 163, 129);
			color: #ffaa00;
			font-size: 20rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 4rpx 14rpx;
			border-radius: 50rpx;
		}

		.demo-tag-text {
			border: 1px solid #00aaff;
			color: #00aaff;
			margin-left: 20rpx;
			border-radius: 50rpx;
			padding: 4rpx 14rpx;
			font-size: 20rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.dot {
		position: absolute;
		top: 20rpx;
		right: 20rpx;
		font-size: 24rpx;
		color: #fff;
		line-height: 32rpx;
		background-color: #ff0000;
		text-align: center;
		border-radius: 10rpx;
		padding: 4rpx 10rpx;
	}

	.topButtom {
		position: fixed;
		bottom: 120rpx;
		right: 30rpx;
		background-color: rgba(0, 0, 0, 0.5);
		width: 88rpx;
		height: 88rpx;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.wrap {
		padding: 20rpx;
	}
</style>