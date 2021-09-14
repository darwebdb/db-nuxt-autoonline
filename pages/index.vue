<template>
	<main class="main home-page">
		<pv-intro-section></pv-intro-section>

		<pv-popular-collection :products="popularProducts"></pv-popular-collection>

		<pv-banner-section></pv-banner-section>

		<pv-access-collection :products="featuredProducts"></pv-access-collection>
	</main>
</template>

<script>
import PvIntroSection from '~/components/partials/home/PvIntroSection';
import PvPopularCollection from '~/components/partials/home/PvPopularCollection';
import PvBannerSection from '~/components/partials/home/PvBannerSection';
import PvAccessCollection from '~/components/partials/home/PvAccessCollection';

import {
	getProductsByAttri,
	getMostViewedProducts,
	getProductsByCategory
} from '~/utils/service';
import { getCookie } from '~/utils';
import Api, { baseUrl } from '~/api';

export default {
	components: {
		PvIntroSection,
		PvBannerSection,
		PvPopularCollection,
		PvAccessCollection
	},
	data: function () {
		return {
			products: [],
			popularProducts: [],
			featuredProducts: [],
			posts: [],
			timerId: 0,
		};
	},
	mounted: function () {
		Api.get( `${ baseUrl }/pages/home` )
			.then( response => {
				console.log(response)
				this.products = response.data.products;
				this.popularProducts = getMostViewedProducts( this.products );
				this.popularProducts = getProductsByCategory( this.popularProducts, 'Bikes' );
				this.featuredProducts = getProductsByAttri( this.products, 'is_hot' );
			} )
			.catch( error => ( { error: JSON.stringify( error ) } ) );

		this.timerId = setTimeout( () => {
			if (
				this.$route.path === '/' &&
				getCookie( 'newsletter' ) !== 'false'
			) {
				this.$modal.show(
					() =>
						import( '~/components/features/modal/PvNewsletterModal' ),
					{},
					{ width: '740', height: 'auto', adaptive: true, class: 'newsletter-modal' }
				);
			}
		}, 10000 );
	},
	destroyed: function () {
		clearTimeout( this.timerId );
	}
};
</script>