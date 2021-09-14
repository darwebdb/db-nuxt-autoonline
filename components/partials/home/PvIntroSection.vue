<template>
	<section class="intro-section">
		<pv-carousel
			class="home-slider slide-animate"
			:options="introSlider"
			v-animate
		>
			<div class="swiper-slide">
				<div class="container">
					<div class="home-slide home-slide-1 banner d-flex flex-wrap">
						<div class="col-lg-4 d-flex justify-content-center">
							<div
								class="d-flex flex-column justify-content-center appear-animate"
								data-animation-name="fadeInLeftShorter"
								data-animation-delay="200"
								v-animate
							>
								<h4 class="text-light text-uppercase m-b-1">Extra</h4>
								<h2 class="text-uppercase m-b-1">20% off</h2>
								<h4 class="font-weight-bold text-uppercase heading-border m-b-3">BIKES</h4>
								<h3 class="font5 m-b-5">Summer Sale</h3>

								<div>
									<nuxt-link
										to="/shop"
										class="btn btn-dark btn-lg"
									>Shop all sale</nuxt-link>
								</div>
							</div>
						</div>
						<div
							class="col-lg-8 with-bg"
							:style="{'background-image': 'url(./images/home/slider/slide-bg.png)'}"
						>
							<div
								class="appear-animate"
								data-animation-name="fadeInLeftShorter"
								data-animation-delay="500"
								v-animate
							>
								<img
									class="m-b-5"
									alt="slide"
									v-lazy="'./images/home/slider/slide-1.png'"
									width="700"
									height="200"
								>
							</div>
							<div
								class="content-box d-sm-flex appear-animate"
								data-animation-name="fadeInLeftShorter"
								data-animation-delay="700"
								v-animate
							>
								<h5 class="text-uppercase m-b-2">only <b class="text-secondary"><small>$</small>399<small>99</small></b></h5>
								<div class="content-info">
									<h6 class="mb-0">Start Shopping Right Now</h6>
									<p class="font2 mb-0">* Get Plus Discount Buying Package</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="swiper-slide">
				<div class="container">
					<div class="home-slide home-slide-2 banner d-flex flex-wrap">
						<div class="col-lg-5 d-flex justify-content-center">
							<div
								class="d-flex flex-column justify-content-center appear-animate"
								data-animation-name="fadeInRightShorter"
								data-animation-delay="200"
								v-animate
							>
								<h4 class="text-light text-uppercase m-b-1">Extra</h4>
								<h2 class="text-uppercase m-b-1">20% off</h2>
								<h4 class="font-weight-bold text-uppercase heading-border m-b-3">BIKES</h4>
								<h3 class="font5 p-b-4 m-b-5">Summer Sale</h3>

								<div>
									<nuxt-link
										to="/shop"
										class="btn btn-dark btn-lg"
									>Shop all sale</nuxt-link>
								</div>
							</div>
						</div>
						<div
							class="col-lg-7 order-lg-first text-lg-right appear-animate"
							data-animation-name="fadeInRightShorter"
							data-animation-delay="500"
							v-animate
						>
							<img
								class="swiper-lazy m-b-5"
								alt="slide"
								v-lazy="'./images/home/slider/slide-2.png'"
								width="700"
								height="320"
							>
						</div>
					</div>
				</div>
			</div>
		</pv-carousel>
	</section>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import { introSlider } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel
	},
	data: function () {
		return {
			introSlider: introSlider
		};
	}
};
</script>