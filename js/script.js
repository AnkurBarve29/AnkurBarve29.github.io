$(document).ready(function(){
  $('.jsnavicon').click(function(){
  	var nav = $('.jsmainnav');
  	var icon = $('.jsnavicon i ');
  	nav.slideToggle(200);
  	if(icon.hasClass('ion-navicon-round')){
  		icon.addClass('ion-close-round');
  		icon.removeClass('ion-navicon-round');
  	}else{
  		icon.addClass('ion-navicon-round');
  		icon.removeClass('ion-close-round');
  	}
  })
});