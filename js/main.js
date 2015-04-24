$('#chaplin').hover(
	function(){
		this.pause();
	}, function(){
		this.play();
	}
);

$('.trans1').hover(function(){
	$(this).css('opacity',1);
	$('.back1').css('opacity',.3);
	}, function(){
	$(this).css('opacity',0);
	$('.back1').css('opacity',1);
	}
);

$('.trans2').hover(function(){
	$(this).css('opacity',1);
	$('#chaplin').pause();
	}, function(){
	$(this).css('opacity',0);
	$('#chaplin').play();
	}
);

$('.trans3').hover(function(){
	$(this).css('opacity',1);
	$('.back3').css('opacity',.3);
	}, function(){
	$(this).css('opacity',0);
	$('.back3').css('opacity',1);
	}
);

$('.trans4').hover(function(){
	$(this).css('opacity',1);
	$('.back4').css('opacity',.3);
	}, function(){
	$(this).css('opacity',0);
	$('.back4').css('opacity',1);
	}
);

$('.darken').hover(function(){
	$(this).css('opacity',0.3);
	},function(){
	$(this).css('opacity',1);
	}
)

//change image opacity and overlay image
