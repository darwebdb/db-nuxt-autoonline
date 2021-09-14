<template>
	<nav class="main-nav d-none d-lg-flex flex-wrap">
		<ul class="menu main-menu menu-arrow">
			<li>
				<nuxt-link to="/">Home</nuxt-link>
			</li>

			<li>
				<nuxt-link
					to="/bekijk-autos"
					:class="{active: $route.path.indexOf('/bekijk-autos/') > -1}"
				>Bekijk Autos</nuxt-link>

			</li>

			<li>
				<nuxt-link
					to="/product/default/bicycle-two"
					:class="{active: $route.path.indexOf('/product') > -1}"
				>Lease Online</nuxt-link>

				<div class="megamenu megamenu-fixed-width megamenu-3cols">
					<div class="row">
						<div class="col-lg-4">
							<a
								href="javascript:;"
								class="nolink"
							>PRODUCT PAGES</a>

							<ul class="submenu">
								<li
									v-for="item in mainMenu.product.pages"
									:key="item.title"
								>
									<nuxt-link :to="item.url">
										{{ item.title }}
										<span
											class="tip tip-hot"
											v-if="item.hot"
										>Hot</span>
									</nuxt-link>
								</li>
							</ul>
						</div>

						<div class="col-lg-4">
							<a
								href="javascript:;"
								class="nolink"
							>PRODUCT LAYOUTS</a>

							<ul class="submenu">
								<li
									v-for="item in mainMenu.product.layout"
									:key="item.title"
								>
									<nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
								</li>

								<li>
									<a href="javascript:;">Build your own</a>
								</li>
							</ul>
						</div>

						<div class="col-lg-4 p-0">
							<div class="menu-banner menu-banner-2">
								<figure>
									<img
										src="~/static/images/menu-banner-1.jpg"
										alt="Menu banner"
										class="product-promo"
										width="380"
										height="790"
									/>
								</figure>
								<i>OFF</i>
								<div class="banner-content">
									<h4>
										<span class>UP TO</span>
										<br />
										<b class>50%</b>
									</h4>
								</div>
								<nuxt-link
									to="/shop"
									class="btn btn-sm btn-dark"
								>SHOP NOW</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</li>

			<li class="d-none d-xxl-block">
				<nuxt-link
					to="/pages/blog"
					:class="{active: $route.path.indexOf('/pages/blog') > -1}"
				>Blog</nuxt-link>
			</li>

			<li>
				<a
					href="javascript:;"
					class="sub-menu-link"
					:class="{active: isPageItemActived}"
				>Pages</a>

				<ul>
					<li
						v-for="item in mainMenu.other"
						:key="item.title"
					>
						<nuxt-link
							:to="item.url"
							:class="{'sub-menu-link': item.subPages}"
						>{{ item.title }}</nuxt-link>

						<ul v-if="item.subPages">
							<li
								v-for="subItem in item.subPages"
								:key="subItem.title"
							>
								<nuxt-link :to="subItem.url">{{ subItem.title }}</nuxt-link>
							</li>
						</ul>
					</li>
				</ul>
			</li>

		</ul>
	</nav>
</template>
<script>
import { mainMenu } from '~/utils/data/menu';

export default {
	data: function () {
		return {
			mainMenu
		};
	},
	computed: {
		isPageItemActived: function () {
			let exItems = [ 'blog', 'about-us', 'contact-us' ];

			if (
				this.$route.path.includes( '/pages' ) &&
				exItems.findIndex( item => this.$route.path.includes( item ) ) ===
				-1
			) {
				return true;
			}

			return false;
		},
		isHome: function () {
			if ( this.$route.path === '/' ) return true;
			return false;
		}
	}
};
</script>