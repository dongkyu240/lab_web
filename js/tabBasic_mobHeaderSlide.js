		$(document).ready(function(){
			/*tabBasic*/

			$('.newItemImg ul:gt(0)').css({'display':'none'});
		
			$('#right ul li:first').click(function(){
				
				$('.newItemImg ul').css({'display':'none'});
				$('.newItemImg ul:first').css({'display':'block'});
				
				$('#right .newItem ul li').children().css({'backgroundImage':'-webkit-linear-gradient(left,#fff,#efefef)'});
				$(this).children().css({'backgroundImage':'-webkit-linear-gradient(top,#ddd,#bcbcbc)'});
				
			});
			
			$('#right ul li:first').next().click(function(){
				$('.newItemImg ul').css({'display':'none'});
				$('.newItemImg ul:first').next().css({'display':'block'});

				$('#right .newItem ul li').children().css({'backgroundImage':'-webkit-linear-gradient(left,#fff,#efefef)'});
				$(this).children().css({'backgroundImage':'-webkit-linear-gradient(top,#ddd,#bcbcbc)'});
			});

			$('#right ul .lastss').click(function(){
				$('.newItemImg ul').css({'display':'none'});
				$('.newItemImg .lats').css({'display':'block'});

				$('#right .newItem ul li').children().css({'backgroundImage':'-webkit-linear-gradient(left,#fff,#efefef)'});
				$(this).children().css({'backgroundImage':'-webkit-linear-gradient(top,#ddd,#bcbcbc)'});
			});

			
			/* mobMenu */

			$('#mobHeader .img_header').click(function(){
				$(this).css({'borderColor':'#ededed','boxShadow':'1px -1px 1px #454545'});
				$('#mobMenu').slideDown(1500,'easeOutBounce');
				$('#visual').css({'display':'none'});
				$('#container').css({'padding-top':'200px'});
				$('#mobMenu').css({'z-index':'999'});
			});
			$('#mobMenu div span:last').click(function(){
				$('#mobMenu').slideUp(500,'swing');
				$('#visual').css({'display':'block'});
				$('#container').css({'padding-top':'0px'});
				$('#visual').css({'opacity':'0.8'});
				$('#mobMenu span').show();
				$('#mobHeader .img_header').css({'borderColor':'#343434'});
				$('#mobMenu ul li div').hide();
			});
			$('#mobMenu div span:first').click(function(){
				$('#mobMenu form').show().css({'margin':'0 3%'});
			});
		});