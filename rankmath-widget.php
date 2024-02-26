<?php
/*
 * Plugin Name:       Rank Math Widget
 * Description:       Dashboard Widget done for rankmath.
 * Version:           1.0.0
 * Author:            Aramide Adetunji
 * Author URI:        https://adetunjiaramide.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 */

 // Prevent direct access of page
 if (!defined('ABSPATH')) {
    die('cant access');
 }

// enqueue the admin scripts
function chart_admin_enqueue_scripts() {
    wp_enqueue_style('rankmath-style', plugin_dir_url(__FILE__) . 'build/index.css' );
    wp_enqueue_script('rankmath-script', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-element'), '1.0.0', true );
}

add_action('admin_enqueue_scripts', 'chart_admin_enqueue_scripts' );


/**
 * Add a new dashboard widget.
 */
function rankmath_add_dashboard_widget() {
    wp_add_dashboard_widget( 'dashboard_widget', 'Rank Math Chart', 'dashboard_widget_page' );
}

add_action( 'wp_dashboard_setup', 'rankmath_add_dashboard_widget' );


function dashboard_widget_page() {
    echo '<div id="widget-page"></div>';
}

