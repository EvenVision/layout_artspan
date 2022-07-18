<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
?>
<article class="node-<?php print $node->nid; ?> <?php print $classes; ?> clearfix"<?php print $attributes; ?>>

  <?php if ($title_prefix || $title_suffix || $display_submitted || $unpublished || !$page && $title): ?>
    <header>
      <?php print render($title_prefix); ?>
      <?php if (!$page && $title): ?>
        <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
      <?php endif; ?>
      <?php print render($title_suffix); ?>

      <?php if ($display_submitted): ?>
        <p class="submitted">
          <?php print $user_picture; ?>
          <?php print $submitted; ?>
        </p>
      <?php endif; ?>

      <?php if ($unpublished): ?>
        <mark class="unpublished"><?php print t('Unpublished'); ?></mark>
      <?php endif; ?>
    </header>
  <?php endif; ?>

  <div class="content clearfix"<?php print $content_attributes; ?>>
    <?php if (isset($content['body'])) : ?>
     	<?php print render($content['body']); ?> 
    <?php endif; ?>
    <?php   
      $include_read_more = isset($content['field_include_read_more_links']) ? $node->field_include_read_more_links['und'][0]['value'] : FALSE;
    ?> 

    <!-- row 1 -->
    <?php if (isset($content['field_row_1_left_title'])) : ?>
      <div class="flex-grid flex-row-1">
        <div class="flex-title-container flex-container clearfix">
          <div class="flex-title flex-left flex-row">
            <?php if (isset($content['field_row_1_left_url'])) : ?>
              <a class="link" href="<?php print($node->field_row_1_left_url['und'][0]['value']); ?>" target="_self">
            <?php endif; ?>         
            <h3><?php print render($content['field_row_1_left_title']); ?></h3>
            <?php if (isset($content['field_row_1_left_url'])) : ?>
              </a>
            <?php endif; ?>    
          </div>
          <div class="flex-title flex-right flex-row">
            <?php if (isset($content['field_row_1_right_url'])) : ?>
              <a class="link" href="<?php print($node->field_row_1_right_url['und'][0]['value']); ?>" target="_self">
            <?php endif; ?>         
            <h3><?php print render($content['field_row_1_right_title']); ?></h3>
            <?php if (isset($content['field_row_1_right_url'])) : ?>
              </a>
            <?php endif; ?>    
          </div>
        </div>
        <div class="flex-image-container flex-container clearfix">
          <div class="flex-image flex-left flex-row">
            <?php if (isset($content['field_row_1_left_image'])) : ?>
              <?php print render($content['field_row_1_left_image']); ?>
            <?php endif; ?>
          </div>
          <div class="flex-image flex-right flex-row">
            <?php if (isset($content['field_row_1_right_image'])) : ?>
              <?php print render($content['field_row_1_right_image']); ?>
            <?php endif; ?>
          </div>
        </div>        
        <div class="flex-body-container flex-container clearfix">
          <div class="flex-left flex-row">
            <?php if (isset($content['field_row_1_left_body'])) : ?>
              <?php print render($content['field_row_1_left_body']); ?>
            <?php endif; ?>
          </div>
          <div class="flex-right flex-row">
            <?php if (isset($content['field_row_1_right_body'])) : ?>
              <?php print render($content['field_row_1_right_body']); ?>
            <?php endif; ?>
          </div>       
        </div>
        <div class="flex-more-container flex-container clearfix">
          <div class="flex-left flex-row">        
            <?php if ($include_read_more) : ?>
              <a class="more" href="<?php print($node->field_row_1_left_url['und'][0]['value']); ?>">
              Read More</a>
            <?php endif; ?>
          </div>
          <div class="flex-right flex-row">        
            <?php if ($include_read_more) : ?>
              <a class="more" href="<?php print($node->field_row_1_right_url['und'][0]['value']); ?>">
              Read More</a>
            <?php endif; ?>
          </div>          
        </div>
        
      </div>   
    <?php endif; ?>

    <!-- row 2 -->
    <?php if (isset($content['field_row_2_left_title'])) : ?>
      <div class="flex-grid  flex-row-2">
         <div class="flex-title-container flex-container clearfix">
          <div class="flex-title flex-left flex-row">
            <?php if (isset($content['field_row_2_left_url'])) : ?>
              <a class="link" href="<?php print($node->field_row_2_left_url['und'][0]['value']); ?>" target="_self">
            <?php endif; ?>         
            <h3><?php print render($content['field_row_2_left_title']); ?></h3>
            <?php if (isset($content['field_row_2_left_url'])) : ?>
              </a>
            <?php endif; ?>    
          </div>
          <div class="flex-title flex-right flex-row">
            <?php if (isset($content['field_row_2_right_url'])) : ?>
              <a class="link" href="<?php print($node->field_row_2_right_url['und'][0]['value']); ?>" target="_self">
            <?php endif; ?>         
            <h3><?php print render($content['field_row_2_right_title']); ?></h3>
            <?php if (isset($content['field_row_2_right_url'])) : ?>
              </a>
            <?php endif; ?>    
          </div>
        </div>
        <div class="flex-image-container flex-container clearfix">
          <div class="flex-left flex-row">
            <?php if (isset($content['field_row_2_left_image'])) : ?>
              <?php print render($content['field_row_2_left_image']); ?>
            <?php endif; ?>
          </div>
          <div class="flex-right flex-row">
            <?php if (isset($content['field_row_2_right_image'])) : ?>
              <?php print render($content['field_row_2_right_image']); ?>
            <?php endif; ?>
          </div>
        </div>         
        <div class="flex-body-container flex-container clearfix">
          <div class="flex-left flex-row">
            <?php if (isset($content['field_row_2_left_body'])) : ?>
              <?php print render($content['field_row_2_left_body']); ?>
            <?php endif; ?>
          </div>
          <div class="flex-right flex-row">
            <?php if (isset($content['field_row_2_right_body'])) : ?>
              <?php print render($content['field_row_2_right_body']); ?>
            <?php endif; ?>
          </div>       
        </div>
        <div class="flex-more-container flex-container clearfix">
          <div class="flex-left flex-row">        
            <?php if ($include_read_more) : ?>
              <a class="more" href="<?php print($node->field_row_2_left_url['und'][0]['value']); ?>">
              Read More</a>
            <?php endif; ?>
          </div>
          <div class="flex-right flex-row">        
            <?php if ($include_read_more) : ?>
              <a class="more" href="<?php print($node->field_row_2_right_url['und'][0]['value']); ?>">
              Read More</a>
            <?php endif; ?>
          </div>          
        </div>
        
      </div>   
    <?php endif; ?>

    <!-- row 3 -->
    <?php if (isset($content['field_row_3_left_title'])) : ?>
      <div class="flex-grid  flex-row-3">
         <div class="flex-title-container flex-container clearfix">
          <div class="flex-title flex-left flex-row">
            <?php if (isset($content['field_row_3_left_url'])) : ?>
              <a class="link" href="<?php print($node->field_row_3_left_url['und'][0]['value']); ?>" target="_self">
            <?php endif; ?>         
            <h3><?php print render($content['field_row_3_left_title']); ?></h3>
            <?php if (isset($content['field_row_3_left_url'])) : ?>
              </a>
            <?php endif; ?>    
          </div>
          <div class="flex-title flex-right flex-row">
            <?php if (isset($content['field_row_3_right_url'])) : ?>
              <a class="link" href="<?php print($node->field_row_3_right_url['und'][0]['value']); ?>" target="_self">
            <?php endif; ?>         
            <h3><?php print render($content['field_row_3_right_title']); ?></h3>
            <?php if (isset($content['field_row_3_right_url'])) : ?>
              </a>
            <?php endif; ?>    
          </div>
        </div>
        <div class="flex-image-container flex-container clearfix">
          <div class="flex-left flex-row">
            <?php if (isset($content['field_row_3_left_image'])) : ?>
              <?php print render($content['field_row_3_left_image']); ?>
            <?php endif; ?>
          </div>
          <div class="flex-right flex-row">
            <?php if (isset($content['field_row_3_right_image'])) : ?>
              <?php print render($content['field_row_3_right_image']); ?>
            <?php endif; ?>
          </div>
        </div>         
        <div class="flex-body-container flex-container clearfix">
          <div class="flex-left flex-row">
            <?php if (isset($content['field_row_3_left_body'])) : ?>
              <?php print render($content['field_row_3_left_body']); ?>
            <?php endif; ?>
          </div>
          <div class="flex-right flex-row">
            <?php if (isset($content['field_row_3_right_body'])) : ?>
              <?php print render($content['field_row_3_right_body']); ?>
            <?php endif; ?>
          </div>       
        </div>
        <div class="flex-more-container flex-container clearfix">
          <div class="flex-left flex-row">        
            <?php if ($include_read_more) : ?>
              <a class="more" href="<?php print($node->field_row_3_left_url['und'][0]['value']); ?>">
              Read More</a>
            <?php endif; ?>
          </div>
          <div class="flex-right flex-row">        
            <?php if ($include_read_more) : ?>
              <a class="more" href="<?php print($node->field_row_3_right_url['und'][0]['value']); ?>">
              Read More</a>
            <?php endif; ?>
          </div>          
        </div>
        
      </div>   
    <?php endif; ?>

    <!-- row 4 -->
    <?php if (isset($content['field_row_4_left_title'])) : ?>
      <div class="flex-grid flex-row-4">
         <div class="flex-title-container flex-container clearfix">
          <div class="flex-title flex-left flex-row">
            <?php if (isset($content['field_row_4_left_url'])) : ?>
              <a class="link" href="<?php print($node->field_row_4_left_url['und'][0]['value']); ?>" target="_self">
            <?php endif; ?>         
            <h3><?php print render($content['field_row_4_left_title']); ?></h3>
            <?php if (isset($content['field_row_4_left_url'])) : ?>
              </a>
            <?php endif; ?>    
          </div>
          <div class="flex-title flex-right flex-row">
            <?php if (isset($content['field_row_4_right_url'])) : ?>
              <a class="link" href="<?php print($node->field_row_4_right_url['und'][0]['value']); ?>" target="_self">
            <?php endif; ?>         
            <h3><?php print render($content['field_row_4_right_title']); ?></h3>
            <?php if (isset($content['field_row_4_right_url'])) : ?>
              </a>
            <?php endif; ?>    
          </div>
        </div>
        <div class="flex-image-container flex-container clearfix">
          <div class="flex-left flex-row">
            <?php if (isset($content['field_row_4_left_image'])) : ?>
              <?php print render($content['field_row_4_left_image']); ?>
            <?php endif; ?>
          </div>
          <div class="flex-right flex-row">
            <?php if (isset($content['field_row_4_right_image'])) : ?>
              <?php print render($content['field_row_4_right_image']); ?>
            <?php endif; ?>
          </div>
        </div>         
        <div class="flex-body-container flex-container clearfix">
          <div class="flex-left flex-row">
            <?php if (isset($content['field_row_4_left_body'])) : ?>
              <?php print render($content['field_row_4_left_body']); ?>
            <?php endif; ?>
          </div>
          <div class="flex-right flex-row">
            <?php if (isset($content['field_row_4_right_body'])) : ?>
              <?php print render($content['field_row_4_right_body']); ?>
            <?php endif; ?>
          </div>       
        </div>
        <div class="flex-more-container flex-container clearfix">
          <div class="flex-left flex-row">        
            <?php if ($include_read_more) : ?>
              <a class="more" href="<?php print($node->field_row_4_left_url['und'][0]['value']); ?>">
              Read More</a>
            <?php endif; ?>
          </div>
          <div class="flex-right flex-row">        
            <?php if ($include_read_more) : ?>
              <a class="more" href="<?php print($node->field_row_4_right_url['und'][0]['value']); ?>">
              Read More</a>
            <?php endif; ?>
          </div>          
        </div>
        
      </div>   
    <?php endif; ?>

    <!-- row 5 -->
    <?php if (isset($content['field_row_5_left_title'])) : ?>
      <div class="flex-grid flex-row-5">
         <div class="flex-title-container flex-container clearfix">
          <div class="flex-title flex-left flex-row">
            <?php if (isset($content['field_row_5_left_url'])) : ?>
              <a class="link" href="<?php print($node->field_row_5_left_url['und'][0]['value']); ?>" target="_self">
            <?php endif; ?>         
            <h3><?php print render($content['field_row_5_left_title']); ?></h3>
            <?php if (isset($content['field_row_5_left_url'])) : ?>
              </a>
            <?php endif; ?>    
          </div>
          <div class="flex-title flex-right flex-row">
            <?php if (isset($content['field_row_5_right_url'])) : ?>
              <a class="link" href="<?php print($node->field_row_5_right_url['und'][0]['value']); ?>" target="_self">
            <?php endif; ?>         
            <h3><?php print render($content['field_row_5_right_title']); ?></h3>
            <?php if (isset($content['field_row_5_right_url'])) : ?>
              </a>
            <?php endif; ?>    
          </div>
        </div>
        <div class="flex-image-container flex-container clearfix">
          <div class="flex-left flex-row">
            <?php if (isset($content['field_row_5_left_image'])) : ?>
              <?php print render($content['field_row_5_left_image']); ?>
            <?php endif; ?>
          </div>
          <div class="flex-right flex-row">
            <?php if (isset($content['field_row_5_right_image'])) : ?>
              <?php print render($content['field_row_5_right_image']); ?>
            <?php endif; ?>
          </div>
        </div>        
        <div class="flex-body-container flex-container clearfix">
          <div class="flex-left flex-row">
            <?php if (isset($content['field_row_5_left_body'])) : ?>
              <?php print render($content['field_row_5_left_body']); ?>
            <?php endif; ?>
          </div>
          <div class="flex-right flex-row">
            <?php if (isset($content['field_row_5_right_body'])) : ?>
              <?php print render($content['field_row_5_right_body']); ?>
            <?php endif; ?>
          </div>       
        </div>
        <div class="flex-more-container flex-container clearfix">
          <div class="flex-left flex-row">        
            <?php if ($include_read_more) : ?>
              <a class="more" href="<?php print($node->field_row_5_left_url['und'][0]['value']); ?>">
              Read More</a>
            <?php endif; ?>
          </div>
          <div class="flex-right flex-row">        
            <?php if ($include_read_more) : ?>
              <a class="more" href="<?php print($node->field_row_5_right_url['und'][0]['value']); ?>">
              Read More</a>
            <?php endif; ?>
          </div>          
        </div>
        
      </div>   
    <?php endif; ?>    
    
  </div>  


  
  <?php
    // We hide the comments and links now so that we can render them later.
    hide($content['comments']);
    hide($content['links']);
    //print render($content);
  ?>

  <?php print render($content['links']); ?>
  <?php print render($content['comments']); ?>

</article>