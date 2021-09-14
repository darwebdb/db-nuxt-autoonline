<template>
	<main class="main skeleton-body">
		<pv-shop-banner
		:occasions="occasions"
		></pv-shop-banner>

		<nav
			aria-label="breadcrumb"
			class="breadcrumb-nav"
		>
			<div class="container">
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<nuxt-link to="/">
							Home
						</nuxt-link>
					</li>
					<li class="breadcrumb-item active">Bekijk Autos</li>
				</ol>
			</div>
		</nav>

		<div class="container shop-off-canvas">
			<div class="row main-content mt-2">
				<div
					class="sidebar-overlay"
					@click="hideSidebarFilter"
				></div>
				<aside class="sidebar-shop col-lg-3 order-lg-first mobile-sidebar custom-scrollbar position-fixed">
					<pv-sidebar-filter-one
						:category-list="categoryList"
						:featured-products="featuredProducts"
						v-if="featuredProducts.length > 0"
					></pv-sidebar-filter-one>

					<div
						class="sidebar-content skeleton-body"
						v-else
					>
						<aside class="widget"></aside>
						<aside class="widget"></aside>
						<aside class="widget"></aside>
					</div>
				</aside>

				<div class="col-lg-12">
					<pv-product-list-one
						:category-list="categoryList"
						:items-per-row="4"
					></pv-product-list-one>
				</div>
			</div>
		</div>

		<div class="mb-4"></div>
	</main>
</template>

<script>
import { VueTreeList, Tree } from 'vue-tree-list';
import PvSidebarFilterOne from '~/components/partials/shop/sidebar-filter/PvSidebarFilterOne';
import PvProductListOne from '~/components/partials/shop/product-list/PvProductListOne';
import PvShopBanner from '~/components/partials/shop/PvShopBanner';
import Api, { baseUrl } from '~/api';

export default {
	components: {
		PvSidebarFilterOne,
		PvProductListOne,
		PvShopBanner
	},
	data: function () {
		return {
			categoryList: [],
			featuredProducts: [],
			occasions: 0,
		};
	},
	mounted: function () {
		this.getCount();
		this.getCategoryLists();
	},
	methods: {
		getCategoryLists: function () {
			Api.get( `${ baseUrl }/shop/sidebar-list`, {
			} )
				.then( response => {
					this.categoryList = response.data.sidebarList;
					this.featuredProducts = response.data.featuredProducts;				
				} )
				.catch( error => ( { error: JSON.stringify( error ) } ) );
		},
		getCount: function () {
			Api.get( `${ baseUrl }/autos`, {
			} )
			.then( response => {
				this.occasions = response.data.length;
			} )
			.catch( error => ( { error: JSON.stringify( error ) } ) );
		},
		hideSidebarFilter: function () {
			document.querySelector( 'body' ).classList.remove( 'sidebar-opened' );
		}
	}
};
</script>