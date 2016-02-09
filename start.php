<?php
/*
 Template Name: Basic
 *
 * This is your custom page template. You can create as many of these as you need.
 * Simply name is "page-whatever.php" and in add the "Template Name" title at the
 * top, the same way it is here.
 *
 * When you create your page, you can just select the template and viola, you have
 * a custom page template to call your very own. Your mother would be so proud.
 *
 * For more info: http://codex.wordpress.org/Page_Templates
*/
?>

<?php get_header(); ?>

	<div id="content">

		<div id="inner-content" class="wrap">

			<main id="main" class="m-all">

				<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>">

					<header>

						<h1 class="page-title"><?php the_title(); ?></h1>
		
					</header>

					<section class="entry-content cf basic-page" itemprop="articleBody">
						<?php the_content(); ?>
					</section>

				</article>
				<?php endwhile; endif; ?>						
			</main>
		</div>
	</div>


<?php get_footer(); ?>
