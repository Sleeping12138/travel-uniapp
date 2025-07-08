<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	/* 引入 uView Plus 样式 */
	@import '@/uni_modules/uview-plus/index.scss';
	@import '@/common/common-style.scss';
</style>