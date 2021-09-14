<template>
	<div class="product-default">
		<figure>
			<nuxt-link :to="`/bekijk-autos/details/${product.slug}`">
				<img
					v-for="(item,index) in product.afbeeldingen.slice(product.afbeeldingen.length -1)"
					:key="`related-large-${index}`"
					v-lazy="`${baseUrl}${item.url}`"
					alt="large-picture"
					:width="item.width"
					:height="item.height"
					:class="{'last-image': index === 1}"
				/>
			</nuxt-link>

			<div class="label-group">
				<div
					class="product-label label-hot"
					v-if="product.is_hot"
				>HOT</div>
				<div
					class="product-label label-sale"
					v-if="product.is_sale && !product.prijs"
				>Sale</div>
				<div
					class="product-label label-sale"
					v-if="product.is_sale && product.prijs"
				>-{{ discount }}%</div>
			</div>
		</figure>

		<div class="product-details">
			<div class="category-list">
				<span
					v-for="(cat,index) in product.product_categories"
					:key="`product-category-${index}`"
				>
					<nuxt-link :to="{ path: '/bekijk-autos', query: { category: cat.slug }}">{{ cat.name }}</nuxt-link>
					<template v-if="index < product - 1">,</template>
				</span>
			</div>

			<h3 class="product-title">
				<nuxt-link :to="'/product/default/' + product.slug"><strong>{{ product.merk }}</strong></nuxt-link>
			</h3>
			<p class="product-title">
				{{ product.type }}
			</p>

<!-- v-if="product.prijs" -->

			<div
				class="price-box"

				key="singlePrice"
			>
				<template v-if="!product.is_sale">
					<span class="product-price">€{{ product.prijs | priceFormat( 0 ) }},-</span>
				</template>

				<template v-else>
					<span class="old-price">€{{ product.prijs | priceFormat( 0 ) }},-</span>
					<!-- <span class="product-price">€{{ product.sale_price | priceFormat( 1 ) }}</span> -->
				</template>
			</div>


			<div
				class="product-action"
				v-if="isActions"
			>
				<nuxt-link
					to="/pages/wishlist"
					class="btn-icon-wish added-wishlist"
					title="Go to Wishlist"
					v-if="isWishlisted"
				>
					<i class="icon-wishlist-2"></i>
				</nuxt-link>

				<a
					href="javascript:;"
					class="btn-icon-wish"
					title="Add to Wishlist"
					@click="addWishlist($event)"
					v-if="!isWishlisted"
				>
					<i class="icon-wishlist-2"></i>
				</a>

				<nuxt-link
					:to="'/product/default/' + product.slug"
					class="btn-icon btn-add-cart"
					v-if="product.length > 0"
					key="variantProduct"
				>
					<i class="fa fa-arrow-right"></i>
					<span>SELECT OPTIONS</span>
				</nuxt-link>

				<a
					href="javascript:;"
					class="btn-icon btn-add-cart product-type-simple"
					v-else
					@click="addCart"
				>
					<i class="icon-shopping-cart"></i><span>BEKIJK</span>
				</a>

				<a
					href="javascript:;"
					class="btn-quickview"
					title="Quick View"
					@click="openQuickview"
				>
					<i class="fas fa-external-link-alt"></i>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { baseUrl } from '~/api';

export default {
	props: {
		product: Object,
		adClass: String,
		isActions: {
			type: Boolean,
			default: true
		}
	},
	data: function () {
		return {
			baseUrl: baseUrl,
			minPrice: 0,
			maxPrice: 0,
			discount: 0
		};
	},
	computed: {
		...mapGetters( 'wishlist', [ 'wishList' ] ),
		isWishlisted: function () {
			if (
				this.wishList.findIndex(
					item => item.name === this.product.name
				) > -1
			)
				return true;
			return false;
		}
	},
	mounted: function () {
		if ( this.product.is_sale && this.product.prijs ) {
			this.discount =
				( ( this.product.prijs - this.product.sale_price ) /
					this.product.prijs ) *
				100;
			this.discount = parseInt( this.discount );
		}

		if ( !this.product.prijs ) {
			this.minPrice = this.product.prijs;
		}
	},
	methods: {
		...mapActions( 'wishlist', [ 'addToWishlist' ] ),
		...mapActions( 'cart', [ 'addToCart' ] ),
		openQuickview: function () {
			this.$modal.show(
				() => import( '~/components/features/product/PvQuickview' ),
				{ slug: this.product.slug },
				{ width: '931', height: 'auto', adaptive: true, class: 'quickview-modal' }
			);
		},
		addWishlist: function ( e ) {
			e.currentTarget.classList.add( 'load-more-overlay', 'loading' );

			setTimeout( () => {
				this.addToWishlist( { product: this.product } );
				document
					.querySelector( '.wishlist-popup' )
					.classList.add( 'active' );

				setTimeout( () => {
					document
						.querySelector( '.wishlist-popup' )
						.classList.remove( 'active' );
				}, 1000 );
			}, 1000 );
		},
		addCart: function () {
			if ( this.product.stock > 0 ) {
				let saledProduct = { ...this.product };
				if ( this.product.is_sale ) {
					saledProduct.prijs = this.product.sale_price;
				}

				this.addToCart( { product: saledProduct } );
			}
		}
	}
};
</script>