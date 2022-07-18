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
     <?php 	if (isset($content['body'])) { 
     		 print render($content['body']);
     		} 
     ?>
    </div>
    <?php   
      $include_read_more = isset($content['field_include_read_more_links']) ? $node->field_include_read_more_links['und'][0]['value'] : FALSE;
    ?>
    <?php if (isset($content['field_row_1_left_title'])) { ?>
      <div class="content-split"><div class="padding-10">
      <?php if (isset($content['field_row_1_left_url'])) { ?><a href="<?php print($node->field_row1_left_url['und'][0]['value']); ?>"> 
    <?php } ?>
      <h2><?php print($node->field_row_1_left_title['und'][0]['value']);?></h2>
      	 <?php if (isset($content['field_row_1_left_url'])) { ?>
	 		</a>
	 <?php } ?>
      <?php print render($content['field_row_1_left_body']); ?>
      <?php if ($include_read_more && isset($content['field_row_1_left_url'])) { ?><a class="more" href="<?php print($node->field_row_1_left_url['und'][0]['value']); ?>"><?php echo_lang('Read More','Leer M&aacute;s') ?></a><?php } ?>
    </div></div>
    <?php } ?>
   <?php if (isset($content['field_row_1_right_title'])) { ?>
    <div class="content-split"><div class="padding-10">
    <?php if (isset($content['field_row_1_right_url'])) { ?>
    	<a href="<?php print($node->field_row_1_right_url['und'][0]['value']); ?>">
    <?php } ?>
	<h2><?php print($node->field_row_1_right_title['und'][0]['value']);?></h2>
	 <?php if (isset($content['field_row_1_right_url'])) { ?>
	 		</a>
	 <?php } ?>
      <?php print render($content['field_row2_body']); ?>
      <?php if ($include_read_more && isset($content['field_row1_right_url'])) { ?><a class="more" href="<?php print($node->field_row1_right_url['und'][0]['value']); ?>"><?php echo_lang('Read More','Leer M&aacute;s') ?></a><?php } ?>
    </div></div>
    <div class="clear"></div>
    <?php } ?>
    
    <?php if (isset($content['field_row2_left_title'])) { ?>
    <div class="content-split"><div class="padding-10">
    <?php if (isset($content['field_row2_left_url'])) { ?><a href="<?php print($node->field_row2_left_url['und'][0]['value']); ?>">
    <?php } ?>
      <h2><?php print($node->field_row2_left_title['und'][0]['value']);?></h2>
    <?php if (isset($content['field_row2_left_url'])) { ?>
	 		</a>
	 <?php } ?>
      <?php print render($content['field_row2_left_body']); ?>
     <?php if ($include_read_more && isset($content['field_row2_left_url'])) { ?><a class="more" href="<?php print($node->field_row2_left_url['und'][0]['value']); ?>"><?php echo_lang('Read More','Leer M&aacute;s') ?></a><?php } ?>
    </div></div>
    <?php } ?>
    <?php if (isset($content['field_row2_right_title'])) { ?>
    <div class="content-split"><div class="padding-10">
    <?php if (isset($content['field_row2_right_url'])) { ?><a href="<?php print($node->field_row2_right_url['und'][0]['value']); ?>">
    <?php } ?>
      <h2><?php print($node->field_row2_right_title['und'][0]['value']);?></h2>
   <?php if (isset($content['field_row2_right_url'])) { ?>
	 		</a>
	 <?php } ?>
      <?php print render($content['field_row2_right_body']); ?>
      <?php if ($include_read_more && isset($content['field_row2_right_url'])) { ?><a class="more" href="<?php print($node->field_row2_right_url['und'][0]['value']); ?>"><?php echo_lang('Read More','Leer M&aacute;s') ?></a><?php } ?>
    </div></div>
    <div class="clear"></div>
    <?php } ?>
    
    <?php if (isset($content['field_row3_left_title'])) { ?>
    <div class="content-split"><div class="padding-10">
    <?php if (isset($content['field_row3_left_url'])) { ?><a href="<?php print($node->field_row3_left_url['und'][0]['value']); ?>">
    <?php } ?>
      <h2><?php print($node->field_row3_left_title['und'][0]['value']);?></h2>
    <?php if (isset($content['field_row3_left_url'])) { ?>
	 		</a>
	 	<?php } ?>
      <?php print render($content['field_row3_left_body']); ?>
      <?php if ($include_read_more && isset($content['field_row3_left_url'])) { ?><a class="more" href="<?php print($node->field_row3_left_url['und'][0]['value']); ?>"><?php echo_lang('Read More','Leer M&aacute;s') ?></a><?php } ?>
    </div></div>
    <?php } ?>    
    
    <?php if (isset($content['field_row3_right_title'])) { ?>
    <div class="content-split"><div class="padding-10">
    <?php if (isset($content['field_row3_right_url'])) { ?><a href="<?php print($node->field_row3_right_url['und'][0]['value']); ?>">
    <?php } ?>
      <h2><?php print($node->field_row3_right_title['und'][0]['value']);?></h2>
    <?php if (isset($content['field_row3_right_url'])) { ?>
	 		</a>
	 	<?php } ?>
      <?php print render($content['field_row3_right_body']); ?>
      <?php if ($include_read_more && isset($content['field_row3_right_url'])) { ?><a class="more" href="<?php print($node->field_row3_right_url['und'][0]['value']); ?>"><?php echo_lang('Read More','Leer M&aacute;s') ?></a><?php } ?>
    </div></div>
    <div class="clear"></div>
    <?php } ?>
    
    <?php if (isset($content['field_row4_left_title'])) { ?>
    <div class="content-split"><div class="padding-10">
    <?php if (isset($content['field_row4_left_url'])) { ?><a href="<?php print($node->field_row4_left_url['und'][0]['value']); ?>">
    <?php } ?>
      <h2><?php print($node->field_row4_left_title['und'][0]['value']);?></h2>
    <?php if (isset($content['field_row4_left_url'])) { ?>
	 		</a>
	 	<?php } ?>
      <?php print render($content['field_row4_left_body']); ?>
      <?php if ($include_read_more && isset($content['field_row4_left_url'])) { ?><a class="more" href="<?php print($node->field_row4_left_url['und'][0]['value']); ?>"><?php echo_lang('Read More','Leer M&aacute;s') ?></a><?php } ?>
    </div></div>
    <?php } ?>    
    
    <?php if (isset($content['field_row4_right_title'])) { ?>
    <div class="content-split"><div class="padding-10">
    <?php if (isset($content['field_row4_right_url'])) { ?><a href="<?php print($node->field_row4_right_url['und'][0]['value']); ?>">
    <?php } ?>
      <h2><?php print($node->field_row4_right_title['und'][0]['value']);?></h2>
    <?php if (isset($content['field_row4_right_url'])) { ?>
	 		</a>
	 	<?php } ?>
      <?php print render($content['field_row4_right_body']);?>
      <?php if ($include_read_more && isset($content['field_row4_right_url'])) { ?><a class="more" href="<?php print($node->field_row4_right_url['und'][0]['value']); ?>"><?php echo_lang('Read More','Leer M&aacute;s') ?></a><?php } ?>
    </div></div>
    <?php } ?>
  </div>  
  
  <?php
    // We hide the comments and links now so that we can render them later.
    hide($content['comments']);
    hide($content['links']);
    print render($content);
  ?>

  <?php print render($content['links']); ?>

  <?php print render($content['comments']); ?>

</article>
