<template>
	<view class="content">
		<up-navbar title="" bg-color="#00000000" :autoBack="true" left-icon-color="#fff"></up-navbar>
		<view class="detail">
			<image class="photo" :src="itemData.img" mode="aspectFill"></image>
			<view class="d-content">
				<view class="title">
					<text class="t-title">{{itemData.title}}</text>
					<up-tag text="5A级景区" size="mini" shape="circle"></up-tag>
				</view>
				<view class="introduction">
					<text class="i-title">景区介绍: </text>
					<text class="i-content">{{itemData.introduce}}</text>
				</view>
				<view class="time">
					<text class="time-title">开放时间: </text>
					<text class="time-content">{{itemData.times}}</text>
				</view>
				<view class="recommend">
					<view class="title">游玩推荐</view>
					<view class="r-content">
						<view class="item" v-for="(item,index) of detailProjectList" :key="index" @click="goLine(item)">
							<image :src="item.url" mode="aspectFill"></image>
							<view class="topBar">{{ item.tag }}</view>
							<view class="recomend-content">
								<text class="recomend-title">{{item.title}}</text>
								<view class="desc">
									<up-icon name="map" color="#9c9c9c" size="16"></up-icon>
									<text class="text">{{ item.desc }}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		reactive,
		ref
	} from 'vue';
	import {
		apiDetailProject
	} from '@/api/api.js'


	let itemData = reactive({})
	let detailProjectList = ref([])

	onLoad((data) => {
		let ret = JSON.parse(decodeURIComponent(data.item))
		console.log(ret);
		Object.assign(itemData, ret)
		console.log(itemData, 'itemData');
	})


	/**
	 * 获取推荐景点
	 */
	async function detailProject() {
		console.log('hello world');
		let ret = await apiDetailProject();
		detailProjectList.value = ret
	}
	detailProject()



	/**
	 * 跳转地图页面
	 * @param {Object} item
	 */
	function goLine(item) {
		console.log(item);
		uni.navigateTo({
			url: `/pages/line/line?id=${item.id}`
		})
	}
</script>

<style lang="scss" scoped>
	.content {
		background-color: #f5f5f5;

		.detail {
			.photo {
				width: 100%;
				height: 600rpx;
			}

			.d-content {
				width: 100%;
				min-height: 700rpx;
				margin-top: -40rpx;
				background-color: #fff;
				padding: 35rpx 30rpx;
				border-radius: 30rpx;
				box-shadow: 0 4rpx 24rpx rgba(0, 0, 0, 0.06);

				.title {
					display: flex;
					align-items: center;
					font-size: 36rpx;
					font-weight: 700;
					color: #111;
					padding: 30rpx 0 20rpx 0;

					.t-title {
						margin-right: 12rpx;
						font-size: 32rpx;
					}
				}

				.introduction {
					margin-bottom: 24rpx;

					.i-title {
						font-weight: 700;
						font-size: 28rpx;
					}

					.i-content {
						font-size: 26rpx;
						color: #8a8a8a;
						line-height: 40rpx;
					}
				}

				.time {
					margin-bottom: 24rpx;

					.time-title {
						font-weight: 700;
						font-size: 28rpx;
					}

					.time-content {
						font-size: 26rpx;
						color: #8a8a8a;
						line-height: 40rpx;
					}
				}

				.recommend {
					margin-top: 20rpx;

					.title {
						font-size: 32rpx;
						font-weight: 700;
						margin-bottom: 16rpx;
					}

					.r-content {
						display: flex;
						flex-wrap: wrap;
						gap: 18rpx 3%;
						justify-content: flex-start;

						.item {
							position: relative;
							width: 48.5%;
							margin-bottom: 18rpx;
							background: #fafafa;
							box-shadow: 0 2rpx 8rpx #e5e5e5;
							border-radius: 18rpx;
							overflow: hidden;
							transition: box-shadow 0.2s;

							&:hover {
								box-shadow: 0 6rpx 24rpx #e5e5e5;
							}

							image {
								width: 100%;
								height: 200rpx;
								object-fit: cover;
								border-top-left-radius: 18rpx;
								border-top-right-radius: 18rpx;
							}

							.topBar {
								position: absolute;
								top: 0;
								left: 0;
								border-top-left-radius: 18rpx;
								border-bottom-right-radius: 18rpx;
								background-color: #ffaa7f;
								color: #fff;
								text-align: center;
								font-size: 22rpx;
								padding: 5rpx 20rpx;
								box-sizing: border-box;
								z-index: 2;
							}

							.recomend-content {
								padding: 18rpx 16rpx 12rpx 16rpx;

								.recomend-title {
									margin: 10rpx 0;
									font-size: 30rpx;
									font-weight: 800;
									color: #222;
									margin-bottom: 12rpx;
									text-overflow: ellipsis;
									white-space: nowrap;
									overflow: hidden;
									letter-spacing: 1rpx;
								}

								.desc {
									display: flex;
									justify-content: flex-start;
									align-items: center;
									gap: 10rpx;
									padding: 6rpx 0 0 0;

									.text {
										font-size: 25rpx;
										color: #666;
										line-height: 1.6;
										letter-spacing: 0.5rpx;
									}
								}
							}
						}
					}
				}
			}
		}

	}
</style>