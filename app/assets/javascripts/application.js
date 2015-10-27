// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


// Full Page Scroll plugin
$(document).ready(function() {
    $('#fullpage').fullpage({
    	sectionsColor: ['#FFFAF5', '#FFFAF5', '#FFFAF5', '#FFFAF5', '#FFFAF5'],
		anchors: ['gora', 'moja_osoba', 'moje_pracy', 'skontaktuj_sie_ze_mna', 'lastPage'],
    	menu: '#menu',
    	scrollingSpeed: 1000,
    	navigation: false,
    	scrollBar: true
	});
});

// Allows #menu_nav to scroll horizontally, and fixes it vertically
$(window).scroll(function(){
  $('#menu').css('left',-$(window).scrollLeft());
});

// Simplelightbox - in gallery section (STARTS) ------------------
$(function(){
	var gallery = $('.gallery a').simpleLightbox({navText: ['&lsaquo;','&rsaquo;']});
});
// Simplelightbox - in gallery section (ENDS) ---------------------