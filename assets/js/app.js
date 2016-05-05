$(function() {
  // Default screen states
  $('#home-screen').show();
  $('#notes-screen').hide();
  $('#contacts-screen').hide();

  $('#contact-button').click(function(e) {
    e.preventDefault();
    showContactsScreen();
  });

  $('#home-button').click(function(e) {
    e.preventDefault();
    showHomeScreen();
  });

  $('#note-button').click(function(e) {
    e.preventDefault();
    showSidebar();
  });

  $('#menu-button').click(function(e) {
    e.preventDefault();

    if (!isMenuOpen) {
      // Menu closed
      openMenu();
    } else {
      // Menu open
      closeMenu();
    }
  });

  var isMenuOpen = false;

  function openMenu() {
    $('#menu').animate({
      'top': $(window).height() - $('#menu').outerHeight()
    }, 250);

    $('#menu-button').html("&#9660;");

    isMenuOpen = true;
  }

  function closeMenu() {
    $('#menu').animate({
      'top': $(window).height() - $('#menu-button').outerHeight()
    }, 250);

    $('#menu-button').html("&#9650;");

    isMenuOpen = false;
  }

  function showContactsScreen() {
    $('#home-screen, #menu').hide();
    $('#notes-screen').hide();
    $('#contacts-screen').show();
    $('#free-text').hide();
  }

  function showHomeScreen() {
    $('#home-screen, #menu').show();
    $('#notes-screen').hide();
    $('#contacts-screen').hide();
    $('#free-text').hide();
  }

  function showNoteScreen() {
    $('#home-screen, #menu').hide();
    $('#notes-screen').show();
    $('#contacts-screen').hide();
    $('#free-text').hide();
  }

  function showFreeText() {
    $('#home-screen, #menu').hide();
    $('#notes-screen').hide();
    $('#contacts-screen').hide();
    $('#free-text').show();
  }

  $('#close-sidebar').click(function(e) {
    e.preventDefault();
    hideSidebar();
  });

  function showSidebar() {
    $('#sidebar').animate({
      'right': '0'
    }, 250);
  }

  function hideSidebar() {
    $('#sidebar').animate({
      'right': -$('#sidebar').outerWidth()
    }, 250);
  }

  $('#menu ul li a').click(function(e) {
    e.preventDefault();
    showNoteScreen();
  });

  $('.free-text-button').click(function(e) {
    e.preventDefault();

    showFreeText();
  });

  $('#show-activity-history').click(function(e) {
    e.preventDefault();
    showActivityHistory();
  });

  $('#close-activity-history').click(function(e) {
    e.preventDefault();
    hideActivityHistory();
  });

  function showActivityHistory() {
    hideSidebar();

    $('#activity-history').css({
      'top': -$(window).height()
    }).show().animate({
      'top': 0
    }, 250);
  }

  function hideActivityHistory() {
    $('#activity-history').animate({
      'top': -$('#activity-history').outerHeight()
    }, 250);
  }
});

var App = Backbone.Model.extend({
  initialize: function() {
    setUpScreens();
  },

  setUpScreens: function() {
    var screenEls = $('[data-screen]');
    _.each(screenEls, function(screenEl) {
      var screen = new Screen();
      var screenView = new ScreenView({ el: screenEl, model: screen })
    });
  }
});

var app = new App();

