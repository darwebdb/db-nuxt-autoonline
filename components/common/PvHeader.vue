<template>
	<header class="header">
		<div class="header-top">
			<div class="container">
				<div class="header-left">
					<div class="header-dropdown">
						<a href="javascript:;">EUR</a>
						<div class="header-menu">
							<ul>
								<li><a href="javascript:;">EUR</a></li>
								<!-- <li><a href="javascript:;">USD</a></li> -->
							</ul>
						</div>
					</div>

					<div class="header-dropdown">
						<a href="javascript:;"><i class="flag-us flag"></i>NL</a>
						<div class="header-menu">
							<ul>
								<li><a href="javascript:;"><i class="flag-nl flag mr-2"></i>NL</a>
								</li>
								<li><a href="javascript:;"><i class="flag-us flag mr-2"></i>EN</a></li>
							</ul>
						</div>
					</div>
				</div>

				<div class="header-right d-none d-lg-flex">
					<p class="top-message text-uppercase mr-2">Default Welcome Msg</p>
					<div class="header-dropdown dropdown-expanded">
						<a href="javascript:;">Links</a>
						<div class="header-menu">
							<ul>
								<li>
									<nuxt-link to="/pages/account">My Account</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/pages/cart">Cart</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/pages/wishlist">My Wishlist</nuxt-link>
								</li>
								<li>
									<nuxt-link to="/pages/blog">Blog</nuxt-link>
								</li>
								<li><a
										href="javascript:;"
										class="login-link"
										@click="openLoginModal"
									>Log in</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="header-middle sticky-header">
			<div class="container">
				<div class="header-left">
					<button
						class="mobile-menu-toggler"
						type="button"
						@click="showMobileMenu"
					>
						<i class="fas fa-bars"></i>
					</button>

					<nuxt-link
						to="/"
						class="logo"
					>
						<img
							src="~/static/images/logos/logo-autoonline.svg"
							width="222"
							height="88"
							alt="Autoonline"
						/>
					</nuxt-link>

					<pv-main-menu></pv-main-menu>
				</div>

				<div class="header-right">
					<pv-header-search></pv-header-search>
					<nuxt-link
						to="/pages/wishlist"
						class="header-icon"
						title="wishlist"
					>
						<i class="icon-wishlist-2 line-height-1"></i>
					</nuxt-link>

					<pv-cart-menu></pv-cart-menu>
				</div>
			</div>
		</div>

		<div class="header-bottom">
			<pv-carousel
				:options="infoSlider"
				class="info-boxes-slider"
			>
				<div class="info-box info-box-icon-left swiper-slide">
					<i class="icon-shipping text-white"></i>

					<div class="info-box-content">
						<h4 class="text-white">Free Shipping &amp; Return</h4>
					</div>
				</div>

				<div class="info-box info-box-icon-left swiper-slide">
					<i class="icon-money text-white"></i>

					<div class="info-box-content">
						<h4 class="text-white">Money Back Guarantee</h4>
					</div>
				</div>

				<div class="info-box info-box-icon-left swiper-slide">
					<i class="icon-support text-white"></i>

					<div class="info-box-content">
						<h4 class="text-white">Online Support 24/7</h4>
					</div>
				</div>
			</pv-carousel>
		</div>
	</header>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import PvMainMenu from '~/components/common/partials/PvMainMenu';
import PvCartMenu from '~/components/common/partials/PvCartMenu';
import PvHeaderSearch from '~/components/common/partials/PvHeaderSearch';
import { infoSlider } from '~/utils/data/carousel';

document.querySelector( 'body' ).classList.add( 'loaded' );

export default {
	components: {
		PvMainMenu,
		PvCartMenu,
		PvHeaderSearch,
		PvCarousel
	},
	data: function () {
		return {
			infoSlider: infoSlider
		}
	},
	methods: {
		openLoginModal: function () {
			this.$modal.show(
				() => import( '~/components/features/modal/PvLoginModal' ),
				{},
				{ width: '525', height: 'auto', adaptive: true }
			);
		},
		showMobileMenu: function () {
			document.querySelector( 'body' ).classList.add( 'mmenu-active' );
		},
		showMobileSearch: function ( e ) {
			let headerSearch = e.currentTarget.closest( '.header-search' );
			headerSearch.classList.add( 'show' );
			headerSearch
				.querySelector( '.header-search-wrapper' )
				.classList.add( 'show' );
		}
	}
};
</script>