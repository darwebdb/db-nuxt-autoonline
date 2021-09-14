<template>
	<pv-carousel
		class="categories-slider swiper-carousel swiper-theme mb-4 appear-animate"
		data-animation-name="fadeInUpShorter"
		data-animation-delay="200"
		v-animate
		:options="brandSlider"
	>
		<div class="swiper-slide">
			<nuxt-link :to="{path: '/shop', query: {category: 'bike-saddles'}}">
				<div class="product-category">
					<img
						src="~/static/images/home/icons/icon-1.png"
						alt="icon"
						width="60"
						height="60"
					>
					<div class="category-content">
						<h3 class="font2 ls-0 text-uppercase mb-0">Bike Saddles</h3>
					</div>
				</div>
			</nuxt-link>
		</div>

		<div class="swiper-slide">
			<nuxt-link :to="{path: '/shop', query: {category: 'bike-pedals'}}">
				<div class="product-category">
					<img
						src="~/static/images/home/icons/icon-2.png"
						alt="icon"
						width="60"
						height="60"
					>
					<div class="category-content">
						<h3 class="font2 ls-0 text-uppercase mb-0">Bike Pedals</h3>
					</div>
				</div>
			</nuxt-link>
		</div>

		<div class="swiper-slide">
			<nuxt-link :to="{path: '/shop', query: {category: 'bike-frames'}}">
				<div class="product-category">
					<img
						src="~/static/images/home/icons/icon-3.png"
						alt="icon"
						width="60"
						height="60"
					>
					<div class="category-content">
						<h3 class="font2 ls-0 text-uppercase mb-0">Bike Frames</h3>
					</div>
				</div>
			</nuxt-link>
		</div>

		<div class="swiper-slide">
			<nuxt-link :to="{path: '/shop', query: {category: 'bike-chains'}}">
				<div class="product-category">
					<img
						src="~/static/images/home/icons/icon-4.png"
						alt="icon"
						width="60"
						height="60"
					>
					<div class="category-content">
						<h3 class="font2 ls-0 text-uppercase mb-0">Bike Chains</h3>
					</div>
				</div>
			</nuxt-link>
		</div>

		<div class="swiper-slide">
			<nuxt-link :to="{path: '/shop', query: {category: 'bike-tools'}}">
				<div class="product-category">
					<img
						src="~/static/images/home/icons/icon-5.png"
						alt="icon"
						width="60"
						height="60"
					>
					<div class="category-content">
						<h3 class="font2 ls-0 text-uppercase mb-0">Bike Tools</h3>
					</div>
				</div>
			</nuxt-link>
		</div>
	</pv-carousel>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import { brandSlider } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel
	},
	data: function () {
		return {
			brandSlider: brandSlider
		}
	}
}
</script>