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

    // backstretch
    $("#block-views-page-blocks-block-2").backstretch("/sites/default/files/images/page/bg.png");
    $("#block-views-page-blocks-block-3").backstretch("/sites/default/files/images/page/our-dough.jpg");
    $("#block-views-our-farmers-block-1").backstretch("/sites/default/files/images/page/field.jpg");

    //fullPage.js
    $('#fullpage').fullpage({
        scrollingSpeed: 1700,
        autoScrolling: false,
        resize : false,
        anchors:['section1', 'section2', 'section3', 'our-story', 'section5', 'section6', 'section7', 'section8', 'section9', 'section10'],
        navigationTooltips: ['section1', 'section2', 'section3', 'our-story', 'section5', 'how-we-roll', 'section7', 'section8', 'section9', 'section10'],
    });
 /*
    $('#fullpage').fullpage({
        //Navigation
        menu: #block-system-main-menu .menu,
        anchors:['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8', 'section9', 'section10'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8', 'section9', 'section10'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: false,
        scrollingSpeed: 1700,
        autoScrolling: true,
        easing: 'easeInQuart',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#section3, #section5, #section8, #section9, #section10',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,

        //Design
        verticalCentered: true,
        resize : false,
        paddingTop: '4em',
        paddingBottom: '6em',
        fixedElements: '#header',
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
*/

/*
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
*/
      }
    };
})(jQuery, Drupal, this, this.document);
