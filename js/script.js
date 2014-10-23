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

    // Place your code here.

    //Configure colorbox call back to resize with custom dimensions
      $.colorbox.settings.onLoad = function() {
        colorboxResize();
      }
      //Customize colorbox dimensions
      var colorboxResize = function(resize) {
        var width = "90%";
        var height = "90%";
        if($(window).width() > 960) { width = "860" }
        if($(window).height() > 700) { height = "630" }
        $.colorbox.settings.height = height;
        $.colorbox.settings.width = width;
        //if window is resized while lightbox open
        if(resize) {
          $.colorbox.resize({
            'height': height,
            'width': width
          });
        }
      }
      //In case of window being resized
      $(window).resize(function() {
        colorboxResize(true);
      });

      }
    };

    //fullPage.js
    $('#fullpage').fullpage({
            //Navigation
            menu: false,
            anchors:['firstSlide', 'secondSlide'],
            navigation: false,
            navigationPosition: 'right',
            navigationTooltips: ['firstSlide', 'secondSlide'],
            slidesNavigation: true,
            slidesNavPosition: 'bottom',

            //Scrolling
            css3: false,
            scrollingSpeed: 700,
            autoScrolling: true,
            easing: 'easeInQuart',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            normalScrollElements: '#element1, .element2',
            scrollOverflow: false,
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,

            //Design
            verticalCentered: true,
            resize : true,
            sectionsColor : ['#ccc', '#fff'],
            paddingTop: '3em',
            paddingBottom: '10px',
            fixedElements: '#header, .footer',
            responsive: 0,

            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide',

            //events
            onLeave: function(index, nextIndex, direction){},
            afterLoad: function(anchorLink, index){},
            afterRender: function(){},
            afterResize: function(){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction){}
        });

})(jQuery, Drupal, this, this.document);
