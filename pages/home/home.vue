<template>
	<view class="content">
		<view class="topBox">
			<view class="setbox">
				<view class="left">
					<uni-icons type="calendar" size="30" color="#fff"></uni-icons>
					<view class="text">签到</view>
				</view>
				<view class="right">
					<uni-icons type="gear" size="30" color="#fff"></uni-icons>
					<uni-icons type="chat" size="30" color="#fff"></uni-icons>
				</view>
			</view>

			<view class="user" @click="getUserInfo">
				<view class="u-top">
					<template v-if="!userInfo.nickName">
						<image src="../../static/tt.jpg" mode="aspectFill"></image>
						<view class="title">
							注册 / 登录
						</view>
					</template>
					<template v-else>
						<image :src="userInfo.avatarUrl" mode="aspectFill"></image>
						<view class="title">
							{{ userInfo.nickName }}
						</view>
					</template>
				</view>
				<view class="u-bottom">
					<view class="item">
						<view class="number">12</view>
						<view class="text">点赞</view>
					</view>
					<view class="item">
						<view class="number">12</view>
						<view class="text">喜欢</view>
					</view>
					<view class="item">
						<view class="number">12</view>
						<view class="text">浏览</view>
					</view>
					<view class="item">
						<view class="number">12</view>
						<view class="text">收藏</view>
					</view>
				</view>
			</view>
		</view>
		<up-popup :show="show" @close="close" round="20" closeable="">
			<view class="pop">
				<view class="title">获取您的昵称、头像</view>
				<view class="flex">
					<view class="label">获取用户头像：</view>
					<button class="avatar-warpper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
						<image class="avatar" :src="userInfo.avatarUrl"></image>
					</button>
				</view>
				<view class="flex">
					<view class="label">获取用户昵称：</view>
					<input @input="changeName" type="nickname">
				</view>
				<button size="default" type="primary" @click="userSubmit">确定</button>
			</view>
		</up-popup>

		<view class="bottomBox">
			<view class="list">
				<uni-list>
					<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" showArrow title="个人信息"
						clickable></uni-list-item>
					<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon2" showArrow title="我的购物车"
						clickable></uni-list-item>
					<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon3" showArrow title="用户反馈"
						clickable></uni-list-item>
					<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon4" showArrow title="我的邮件"
						clickable></uni-list-item>
					<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon5" showArrow title="分享有礼"
						clickable></uni-list-item>
				</uni-list>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue';

	import {
		apiLogin,
		apiGetUserInfo
	} from '../../api/api';

	import {
		onLoad
	} from '@dcloudio/uni-app'

	let userInfo = reactive({
		nickName: '',
		avatarUrl: ''
	})

	let show = ref(false)

	const extraIcon1 = reactive({
		color: '#666666',
		size: '22',
		type: 'auth'
	})
	const extraIcon2 = reactive({
		color: '#666666',
		size: '22',
		type: 'cart'
	})
	const extraIcon3 = reactive({
		color: '#666666',
		size: '22',
		type: 'chatboxes'
	})
	const extraIcon4 = reactive({
		color: '#666666',
		size: '22',
		type: 'email'
	})

	const extraIcon5 = reactive({
		color: '#666666',
		size: '22',
		type: 'gift'
	})


	/**
	 * 获取用户信息
	 */
	function getUserInfo() {
		uni.showModal({
			title: '温馨提升',
			content: '亲，授权微信登录后才能正常使用小程序',
			success(res) {
				if (res.confirm) {
					uni.login({
						success: async (res) => {
							show.value = true
							let {
								token
							} = await apiLogin(res.code);
							uni.setStorageSync('token', token)
							const {
								avatarUrl,
								nickName
							} = await apiGetUserInfo()
							userInfo.avatarUrl = avatarUrl
							userInfo.nickName = nickName
						},
						fail(err) {
							console.log(err);
						}
					})
				}
			}
		})
	}

	/**
	 * 关闭弹窗
	 */
	function close() {
		show.value = false
	}

	/**
	 * 用户信息提交
	 */
	function userSubmit() {
		show.value = false
		uni.setStorageSync('userInfo', JSON.stringify(userInfo))
	}

	/**
	 * 选择头像
	 * @param {Object} e
	 */
	function onChooseAvatar(e) {
		console.log(e);
		userInfo.avatarUrl = e.detail.avatarUrl
	}

	/**
	 * 选择名称
	 * @param {Object} e
	 */
	function changeName(e) {
		userInfo.nickName = e.detail.value
	}


	onLoad(async () => {
		if (uni.getStorageSync('token') && !uni.getStorageSync('userInfo')) {
			let {
				avatarUrl,
				nickName
			} = await apiGetUserInfo()
			userInfo.avatarUrl = avatarUrl
			userInfo.nickName = nickName
		} else {
			let {
				avatarUrl,
				nickName
			} = uni.getStorageSync('userInfo')
			userInfo.avatarUrl = avatarUrl
			userInfo.nickName = nickName
		}
	})
</script>

<style lang="scss" scoped>
	.content {
		height: 100vh;
		background-color: #f5f5f5;

		.topBox {
			width: 100%;
			position: relative;
			z-index: 1;
			overflow: hidden;
			padding: 40rpx 20rpx 40rpx;
		}

		.topBox::after {
			content: "";
			width: 140%;
			height: 200px;
			position: absolute;
			top: 0;
			left: -20%;
			z-index: -1;
			background-color: #00c5f1;
			border-radius: 0 0 50% 50%;
		}

		.setbox {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.left {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.text {
					color: #fff;
					font-size: 35rpx;
				}
			}

			.right {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}

		.user {
			margin-top: 35rpx;
			padding: 30rpx;
			height: 280rpx;
			background-color: #fff;
			box-shadow: 1px 10rpx 20rpx #ececec;
			border-radius: 16rpx;

			.u-top {
				display: flex;
				justify-content: flex-start;
				align-items: center;

				image {
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
					margin-right: 20rpx;
				}

				.title {
					font-size: 30rpx;
					font-weight: 700;
					color: #333;
				}
			}

			.u-bottom {
				margin-top: 25rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;

				.item {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;

					.text {
						color: #757575;
						font-size: 26rpx;
						margin-top: 10rpx;
					}

					.number {
						color: #000;
						font-size: 33rpx;
						font-weight: 700;
					}
				}
			}
		}

		.pop {
			padding: 20rpx;
			border-radius: 20rpx 20rpx 0 0;

			.title {
				margin-bottom: 20rpx;
				font-size: 40rpx;
				text-align: center;
			}

			.flex {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				border-bottom: 1px solid #f5f5f5;
				padding: 24rpx 0;
			}

			image {
				width: 70rpx;
				height: 70rpx;
			}

			.avatar-warpper {
				border: none;
				border-radius: 10rpx;
				width: 70rpx;
				height: 70rpx;
				margin-left: 20rpx;
				padding: 0;
			}
		}

		.list {
			height: 200rpx;
			margin: -10rpx auto 0;
			padding: 20rpx;
			border-radius: 20rpx;
		}
	}
</style>