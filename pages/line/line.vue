<template>
	<view class="lineLayout">
		<view class="mapBox">
			<map class="map" v-if="detailInfo.id" :markers="detailInfo.markers" :latitude="detailInfo.location[0]"
				:longitude="detailInfo.location[1]" :show-scale="true"></map>
		</view>
		<view class="content">
			<view class="title">当前游玩项目：{{detailInfo.title}}</view>
			<view class="stars">
				<text>项目推荐：</text>
				<up-rate :count="count" v-model="detailInfo.count"></up-rate>
			</view>

			<view class="scrollBox">
				<up-scroll-list :indicator="true" indicatorColor="#fff0f0" indicatorActiveColor="#f56c6c">
					<view class="item" v-for="item in detailInfo.other" :key="item.id">
						<image class="img" :src="item.url" mode="aspectFill"></image>
						<view class="desc">
							{{item.name}}
						</view>
					</view>
				</up-scroll-list>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		apiProjectInfo
	} from '../../api/api';
	import {
		onLoad
	} from '@dcloudio/uni-app'


	let detailInfo = ref({})


	onLoad((data) => {
		console.log(data.id);
		projectInfo(data.id)
	})


	/**
	 * 获取推荐的详情信息
	 * @param {Object} id
	 */
	async function projectInfo(id) {
		let ret = await apiProjectInfo({
			id: id
		})
		console.log(ret);
		detailInfo.value = ret
	}
</script>

<style lang="scss" scoped>
	.lineLayout {
		.mapBox {
			.map {
				width: 100%;
				height: 900rpx;
			}
		}

		.content {
			padding: 20rpx;

			.title {
				font-size: 34rpx;
				font-weight: 600;
				color: #333;
			}

			.stars {
				font-size: 28rpx;
				margin: 20rpx 0 40rpx;
				display: flex;
				justify-content: flex-start;
			}

			.scrollBox {
				.item {
					margin-right: 20rpx;
					text-align: center;

					.img {
						width: 320rpx;
						height: 200rpx;
						border-radius: 14rpx;
					}

					.desc {
						font-size: 28rpx;
						font-weight: 600;
						color: #333;
						margin-top: 10rpx;
					}
				}
			}
		}
	}
</style>