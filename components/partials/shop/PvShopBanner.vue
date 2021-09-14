<template>
	<div class="category-banner-container bg-gray">
		<div class="container">
			<div class="category-banner banner p-0">
				<div class="row align-items-center no-gutters m-0 text-center text-lg-left">
					<div class="col-md-4 col-xl-2 offset-xl-2 d-flex justify-content-center my-5 my-lg-0">
						<div class="d-flex flex-column justify-content-center">
							<h3 class="text-left text-light text-uppercase mb-1">Er zijn</h3>
							<h2 class="text-uppercase m-b-1">{{occasions}} occasions</h2>
							<h3 class="text-left text-light text-uppercase mt-1">gevonden.</h3>
						</div>
					</div>
					<div
						class="col-md-5 col-lg-4 text-md-center my-5 my-lg-0"
						:style="{'background-image': `url(./images/home/banners/shop-banner-bg.png)`}"
					>
						<img
							class="d-inline-block"
							v-lazy="'./images/home/banners/shop-banner.png'"
							alt="banner"
							width="400"
							height="242"
						>
					</div>
					<div class="col-md-3 my-5 my-lg-0">
						<h4 class="font5 line-height-1 m-b-4">Summer Sale</h4>
						<a
							href="javascript:;"
							class="btn btn-teritary btn-lg ml-0"
						>Shop All Sale</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { baseUrl } from '~/api';

export default {
	props: [
		'occasions'
	],
	data: function () {
		return {
			baseUrl: baseUrl,
		};
	},
};
</script>