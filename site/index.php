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

<nav class="container-fluid slider_nav-navigation navigation d-flex align-items-start border-bottom p-0">

	<div class="row m-0 g-0">

		<div alria-label="menu" role="button" class="col-auto d-sm-none slider_nav-navbar-toggler navbar-toggler px-3 py-4">
			<div>
				<div class="slider_nav-bar"></div>
				<div class="slider_nav-bar"></div>
				<div class="slider_nav-bar"></div>
			</div>
		</div>

		<div class="col-12 slider_nav-navbar-collapse navbar-collapse">

			<ul class="list-unstyled my-4 my-sm-0 py-3">

				<li>

					<a class="mx-4 active" href="./">SLIDER NAV</a>

				</li>
		
			</ul>

		</div>

	</div>

</nav>

<header class="container-fluid d-flex flex-column justify-content-end align-items-start flex-wrap g-0">

	<h1 class="d-flex align-items-end px-4 pt-5 pb-5 m-0"> 
		
		Sliders
		<i class="fa-brands fa-android ps-3"></i>  

	</h1>

	<hr class="m-0 w-100">

</header>

<main class="d-flex flex-column">

	<div class="container-xl g-0">

		<h2 class="text-center my-5"> Slider 1 </h2>

		<div class="slider_1-outer position-relative">

			<div class="slider-container slider_1-row row d-flex flex-nowrap justify-content-start g-0">
				
				<?php

					$index = 1;

					while ($index < 5) {

						?>

							<div class="slider-item slider_1-item">

								<div class="slider_1-item-padding slider-padding h-100">

									<div class="slider-body slider_1-item-body position-relative h-100">

										<h3 class="slider_1-item-heading mb-1">

											Lorem ipsum 

										</h3>

										<b class="slider_1-item-bold d-block mb-3"> Integer id suscipit </b>

										<p class="slider_1-item-content mb-0">
											
											<?php echo str_repeat("Quisque in tellus lorem. Donec at elementum est. Integer id suscipit felis.", $index); ?>

										</p>

										<button aria-label="next" class="c-custom-1 position-absolute slider_1-button slider-next slider-next-sm"><i class="fa-solid fa-arrow-right"></i></button>

									</div>

								</div>
								
							</div>

						<?php

						$index++;

					}

				?>

			</div>

			<div class="slider_1-button-container slider-button-container d-none d-md-flex justify-content-end position-absolute">

				<button aria-label="next" class="c-custom-1 slider_1-button slider-next slider-next-md"><i class="fa-solid fa-arrow-right"></i></button>

				<button aria-label="next" class="c-custom-1 slider_1-button slider-next slider-next-lg"><i class="fa-solid fa-arrow-right"></i></button>

			</div>

		</div>

	</div>

	<hr id="slider_2-top" class="my-5">

	<h2 class="text-center my-5"> Slider 2 </h2>

    <div id="slider_2-top" class="slider_2-outer row g-0">

      <div class="slider_2-container timeline-container col-12 col-md-10 col-xl-8 mx-auto">

			<?php

			$index = 1;
			$count = -1;
			$array = array("Duis aute irure", "Lorem ipsum dolor", "Dolore magna aliqu", "Voluptate velit esse");

			while ($index < 5) {

			$direction = $index % 2 === 1 ? "flex-row" : "flex-row-reverse";
			$direction_even = $index % 2 === 1 ? "flex-row-reverse" : "flex-row";
			$justify_odd = $index % 2 === 1 ? "justify-content-md-end" : "justify-content-md-start";
			$text_direction = $index % 2 === 1 ? "text-center text-md-end" : "text-center text-md-start";

			$display = "d-none";

			if ($index === 1) {

				$display = "d-flex";
			}

			$count++;

			if ($count === count($array)) {

				$count = 0;
			}

			?>

			<div class="slider_2-item timeline-item row <?php echo $direction; ?> justify-content-center <?php echo $display; ?> g-0">
			
				<div class="col-12 col-md-6 d-flex <?php echo $justify_odd; ?>">

				<div class="slider_2-line-container d-flex flex-fill <?php echo $direction_even; ?>"> 

					<div class="slider_2-line">

					<div class="slider_2-lineinner d-flex align-items-center justify-content-center mx-auto"><div class="slider_2-linemid"></div></div>

					</div>   

					<div class="slider_2-date d-flex justify-content-center align-items-center">
										
					<p class="text-center">

						<?php echo $array[$count] ?>

						<span class="d-block">

						<?php 

							echo date('Y', strtotime("200$index-01-01"));

						?>

						<span>

					</p>

					</div>

				</div>

				</div>

				<div class="slider_2-content col-12 col-md-6">

				<div class="row justify-content-center <?php echo $justify_odd; ?> g-0">

					<div class="col-9 col-md-10 <?php echo $text_direction; ?>">
					
					<p>

						<?php 

						echo str_repeat(
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
							ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat."
						,$index);

						?>

					</p>

					</div>

				</div>

				</div>

			</div>

			<?php

			$index++;

			};

			?>

			<div class="slider_2-button-container d-flex justify-content-center pt-5 pt-md-0">

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

					<a class="slider_3-a image-1"></a>
					<a class="slider_3-a image-fill-right link-open"></a>
					<div class="slider_3-inner inner"><div></div></div>
					<a class="slider_3-a image-2"></a>
					<a class="slider_3-a image-fill-left link-open"></a>
				

					<div class="static-count d-none">

						<img class="slider_3-img" src="./images/150x150-grey.svg" width="150" height="150" alt="mail" />

						<div class="slider_3-innertext link-open" data-href="mailto:what@google.com"> 
							
							Email 
						
						</div>

					</div>

					<div class="static-count d-none">

						<img class="slider_3-img" src="./images/150x150-pink.svg" width="150" height="150" alt="telephone" />
		
						<div class="slider_3-innertext link-open" data-href="tel:+618888">
     
							Phone
							
						</div>

					</div>

					<div class="static-count  d-none">

						<img class="slider_3-img" src="./images/150x150-light.svg" width="150" height="150" alt="LinkedIn" />

						<div class="slider_3-innertext link-open" data-href="https://www.linkedin.com/in/david-smith-572b10259/">
     
							Visit
							
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

		<hr class="my-5">

		<h2 class="text-center my-5"> Slider 6 </h2>

		<div class="col-11 col-lg-8 col-xl-6 mx-auto">

			<p class="text-center mx-auto mb-5">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at bibendum felis. In convallis
				odio velit, et porttitor sem accumsan sed. Aliquam ultrices quam nec purus dictum vehicula.
				Mauris suscipit et sem vel auctor. Duis dapibus arcu sem, a porttitor massa vulputate sed.
			</p>

		</div>
		
		<div class="slider_6-container col-12 pb-md-5">

			<div class="row g-0">

				<div class="col-md-10 d-none d-md-flex justify-content-between mb-md-3 ms-md-5">

					<div class="row w-100 g-0">

						<div class="col-md-3">

							<input class="slider_6-range" type="range" id="service" value="-1"  name="service" min="-1" max="3" />
							<label class="hidden" for="service">Service</label>
						
						</div>
			
					</div>

				</div>

				<div class="slider_6-action-container col-12 col-md-10 col-lg-9">

					<div class="row g-0">

						<div class="slider_6-strip col-3"></div>

						<div class="col-9 d-md-none">

							<img class="w-100" src="./images/950x574.svg" width="950" height="574" alt="Placeholder">

						</div>

						<div class="col-12 col-md-9 slider_6-outer">

							<img class="w-100 d-none d-md-block" src="./images/950x574.svg" width="950" height="574" alt="Placeholder">
							
							<div class="d-flex slider_6-inner-container row overflow-hidden flex-md-nowrap py-md-4 mx-md-4 g-0">
						
								<aside class="h-100 slider_6-action-aside action-aside">

									<div class="slider_6-inner d-flex flex-column flex-sm-row flex-md-column justify-content-between align-items-start align-items-sm-center align-items-md-start p-3 p-lg-5 mx-auto">

										<h3 class="m-md-0">Dolore<i class="fa-solid fa-paperclip"></i></h3>

										<p class="h-100 d-flex align-items-center">
											Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus at bibendum felis. In convallis
											odio velit et porttitor sem accumsan sed. Aliquam ultrices quam nec purus dictum vehicula.
										</p>

									</div>

								</aside>

								<aside class="h-100 slider_6-action-aside action-aside">

									<div class="slider_6-inner d-flex flex-column flex-sm-row flex-md-column justify-content-between align-items-start align-items-sm-center align-items-md-start p-3 p-lg-5 mx-auto">

										<h3 class="m-md-0">Fugiat<i class="fa-solid fa-phone"></i></h3>

										<p class="h-100 d-flex align-items-center ">
											Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus at bibendum felis. In convallis
											odio velit et porttitor sem accumsan sed. Aliquam ultrices quam nec purus dictum vehicula.
											Mauris suscipit et sem vel auctor. 
										</p>

									</div>

								</aside>

								<aside class="h-100 slider_6-action-aside action-aside">

									<div class="slider_6-inner d-flex flex-column flex-sm-row flex-md-column justify-content-between align-items-start align-items-sm-center align-items-md-start p-3 p-lg-5 mx-auto">

										<h3 class="m-md-0">Occaecat<i class="fa-solid fa-envelope"></i></h3>

										<p class="h-100 d-flex align-items-center ">
											Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus at bibendum felis. In convallis
											odio velit et porttitor sem accumsan sed. Aliquam ultrices quam nec purus dictum vehicula.
											Mauris suscipit et.
										</p>

									</div>

								</aside>

								<aside class="h-100 slider_6-action-aside action-aside">

									<div class="slider_6-inner d-flex flex-column flex-sm-row flex-md-column justify-content-between align-items-start align-items-sm-center align-items-md-start p-3 p-lg-5 mx-auto">

										<h3 class="m-md-0">Excepteur<i class="fa-solid fa-circle-user"></i></h3>

										<p class="h-100 d-flex align-items-center ">
											Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus at bibendum felis. In convallis
											odio velit et porttitor sem accumsan sed. Aliquam ultrices quam nec purus dictum vehicula.
											Mauris suscipit.
										</p>

									</div>

								</aside>

							</div>

						</div>

					</div>

				</div>

			</div>

		</div>

		<div class="col-12 mt-md-5 pt-md-5">

			<div class="row flex-row-reverse mt-md-5 pt-md-5 g-0">
			
				<div class="col-12 col-md-6 mb-5 mt-md-5">

					<div class="slider_6-bottom row pt-4 pt-md-0 g-0">

						<div class="col-9">
							<img class="w-100" src="./images/950x574.svg" width="950" height="574" alt="Placeholder">
						</div>
						<div class="bottom-col col-3"></div>

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

	<div class="container slider_9-container g-0">

		<div class="d-flex flex-wrap-nowrap justify-content-center align-items-center">

			<div class="d-flex justify-content-center">

				<button aria-label="prev" class="slider_9-button button-prev">
					
					<i class="fa-solid fa-circle-arrow-left"></i>
				
				</button>

			</div>

			<div class="slider_9-inner inner-swap">

				<img aria-label="open" class="has-current counters" src="./images/1920x1080-pink.svg" width="1920" height="1080" alt="Placeholder">

				<img aria-label="open" class="counters"  src="./images/1920x1080-white.svg" width="1920" height="1080" alt="Placeholder">

				<img caria-label="open" class="counters" src="./images/1920x1080-green.svg" width="1920" height="1080" alt="Placeholder">
				
			</div>

			<div class="d-flex justify-content-center">

				<button aria-label="next" class="slider_9-button button-next">
						
					<i class="fa-solid fa-circle-arrow-right"></i>
				
				</button>

			</div>

		</div>

		<div class="overflow-hidden">

			<div id="overlay-image-0" class="slider_9-overlay overlay-image d-flex flex-column align-items-center justify-content-center">

				<div class="position-relative overlay-image-close">

					<div class="button-container">

						<button aria-label="close" class="c-custom-1">
							
							<i class="fa-solid fa-xmark"></i>
						
						</button>

					</div>

					<img class="w-100" src="./images/1920x1080-pink.svg" width="1920" height="1080" alt="Placeholder">

				</div>

			</div>

		</div>

		<div class="overflow-hidden">

			<div id="overlay-image-1" class="slider_9-overlay overlay-image d-flex flex-column align-items-center justify-content-center">

				<div class="position-relative overlay-image-close">

					<div class="button-container">

						<button aria-label="close" class="c-custom-1">
							
							<i class="fa-solid fa-xmark"></i>
						
						</button>

					</div>

					<img class="w-100" src="./images/1920x1080-white.svg" width="1920" height="1080" alt="Placeholder">

				</div>

			</div>

		</div>

		<div class="overflow-hidden">

			<div id="overlay-image-2" class="slider_9-overlay overlay-image d-flex flex-column align-items-center justify-content-center">

				<div class="position-relative overlay-image-close">

					<div class="button-container">

						<button aria-label="close" class="c-custom-1">
							
							<i class="fa-solid fa-xmark"></i>
						
						</button>

					</div>

					<img class="w-100" src="./images/1920x1080-green.svg" width="1920" height="1080" alt="Placeholder">

				</div>

			</div>

		</div>

	</div>

	<hr class="mb-0"/>

</main>

<footer class="d-flex flex-wrap justify-content-center align-items-center py-5">

	<p class="my-5 py-5"><i class="fa-regular fa-copyright"></i></p>

</footer>

<script src="./js/app.min.js" defer></script>

</body>

</html>