import {
	request
} from "../utils/request";

/**
 * 首页banner
 */
export function apiGetBanner() {
	return request({
		url: '/user/getBanner'
	})
}

/**
 * 获取瀑布流数据
 */
export function apiGetHomeList() {
	return request({
		url: '/user/getHomeList'
	})
}

/**
 * 获取用户数据
 * @param {Object} code
 */
export function apiLogin(code) {
	return request({
		url: '/login',
		method: 'post',
		data: {
			code
		}
	})
}


/**
 * 获取用户信息
 */
export function apiGetUserInfo() {
	return request({
		url: '/getUserInfo'
	})
}


/**
 * 获取推荐景点
 */
export function apiDetailProject() {
	return request({
		url: '/detail/project'
	})
}


/**
 * 获取推荐的详情信息
 * @param {Object} id
 */
export function apiProjectInfo(data) {
	return request({
		url: '/project/info',
		data: data
	})
}


/**
 * 获取我的喜欢
 */
export function likeList() {
	return request({
		url: '/like/list'
	})
}