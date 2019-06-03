<?php
/**
 * Plugin Name: Custom API for React (pessoal)
 * Plugin URI: -
 * Description: -
 * Version: 2.0
 * Author: Caio Ramos
 * Author URI: http://www.awedash.com
 */


function wl_posts () {
 return "LOLOLOLOLO";
}


add_action('rest_api_init', function () {
    register_rest_route('wl/v1', 'posts', [
        'methods' => 'GET',
        'callback' => 'wl_posts'
    ]);
})

?>