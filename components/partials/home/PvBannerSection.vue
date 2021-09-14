<template>
	<div class="banners-section mb-4">
		<div class="row row-sm">
			<div class="col-md-4">
				<div
					class="banner banner1 appear-animate"
					data-animation-name="fadeIn"
					data-animation-delay="200"
					style="background-color: #696f6f;"
					v-animate
				>
					<figure>
						<img
							v-lazy="'./images/home/banners/banner-1.jpg'"
							alt="banner"
							width="640"
							height="640"
						>
					</figure>
				</div>
			</div>
			<div class="col-md-8">
				<div
					class="banner banner2 h-100"
					:style="{'background-image': `url(./images/home/banners/banner-2.jpg)`}"
				>
					<h4
						class="text-light text-uppercase mb-0 appear-animate"
						data-animation-name="fadeInUpShorter"
						data-animation-delay="100"
						v-animate
					>Get Ready</h4>
					<h2
						class="d-inline-block align-middle text-uppercase m-b-3 appear-animate"
						data-animation-name="fadeInUpShorter"
						data-animation-delay="300"
						v-animate
					>20% off</h2>
					<nuxt-link
						to="/shop"
						class="btn btn-dark btn-lg align-middle m-b-3 appear-animate"
						data-animation-name="fadeInUpShorter"
						data-animation-delay="300"
						v-animate
					>Shop All Sale</nuxt-link>
					<h3
						class="heading-border appear-animate"
						data-animation-name="fadeInUpShorter"
						data-animation-delay="500"
						v-animate
					>BIKES</h3>
				</div>
			</div>
		</div>
	</div>
</template>