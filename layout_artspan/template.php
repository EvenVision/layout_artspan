<?php
/**
 * @file
 * Contains the theme's functions to manipulate Drupal's default markup.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728096
 */


/**
 * Implements hook_preprocess_html().
 *
 * If admin_menu_toolbar module is enabled add a class to .
 */
function layout_artspan_preprocess_html(&$variables) {

  // Add admin-menu class to body when admin menu is present
  if ($variables['is_admin']) {
    $variables['classes_array'][] = 'admin-menu';
  }

  foreach($variables['user']->roles as $role){
      $variables['classes_array'][] = 'role-' . drupal_html_class($role);
    }

  
}



function layout_artspan_preprocess_page(&$variables, $hook) {
  // HEADER IMAGE (BANNER)  
  // headers are set in content type on the header_image field
  // get the path and name (uri) of the header_image file from the node and use 
  // it to create a set a background image in page.tpl.php
  
   // dpm($variables) will not show you the node values, you must use 
   //dpm($variables['node'], 'page variable node');
  
  //set some variables
  $variables['is_home'] = FALSE;
  $variables['show_aside'] = TRUE;
  $variables['sidebar_right'] = FALSE;
  $variables['main_layout_type'] = 'left-aside';
  $variables['main_layout_descriptor'] = 'standard';

 
  if (!empty($variables['node'])) {

    $node = $variables['node'];

    // FRONT
    // have to set front new variable for front since we are using a different page
    $variables['is_home'] = ($node->nid == '23333') ? TRUE : FALSE; 
    
    // HEADER IMAGE
    // get the header file if it exists
    $public_uri = (isset($node->field_header_image['und'][0]['uri']) ?
            $node->field_header_image['und'][0]['uri'] : NULL);
    
    if (!empty($public_uri)) {
      // use the image_uri to get the path
      $image_path = file_create_url($public_uri);
      $variables['masthead_image'] = '<img src="' .$image_path . '">';
      
      
      //lastly, remove the header_image - we don't just want to make it invisible
      // we want to remove it so that it doesn't add bytes to the upload
      $nid = $variables['node']->nid; 
      $variables['page']['content']['system_main']['nodes'][$nid]['field_header_image'] = NULL;
      
      // if header image and  home then grab the header_image_artist
      if ($variables['is_home']) {
        $variables['header_image_artist'] = $node->field_header_image_artist['und'][0]['value'];
      }
      
    }
    
 
    // ADD TABS CONTAINING DISPLAY VIEW CONTENT TO A NODE 
    if ($node->nid == '23322') { // upcoming-events
      // thanks to: https://www.appliedtrust.com/blog/2012/04/creating-a-nice-tabbed-output-using-views3-in-drupal-7
      // and http://drupal.stackexchange.com/questions/2175/adding-jquery-tabs-via-template-php
      
    //dpm($node, 'variables node'); 
      
        $variables['main_layout_descriptor'] = 'upcoming-events'; //FIXME - put with other descriptors
      
         // get the view, ‘resources’ here is the machine name of your view.
       $view = views_get_view('events_upcoming_events');

       // add a container to hold your tabs
       $tabs = '<div id="tabs_custom"><ul class="tabs-custom tabs custom">';
       $content = '';

       $num_views = count($view->display);
       $i=1;
       
       // FIXME: this should output in same order as the displays are shown in 
       // the view - right now it is reversed
       $temp_array = array();
       foreach ($view->display as $name => $v) {
	 $temp_array[$name] = $v;
       }
       $temp_array = array_reverse($temp_array);

       foreach ($temp_array as $name => $v) {
         // we don't want the default block included here
         if ($name != 'default') {

           // this will allow us to add a class to the very last tab for theming purposes
           $last = ($num_views == $i) ? " class='last' " : "";
           // build the tab
           $tabs .= "<li class='tabs-custom-tab'><a class='tabs-custom-tab-link' href='#tabs-$name'$last>$v->display_title</a></li>";

           // get the content for this view.
           $embed_view = views_embed_view('events_upcoming_events', $name);
           $content .= "<div id='tabs-$name' class='tab-content'>" . $embed_view . "</div>";
         }  
         $i++;
       }  

       $tabs .= '</ul>';
       $tabs .= $content;
       $tabs .= '</div>';

       $variables['tabs_custom'] = $tabs;

       // and add the js to handle these tabs
       drupal_add_library('system', 'ui.tabs');
       drupal_add_js('jQuery(document).ready(function()
        {
          jQuery("#tabs_custom").tabs();

        });', 'inline');

    //dpm($variables, 'variables');
    }

  } //is_node
  
  // DO NOT show Aside for the following - the descriptor will be set in the/
  // page div and used in the grid.scss for the #main container
  $args = explode('/', request_path());
  
  //$path = array_pop($args); // pop the last value off the array
  $path = $args[0];
//dpm($path, 'args');
 
  // FIXME: actually want to assign classes based on the page needs
  switch($path) {
    // art search has no aside
    case ('art'):
        $variables['show_aside'] = FALSE;
        $variables['main_layout_type'] = "no-aside";
        $variables['main_layout_descriptor'] = 'art-search-page';
      break;
    // artist has an aside but it is a different aside
    case ('artist'):
        $variables['show_aside'] = FALSE;
        $variables['main_layout_type'] = "no-aside";
        $variables['main_layout_descriptor'] = 'artist-profile-page';
        
      break;
    // dashboard no aside
    case ('dashboard'):
        $variables['show_aside'] = FALSE;
        $variables['main_layout_type'] = "no-aside";
        $variables['main_layout_descriptor'] = 'dashboard-page'; 
      break;      
    // home has no aside
    case ('home'):
        $variables['show_aside'] = FALSE;
        $variables['main_layout_type'] = "no-aside";
        $variables['main_layout_descriptor'] = 'homepage';
      break;
    // upcoming has aside but needs tab styling
    //case ('upcoming-events'):
    //    $variables['main_layout_descriptor'] = $path;
    //  break;     
  }
 
//dpm($variables, 'page variables');
//dpm($variables['node'], 'page variable node');  
}

/**
** Override username function from theme.inc.
** Purpose: Don't truncate usernames over 15 char
**/

function layout_artspan_preprocess_username(&$variables) {
   $variables['name'] = $variables['name_raw'];
}