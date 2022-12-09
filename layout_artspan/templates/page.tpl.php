<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
?>
<div id="page" class="container <?php print $main_layout_type; ?> <?php print $main_layout_descriptor; ?>">

  <header class="header" id="header" role="banner">
  
    <?php if ($logo): ?>
      <div id="header-logo">
        <a href="/start" title="<?php print t('Start'); ?>" rel="home" class="header__logo" id="logo"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="header__logo-image" /></a>
      </div>
    <?php endif; ?>
    
    <div id="button-menu"><span class="nav-trigger">Menu</span></div>
    
    <?php if ($main_menu): ?>
      <!-- for mobile this menu is not displayed -->
      <div id="main-menu-wrapper">
        <nav id="main-menu" class="navigation main-navigation">
            <?php print render($page['main_menu']); ?>
        </nav> <!-- /#main-menu -->
      </div>
    <?php endif; ?>
    
    <!-- <a id="to-donate-page" href="donate">Donate</a> -->
    
  </header>

  <!-- Preface Section -->
  <section id="preface">
  	<?php print render($page['preface']); ?>
  </section>
    
    
  <?php if ($main_layout_descriptor != "artist-profile-page") : ?> <!-- artist profile template differs -->
    
      <header id="header-image-wrapper">
        <?php if (isset($masthead_image)): ?>
          <?php if (isset($header_image_artist)) : ?>
            <div id="header-image-artist">
              <?php print $header_image_artist; ?>
            </div>
          <?php endif; ?>           
          <div id="header-image" class="stretch">
            <?php print $masthead_image; ?>
          </div>
  
        <?php endif; ?> 

          <!-- only show the site slogan if this is the front page -->
          <?php if ($is_home): ?>     
            <div id="site-slogan">
              <div class="title">Support Local Artists</div>
              <div class="button-wrapper"><div class="submit-button">
                <a href="https://www.artspan.org/civicrm/contribute/transact?reset=1&id=2" target="_self">Donate Now</a>
              </div></div><!--button-wrapper - submit-button -->
              <div class="subtitle">
                Create. Collect. Connect.
              </div>
            </div>
          <?php endif; ?>
        
      </header>

      
      <div id="main">     
        <?php if ($show_aside) : // show aside ?>
          <aside id="sidebar-first" class="column sidebar">
          
            <nav id="u-r-here-nav">
              <?php print $breadcrumb; ?>
              <a id="main-content"></a>
              <?php print render($title_prefix); ?>
              <?php if ($title): ?>
                <h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
              <?php endif; ?>
              <?php print render($title_suffix); ?>
            </nav>

            <?php if ($page['sidebar_first']) : ?>
              <nav id="sidebar-nav" class="navigation sidebar-nav">        
                <?php print render($page['sidebar_first']); ?>
              </nav>
            <?php endif; ?>
          
          </aside>  
        <?php endif; ?>    
               
        <div id="content" class="column" role="main">
          <div class="drupal-system-elements">
            <!-- Drupal system elements -->
            <?php print $messages; ?>
            <?php print render($page['help']); ?>
            <?php print render($tabs); ?>                 
            <?php if ($action_links): ?>
              <ul class="action-links"><?php print render($action_links); ?></ul>
            <?php endif; ?>       
          </div>        
          
          <?php if ($main_layout_descriptor == "dashboard-page") : ?>
            <?php if ($title): ?>
              <h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
            <?php endif; ?>          
          <?php endif; ?>          
          
          <?php if (!$is_home): // dont display on front ?>        
            <?php print render($page['content']); ?>
            <?php //print $feed_icons; //RSS feed icon ?>
            <?php if (isset($tabs_custom)): ?>
              <?php print ($tabs_custom); ?>
            <?php endif; ?>
          <?php endif; ?>

          <?php if ($is_home): ?>
            <section id="homepage-features">
              <?php print render($page['featured']); ?>
            </section>           
            <section id="members">
              <div id="member-title"><h1>Become a Member</h1></div>
              <div id="member-subtitle">Discover the San Francisco art scene!</div>
              <div id="member-text">
                <p>Whether you’re an artist or an art lover, ArtSpan connects you with the local art community, engages your creativity, and invests in keeping San Francisco unique.</p>
              </div>
              <div id="member-options">
                <div id="art-lovers" class="circle-wrapper">
                  <div id="art-lovers-circle" class="circle-image-wrapper">
                    <img class="circle-image" src="sites/all/themes/custom/layout_artspan/images/colored-circle-blue-200.jpg">
                  </div>
                  <div id="art-lovers-text" class="circle-text">
                    <h3><a href="membership">For Art Lovers</a></h3>
                  </div>
                </div> 
                <div id="artists" class="circle-wrapper">
                  <div id="artists-circle" class="circle-image-wrapper">
                    <img class="circle-image" src="sites/all/themes/custom/layout_artspan/images/colored-circle-red-200.jpg">
                  </div>
                  <div id="artists-text" class="circle-text">
                    <h3><a href="for-artists" target="_self">For Artists</a></h3>
                  </div>
                </div>
              </div>
            </section>
          <?php endif; ?>
          
        </div>    
      </div>    
  <?php endif; ?> <!-- if NOT artist_profile -->

  
  <?php if($main_layout_descriptor == "artist-profile-page") : ?> <!-- PAGE TEMPLATE FOR ARTIST PROFILE -->
      <div id="main">
        <div>
          <!-- Drupal system elements -->
          <?php print $messages; ?>
          <?php print render($page['help']); ?>
          <?php print render($tabs); ?>        
          <?php if ($action_links): ?>
            <ul class="action-links"><?php print render($action_links); ?></ul>
          <?php endif; ?>       
        </div>  

        <div id="content" class="column" role="main">      
            <?php print render($page['content']); ?>
        </div>
      </div>
  <?php endif; ?> <!-- if artist-profile -->
  
  <footer id="footer-section">
    <section id="social-media">
      <section id="social-media-footer">
        <?php print render($page['social_media_footer']); ?>
      </section>
    </section>
    
    <section id="footer-menu">
      <?php if ($page['navigation_footer']): ?>
        <?php if ($logo): ?>
          <a href="/start" title="<?php print t('Start'); ?>" rel="home" class="footer__logo" id="footer-logo"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="header__logo-image" /></a>
        <?php endif; ?>
    
        <nav id="navigation-footer" class="footer-panels navigation main-navigation">
            <?php print render($page['navigation_footer']); ?>
        </nav>
        <nav id="badge-nav" class="footer-panels badges">
          <a href="https://www.facebook.com/ArtSpan" target="_blank"><img src="/sites/all/themes/custom/layout_artspan/images/facebook-badge.jpg" /></a>
          <a href="https://twitter.com/artspansf" target="_blank"><img src="/sites/all/themes/custom/layout_artspan/images/twitter-badge.jpg" /></a>
          <a href="https://instagram.com/artspansf/" target="_blank"><img src="/sites/all/themes/custom/layout_artspan/images/instagram-badge.jpg" /></a>        
        </nav>
      <?php endif; ?>
    </section>
    
    <?php if ($page['footer']): ?>
      <nav id="footer-bar" class="footer-panels legalese">
          <?php print render($page['footer']); ?>
          <!--<p id="credit-to">Designed by <a href="http://awasudesign.com">Awasu Design</a>. Created by <a href="http://openflows.com/">Openflows</a>.</p> -->
      </nav>
    <?php endif; ?>

    <!-- <a id="back-to-top" href="#header">Top</a>     -->
  </footer>

</div>
<!-- /container -->
