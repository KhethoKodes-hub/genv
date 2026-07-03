(function ($) {
	"use strict";

	// Testimonial Active

	const testimonialSlider = new Swiper('.si-testimonial-active', {
		slidesPerView: 1,
		effect: "cards",
		grabCursor: true,
		loop: false,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		speed: 1000,
		spaceBetween: 30,
		pagination: {
			el: '.si-testimonial-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				const num = (index + 1).toString().padStart(2, '0');
				return `<span class="${className}">${num}</span>`;
			},
		},
		on: {
			init: function () {
				initProgressBar(this);
			},
			slideChange: function () {
				resetAndAnimateProgress(this);
			},
		},
	});

	function initProgressBar(swiper) {
		const pagination = document.querySelector('.si-testimonial-pagination');
		if (!pagination) return;

		if (!pagination.querySelector('.progress-fill')) {
			const fill = document.createElement('div');
			fill.className = 'progress-fill';
			pagination.appendChild(fill);
		}
	}

	function resetAndAnimateProgress(swiper) {
		const pagination = document.querySelector('.si-testimonial-pagination');
		if (!pagination) return;

		const bullets = pagination.querySelectorAll('.swiper-pagination-bullet');
		const activeIndex = swiper.realIndex;
		const activeBullet = bullets[activeIndex];

		bullets.forEach((b, i) => b.classList.toggle('is-active', i === activeIndex));

		const progress = pagination.querySelector('.progress-fill');
		if (!progress || !activeBullet) return;

		progress.style.transition = 'none';
		progress.style.width = '0%';

		progress.offsetWidth;

		const bulletRect = activeBullet.getBoundingClientRect();
		const pagRect = pagination.getBoundingClientRect();
		const leftPos = (bulletRect.right - pagRect.left) + 52;

		progress.style.left = `${leftPos}px`;

		setTimeout(() => {
			progress.style.transition = 'width 4.8s linear';
			progress.style.width = '220px';
		}, 20);
	}

	// Marquee Active

	var si_marquee_slide = new Swiper(".si-marquee-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 165,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 5000,
		autoplay: {
		  delay: 1,
		  disableOnInteraction: true,
		},
	});


	// Testimonial Active 2

	var swiper = new Swiper(".si-testimonial-2-active", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		navigation: {
		prevEl: ".si-button-prev",
		nextEl: ".si-button-next",
		},
		breakpoints: {
		1920: {
			slidesPerView: 3,
			},
		1400: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 1,
		},
		0: {
			slidesPerView: 1,
		},
		},
		pagination: {
			el: '.si-testimonial-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				const num = (index + 1).toString().padStart(2, '0');
				return `<span class="${className}">${num}</span>`;
			},
		},
		on: {
			init: function () {
				initProgressBar(this);
			},
			slideChange: function () {
				resetAndAnimateProgress(this);
			},
		},
	});

})(jQuery);