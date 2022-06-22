<?php

/**
 *Plugin Name: short 2
 *Description: Un deuxième exemple de plugin utilisant shortcode en utilisant des dossiers pour la structure
 *Author: Xiaowei Ma
 *Plugin URI: https://github.com/Tracy202201/31w-extension-exer2.git
 */


function short2_31w_enqueue()
{

    $version_css  = filemtime(plugin_dir_path(__FILE__) . 'style.css');
    $version_js = filemtime(plugin_dir_path(__FILE__) . 'script/message.js');

    wp_enqueue_style(
        'sh2_31w_css',
        plugin_dir_url(__FILE__) . 'style.css',
        array(),
        $version_css
    );

    wp_enqueue_script(
        'sh2_31w_js',
        plugin_dir_url(__FILE__) . 'script/message.js',
        array(),
        $version_js,
        true
    );
}

add_action('wp_enqueue_scripts', 'short2_31w_enqueue');

function genere_adresse()
{

    /////////////////////////////////////// HTML
    $contenu = '<code class="code__adresse" style="display:none">';
    $contenu .= get_the_content();
    $contenu .= "3 800, rue Sherbrooke Est Montréal (Québec) H1X 2A2 | 514 254-7131";
    $contenu .= '</code>&nbsp; &nbsp;';
    $contenu .= '<button id="mon_bouton">Pour plus de détails</button>';

    return $contenu;
}

add_shortcode('adr', 'genere_adresse');
