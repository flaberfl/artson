<?php

add_action('wp_enqueue_scripts', 'add_scripts_and_styles');

function add_scripts_and_styles()
{
	
	if (is_front_page()) {
		wp_enqueue_script('script', get_template_directory_uri() . '/js/app.js', 'null', 'null', true);
		
	} 
  
  wp_enqueue_style('style', get_stylesheet_uri());
}


add_filter('wpcf7_load_css', '__return_false');

add_filter('nav_menu_link_attributes', 'add_menu_link_class', 1, 3);

add_filter('upload_mimes', 'svg_upload_allow');

add_filter('wpcf7_autop_or_not', '__return_false');


# Добавляет SVG в список разрешенных для загрузки файлов.
function svg_upload_allow($mimes)
{
  $mimes['svg']  = 'image/svg+xml';

  return $mimes;
}


remove_action('template_redirect','dnd_cf7_auto_clean_dir', 20 );




?>