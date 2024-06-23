<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="description" content="JS sliders">
    <meta name="keywords" content="JS sliders">
    <meta name="author" content="D.C">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Sliders </title>
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="css/fontawesome.min.css" rel="stylesheet" type="text/css">
    <link href="css/app.css" rel="stylesheet" type="text/css">
</head>

<body>

<h1 class="w-100 d-flex align-items-end p-5 m-0"> 
	
	<i class="fa-brands fa-android pe-3"></i>  

	Sliders

</h1>

<hr class="my-5">

<div class="container-lg g-0">

	<h2 class="text-center my-5"> Slider 1 </h2>

	<div class="position-relative">

		<button class="c-custom-1 position-absolute slider__1-button slider-next slider-next-md d-none d-lg-flex"><i class="fa-solid fa-arrow-right"></i></button>

		<div class="slider-container slider__1-row row d-flex align-items-start justify-content-center justify-content-lg-between position-relative g-0">
			
			<?php

				$index = 1;

				while ($index < 5) {

					?>

						<div class="slider-item slider__1-item">

							<div class="slider-padding slider__1-item-padding">

								<div class="slider-body slider__1-item-body position-relative py-5 px-5">

									<h3 class="slider__1-item-heading mb-4">

										Lorem ipsum 

									</h3>

									<b> Integer id suscipit </b>

									<p class="slider__1-item-content pt-2 pb-5">

										<?php echo str_repeat("Quisque in tellus lorem. Donec at elementum est. Integer id suscipit felis", $index * 2); ?>

									</p>

									<button class="c-custom-1 position-absolute slider__1-button slider-next d-lg-none"><i class="fa-solid fa-arrow-right"></i></button>

								</div>

							</div>
							
						</div>

					<?php

					$index++;

				}

			?>

		</div>

	</div>

</div>

<hr id="slider_2-top" class="my-5">

<h2 class="text-center my-5"> Slider 2 </h2>

<div class="container g-0">

	<div class="slider_2-container position-relative timeline-container">

		<?php

		$index = 1;
		$count = -1;
		$color_array = array("color-1", "color-2", "color-3", "color-4");

		while ($index < 5) {

			$direction = $index % 2 === 1 ? "flex-row" : "flex-row-reverse";
			$justify_image = $index % 2 === 1 ? "justify-content-md-start" : "justify-content-md-end";
			$justify_content = $index % 2 === 1 ? "justify-content-md-end" : "justify-content-md-start";
			$display = "d-none";
			$date_line_md = "";

			if ($index === 1) {

				$date_line_md = "slider_2-date-line-md";
				$display = "d-flex";
			}

			$count++;

			if ($count === count($color_array)) {

				$count = 0;
			}

		?>

			<div class="slider_2-item timeline-item  <?php echo $display; ?>  g-0">

				<div class="slider_2-padding row justify-content-center justify-content-md-between <?php echo $direction; ?> g-0">

					<img class="col-12 col-md-4 col-xl-4 slider_2-img <?php echo $pad_image; ?>" src="https://placehold.co/400x400/EEE/31343C"  alt="Placehold">
			
					<div class="slider_2-date-line col-2 col-xl-4 <?php echo $date_line_md; ?> position-relative d-flex justify-content-center align-items-md-center py-5 py-md-0">

						<div class="slider_2-date position-relative">

							<div class="slider_2-date-text d-flex align-items-center justify-content-center my-5 py-2 py-md-3 mx-auto">
								<?php echo $index . "000"?>
							</div>

						</div>

					</div>

					<div class="col-12 col-md-4 col-xl-4">

						<div class="row <?php echo $justify_content; ?> g-0">

							<div class="slider_2-heading col-12 d-flex justify-content-center justify-content-md-start px-5 px-md-0 pb-4 py-md-5">

								<div class="text-content text-center border <?php echo $color_array[$count] ?> py-2 px-4 px-md-3 py-md-3 mb-4 mb-md-0">

									Donec dui quam, et pellentesque

								</div>

							</div>

							<div class="col-12 text-center text-md-start px-4 px-md-0">
							
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies lectus augue, ut commodo mi sagittis ut. Morbi tellus nunc, facilisis eu mi sed, ullamcorper congue tellus. In quam ex, accumsan ut varius ut, vestibulum nec nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor est, commodo vel quam eget, placerat viverra arcu. Nam eu laoreet lorem. Aliquam facilisis elementum risus, ut suscipit massa finibus et. Curabitur rutrum sapien eget fermentum dignissim. Curabitur pulvinar arcu urna, at rutrum urna molestie vel. Cras hendrerit sit amet ipsum in dignissim. Nam aliquam, purus a vulputate tempus, mauris ante auctor turpis, condimentum semper augue eros sit amet tellus. Maecenas augue lorem, condimentum sed viverra eget, pulvinar eget augue. Sed a metus eros. Donec vel felis et magna porta mollis. Maecenas vehicula quam sit amet ligula euismod, et pretium lacus dignissim.

							</div>

						</div>

					</div>

				</div>

			</div>

		<?php

		$index++;

		};

		?>

		<div class="slider_2-button-container position-absolute d-flex justify-content-center pt-5 pt-md-0">

			<button class="c-custom-1 timeline-button"><i class="fa-solid fa-arrow-down"></i></button>

		</div>

	</div>

</div>

<hr class="my-5">

<h2 class="text-center my-5"> Slider 3 </h2>

<div class="container-lg g-0">

	<div class="slider_3-border-img">

		<div class="slider_3-background" role="img" aria-label="email notifications">

		<div class="slider_3-shrink-container shrink-container">

			<div class="slider_3-container slider-container">

				<button aria-label="open-left" class="slider_3-button-next open-left"></button>
				<a href="mailto:user@gmail.com" rel="noreferrer" target="_blank" class="slider_3-a image-1"><span class='hidden'>dolor sit amet</span></a>
				<a href="mailto:user@gmail.com" rel="noreferrer" target="_blank" class="slider_3-a image-fill-right"><span class='hidden'>dolor sit amet</span></a>
				<div class="slider_3-inner inner"></div>
				<a href="tel:0419-777-066" rel="noreferrer" target="_blank" class="slider_3-a image-2"><span class='hidden'>dolor sit</span></a>
				<a href="tel:0419-777-066" rel="noreferrer" target="_blank" class="slider_3-a image-fill-left"><span class='hidden'>dolor sit</span></a>
				<button aria-label="open-right" class="slider_3-button-next open-right"></button>

				<div class="static-count d-none">

					<img class="slider_3-img" src="https://placehold.co/150x150/3708090/708090" alt="mail" />

					<div>

						<a href="mailto:user@gmail.com" rel="noreferrer" target="_blank">dolor sit amet</a>

					</div>

				</div>

				<div class="static-count d-none">

					<img class="slider_3-img" src="https://placehold.co/150x150/FFC0CB/31343C" alt="telephone" />

					<div>

						<a href="tel:0419-777-066" rel="noreferrer" target="_blank">dolor sit</a>

					</div>

				</div>

				<div class="static-count  d-none">

					<img class="slider_3-img" src="https://placehold.co/150x150/EEE/31343C" alt="LinkedIn" />

					<div>

						<a href="https://www.linkedin.com/in/david-smith-572b10259/" rel="noreferrer" target="_blank">dolor</a>

					</div>

				</div>

			</div>

			<div class="slider_3-percentage percentage">

				<div class="percentage-change"></div>

			</div>


			<div class="d-flex p-2">

				<button class="c-custom-1 slider_3-button-toggle button-toggle"><i class="fa-solid fa-computer-mouse"></i></i></button>

			</div>
				
			</div>

		</div>

	</div>

</div>

<hr class="my-5">

<h2 class="text-center my-5"> Slider 4 </h2>

<div class="container g-0">

	<div class="row slider_4-height-container height-container d-flex flex-column flex-lg-row align-items-lg-start justify-content-lg-between g-0">

        <p class="col-12 col-lg-7 d-flex h-100 align-items-lg-center px-4 px-lg-0 m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          <br/>
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          <br/>
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

		<div class="col-12 col-lg-4 slider_4-figure-container pt-5 pt-lg-0">

			<a class="slider_4-figure figure-one scroll d-lg-has-height w-100 d-flex justify-content-center mb-sm-5 mb-lg-0" href="#">

				<img src="https://placehold.co/440x293/B0C4DE/31343C"  alt="Placehold"/>

				<p class="d-flex justify-content-center align-items-end text-center m-0 px-3 pb-3">
					dolor sit lorem ipsum amet.
				</p>

			</a>

			<a class="slider_4-figure figure-two scroll d-lg-0-height w-100 d-flex justify-content-center" href="#">

				<img src="https://placehold.co/440x293/31343C/B0C4DE"  alt="Placehold"/>
				
				<p class="d-flex justify-content-center align-items-end text-center m-0 px-3 pb-3">
					dolor sit lorem ipsum amet.
				</p>

			</a>

		</div>

	</div>

</div>

<hr class="my-5">

<h2 class="text-center my-5"> Slider 5 </h2>

<div class="container g-0">

	<div class="slider_5-container d-flex flex-wrap justify-content-center">

		<div class="slider_5-list-container">
			
			<div class="slider_5-scroll scroll-listener">

				<ul class="slider_5-list">

					<li>

						Scroll preview

						<img src="https://placehold.co/100x100/31343C/B0C4DE"  alt="Placehold"/>

						<ol>

							<li class="slider_5-scroll-preview scroll-preview">
								<h3><a target="lorem" href="https://google.com/"> Lorem ipsum dolor </a></h3>
								Lorem ipsum
								<br />
								<br />
								<br />
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur.
								<br />
							</li>

							<li class="slider_5-scroll-preview scroll-preview">
								<h3><a target="dolor" href="https://google.com/"> Lorem ipsum dolor </a></h3>
								Eiusmod tempor 
								<br />
								<br />
								<br />
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur.
								<br />
							</li>

						</ol>

					</li>

				</ul>
				
			</div>

		</div>

		<div class="slider_5-site-container site-container d-flex align-items-start">

			<div id="site-1" class="slider_5-site site-img d-has-display">

				<img src="https://placehold.co/400x400/B0C4DE/31343C" alt="Placehold"/>

			</div>

			<div id="site-2" class="slider_5-site site-img">

				<img src="https://placehold.co/400x400/3708090/708090" alt="Placehold"/>

				<a target="lorem" href="https://google.com/">
					lorem commodo 
				</a>

			</div>

			<div id="site-3" class="slider_5-site site-img">

				<img src="https://placehold.co/400x400/31343C/B0C4DE" alt="Placehold" />

				<a target="dolor" href="https://google.com/">
					ex ea commodo 
				</a>

			</div>

			<button aria-label="close" class="slider_5-close slider-close">X</button>

		</div>

	</div>

</div>

<footer class="d-flex flex-wrap justify-content-center align-items-center pb-5">

	<hr class="w-100 my-5">

	<p class="m-0"><i class="fa-regular fa-copyright pe-3"></i></p>

</footer>

<script src="./js/bootstrap.min.js"></script>
<script src="./js/fontawsome.min.js"></script>
<script src="./js/utillites.js"></script>
<script src="./js/slider_5.js"></script>
<script src="./js/slider_4.js"></script>
<script src="./js/slider_3.js"></script>
<script src="./js/slider_2.js"></script>
<script src="./js/slider_1.js"></script>
<script src="./js/app.js"></script>
</body>

</html>