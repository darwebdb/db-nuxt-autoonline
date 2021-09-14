<template>
	<section class="trendy-section mb-2">
		<div class="container">
			<h2
				class="section-title appear-animate"
				data-animation-name="fadeInUpShorter"
				data-animation-delay="200"
				v-animate
			>Trending Accessories</h2>

			<div
				class="row"
				data-animation-name="fadeInUpShorter"
				data-animation-delay="200"
				v-animate
			>
				<pv-carousel
					:options="popularSlider"
					class="w-100"
					v-if="products.length === 0"
				>
					<div
						class="swiper-slide"
						v-for="index in [1,2,3,4,5]"
						:key="'popular' + index"
					>
						<div class="product-loading-overlay"></div>
					</div>
				</pv-carousel>
			</div>

			<div
				class="row"
				v-if="products.length > 0"
			>
				<pv-carousel
					class="products-slider appear-animate w-100"
					data-animation-name="fadeInUpShorter"
					data-animation-delay="200"
					:options="popularSlider"
					v-animate
				>
					<div
						class="swiper-slide"
						v-for="(product,index) in products.slice(0,5)"
						:key="'popular' + index"
					>
						<pv-product-one :product="product"></pv-product-one>
					</div>
				</pv-carousel>
			</div>

			<div class="row">
				<div class="col-xl-6 mb-2">
					<div
						class="banner banner3 d-flex flex-wrap align-items-center bg-gray h-100 appear-animate"
						data-animation-name="fadeInRightShorter"
						data-animation-delay="100"
						v-animate
					>
						<div class="col-sm-4 text-center">
							<h3 class="font5 mb-0">Summer Sale</h3>
							<h2 class="text-uppercase mb-0">20% off</h2>
						</div>
						<div class="col-sm-4">
							<img
								v-lazy="'./images/home/banners/banner-3.jpg'"
								alt="banner"
								width="232"
								height="124"
							>
						</div>
						<div class="col-sm-4 text-center">
							<nuxt-link
								to="/shop"
								class="btn btn-dark"
							>Shop All Sale</nuxt-link>
						</div>
					</div>
				</div>
				<div class="col-xl-6 mb-2">
					<div
						class="banner banner4 d-flex flex-wrap align-items-center bg-primary h-100 appear-animate"
						data-animation-name="fadeInRightShorter"
						data-animation-delay="400"
						v-animate
					>
						<div class="col-sm-4 text-center">
							<h3 class="font5 text-white mb-0">Flash Sale</h3>
							<h2 class="text-uppercase text-white mb-0">30% off</h2>
						</div>
						<div class="col-sm-4">
							<img
								v-lazy="'./images/home/banners/banner-4.jpg'"
								alt="banner"
								width="232"
								height="124"
							>
						</div>
						<div class="col-sm-4 text-center">
							<nuxt-link
								to="/shop"
								class="btn btn-light"
							>Shop All Sale</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import PvProductOne from '~/components/features/product/PvProductOne';
import PvBrandSection from '~/components/partials/home/PvBrandSection';
import { popularSlider } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel,
		PvProductOne,
		PvBrandSection
	},
	props: {
		products: Array
	},
	data: function () {
		return {
			popularSlider: popularSlider
		}
	}
}
</script>