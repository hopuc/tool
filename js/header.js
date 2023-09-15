Vue.component('hopuc-header', {
	template: `
				<header id="header">
					<div class="fixed">
					<div class="logo">
						<a :href="pathname.slice(-10)=='index.html'?'#':'../index.html'" class="" title="HOPUC">
							<img class="logo-svg" src="img/logo.svg">
						</a>
					</div>
					<div class="search">
							<!--<div class="search-bar">
								<input id="" type="text" v-model="q" @keyup.enter="onSearch">
								<a class="search-submit" @click="onSearch">
									<svg t="1588770246625" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14171" width="26" height="26"><path d="M916.7 875.7L797 756c58.1-71 92.9-161.7 92.9-260.6C890 268 705.6 83.6 478.2 83.6S66.4 268 66.4 495.4s184.4 411.8 411.8 411.8c107.7 0 205.7-41.3 279.1-109l118.4 118.4c5.7 5.7 13.1 8.5 20.5 8.5s14.8-2.8 20.5-8.5c11.3-11.2 11.3-29.6 0-40.9z m-300.8-54.3c-43.6 18.4-89.9 27.8-137.7 27.8s-94.1-9.3-137.7-27.8c-42.1-17.8-80-43.3-112.5-75.8s-58-70.4-75.8-112.5c-18.4-43.6-27.8-89.9-27.8-137.7 0-47.8 9.3-94.1 27.8-137.7 17.8-42.1 43.3-80 75.8-112.5s70.4-58 112.5-75.8c43.6-18.4 89.9-27.8 137.7-27.8s94.1 9.3 137.7 27.8c42.1 17.8 80 43.3 112.5 75.8s58 70.4 75.8 112.5c18.4 43.6 27.8 89.9 27.8 137.7 0 47.8-9.3 94.1-27.8 137.7-17.8 42.1-43.3 80-75.8 112.5-32.6 32.5-70.4 58-112.5 75.8z" p-id="14172"></path></svg>
								</a>
							</div>-->
							
					</div>
					<div class="menu" ref="menu" @mouseenter="!mobile?menu=true:''" @mouseleave="!mobile?menu=false:''">
						<a class="menu-button" @click="menu=!menu">
							<svg t="1584717078402" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="34162" width="32" height="32"><path d="M417.6896 484.54656c-22.33856 0-48.84992-0.30208-74.752-0.5888-24.69888-0.27648-48.90624-0.55296-68.33664-0.55296a208.42496 208.42496 0 1 1 207.99488-208.42496l0.0512 35.67104c0.08704 44.47744 0.18944 99.84-0.512 138.60352l-0.6144 34.304-34.21696 0.74752c-8.43776 0.16384-18.51392 0.24064-29.61408 0.24064z m-143.10912-346.624a137.06752 137.06752 0 0 0 0 274.12992c19.6608 0 44.14976 0.27648 69.12 0.55296 23.30624 0.26112 47.104 0.512 67.63008 0.57856 0.22016-32.768 0.14848-70.41536 0.08704-102.4l-0.0512-35.80928a137.088 137.088 0 0 0-136.79104-137.05728z m321.50016 346.624c-11.1104 0-21.18144-0.0768-29.63456-0.256l-34.21696-0.74752-0.60928-34.304c-0.6912-38.74816-0.58368-94.06976-0.512-138.5216l0.04608-35.74784a208.02048 208.02048 0 1 1 208.01536 208.42496c-19.456 0-43.63264 0.27136-68.3264 0.55296-25.91744 0.29696-52.43392 0.59904-74.76736 0.59904z m143.104-346.624a137.08288 137.08288 0 0 0-136.79104 137.0624l-0.0512 35.88608c-0.06144 31.9488-0.13824 69.5552 0.08704 102.31296 20.52608-0.04608 44.31872-0.31744 67.62496-0.57856 24.99072-0.2816 49.47456-0.55296 69.12-0.55296a137.0624 137.0624 0 0 0 0.00512-274.13504zM274.57536 952.32a208.42496 208.42496 0 0 1 0-416.8448c19.456 0 43.63776-0.27648 68.33664-0.55296 38.80448-0.43008 78.94528-0.87552 104.40192-0.3328l34.21696 0.75264 0.6144 34.304c0.6912 38.77376 0.5888 94.12608 0.512 138.60352l-0.0512 35.67104A208.45568 208.45568 0 0 1 274.57536 952.32z m136.76032-346.624c-20.52608 0.04608-44.31872 0.31744-67.62496 0.57856-24.9856 0.27648-49.46944 0.55296-69.12 0.55296a137.06752 137.06752 0 1 0 136.80128 137.06752l0.0512-35.80928c0.04608-31.96928 0.11776-69.62176-0.10752-102.38976z m327.84384 346.624a208.45568 208.45568 0 0 1-208.01536-208.41984l-0.04608-35.74784c-0.08704-44.45184-0.19456-99.77856 0.512-138.5216l0.60928-34.304 34.21696-0.75264c25.46176-0.54272 65.59232-0.09728 104.41216 0.3328 24.69376 0.27648 48.896 0.55296 68.3264 0.55296a208.42496 208.42496 0 0 1-0.01536 416.86016z m-136.7552-346.624c-0.22528 32.768-0.14848 70.36416-0.08704 102.31296l0.0512 35.88608a136.79616 136.79616 0 1 0 136.79104-137.06752c-19.65568 0-44.13952-0.27648-69.12-0.55296-23.31648-0.256-47.10912-0.52736-67.6352-0.57856z" fill="#77c" p-id="34164"></path></svg>
						</a>
						
						<transition name="slide-fade" mode="out-in">
						<div class="menu-content" v-show="menu">
							<a class="menu-item" v-for="(menu,key) in menus" v-show="menu.show" @click="setting(key)">
								<!-- <img :src="menu.img" > -->
								<span>{{menus.language.status?key.charAt(0).toUpperCase()+key.slice(1):menu.name}}</span>
								<label v-if="menu.switch" class="menu-switch">
									<input type="checkbox" :checked="menus[key].status" @click="setting(key)">
									<!-- @click="setting(menu.name)" -->
									<i class="menu-slider"></i>
								</label>
							</a>
						</div>
						</transition>
					</div>
					</div>
				</header>
				`,
	data: function() {
		return {
			q: '',
			menus: {
				/* {
					id: "user",
					name:"我的",
					img:"img/user.svg",
				},
				{
					id: "favorite",
					name:"收藏",
					img:"img/favorite.svg",
				},
				{
					id: "history",
					name:"历史",
					img:"img/history.svg",
				},
				{
					id: "setting",
					name:"设置",
					img:"img/setting.svg",
				},*/
				"language":{
					// id: "language",
					name: "English",
					img: "img/setting.svg",
					switch: true,
					show: true,
					status: false,
				},
				"dark":{
					// id: "dark",
					name: "暗黑模式",
					img: "img/dark.svg",
					switch: true,
					show: true,
					status: false,
				},
				"download":{
					// id: "download",
					name: "APP下载",
					img: "img/setting.svg",
					switch: false,
					show: false,
					// status: true,
				},
				"about":{
					// id: "about",
					name: "关于",
					img: "img/setting.svg",
					switch: false,
					show: true,
					// status: true,
				},
				/* {
					id: "update",
					name:"更新",
					img:"img/update.svg",
					switch: false,
				}, */
				/* {
					id: "safe",
					name:"安全模式",
					img:"img/safe.svg",
					switch: true,
				}, */
			},
			menu: false,
			// safe: true,
			// dark: false,
			// language: false,
			mobile: true,
			mask: false,
			currentVersion: '',
			latestVersion: '',
			ua: '',
			app: false,
		}
	},
	created: function() {
		// this.safe = Boolean(this.getParameter("safe")) || localStorage.getItem('safe') == 'false';
		this.menus.language.status = this.getParameter("language") == 'true' || localStorage.getItem('language') == 'true';
		this.menus.dark.status = this.getParameter("dark") == 'true' || localStorage.getItem('dark') == 'true' || window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		this.$emit('switch-language', this.menus.language.status)
		this.$emit('switch-dark', this.menus.dark.status)
		
		this.pathname = window.location.pathname
		this.isMobile()
		// 获取UA
		this.ua = navigator.userAgent; 
		this.app = /Html5Plus/g.test(this.ua)
		// console.log(this.app)
		this.menus.download.show = !this.app
		document.addEventListener('keydown', (e) => {
			var e = e.which || e.keyCode;
			if (e == 83) {
				// this.switchSafe();
			} else if (e == 69) {
				this.switchLanguage();
			} else if (e == 68) {
				this.switchDark();
			}
		});
		document.addEventListener('click', this.hideMenu);
	},
	mounted: function() {
		
	},
	methods: {
		go: function(url) {
			url = url || 'https://orep.cn'
			window.location.href = url
		},
		getParameter: function(name) {
			var params = new URLSearchParams(window.location.search);
			return params.get(name);
		},
		isMobile: function() {
			let flag = navigator.userAgent.match(
				/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
			);
			this.mobile = !!flag?.length;
		},
		onSearch: function() {
			window.location.href = 'search.html?q=' + this.q
		},
		/* switchSafe: function() {
			this.safe ? this.safe = false : this.safe = true
			localStorage.setItem('safe', this.safe)
			console.log('safe mode: ', this.safe)
		}, */
		/* switchLanguage: function() {
			this.language = !this.language;
			localStorage.setItem('language', this.language)
			this.$emit('switch-language', this.language)
			console.log('language mode: ', this.language)
		},
		switchDark: function() {
			this.dark = !this.dark;
			localStorage.setItem('dark', this.dark)
			this.$emit('switch-dark', this.dark)
			console.log('dark mode: ', this.dark)
		}, */
		switchAbout: function() {
			this.mask = !this.mask
			this.$emit('switch-mask', this.mask)
		},
		/* switchMenu: function() {
			this.menu = !this.menu;
		}, */
		hideMenu: function(e) {
			// console.log(e.target);
			// console.log(this.$refs.menu.contains(e.target));
			if (!this.$refs.menu.contains(e.target)) {
				this.menu = false;
			}
		},
		setting: function(e) {
			this.menus[e].status = !this.menus[e].status
			localStorage.setItem(e, this.menus[e].status)
			this.$emit('switch-'+e, this.menus[e].status)
			/* if(e == 'safe'){
				this.switchSafe()
			}else if(e == 'language'){
				this.switchLanguage()
			}else if(e == 'dark'){
				this.switchDark()
			}else if(e == 'about'){
				this.switchAbout()
			} */
			const actions = {
				// 'safe': this.switchSafe,
				// 'english': this.switchLanguage,
				// 'dark': this.switchDark,
				'about': this.switchAbout,
				'download':this.go,
			};
			actions[e]?.();
			console.log('setting: ', e)
		},
		checked: function(e) {
			return this[e] && this[e] !== 'false'
			/*if (e == 'safe') {
				return this.safe && this.safe !== 'false';
				console.log('safe mode: ', safe && safe !== 'false');
			} else if (e == 'english') {
				return this.language && this.language !== 'false'
				console.log('language mode: ', this.language);
			} else if (e == 'dark') {
				return this.dark && this.dark !== 'false'
				console.log('dark mode: ', this.dark);
			}*/
			
		},
	}
})