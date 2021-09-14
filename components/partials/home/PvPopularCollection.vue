<template>
	<section class="popular-products">
		<div class="container">
			<h2
				class="section-title appear-animate"
				data-animation-name="fadeInUpShorter"
				data-animation-delay="200"
				v-animate
			>Most Popular Products</h2>

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

			<pv-brand-section></pv-brand-section>
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