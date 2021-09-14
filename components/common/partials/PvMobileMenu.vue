<template>
	<div>
		<div
			class="mobile-menu-overlay"
			@click="hideMobileMenu"
		></div>

		<div class="mobile-menu-container">
			<div class="mobile-menu-wrapper">
				<span
					class="mobile-menu-close"
					@click="hideMobileMenu"
				>
					<i class="fa fa-times"></i>
				</span>

				<nav class="mobile-nav">
					<ul class="mobile-menu">
						<li>
							<nuxt-link to="/">Home</nuxt-link>
						</li>

						<li :class="{open: prodOpened}">
							<nuxt-link
								to="/bekijk-autos"

							>
								Bekijk Auto's

							</nuxt-link>
						</li>

						<li :class="{open: pageOpened}">
							<nuxt-link
								to="/pages/about-us"
							>
								Lease Online
							</nuxt-link>

							<vue-slide-toggle :open="pageOpened">
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
							</vue-slide-toggle>
						</li>

						<li>
							<nuxt-link to="/pages/blog">Blog</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/pages/about-us">About Us</nuxt-link>
						</li>
					</ul>

					<ul class="mobile-menu mt-2 mb-2">
						<li class="border-0">
							<a href="javascript:;">Special Offer!</a>
						</li>

					</ul>

					<ul class="mobile-menu">
						<li>
							<nuxt-link to="/pages/account">My Account</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/pages/contact-us">Contact Us</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/pages/blog">Blog</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/pages/wishlist">My Wishlist</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/pages/cart">Cart</nuxt-link>
						</li>
						<li>
							<nuxt-link
								to="/pages/login"
								class="login-link"
							>Log In</nuxt-link>
						</li>
					</ul>
				</nav>

				<form
					class="search-wrapper mb-2"
					action="#"
					@submit.prevent="submitSearchForm"
				>
					<input
						type="text"
						class="form-control mb-0"
						placeholder="Search..."
						required
						v-model="search_term"
					/>
					<button
						class="btn icon-search text-white bg-transparent p-0"
						type="submit"
					></button>
				</form>

				<div class="social-icons">
					<a
						href="javascript:;"
						class="social-icon social-facebook icon-facebook"
					></a>
					<a
						href="javascript:;"
						class="social-icon social-twitter icon-twitter"
					></a>
					<a
						href="javascript:;"
						class="social-icon social-instagram icon-instagram"
					></a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle';
import { mainMenu } from '~/utils/data/menu';

export default {
	components: {
		VueSlideToggle
	},
	data: function () {
		return {
			mainMenu: mainMenu,
			catOpened: false,
			var1Opened: false,
			var2Opened: false,
			prodOpened: false,
			prod1Opened: false,
			prod2Opened: false,
			pageOpened: false,
			search_term: ''
		};
	},
	methods: {
		hideMobileMenu: function () {
			document.querySelector( 'body' ).classList.remove( 'mmenu-active' );
		},
		submitSearchForm: function ( e ) {
			this.$router.push( {
				path: '/bekijk-autos',
				query: {
					search_term: this.search_term
				}
			} );
		}
	}
};
</script>