<template>
	<footer class="footer font2">
		<div class="footer-top">
			<div class="instagram-box bg-dark">
				<div class="row m-0 align-items-center">
					<div class="instagram-follow col-md-4 col-lg-3 d-flex align-items-center">
						<div class="info-box">
							<i class="fab fa-instagram text-white mr-4"></i>
							<div class="info-box-content">
								<h4 class="text-white line-height-1">Follow Us on Instagram</h4>
								<p class="line-height-1">@portoecommerce</p>
							</div>
						</div>
					</div>

					<div class="col-md-8 col-lg-9 p-0">
						<pv-carousel
							class="instagram-carousel"
							:options="instaSlider"
						>
							<div class="swiper-slide">
								<img
									:src="'./images/home/instagram/instagram1.jpg'"
									alt="instagram"
									width="240"
									height="240"
								>
							</div>

							<div class="swiper-slide">
								<img
									:src="'./images/home/instagram/instagram2.jpg'"
									alt="instagram"
									width="240"
									height="240"
								>
							</div>

							<div class="swiper-slide">
								<img
									:src="'./images/home/instagram/instagram3.jpg'"
									alt="instagram"
									width="240"
									height="240"
								>
							</div>

							<div class="swiper-slide">
								<img
									:src="'./images/home/instagram/instagram4.jpg'"
									alt="instagram"
									width="240"
									height="240"
								>
							</div>

							<div class="swiper-slide">
								<img
									:src="'./images/home/instagram/instagram5.jpg'"
									alt="instagram"
									width="240"
									height="240"
								>
							</div>

							<div class="swiper-slide">
								<img
									:src="'./images/home/instagram/instagram6.jpg'"
									alt="instagram"
									width="240"
									height="240"
								>
							</div>
						</pv-carousel>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="widget-newsletter d-lg-flex align-items-center justify-content-between flex-wrap">
					<div class="footer-left d-md-flex align-items-center mr-5">
						<div class="info-box mr-5 my-3">
							<i class="far fa-envelope text-white mr-4"></i>
							<div class="widget-newsletter-info">
								<h4 class="line-height-1 text-white">
									Get Special Offers and Savings
								</h4>
								<p class="line-height-1">Get all the latest information on Events,
									Sales
									and Offers.</p>
							</div>
						</div>
						<form
							action="#"
							class="my-3"
						>
							<div class="footer-submit-wrapper d-flex">
								<input
									type="email"
									class="form-control font-italic"
									placeholder="Enter Your E-mail Address..."
									size="40"
									required
								><button
									type="submit"
									class="btn btn-sm text-nowrap"
								>Sign Up</button>
							</div>
						</form>
					</div>
					<div class="footer-right">
						<div class="social-icons my-3">
							<a
								href="javascript:;"
								class="social-icon social-facebook icon-facebook"
								
							></a>
							<a
								href="javascript:;"
								class="social-icon social-twitter icon-twitter"
								
							></a>
							<a
								href="javascript:;"
								class="social-icon social-linkedin fab fa-linkedin-in"
								
							></a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="footer-middle">
				<div class="row">
					<div class="col-xl-3 col-sm-6">
						<nuxt-link to="/">
							<img
								src="~/static/images/logo-white.png"
								alt="Logo"
								class="logo"
							></nuxt-link>

						<p class="footer-desc">Lorem ipsum dolor sit amet, consectetur adipis.</p>

						<div class="ls-0 footer-question mb-3">
							<h6 class="mb-0 text-white">QUESTIONS?</h6>
							<h3 class="mb-0 text-primary">1-888-123-456</h3>
						</div>
					</div>

					<div class="col-xl-3 col-sm-6">
						<div class="widget">
							<h4 class="widget-title">Account</h4>

							<div class="row">
								<div class="col-md-6">
									<ul class="links">
										<li>
											<nuxt-link to="/pages/account">My Account</nuxt-link>
										</li>
										<li><a href="javascript:;">Track Your Order</a></li>
										<li><a href="javascript:;">Payment Methods</a></li>
										<li><a href="javascript:;">Shipping Guide</a></li>
									</ul>
								</div>
								<div class="col-md-6">
									<ul class="links">
										<li><a href="javascript:;">FAQs</a></li>
										<li><a href="javascript:;">Product Support</a></li>
										<li><a href="javascript:;">Privacy</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xl-3 col-sm-6">
						<div class="widget">
							<h4 class="widget-title">About</h4>

							<div class="row">
								<div class="col-md-6">
									<ul class="links">
										<li>
											<nuxt-link to="/pages/about-us">About Porto</nuxt-link>
										</li>
										<li><a href="javascript:;">Our Guarantees</a></li>
										<li><a href="javascript:;">Terms And Conditions</a></li>
										<li><a href="javascript:;">Privacy policy</a></li>
									</ul>
								</div>
								<div class="col-md-6">
									<ul class="links">
										<li><a href="javascript:;">Return Policy</a></li>
										<li><a href="javascript:;">Intellectual Property Claims</a></li>
										<li><a href="javascript:;">Site Map</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xl-3 col-sm-6">
						<div class="widget text-xl-right">
							<h4 class="widget-title">Features</h4>

							<ul class="links">
								<li><a href="javascript:;">Powerful Admin Panel</a></li>
								<li><a href="javascript:;">Mobile &amp; Retina Optimized</a></li>
								<li><a href="javascript:;">Super Fast Vue Template</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="footer-bottom">
				<p class="footer-copyright text-lg-center mb-0">&copy; Porto eCommerce. 2021. All Rights
					Reserved
				</p>
			</div>
		</div>
	</footer>
</template>

<script>
import PvCarousel from '~/components/features/PvCarousel';
import { instaSlider } from '~/utils/data/carousel';

export default {
	components: {
		PvCarousel
	},
	data: function () {
		return {
			instaSlider: instaSlider
		}
	}
}
</script>