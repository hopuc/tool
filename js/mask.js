Vue.component('hopuc-mask', {
	template: ` 
	            <transition name="slide-fade" mode="out-in">
				<div id="mask" v-show="show">
					<div id="container">
						<div id="tab">
							<a :class="tab=='about'?'on':''" @click="change('about')">About</a>
							<a :class="tab=='contact'?'on':''" @click="change('contact')">Contact</a>
						</div>
						<div id="tab-box">
							<div class="tab-con" id="" v-show="tab=='about'">
								<div class="group">
									<p>当前版本</p>
									<p>{{currentVersion}}</p>
									<p>最新版本</p>
									<p>{{latestVersion}}</p>
								</div>
								<div class="ins-submit">
									<button class="button button-submit" id="btn-about" @click="update">更新版本</button>
									<button class="button button-submit" id="btn-about" @click="switchMask">取消</button>
								</div>
							</div>
							<div class="tab-con" id="" v-show="tab=='contact'">
								<div class="group">
									<p>官网</p>
									<a href="https://orep.cn" class="link">https://orep.cn</a>
									<p>电话</p>
									<a href="tel:+86 18500991101" class="link">+86 18500991101</a>
									<p>邮箱</p>
									<a href="mailto:hopuc@outlook.com" class="link">hopuc@outlook.com</a>
								</div>
								<div class="ins-submit">
									<button class="button button-submit" id="btn-contact" @click="switchMask">确认</button>
									<button class="button button-submit" id="btn-contact" @click="switchMask">取消</button>
								</div>
							</div>
						</div>
						<a class="icon-close" @click="switchMask"></a>
					</div>
				</div>
				</transition>
				`,
	props: ['show', 'currentVersion', 'latestVersion', 'updateUrl'],
	data: function() {
		return {
			// mask: false,
			tab: 'about',
			// currentVersion: '',
			// latestVersion: '',
			// latestUrl: '',
			// key:'',
			/* menu: false,
			safe: true,
			dark: false,
			mobile: true,
			language: false, */
			app: false,
		}
	},
	watch: {
		/* show(newValue, oldValue) {
			this.mask = this.show
		}, */
		latestVersion(newValue, oldValue) {
			this.update('check')
		},
		/* currentVersion(newValue, oldValue) {
			this.update('check')
		}, */
	},
	created: function() {
		this.app = /Html5Plus/g.test(this.ua)
	},
	methods: {
		change: function(e) {
			console.log(e);
			if (e === 'show') {
				// this.show = !this.show;
			} else {
				this.tab = e;
			}
		},
		update: function(check) {
			function compareVersions(version1, version2) {
				const v1 = version1.split('.').map(Number);
				const v2 = version2.split('.').map(Number);
				for (let i = 0; i < v1.length || i < v2.length; i++) {
					if (v1[i] > (v2[i] || 0)) {
						return 1; // version1 is greater than version2
					} else if (v1[i] < (v2[i] || 0)) {
						return -1; // version1 is less than version2
					}
				}
				return 0; // version1 is equal to version2
			}
			// 获取存储的时间戳
			const storedTimestamp = localStorage.getItem('timestamp');
			// 获取当前时间戳
			const currentTimestamp = new Date().getTime();
			// 如果没有存储过时间戳，或者当前时间与存储的时间戳相差超过一天
			if (check !== 'check' || !storedTimestamp || (currentTimestamp - storedTimestamp > 24 * 60 *
					60 * 1000)) {
				// if (this.currentVersion.length > 0 && compareVersions(this.currentVersion, this.latestVersion) < 0) {
				if (this.app && compareVersions(this.currentVersion, this.latestVersion) < 0) {
					var r = confirm("有新版本可用，是否更新至最新版本")
					if (r == true) {
						let index = Math.floor((Math.random() * this.updateUrl.length))
						// console.log(index)
						// window.open(this.updateUrl[index], '_blank');
						function downloadFile(url, newName) {
							var a = document.createElement('a');
							a.href = url;
							a.download = newName;
							a.click();
						}
						downloadFile(this.updateUrl[index], `OrepTool${this.latestVersion}.apk`);
						console.log('Update is download');
					} else {
						console.log('Update is cancel');
					}
					console.log('Update is needed');
				} else {
					if (check !== 'check') {
						alert('目前已是最新版本')
					}
					console.log('No update is needed');
				}
				// 更新存储的时间戳
				localStorage.setItem('timestamp', currentTimestamp);
			}
		},
		switchMask: function() {
			this.mask = !this.show
			this.$emit('switch-mask', this.mask)
		},
	}
})