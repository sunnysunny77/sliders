<!DOCTYPE html>
<html lang="en">

<head>
	<script src="./js/preload.js"></script>
    <meta charset="utf-8">
    <meta name="description" content="JS sliders">
    <meta name="keywords" content="JS sliders">
    <meta name="author" content="D.C">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Sliders </title>
    <link href="css/app.min.css" rel="stylesheet" type="text/css">
	<link rel="manifest" href="manifest.json" /> 
    <link rel="apple-touch-icon" href="images/pwa-logo-small.webp" /> 
</head>

<body>

<nav class="container-fluid slider_nav-navigation navigation d-flex align-items-center border-bottom p-0">

	<div class="row m-0 g-0">

		<div alria-label="menu" role="button" class="col-auto d-sm-none slider_nav-navbar-toggler navbar-toggler has-collapsed px-3 py-4">
			<div>
				<div class="slider_nav-bar1"></div>
				<div class="slider_nav-bar2"></div>
				<div class="slider_nav-bar3"></div>
			</div>
		</div>

		<div class="col-12 slider_nav-navbar-collapse navbar-collapse">

			<ul class="list-unstyled my-4 my-sm-0">

				<li>

					<a class="mx-4 active" href="./">SLIDER NAV</a>

				</li>
		
			</ul>

		</div>

	</div>

</nav>

<header class="container-fluid d-flex flex-column justify-content-end align-items-start flex-wrap">

	<h1 class="d-flex align-items-end px-4 pt-5 pb-5 m-0"> 
		
		Sliders
		<i class="fa-brands fa-android ps-3"></i>  

	</h1>

</header>

<hr class="m-0">

<main class="d-flex flex-column">

	<div class="container-xl g-0">

		<h2 class="text-center my-5"> Slider 1 </h2>

		<div class="slider_1-outer position-relative">

			<button aria-label="next" class="c-custom-1 position-absolute slider_1-button slider-next slider-next-md d-none d-md-flex d-xl-none"><i class="fa-solid fa-arrow-right"></i></button>

			<button aria-label="next" class="c-custom-1 position-absolute slider_1-button slider-next slider-next-lg d-none d-xl-flex"><i class="fa-solid fa-arrow-right"></i></button>

			<div class="slider-container slider_1-row row d-flex align-items-start justify-content-center justify-content-sm-between position-relative g-0">
				
				<?php

					$index = 1;

					while ($index < 5) {

						?>

							<div class="slider-item slider_1-item">

								<div class="slider_1-item-padding slider-padding">

									<div class="slider-body slider_1-item-body position-relative">

										<h3 class="slider_1-item-heading mb-1">

											Lorem ipsum 

										</h3>

										<b class="slider_1-item-bold d-block mb-3"> Integer id suscipit </b>

										<p class="slider_1-item-content mb-0">
											
											<?php echo str_repeat("Quisque in tellus lorem. Donec at elementum est. Integer id suscipit felis.", $index); ?>

										</p>

										<button aria-label="next" class="c-custom-1 position-absolute slider_1-button slider-next d-md-none"><i class="fa-solid fa-arrow-right"></i></button>

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
				$justify_even = $index % 2 === 1 ? "justify-content-md-start" : "justify-content-md-end";
				$justify_odd = $index % 2 === 1 ? "justify-content-md-end" : "justify-content-md-start";
				$justify_even = $index % 2 === 1 ? "justify-content-md-start" : "justify-content-md-end";
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

				<div class="slider_2-item timeline-item <?php echo $display; ?> g-0">

					<div class="slider_2-padding row justify-content-center justify-content-md-between <?php echo $direction; ?> g-0">

						<div class="col-12 col-sm-8 col-md-5">

							<div class="row h-100 align-items-md-center <?php echo $justify_even; ?> g-0">

								<div class="col-12 col-md-11">
							
									<img class="slider_2-image <?php echo $pad_image; ?>" src="./images/400x400.svg" width="400" height="400"  alt="Placehold">

								</div>

							</div>

						</div>
				
						<div class="slider_2-date-line col-12 col-md-1 <?php echo $date_line_md; ?> position-relative d-flex justify-content-center align-items-md-center py-5 py-md-0">

							<div class="slider_2-date position-relative">

								<div class="slider_2-date-text d-flex align-items-center justify-content-center my-5 py-2 py-md-3 mx-auto">
									<?php echo $index . "000"?>
								</div>

							</div>

						</div>

						<div class="col-11 col-md-5 pt-md-5">

							<div class="row justify-content-center <?php echo $justify_odd; ?> g-0">

								<div class="slider_2-heading-container col-11 col-sm-10 col-md-12 col-lg-11 d-flex justify-content-start mb-4">

									<h3 class="lider_2-heading mw-lg-355 text-center text-lg-start border <?php echo $color_array[$count] ?> p-2 mb-3">

										Donec dui quam, et pellentesque

									</h3>	

								</div>

								<div class="slider_2-content col-12 col-md-11 text-center text-md-start">
								
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

				<button aria-label="see more" class="c-custom-1 timeline-button"><i class="fa-solid fa-arrow-down"></i></button>

			</div>

		</div>

	</div>

	<hr class="my-5">

	<h2 class="text-center my-5"> Slider 3 </h2>

	<div class="container-xl g-0">

		<div class="slider_3-border-img">

			<div class="slider_3-background" role="img" aria-label="email notifications">

			<div class="slider_3-shrink-container shrink-container">

				<div class="slider_3-button-next-container button-container">

					<button aria-label="open-left" class="slider_3-button-next open-left"><i class="fa-solid fa-circle-arrow-left"></i></button>
					<button aria-label="open-right" class="slider_3-button-next open-right"><i class="fa-solid fa-circle-arrow-right"></i></button>

				</div>

				<div class="slider_3-container slider-container">

					<a href="mailto:user@gmail.com" rel="noreferrer" target="_blank" class="slider_3-a image-1"></a>
					<a href="mailto:user@gmail.com" rel="noreferrer" target="_blank" class="slider_3-a image-fill-right"></a>
					<div class="slider_3-inner inner"></div>
					<a href="tel:0419-777-066" rel="noreferrer" target="_blank" class="slider_3-a image-2"></a>
					<a href="tel:0419-777-066" rel="noreferrer" target="_blank" class="slider_3-a image-fill-left"></a>
				

					<div class="static-count d-none">

						<img class="slider_3-img" src="./images/150x150-grey.svg" width="150" height="150" alt="mail" />

						<div>

							<a href="mailto:user@gmail.com" rel="noreferrer" target="_blank">dolor sit amet</a>

						</div>

					</div>

					<div class="static-count d-none">

						<img class="slider_3-img" src="./images/150x150-pink.svg" width="150" height="150" alt="telephone" />

						<div>

							<a href="tel:0419-777-066" rel="noreferrer" target="_blank">dolor sit</a>

						</div>

					</div>

					<div class="static-count  d-none">

						<img class="slider_3-img" src="./images/150x150-light.svg" width="150" height="150" alt="LinkedIn" />

						<div>

							<a href="https://www.linkedin.com/in/david-smith-572b10259/" rel="noreferrer" target="_blank">dolor</a>

						</div>

					</div>

				</div>

				<div class="slider_3-percentage percentage">

					<div class="percentage-change"></div>

				</div>

				<div class="d-flex p-2">

					<button aria-label="open" class="c-custom-1 slider_3-button-toggle button-toggle"><i class="fa-solid fa-computer-mouse"></i></button>

				</div>
					
				</div>

			</div>

		</div>

	</div>

	<hr class="my-5">

	<h2 class="text-center my-5"> Slider 4 </h2>

	<div class="container g-0">

		<div class="slider_4-height-container height-container row d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-md-around g-0">

			<p class="col-11 col-md-5 d-flex h-100 align-items-md-center m-0">
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

			<div class="col-12 col-md-6 slider_4-figure-container pt-5 pt-md-0">

				<a class="slider_4-figure figure-one scroll d-md-has-height w-100 d-flex justify-content-center mb-sm-5 mb-md-0" href="#">

				
					<img src="./images/660x445-light.svg" width="440" height="293" alt="Placehold"/>

					<p class="d-flex justify-content-center align-items-end text-center m-0 px-3 pb-3">
						dolor sit lorem ipsum amet.
					</p>

				</a>

				<a class="slider_4-figure figure-two scroll d-md-0-height w-100 d-flex justify-content-center" href="#">

					<img src="./images/660x445-dark.svg" width="440" height="293"  alt="Placehold"/>
					
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

							<img src="./images/100x100.svg" width="100" height="100"  alt="Placehold"/>

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

			<div class="slider_5-site-container site-container">

				<div id="site-1" class="slider_5-site site-img d-has-display">

					<img src="./images/400x400-blue.svg" width="400" height="400" alt="Placehold"/>

				</div>

				<div id="site-2" class="slider_5-site site-img">

					<a target="lorem" href="https://google.com/">
							lorem commodo 
					</a>

					<img src="./images/400x400.svg" width="400" height="400" alt="Placehold"/>

				</div>

				<div id="site-3" class="slider_5-site site-img">

					<a target="dolor" href="https://google.com/">
						ex ea commodo 
					</a>

					<img src="./images/400x400-dark.svg" width="400" height="400" alt="Placehold" />

				</div>

				<button aria-label="close" class="slider_5-close slider-close">X</button>

			</div>

		</div>

	</div>

	<section class="container-fluid g-0">

		<div class="row g-0">

			<hr class="my-5">

			<h2 class="text-center my-5"> Slider 6 </h2>

			<div class="col-11 col-lg-8 col-xl-6 ">

				<p class="text-center mx-auto mb-5">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at bibendum felis. In convallis
					odio velit, et porttitor sem accumsan sed. Aliquam ultrices quam nec purus dictum vehicula.
					Mauris suscipit et sem vel auctor. Duis dapibus arcu sem, a porttitor massa vulputate sed.
				</p>

			</div>

			<div class="slider_6-container col-12 col-md-10 col-xl-8 pb-md-5">

				<div class="row g-0">

					<div class="col-md-10 mb-md-3 ms-md-5">

						<div class="row d-none d-md-flex justify-content-between g-0">

							<div class="col-md-3">

								<button class="col-md-3 slider_6-button-group button-group">Dolore</button>

							</div>

							<div class="col-md-3">

								<button class="col-md-3 slider_6-button-group button-group">Fugiat</button>

							</div>

							<div class="col-md-3">

								<button class="col-md-3 slider_6-button-group button-group">Occaecat</button>

							</div>

							<div class="col-md-3">

								<button class="col-md-3 slider_6-button-group button-group">Excepteur </button>

							</div>

						</div>

					</div>

					<div class="slider_6-action-container col-12 col-md-11">

						<div class="row g-0">

							<div class="slider_6-strip col-3"></div>

							<img class="col-9" src="./images/950x574.svg" width="950" height="574" alt="Placeholder">

							<aside class="slider_6-action-aside action-aside">

								<h3 class="m-md-0">Dolore<i class="fa-solid fa-paperclip"></i></h3>

								<p>
									Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus at bibendum felis. In convallis
									odio velit, et porttitor sem accumsan sed. Aliquam ultrices quam nec purus dictum vehicula.
									Mauris suscipit et sem vel.
								</p>

							</aside>

							<aside class="slider_6-action-aside action-aside">

								<h3 class="m-md-0">Fugiat<i class="fa-solid fa-phone"></i></h3>

								<p>
									Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus at bibendum felis. In convallis
									odio velit, et porttitor sem accumsan sed. Aliquam ultrices quam nec purus dictum vehicula.
									Mauris suscipit et sem vel.
								</p>

							</aside>

							<aside class="slider_6-action-aside action-aside">

								<h3 class="m-md-0">Occaecat<i class="fa-solid fa-envelope"></i></h3>

								<p>
									Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus at bibendum felis. In convallis
									odio velit, et porttitor sem accumsan sed. Aliquam ultrices quam nec purus dictum vehicula.
									Mauris suscipit et sem vel.
								</p>

							</aside>

							<aside class="slider_6-action-aside action-aside">

								<h3 class="m-md-0">Excepteur<i class="fa-solid fa-circle-user"></i></h3>

								<p>
									Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus at bibendum felis. In convallis
									odio velit, et porttitor sem accumsan sed. Aliquam ultrices quam nec purus dictum vehicula.
									Mauris suscipit et sem vel.
								</p>

							</aside>

						</div>

					</div>

				</div>

			</div>

		</div>

	</section>

	<hr class="my-5">

	<h2 class="text-center my-5"> Slider 7 </h2>

	<?php 

		$index = 0;
		$count = 4;

		while ($index < 4) {

			$next_button = "d-flex";

			if ($index === $count - 1) {

				$next_button = "d-none";
			}

			?>

				<div class="overflow-hidden">

					<div id="overlay_body-<?php echo $index; ?>" class="slider_7-overlay-body slider_7-overlay-body-<?php echo $index; ?> overlay_body row align-items-center justify-content-center">

						<img class="col-12 col-md-6" src="./images/950x574.svg" width="950" height="574"  alt="Placeholder">

						<div class="col-12 d-flex align-items-center justify-content-center py-3">

							<button aria-label="close" class="c-custom-1 overlay-close"><i class="fa-solid fa-xmark"></i></button>	

							<button aria-label="next" class="c-custom-1 overlay-next <?php echo $next_button; ?>  ms-5"><i class="fa-solid fa-circle-chevron-right"></i></button>

						</div>

					</div>

					<div id="overlay_backdrop-<?php echo $index; ?>" class="slider_7-overlay-backdrop overlay-backdrop"></div>

				</div>

				<div class="container slider_7-container mb-5 g-0">

					<div class="row g-0">

						<div class="col-md-5 max-thumbnail-image position-relative">

							<img class="thumbnail-image" src="./images/400x400-blue.svg" width="400" height="400" alt="Placehold"/>

							<h3 class="thumbnail-title position-absolute text-center px-5 py-3">Lorem</h3>

						</div>

						<div class="col-md-7 flex-fill">

							<h3 class="post-title p-5">

								Lorem Ipsum

							</h3>

				
							<p class="pb-1 px-5">

								<span>Client:</span> Lorem dolor sit

							</p>

							
							<p class="pb-1 px-5">

								<span>Location:</span> Dorat sit lore

							</p>

				

							<div class="px-5 pb-5">

								<span>Lorem:</span> <?php echo substr("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at bibendum felis. In convallis odio velit, et porttitor sem accumsan sed. Aliquam ultrices quam nec purus dictum vehicula. Mauris suscipit et sem vel auctor. Duis dapibus arcu sem, a porttitor massa vulputate sed.", 0, 90); ?>...

							</div>

							<button id="overlay_open-<?php echo $index; ?>" aria-label="open" class="c-custom-1 overlay-open ms-5 mb-5"><i class="fa-solid fa-computer-mouse"></i></button>

						</div>

					</div>

				</div>

			<?php

		$index++;

		}
	?>


	<hr class="my-5">

	<h2 class="text-center my-5"> Slider 8 </h2>

	<div class="container slider_8-container d-flex flex-wrap justify-content-center">

		<?php 

			$index = 0;

			while ($index < 4) {

				$index++;

				?>

					<div class="slider_8-item has-test row w-100 justify-content-md-between">

						<div class="col-12 col-md-4">

							<h2 class="mb-3">
								
								Google

							</h2>

							<hr class="mb-5 mb-md-2">
							
							<p class="mb-1">
								
								Homepage
								<br>
								For searching

							</p> 

							<a class="d-inline-block mb-6" target="Google" href="https://google.com/">Visit</a>

						</div>

						<div class="col-12 col-md-7">

							<img src="./images/400x400-blue.svg" width="760" height="475" alt="Placehold"/>

						</div>

					</div>


				<?php 

			}
		?>

	</div>

	<hr class="my-5">

	<h2 class="text-center my-5"> Slider 9 </h2>

	<div class="container slider_9-container">

		<div class="row justify-content-between align-items-center g-0">

			<div class="col-2 d-flex justify-content-center">

				<button aria-label="prev" class="slider_9-button button-prev"><i class="fa-solid fa-circle-arrow-left"></i></button>

			</div>

			<div class="col-7 slider_9-inner inner-swap position-relative">

				<img class="has-current counters" src="./images/400x400.svg" width="950" height="574" alt="Placeholder">

				<img class="counters" src="./images/400x400-blue.svg" width="950" height="574" alt="Placeholder">

				<img class="counters" src="./images/400x400-dark.svg" width="950" height="574" alt="Placeholder">
				
			</div>

			<div class="col-2 d-flex justify-content-center">

				<button aria-label="next" class="slider_9-button button-next"><i class="fa-solid fa-circle-arrow-right"></i></button>

			</div>

		</div>

	</div>

</main>

<footer class="d-flex flex-wrap justify-content-center align-items-center pb-5">

	<hr class="w-100 mb-5">

	<p class="m-0"><i class="fa-regular fa-copyright"></i></p>

</footer>

<script src="./js/app.min.js" defer></script>

</body>

</html>