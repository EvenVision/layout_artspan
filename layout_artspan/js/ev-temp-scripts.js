(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.ev_temp_scripts = {
    attach: function (context, settings) {
      // Hide Print Guide Image for End of Premiere Registrations Stuff (August 1, 2022)
      if (!$('#quick_switch_links').length) {
        var existingPrintImage = $(
          ".page-dashboard .view-studio-event-guide-image-view-field .field-content img"
        );
        existingPrintImage.each(function (index) {
          if ($(this).attr("src").includes("premier")) {
            var table = $(this).parents("table");
            table.find("#ev-guide-image-edit").hide();
            var editArea = table
              .find(".view-studio-event-address-view-field")
              .parent();
            editArea.find("a").each(function (index) {
              if (
                $(this).text().includes("edit") ||
                $(this).text().includes("delete")
              ) {
                $(this).hide();
              }
            });
          }
        });
        var opportunitiesToUploadImages = $(
          ".page-dashboard .view-studio-event-guide-image-view-field .messages a"
        );
        opportunitiesToUploadImages.each(function (index) {
          if ($(this).text().includes("Printed")) {
            container = $(this).parent();
            if ($(this).parent().find("a").length == 1) {
              container.hide();
              var table = $(this).parents("table");
              table.find("#ev-guide-image-edit").hide();
              var editArea = table
                .find(".view-studio-event-address-view-field")
                .parent();
              editArea.find("a").each(function (index) {
                if (
                  $(this).text().includes("edit") ||
                  $(this).text().includes("delete")
                ) {
                  $(this).hide();
                }
              });
            }
          }
          if ($(this).text().includes("Online Guide")) {
            container = $(this).parent();
            container.empty();
            container.append($(this));
          }
        });
      }
      // End Hide Print Guide Image for End of Premiere Registrations Stuff (August 1, 2022)

      if (
        !$(".section-please-login").hasClass("role-active-member") &&
        !$(".section-please-login").hasClass("role-anonymous-user")
      ) {
        $("#block-block-19").addClass("active");
      }

      $(".page-dashboard .artspan-block-fieldset").each(function () {
        if (!$(this).find(".artspan-block-content").text().length > 0) {
          $(this).css("display", "none");
        }
      });

      $(".cividiscount #_qf_Register_reload").val(
        "Click here to apply the code"
      );
      $(".cividiscount #_qf_Main_reload").val("Click here to apply the code");
      var body = $(document.body);

      body.addClass("js-enabled");

      //Add a class to the body if device uses touch instead of a mouse
      var touchDevice = "ontouchstart" in document.documentElement;

      if (touchDevice) {
        body.addClass("touchscreen");
      } else {
        body.addClass("non-touchscreen");
      }

      // Handle changing AS image upload block from "Premier" to "Plus"
      if ($(".sfos_reg_type:contains('Plus)").length > 0) {
        $(".views-field-field-guide-image-tiff-file-1 .field-content h4").html(
          "PLUS WEEKEND"
        );
      }

      // ADD MEMBERS-ONLY class to events
      var eventRows = $(
        ".view-item-events_overall_calendar, .view-events-overall-calendar.view-display-id-attachment_1 .views-row"
      );

      eventRows.each(function () {
        var row = $(this);
        var permission = row
          .find(".views-field-field-members-only .field-content")
          .text();

        if (permission == 1) {
          row.addClass("members-only-event");
        }
      });

      // Alternate script for multi-day events
      var multiDayRows = $(".calendar.monthview .contents");

      multiDayRows.each(function () {
        var row = $(this);
        var permission = row.find(".member-only-event").text();
        var allDay = row.find(".date-display-single").text();
        console.log(allDay);

        if (permission == 1) {
          row.addClass("members-only-event");
        }

        if (allDay == "(All day)") {
          row.parent().addClass("all-day-event");
        }
      });
      // END ADD MEMBERS-ONLY

      // ADD SPECIAL LINK for events
      var multiDayRows = $(".calendar.monthview .contents");

      multiDayRows.each(function () {
        var row = $(this);
        var permission = row.find(".alt-event-title").text();

        if (permission == 1) {
          row.addClass("alt-event-title");
        }
      });
      // END ADD SPECIAL LINK

      // ARTIST DIRECTORY FILTERS TOGGLE
      var filtersContainer = $(
        ".art-search-page .view-artist-profile-search .view-filters"
      );
      var filters = $("#views-exposed-form-artist-profile-search-page");
      var filtersContent = $(
        "#views-exposed-form-artist-profile-search-page > div"
      );
      var filterToggle =
        '<div id="filter-toggle">Click to Search Artists</div>';

      filtersContainer.prepend(filterToggle);
      filterToggle = $("#filter-toggle");
      filterToggle.addClass("fresh");

      filterToggle.click(function () {
        filterToggle.removeClass("fresh");

        var contentHeight = filtersContent.height();
        console.log(contentHeight);

        if (filtersContainer.is(".filter-active")) {
          filtersContainer.removeClass("filter-active");
          filterToggle.text("Click to Search Artists");
        } else {
          filtersContainer.addClass("filter-active");
          filterToggle.text("Hide Search Filters");
        }
        updateFilterHeight();
      });

      $(window).resize(function () {
        updateFilterHeight();
      });

      function updateFilterHeight() {
        var contentHeight = filtersContent.height();

        if (filtersContainer.is(".filter-active")) {
          filters.css("max-height", contentHeight);
        } else {
          filters.css("max-height", "0");
        }
      }

      // END ARTIST DIRECTORY FILTERS TOGGLE

      //RESPONSIVE NAV Sets up triggers & toggles classes appropriately

      var menuTrigger = $(".nav-trigger");
      var menu = $("#main-menu-wrapper");
      var dropdowns = $("li.menuparent");
      var nav = $("#block-nice-menus-1");
      var navItems = nav.find("li.menu__item");

      nav.addClass("nav-depth-1");
      nav.addClass("depth-1-active");

      // toggle main menu when trigger is clicked/tapped
      menuTrigger.click(function (e) {
        e.stopPropagation();

        if (body.is(".menu-active")) {
          body.removeClass("menu-active");
        } else {
          body.addClass("menu-active");
        }
      });

      // add a depth class to each tier of menu links
      navItems.each(function () {
        var item = $(this);

        if (item.parent().is("#nice-menu-1")) {
          item.addClass("nav-depth-1");
        } else if (item.parent().parent().parent().is("#nice-menu-1")) {
          item.addClass("nav-depth-2");
        } else if (
          item.parent().parent().parent().parent().parent().is("#nice-menu-1")
        ) {
          item.addClass("nav-depth-3");
        }
      });

      // create drop-down triggers for mobile
      dropdowns.each(function () {
        var dropdown = $(this);

        // add the trigger for the dropdown
        dropdown.append('<div class="drop-trigger">›</div>');
        var dropTrigger = dropdown.find(".drop-trigger");

        // toggle dropdowns when trigger is clicked/tapped
        dropTrigger.click(function (e) {
          e.stopPropagation();

          // if it's currently active, remove the active class
          if (dropdown.is(".dropdown-active")) {
            dropdown.removeClass("dropdown-active");

            // otherwise, remove the active class on all dropdowns and make this one active
          } else {
            dropdown.removeClass("dropdown-active");
            dropdown.addClass("dropdown-active");

            // and set the parent menu to the new depth level
            if (dropdown.is(".nav-depth-1")) {
              nav.removeClass("nav-depth-1");
              nav.removeClass("depth-1-active");
              nav.addClass("nav-depth-2");
              nav.addClass("depth-2-active");
            } else if (dropdown.is(".nav-depth-2")) {
              nav.removeClass("nav-depth-2");
              nav.removeClass("depth-2-active");
              nav.addClass("nav-depth-3");
              nav.addClass("depth-3-active");
            }
          }
        });

        // add a back link to the dropdown
        var parentTitle = dropdown.find("> .menu__link").text();

        dropdown
          .find("> ul")
          .prepend('<div class="back-link">‹ ' + parentTitle + "</div>");
        var backLink = dropdown.find("> ul > .back-link");

        backLink.click(function () {
          // wait a moment, then remove the dropdown's active state (this prevents the z-indexes from flashing back to the default mid-animation)
          setTimeout(function () {
            dropdown.removeClass("dropdown-active");
          }, 500);

          // and set the parent menu to the new depth level
          if (nav.is(".nav-depth-2")) {
            nav.removeClass("nav-depth-2");
            nav.addClass("nav-depth-1");
            setTimeout(function () {
              nav.addClass("depth-1-active");
            }, 500);
          } else if (nav.is(".nav-depth-3")) {
            nav.removeClass("nav-depth-3");
            nav.addClass("nav-depth-2");
            setTimeout(function () {
              nav.addClass("depth-2-active");
            }, 500);
          }
        });
      });
      //END RESPONSIVE NAV

      // PROCESSING Text for Form Submit Elements

      // Buttons to disable when forms are incorrect
      var formButtons = $(
        ".node-form .form-submit, #crm-submit-buttons .crm-form-submit, .view-artist-artwork-images-page .form-actions .form-submit, #email-mail-page-form .form-submit"
      );

      formButtons.click(function () {
        $(this).val("Processing ...");
      });

      $(".node-form").submit(function () {
        $(this).find(":submit").attr("disabled", "disabled");
      });

      $(".crm-contribution-page-id-1 #_qf_Main_upload-bottom").each(
        function () {
          $(this).val("Confirm Membership");
          $(this).text("Confirm Membership");
        }
      );

      $(".crm-contribution-page-id-1 #_qf_Main_upload-bottom").each(
        function () {
          $(this).val("Confirm Membership");
          $(this).text("Confirm Membership");
        }
      );

      $(".node-guide_image-form #edit-submit").attr("disabled", true);

      if ($(".form-field-name-field-guide-image-tiff-file img").length > 0) {
        $(".node-guide_image-form #edit-submit").removeAttr("disabled");
      }

      // END PROCESSING

      // DATA CLEANUP for Artist Registration Fields

      // Street Suffixes to autocorrect
      var streetsToCorrect = $(
        "#street_address-1, #edit-field-studioevent-studio-street-und-0-value"
      );
      streetsToCorrect.each(function () {
        var street = $(this);

        street.blur(function () {
          var value = street.val();
          var value = value.substr(0, 1).toUpperCase() + value.substr(1);

          // variations of Street
          if (value.endsWith(" St")) {
            value = value.replace(" St", " Street");
          } else if (value.endsWith(" St.")) {
            value = value.replace(" St.", " Street");
          } else if (value.endsWith(" str")) {
            value = value.replace(" str", " Street");
          } else if (value.endsWith(" str.")) {
            value = value.replace(" str.", " Street");
          } else if (value.endsWith(" st")) {
            value = value.replace(" st", " Street");
          } else if (value.endsWith(" st.")) {
            value = value.replace(" st.", " Street");
          } else if (value.endsWith(" street")) {
            value = value.replace(" street", " Street");
          }

          // variations of Avenue
          if (value.endsWith(" ave")) {
            value = value.replace(" ave", " Avenue");
          } else if (value.endsWith(" Ave")) {
            value = value.replace(" Ave", " Avenue");
          } else if (value.endsWith(" ave.")) {
            value = value.replace(" ave.", " Avenue");
          } else if (value.endsWith(" Ave.")) {
            value = value.replace(" Ave.", " Avenue");
          } else if (value.endsWith(" av")) {
            value = value.replace(" av", " Avenue");
          } else if (value.endsWith(" Av.")) {
            value = value.replace(" Av.", " Avenue");
          } else if (value.endsWith(" avenue")) {
            value = value.replace(" avenue", " Avenue");
          }

          // variations of Boulevard
          if (value.endsWith(" Blvd")) {
            value = value.replace(" Blvd", " Boulevard");
          } else if (value.endsWith(" blvd")) {
            value = value.replace(" blvd", " Boulevard");
          } else if (value.endsWith(" Blvd.")) {
            value = value.replace(" Blvd.", " Boulevard");
          } else if (value.endsWith(" blvd.")) {
            value = value.replace(" blvd.", " Boulevard");
          } else if (value.endsWith(" Bl")) {
            value = value.replace(" Bl", " Boulevard");
          } else if (value.endsWith(" Bl.")) {
            value = value.replace(" Bl.", " Boulevard");
          } else if (value.endsWith(" boulevard")) {
            value = value.replace(" boulevard", " Boulevard");
          }

          // variations of Circle
          if (value.endsWith(" cir")) {
            value = value.replace(" cir", " Circle");
          } else if (value.endsWith(" Cir")) {
            value = value.replace(" Cir", " Circle");
          } else if (value.endsWith(" cir.")) {
            value = value.replace(" cir.", " Circle");
          } else if (value.endsWith(" Cir.")) {
            value = value.replace(" Cir.", " Circle");
          }
          street.val(value);
        });
      });

      // Capitalize Names
      var fieldsToCapitalize = $(
        "#first_name, #middle_name, #last_name, billing_first_name, #billing_middle_name, #billing_last_name"
      );
      fieldsToCapitalize.blur(function () {
        string = $(this).val();
        string = string.substr(0, 1).toUpperCase() + string.substr(1);
        $(this).val(string);
      });

      // Title field for OS Guide Image
      var fieldsToLimit = $("#edit-title");
      fieldsToLimit.attr("maxlength", 50);

      // Standardize Phone Numbers
      var fieldsToPhoneStandardize = $(
        "#edit-submitted-civicrm-1-contact-1-fieldset-fieldset-civicrm-1-contact-1-cg1-custom-98, #custom_98, #phone-1-1, #phone-2-2, #phone-2-1, #phone-Primary-1 "
      );
      fieldsToPhoneStandardize.attr("placeholder", "(XXX) XXX-XXXX");

      fieldsToPhoneStandardize.each(function () {
        var thisPhone = $(this);
        var thisParent = thisPhone.parent();
        var phoneString = thisPhone
          .val()
          .replace(/\-/g, "")
          .replace(/\(/g, "")
          .replace(/\)/g, "")
          .replace(/\ /g, "")
          .replace(/\./g, "");

        var wrongPhoneMessage =
          '<div class="messages error wrong-phone">Please enter a valid 10-digit phone number</div>';

        if (phoneString.length >= 10) {
          phoneString =
            "(" +
            phoneString.substr(0, 3) +
            ") " +
            phoneString.substr(3, 3) +
            "-" +
            phoneString.substr(6, 4);
          thisPhone.val(phoneString);
        }

        thisPhone.change(function () {
          phoneString = thisPhone
            .val()
            .replace(/\-/g, "")
            .replace(/\(/g, "")
            .replace(/\)/g, "")
            .replace(/\ /g, "")
            .replace(/\./g, "");
        });

        thisPhone.focus(function () {
          phoneString = thisPhone
            .val()
            .replace(/\-/g, "")
            .replace(/\(/g, "")
            .replace(/\)/g, "")
            .replace(/\ /g, "")
            .replace(/\./g, "");
        });

        thisPhone.blur(function () {
          if (phoneString.length >= 10) {
            phoneString =
              "(" +
              phoneString.substr(0, 3) +
              ") " +
              phoneString.substr(3, 3) +
              "-" +
              phoneString.substr(6, 4);
            thisPhone.val(phoneString);
            thisParent.removeClass("has-error");
            thisParent.find(".wrong-phone").remove();
            formButtons.removeAttr("disabled");
          } else if (phoneString.length == 0) {
            thisParent.removeClass("has-error");
            thisParent.find(".wrong-phone").remove();
            formButtons.removeAttr("disabled");
          } else {
            if (!thisParent.is(".has-error")) {
              thisParent.append(wrongPhoneMessage).addClass("has-error");
              formButtons.attr("disabled", "disabled");
            }
          }
        });
      });

      // Remove hastags from Room/Apt Number fields
      var roomNumberField = $("#edit-field-studioevent-room-num-und-0-value");
      roomNumberField.blur(function () {
        string = $(this).val();
        string = string.replace("#", "");
        $(this).val(string);
      });

      // Standardize Web Addresses
      var webAddressesToStandardize = $("#custom_99");
      webAddressesToStandardize.attr("placeholder", "http://www.example.com");

      // Standardize Email Addresses
      var emailsToStandardize = $("#email-Primary, #custom_97");
      emailsToStandardize.attr("placeholder", "user@example.com");

      // Whole Numbers to Standardize
      var wholeNumbersToStandardize = $(
        "#edit-field-guide-image-height-und-0-value, #edit-field-guide-image-width-und-0-value, #edit-field-guide-image-depth-und-0-value"
      );

      wholeNumbersToStandardize.each(function () {
        var wholeNum = $(this);
        var value = wholeNum.val();

        wholeNum.blur(function () {
          value = wholeNum.val();
          // console.log(value);
          if (value) {
            value = parseInt(value);
            wholeNum.val(value);
          }
        });
      });

      // Standardize ZIP Codes
      var ZIPsToStandardize = $(
        "#postal_code-Primary, #postal_code-1, #billing_postal_code-5"
      );
      ZIPsToStandardize.attr("placeholder", "XXXXX");

      ZIPsToStandardize.each(function () {
        var ZIPCode = $(this);
        var code = ZIPCode.val();
        var zipParent = ZIPCode.parent();
        var wrongZIPMessage =
          '<div class="messages error wrong-zip">Please enter a valid 5-digit Postal Code</div>';

        ZIPCode.blur(function () {
          code = parseInt(ZIPCode.val());
          codeLength = code.toString().length;

          if (codeLength == 5) {
            zipParent.removeClass("has-error");
            zipParent.find(".wrong-zip").remove();

            // console.log('yes', code.length, code, zipParent);
          } else {
            if (!zipParent.is(".has-error")) {
              zipParent.append(wrongZIPMessage).addClass("has-error");
            }
            // console.log('no', code.length, code, zipParent);
          }
        });
      });

      // End Data Cleanup

      // Adjust position of artist profile menu when scrolling
      var artistProfileMenu = $("#block-nice-menus-2");

      $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        if (scrollPosition > 100) {
          artistProfileMenu.addClass("fixed");
        } else {
          artistProfileMenu.removeClass("fixed");
        }
      });
      // END Adjustment

      // Correct bad formatting on crm-not-you-message

      var notYouMessage = $(".crm-not-you-message");
      notYouMessage.each(function () {
        var message = $(this);
        var notYouInner = notYouMessage.html();

        console.log(notYouInner);
        notYouInner = notYouInner
          .replace(/\(|\)|\?/g, "")
          .replace("<a ", "<br /> <a ")
          .replace("</a>", "?</a>");
        console.log(notYouInner);

        message.html(notYouInner);
      });
      // END Correct bad formatting

      // Automatically Fill User Reference on Studio Event Creation Pages
      if (
        body.is(".page-node-add-studio-event") ||
        body.is(".page-node-edit")
      ) {
        var currentUserName = $(
          ".view-current-user-data .views-field-name .field-content"
        ).text();
        var currentUserID = $(
          ".view-current-user-data .views-field-uid .field-content"
        ).text();
        var creatorIDField = $(
          ".form-field-name-field-event-creator .form-text.form-autocomplete"
        );

        if (currentUserName != "" && currentUserID != "") {
          var autocompleteString =
            currentUserName + " [uid:" + currentUserID + "]";
        } else {
          console.error("No User Data: Cannot set Event Creator field");
        }

        creatorIDField.val(autocompleteString);
      }
      // END Automatically Fill User Reference

      // Update Event Participants field, if group event is deselected
      if ($("body").hasClass("node-type-studio-event")) {
        $("#edit-submit").click(function (e) {
          //e.preventDefault();

          if (
            $("#edit-field-virtual-event-und-1").is(":checked") &&
            $(
              "input#edit-field-sfos-event-location-und-0-thoroughfare"
            ).val() != ""
          ) {
            $("input#edit-field-sfos-event-location-und-0-thoroughfare").val(
              ""
            );
            $("input#edit-field-sfos-event-location-und-0-premise").val("");
            $("input#edit-field-sfos-event-location-und-0-locality").val("");
            $(
              "select#edit-field-sfos-event-location-und-0-administrative-area"
            ).val("");
            $("input#edit-field-sfos-event-location-und-0-postal-code").val("");
          }

          if (
            $("#edit-field-virtual-event-und-0").is(":checked") &&
            $("input#edit-field-link-to-virtual-event-und-0-url").val() != ""
          ) {
            $("input#edit-field-link-to-virtual-event-und-0-url").val("");
          }

          if (
            $("#edit-field-group-event-und-0").is(":checked") &&
            $("input#edit-field-artist-collaborators-und-0-uid").val() != ""
          ) {
            $("#field-artist-collaborators-values .draggable").each(
              function () {
                $(this).find("input.form-text").val("");
              }
            );
          }

          //$("#edit-submit").trigger("submit");
        });
      }
      // END Update Event Participants field, if group event is deselected

      // Set Calendar View Events Background Colors colorfield value

      var itemsToColor = $(
        ".view-events-overall-calendar .view-item, .view-event-color-key .views-row, .view-events-overall-calendar .main-list .views-row"
      );

      itemsToColor.each(function () {
        var item = $(this);
        var color = item.find(".color-data").text();

        if (color) {
          item.css("backgroundColor", color);
          item.addClass("has-background");
        }
      });
      // END Set Calendar View Events Background Colors

      //Pull in Event Creator data, update Event Creator field
      // $("#edit-field-event-creator-und-0-uid").val($(".view-current-user-data .views-field-name .field-content").html());

      //Reset studio event registration selects, when changing which one is selected
      $("#edit-field-studioevent-weekend-und").change(function () {
        $(".node-studio_event-form .form-field-type-list-text").each(
          function () {
            if ($(this).css("display") === "none") {
              $(this).find("select option").removeAttr("selected");
            }
          }
        );
      }); //End reset studio event registration selects, when changing which one is selected

      if ($(".section-node-edit")) {
        $("#edit-field-studioevent-studio-street-und-0-value").val(
          $(".views-field-street-address #street_address").text()
        );
        $("#edit-field-studioevent-studio-zip-und-0-value").val(
          $(".views-field-postal-code #zip_code").text()
        );
        $("#edit-field-studioevent-studio-cross-und-0-value").val(
          $(".views-field-supplemental-address-1 #cross_street").text()
        );
        $("#edit-field-studioevent-studio-city-und-0-value").val(
          $(".views-field-city #studio_city").text()
        );

        var studio_value = $(".views-field-current-employer #group_studio")
          .text()
          .trim()
          .toLowerCase();
        $("#edit-field-studioevent-contact-und option").each(function () {
          var current_option = $(this).text().trim().toLowerCase();
          if (current_option == studio_value) {
            $(this).attr("selected", "selected");
            return false;
          }
          return true;
        });
      } //END pull in custom address data

      // Banner Edit UX - Hide second textarea on banners that only need one.

      if ($(".section-edit-sfos-banners")) {
        $("tr").each(function () {
          if (
            $(this).find(".num_weekends").text().indexOf("1") >= 0 ||
            $(this).find(".num_weekends").text().indexOf("0") >= 0
          ) {
            $(this)
              .find(
                ".views-field-field-second-weekend-editable .field-type-text-long"
              )
              .css("display", "none");
          }
        });
      }

      // Code for hiding file formats from descriptions, also custom select boxes for forms.
      formsToModify = [
        "#sf-open-studios-online-guide-ima-node-form",
        "#sf-open-studios-printed-guide-im-node-form",
      ];
      formsToModify.forEach((form) => {
        if ($(form).length) {
          $(form + " .description").html(
            $(form + " .description")
              .html()
              .split("Files must be")[0]
          );
          /*           $(form + " select").each(function (index) {
            var selectBox = $(this)
            $(this).children($('option')).each(function() {
                var html = '<div class="option" value="' + $(this).val() + '">' + $(this).text() + '</div>'
                selectBox.after(html)
            })
          }); */
        }
      });
      $(".page-node-add-submit-your-event-collaboration- h1.title").text(
        $(".page-node-add-submit-your-event-collaboration- h1.title")
          .text()
          .replace("Create ", "")
      );

      // JS for reordering Events list
      var timeSet = $(".view-events-list .item-list");
      timeSet.each(function () {
        var timeBlock = $(this);
        var time = timeBlock
          .find(".views-field-field-date-and-time-2")
          .first()
          .text();
        if (timeBlock.not(":first-child")) {
          if (timeBlock.prev()) {
            timeBlock.siblings().each(function () {
              sibling = $(this);
              sibblingTime = sibling
                .find(".views-field-field-date-and-time-2")
                .first()
                .text();
              if (parseInt(sibblingTime) < parseInt(time)) {
                timeBlock.before(sibling);
              }
            });
          }
        }
      });

      // And for coloring events
      timeSet.each(function () {
        var event = $(this).find("li");
        event.each(function () {
          var theEvent = $(this);
          if (
            theEvent
              .find(".views-field-field-sfos-category")
              .text()
              .toLowerCase()
              .includes("group")
          ) {
            theEvent.addClass("rose");
          }
        });
      });
      var blockToMove = $("#block-views-7b8768c3ccbc4a995f10aef55943d318");
      console.log(blockToMove);
      var elementToPlaceAfter = $(
        ".view-event-info .views-field-field-contact-phone"
      );
      console.log(elementToPlaceAfter);
      elementToPlaceAfter.after(blockToMove);

      // code for studio building dropdown in artist directory 2021
      if ($("body").hasClass("section-artist-directory")) {
        var selectBuilding = $(
          `<select id="selectBuilding" class="form-select"> <option value="none" selected="selected">- Select a value -</option> <option>1890 Bryant Street Studios</option> <option>African American Arts & Culture Complex</option> <option>Arc Studios & Gallery</option> <option>Art Explosion - 17th Street Studios</option> <option>Art Explosion - Alabama Street Studios</option> <option>Art Explosion - Tennessee Street Studios</option> <option>Clayroom SF</option> <option>Dogpatch Collective</option> <option>Earthfire Arts Studio</option> <option>General's Residence at Fort Mason</option> <option>Hunters Point Shipyard</option> <option>Industrial Center Building</option> <option>Islais Creek Studios</option> <option>Journal Building</option> <option>Noonan Building Pier 70</option> <option>Public Glass</option> <option>Revere Avenue Studios</option> <option>Root Division</option> <option>SHARED</option> <option>San Francisco Women Artists</option> <option>Secession Art & Design</option> <option>Sonoma County Art Trails</option> <option>Studio Nocturne</option> <option>The Drawing Room</option> <option>Yosemite Place</option></select>`
        );
        var studioInput = $("#edit-group-affiliation-152");
        selectBuilding.insertBefore(studioInput);
        studioInput.hide();
        selectBuilding.children("option").each(function () {
          if (jQuery(this).text() == studioInput.val()) {
            jQuery(this).attr("selected", "selected");
          }
        });
        selectBuilding.change(function () {
          if (
            selectBuilding.children("option:selected").text() !=
            "- Select a value -"
          ) {
            studioInput.val(selectBuilding.children("option:selected").text());
          } else {
            studioInput.val("");
          }
        });
      }
    },
  };
})(jQuery, Drupal, this, this.document);

// Putting this outside Drupal's functions because the map breaks them.

function swapInputsForSelects(iteration) {
  var selectStyle = jQuery(
    '<select id="selectStyle" class="form-select"><option value="none" selected="selected">- Select a value -</option> <option>Abstract</option> <option>Functional</option> <option>Landscape</option> <option>Portraiture</option> <option>Representational</option> <option>Still Life</option> <option>Allegorical</option> </select>'
  );
  var styleInput = jQuery("#edit-combine-2" + iteration);
  var stylePair = [selectStyle, styleInput];
  var selectBuilding = jQuery(
    `<select id="selectBuilding" class="form-select"> <option value="none" selected="selected">- Select a value -</option> <option>1890 Bryant Street Studios</option> <option>African American Arts & Culture Complex</option> <option>Arc Studios & Gallery</option> <option>Art Explosion - 17th Street Studios</option> <option>Art Explosion - Alabama Street Studios</option> <option>Art Explosion - Tennessee Street Studios</option> <option>Clayroom SF</option> <option>Dogpatch Collective</option> <option>Earthfire Arts Studio</option> <option>General's Residence at Fort Mason</option> <option>Hunters Point Shipyard</option> <option>Industrial Center Building</option> <option>Islais Creek Studios</option> <option>Journal Building</option> <option>Noonan Building Pier 70</option> <option>Public Glass</option> <option>Revere Avenue Studios</option> <option>Root Division</option> <option>SHARED</option> <option>San Francisco Women Artists</option> <option>Secession Art & Design</option> <option>Sonoma County Art Trails</option> <option>Studio Nocturne</option> <option>The Drawing Room</option> <option>Yosemite Place</option></select>`
  );
  var studioBuildingInput = jQuery("#edit-group-affiliation-152" + iteration);
  var studioBuildingPair = [selectBuilding, studioBuildingInput];
  var selectMedium = jQuery(
    `<select class="civicrm-enabled form-select" id="mediumSelector" ><option value="none" selected="selected">- Select a value -</option><option value="painting">Painting</option><option value="photography">Photography</option><option value="wearable">Wearable Art / Jewelry</option><option value="mixed-media">Mixed Media</option><option value="sculpture">Sculpture</option><option value="ceramics">Ceramics</option><option value="drawing">Drawing</option><option value="printmaking">Printmaking</option><option value="book-arts">Book Arts</option><option value="installation">Installation</option><option value="new-media">New Media</option><option value="glass">Glass</option><option value="fiber">Fiber</option><option value="Furniture">Furniture</option></select>`
  );
  var mediumInput = jQuery("#edit-combine" + iteration);
  var mediumPair = [selectMedium, mediumInput];
  var fieldsToSwapArray = [stylePair, studioBuildingPair, mediumPair];
  if (
    jQuery("body").hasClass("section-events-map") ||
    jQuery("body").hasClass("section-events-list")
  ) {
    fieldsToSwapArray.forEach((element) => {
      element[0].insertBefore(element[1]);
      element[1].hide();
      element[0].children("option").each(function () {
        if (jQuery(this).text() == element[1].val()) {
          jQuery(this).attr("selected", "selected");
        }
      });
      element[0].change(function () {
        if (
          element[0].children("option:selected").text() != "- Select a value -"
        ) {
          element[1].val(element[0].children("option:selected").text());
        } else {
          element[1].val("");
        }
      });
    });
  }
}
var int = 1;
setTimeout(function () {
  swapInputsForSelects("");
  let observer = new MutationObserver(callback);

  function callback(mutations) {
    console.log("changed");
    setTimeout(function () {
      console.log("ajax");
      swapInputsForSelects("--" + int.toString());
    }, 200 * int);
    int++;
    // do something here
  }

  (options = {
    childList: true,
  }),
    observer.observe(
      document.getElementById("block-views-events-map-block"),
      options
    );
}, 200);
