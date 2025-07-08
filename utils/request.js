let baseURL = ''

// 通过环境来判断
if (process.env.NODE_ENV === 'development') {
	baseURL = 'https://apifoxmock.com/m1/4728220-0-default/api'
} else {
	baseURL = 'https://apifoxmock.com/m1/4728220-0-default/api'
}

export function request(config = {}) {
	let {
		url,
		data = {},
		method = 'GET',
		header = {
			'token': uni.getStorageSync('token') || ''
		}
	} = config

	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURL + url,
			data: data,
			method: method,
			header: header,
			success(res) {
				if (res.statusCode === 200) {
					if (res.data.code === 1) {
						resolve(res.data.data)
					} else if (res.data.code === 0) {
						uni.showToast({
							title: res.data.msg,
							icon: "none"
						})
						reject(res.data.msg)
					}
				}
			},
			fail(err) {
				uni.showToast({
					title: '服务器异常',
					icon: "none"
				})
				reject(err)
			}
		})
	})
}