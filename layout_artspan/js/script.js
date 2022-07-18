/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    // assuming your div is "tabs"
    //jQuery("#tabs_custom").tabs();
    
    // Place your code here.





    $( document ).ready(function() {
      // logic for hiding all price tiers after one is selected. Essentially replaces the functionality of radio buttons since checkboxes are essentially hard-coded
      $('#price_160_625').click(function() {
        // if the first tier is selected, hide all others
        if ( $(this).is(':checked') ) {
          $(".premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_2_weekends-section").slideToggle();
          $(".premier_registration_2_weekends-section").slideToggle();
          $(".basic_registration_2_weekends-section").slideToggle();
          $(".premier_basic_2_weekends-section").slideToggle();
          $(".1_early_bird_premier_1_basic_2_weekends_total_-section").slideToggle();
          $("#editrow-custom_153").show();
          $('html,body').animate({ scrollTop: $("#priceset").offset().top });
        };
        // if the second tier is de-selected show all others
        if ( $(this).is(':checked') == false ) {
          $(".premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_2_weekends-section").slideToggle();
          $(".premier_registration_2_weekends-section").slideToggle();
          $(".basic_registration_2_weekends-section").slideToggle();
          $(".premier_basic_2_weekends-section").slideToggle();
          $(".1_early_bird_premier_1_basic_2_weekends_total_-section").slideToggle();
          $("#editrow-custom_153").hide();
          $('html,body').animate({ scrollTop: $("#priceset").offset().top });
        };
      });
      // the following pair mirrors the first pair above, but for second tier
      $('#price_161_626').click(function() {
        if ( $(this).is(':checked') ) {
          $(".basic_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_2_weekends-section").slideToggle();
          $(".premier_registration_2_weekends-section").slideToggle();
          $(".basic_registration_2_weekends-section").slideToggle();
          $(".premier_basic_2_weekends-section").slideToggle();
          $(".1_early_bird_premier_1_basic_2_weekends_total_-section").slideToggle();
          $("#editrow-custom_153").show();
          $('html,body').animate({ scrollTop: $("#priceset").offset().top });
        };
        if ( $(this).is(':checked') == false ) {
          $(".basic_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_2_weekends-section").slideToggle();
          $(".premier_registration_2_weekends-section").slideToggle();
          $(".basic_registration_2_weekends-section").slideToggle();
          $(".premier_basic_2_weekends-section").slideToggle();
          $(".1_early_bird_premier_1_basic_2_weekends_total_-section").slideToggle();
          $("#editrow-custom_153").hide();
          $('html,body').animate({ scrollTop: $("#priceset").offset().top });
        };
      });
      // each of the following pairs continue the pattern
      $('#price_162_627').click(function() {
        if ( $(this).is(':checked') ) {
          $(".basic_registration_1_weekend-section").slideToggle();
          $(".premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_2_weekends-section").slideToggle();
          $(".premier_registration_2_weekends-section").slideToggle();
          $(".basic_registration_2_weekends-section").slideToggle();
          $(".premier_basic_2_weekends-section").slideToggle();
          $(".1_early_bird_premier_1_basic_2_weekends_total_-section").slideToggle();
          $("#editrow-custom_153").show();
          $('html,body').animate({ scrollTop: $("#priceset").offset().top });
        };
        if ( $(this).is(':checked') == false ) {
          $(".basic_registration_1_weekend-section").slideToggle();
          $(".premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_2_weekends-section").slideToggle();
          $(".premier_registration_2_weekends-section").slideToggle();
          $(".basic_registration_2_weekends-section").slideToggle();
          $(".premier_basic_2_weekends-section").slideToggle();
          $(".1_early_bird_premier_1_basic_2_weekends_total_-section").slideToggle();
          $("#editrow-custom_153").hide();
          $('html,body').animate({ scrollTop: $("#priceset").offset().top });
        };
      });
      $('#price_163_628').click(function() {
        if ( $(this).is(':checked') ) {
          $(".premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_1_weekend-section").slideToggle();
          $(".basic_registration_1_weekend-section").slideToggle();
          $(".premier_registration_2_weekends-section").slideToggle();
          $(".basic_registration_2_weekends-section").slideToggle();
          $(".premier_basic_2_weekends-section").slideToggle();
          $(".1_early_bird_premier_1_basic_2_weekends_total_-section").slideToggle();
          $("#editrow-custom_153").show();
          $('html,body').animate({ scrollTop: $("#priceset").offset().top });
        };
        if ( $(this).is(':checked') == false ) {
          $(".premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_1_weekend-section").slideToggle();
          $(".basic_registration_1_weekend-section").slideToggle();
          $(".premier_registration_2_weekends-section").slideToggle();
          $(".basic_registration_2_weekends-section").slideToggle();
          $(".premier_basic_2_weekends-section").slideToggle();
          $(".1_early_bird_premier_1_basic_2_weekends_total_-section").slideToggle();
          $("#editrow-custom_153").hide();
          $('html,body').animate({ scrollTop: $("#priceset").offset().top });
        };
      });
      $('#price_164_629').click(function() {
        if ( $(this).is(':checked') ) {
          $(".premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_2_weekends-section").slideToggle();
          $(".basic_registration_1_weekend-section").slideToggle();
          $(".basic_registration_2_weekends-section").slideToggle();
          $(".premier_basic_2_weekends-section").slideToggle();
          $(".1_early_bird_premier_1_basic_2_weekends_total_-section").slideToggle();
          $("#editrow-custom_153").show();
          $('html,body').animate({ scrollTop: $("#priceset").offset().top });
        };
        if ( $(this).is(':checked') == false ) {
          $(".premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_2_weekends-section").slideToggle();
          $(".basic_registration_1_weekend-section").slideToggle();
          $(".basic_registration_2_weekends-section").slideToggle();
          $(".premier_basic_2_weekends-section").slideToggle();
          $(".1_early_bird_premier_1_basic_2_weekends_total_-section").slideToggle();
          $("#editrow-custom_153").hide();
          $('html,body').animate({ scrollTop: $("#priceset").offset().top });
        };
      });
      $('#price_165_630').click(function() {
        if ( $(this).is(':checked') ) {
          $(".premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_2_weekends-section").slideToggle();
          $(".premier_registration_2_weekends-section").slideToggle();
          $(".basic_registration_1_weekend-section").slideToggle();
          $(".premier_basic_2_weekends-section").slideToggle();
          $(".1_early_bird_premier_1_basic_2_weekends_total_-section").slideToggle();
          $("#editrow-custom_153").show();
          $('html,body').animate({ scrollTop: $("#priceset").offset().top });
        };
        if ( $(this).is(':checked') == false ) {
          $(".premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_2_weekends-section").slideToggle();
          $(".premier_registration_2_weekends-section").slideToggle();
          $(".basic_registration_1_weekend-section").slideToggle();
          $(".premier_basic_2_weekends-section").slideToggle();
          $(".1_early_bird_premier_1_basic_2_weekends_total_-section").slideToggle();
          $("#editrow-custom_153").hide();
          $('html,body').animate({ scrollTop: $("#priceset").offset().top });
        };
      });
      $('#price_166_631').click(function() {
        if ( $(this).is(':checked') ) {
          $(".premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_2_weekends-section").slideToggle();
          $(".premier_registration_2_weekends-section").slideToggle();
          $(".basic_registration_2_weekends-section").slideToggle();
          $(".basic_registration_1_weekend-section").slideToggle();
          $(".1_early_bird_premier_1_basic_2_weekends_total_-section").slideToggle();
          $("#editrow-custom_153").show();
          $('html,body').animate({ scrollTop: $("#priceset").offset().top });
        };
        if ( $(this).is(':checked') == false ) {
          $(".premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_2_weekends-section").slideToggle();
          $(".premier_registration_2_weekends-section").slideToggle();
          $(".basic_registration_2_weekends-section").slideToggle();
          $(".basic_registration_1_weekend-section").slideToggle();
          $(".1_early_bird_premier_1_basic_2_weekends_total_-section").slideToggle();
          $("#editrow-custom_153").hide();
          $('html,body').animate({ scrollTop: $("#priceset").offset().top });
        };
      });
      $('#price_167_632').click(function() {
        if ( $(this).is(':checked') ) {
          $(".premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_2_weekends-section").slideToggle();
          $(".premier_registration_2_weekends-section").slideToggle();
          $(".basic_registration_2_weekends-section").slideToggle();
          $(".premier_basic_2_weekends-section").slideToggle();
          $(".basic_registration_1_weekend-section").slideToggle();
          $("#editrow-custom_153").show();
          $('html,body').animate({ scrollTop: $("#priceset").offset().top });
        };
        if ( $(this).is(':checked') == false ) {
          $(".premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_1_weekend-section").slideToggle();
          $(".early_bird_premier_registration_2_weekends-section").slideToggle();
          $(".premier_registration_2_weekends-section").slideToggle();
          $(".basic_registration_2_weekends-section").slideToggle();
          $(".premier_basic_2_weekends-section").slideToggle();
          $(".basic_registration_1_weekend-section").slideToggle();
          $("#editrow-custom_153").hide();
          $('html,body').animate({ scrollTop: $("#priceset").offset().top });
        };
      }); 




      // logic for allowing one weekend selection for those who pay for such
      // and allowing two selections for those who pay for two
      $('#custom_153_1').click(function() {
        // if weekend one is chosen
        if ( $(this).is(':checked') ) {
          // and if a one-weekend price tier has been chosen, then hide the remaining three weekends
          if ( $('#price_160_625').is(':checked') || $('#price_161_626').is(':checked') || $('#price_162_627').is(':checked') ) {
            $("#custom_153_2").hide(); 
            $("#custom_153_3").hide(); 
            $("#custom_153_4").hide();
            $("#custom_153_2").next().hide(); 
            $("#custom_153_3").next().hide(); 
            $("#custom_153_4").next().hide(); 
          } else {
            // else (hence a two-weekend price-tier selection has been made)
            // and if weekend two is chosen in addition to the selection of weekend one above
            // then hide weekends three and four
            if ( $('#custom_153_2').is(':checked') ) {
              $("#custom_153_3").hide(); 
              $("#custom_153_4").hide(); 
              $("#custom_153_3").next().hide(); 
              $("#custom_153_4").next().hide(); 
            }
            // if weekend three is chosen in addition to the selection of weekend one above
            // then hide weekends two and four
            if ( $('#custom_153_3').is(':checked') ) {
              $("#custom_153_2").hide(); 
              $("#custom_153_4").hide(); 
              $("#custom_153_2").next().hide(); 
              $("#custom_153_4").next().hide(); 
            }
            // and if weekend four is chosen in addition to the selection of weekend one above
            // then hide weekends two and three
            if ( $('#custom_153_4').is(':checked') ) {
              $("#custom_153_3").hide(); 
              $("#custom_153_2").hide(); 
              $("#custom_153_3").next().hide(); 
              $("#custom_153_2").next().hide(); 
            }
          };
        };
        // If weekend one is de-selected, then show the remaining available weekends again
        if ( $(this).is(':checked') == false) {
          $("#custom_153_2").show(); 
          $("#custom_153_3").show(); 
          $("#custom_153_4").show(); 
          $("#custom_153_2").next().show(); 
          $("#custom_153_3").next().show(); 
          $("#custom_153_4").next().show(); 
        };
      });
      // the following code mirrors the above but for weekend two instead of weekend one
      $('#custom_153_2').click(function() {
        if ( $(this).is(':checked') ) {
          if ( $('#price_160_625').is(':checked') || $('#price_161_626').is(':checked') || $('#price_162_627').is(':checked') ) {
            $("#custom_153_1").hide(); 
            $("#custom_153_3").hide(); 
            $("#custom_153_4").hide(); 
            $("#custom_153_1").next().hide(); 
            $("#custom_153_3").next().hide(); 
            $("#custom_153_4").next().hide(); 
          } else {
            if ( $('#custom_153_1').is(':checked') ) {
              $("#custom_153_3").hide(); 
              $("#custom_153_4").hide(); 
              $("#custom_153_3").next().hide(); 
              $("#custom_153_4").next().hide(); 
            }
            if ( $('#custom_153_3').is(':checked') ) {
              $("#custom_153_1").hide(); 
              $("#custom_153_4").hide(); 
              $("#custom_153_1").next().hide(); 
              $("#custom_153_4").next().hide(); 
            }
            if ( $('#custom_153_4').is(':checked') ) {
              $("#custom_153_3").hide(); 
              $("#custom_153_1").hide(); 
              $("#custom_153_3").next().hide(); 
              $("#custom_153_1").next().hide(); 
            }
          };
        };
        if ( $(this).is(':checked') == false) {
          $("#custom_153_1").show(); 
          $("#custom_153_3").show(); 
          $("#custom_153_4").show(); 
          $("#custom_153_1").next().show(); 
          $("#custom_153_3").next().show(); 
          $("#custom_153_4").next().show(); 
        };
      });
      // same as above but weekend three
      $('#custom_153_3').click(function() {
        if ( $(this).is(':checked') ) {
          if ( $('#price_160_625').is(':checked') || $('#price_161_626').is(':checked') || $('#price_162_627').is(':checked') ) {
            $("#custom_153_2").hide(); 
            $("#custom_153_1").hide(); 
            $("#custom_153_4").hide(); 
            $("#custom_153_2").next().hide(); 
            $("#custom_153_1").next().hide(); 
            $("#custom_153_4").next().hide(); 
          } else {
            if ( $('#custom_153_2').is(':checked') ) {
              $("#custom_153_1").hide(); 
              $("#custom_153_4").hide(); 
              $("#custom_153_1").next().hide(); 
              $("#custom_153_4").next().hide(); 
            }
            if ( $('#custom_153_1').is(':checked') ) {
              $("#custom_153_2").hide(); 
              $("#custom_153_4").hide(); 
              $("#custom_153_2").next().hide(); 
              $("#custom_153_4").next().hide(); 
            }
            if ( $('#custom_153_4').is(':checked') ) {
              $("#custom_153_1").hide(); 
              $("#custom_153_2").hide(); 
              $("#custom_153_1").next().hide(); 
              $("#custom_153_2").next().hide(); 
            }
          };
        };
        if ( $(this).is(':checked') == false) {
          $("#custom_153_2").show(); 
          $("#custom_153_1").show(); 
          $("#custom_153_4").show(); 
          $("#custom_153_2").next().show(); 
          $("#custom_153_1").next().show(); 
          $("#custom_153_4").next().show(); 
        };
      });
      // same as above but weekend four
      $('#custom_153_4').click(function() {
        if ( $(this).is(':checked') ) {
          if ( $('#price_160_625').is(':checked') || $('#price_161_626').is(':checked') || $('#price_162_627').is(':checked') ) {
            $("#custom_153_2").hide(); 
            $("#custom_153_3").hide(); 
            $("#custom_153_1").hide(); 
            $("#custom_153_2").next().hide(); 
            $("#custom_153_3").next().hide(); 
            $("#custom_153_1").next().hide(); 
          } else {
            if ( $('#custom_153_2').is(':checked') ) {
              $("#custom_153_3").hide(); 
              $("#custom_153_1").hide(); 
              $("#custom_153_3").next().hide(); 
              $("#custom_153_1").next().hide(); 
            }
            if ( $('#custom_153_3').is(':checked') ) {
              $("#custom_153_2").hide(); 
              $("#custom_153_1").hide(); 
              $("#custom_153_2").next().hide(); 
              $("#custom_153_1").next().hide(); 
            }
            if ( $('#custom_153_1').is(':checked') ) {
              $("#custom_153_3").hide(); 
              $("#custom_153_2").hide(); 
              $("#custom_153_3").next().hide(); 
              $("#custom_153_2").next().hide(); 
            }
          };
        };
        if ( $(this).is(':checked') == false) {
          $("#custom_153_2").show(); 
          $("#custom_153_3").show(); 
          $("#custom_153_1").show(); 
          $("#custom_153_2").next().show(); 
          $("#custom_153_3").next().show(); 
          $("#custom_153_1").next().show(); 
        };
      });



    });

  }
}; 

})(jQuery, Drupal, this, this.document);
