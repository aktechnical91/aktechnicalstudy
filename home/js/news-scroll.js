// JavaScript Document
$(function() {
		var ticker = $("#ticker1");
		var ticker2 = $("#ticker2");
		var ticker4 = $("#ticker4");
		var ticker5 = $("#ticker5");
		var ticker6 = $("#ticker6");
		var ticker7 = $("#ticker7");
		var ticker3 = $(".entender");
		ticker.children().filter("ul").each(function() {
													 
		  	var dt = $(this),
		  
		    container = $("<div>");
		  	dt.next().appendTo(container);
		  	dt.prependTo(container);
		 	container.appendTo(ticker);
		});
		ticker.css("overflow", "hidden");
		
		function animator(currentItem) {
		    
		  var distance = currentItem.height();
			duration = (distance + parseInt(currentItem.css("marginTop"))) / 0.020;
		  	currentItem.animate({ marginTop: -distance }, duration, "linear", function() {
			currentItem.appendTo(currentItem.parent()).css("marginTop", 0);
			animator(currentItem.parent().children(":first"));
		  }); 
		};
		animator(ticker.children(":first"));
		var j=0		
		$('#stop').click(function() {
								  
		  ticker.children().stop();
		  j=1
		  $('#stop').hide();
		  $('#play').show();
		  
		  $("#ticker1").css("overflow", "scroll");
		  $("#ticker1 li").addClass("stopped");
		  
		});
		
				
		ticker.mouseenter(function() {
		  ticker.children().stop();
		});

		$('#play').click(function() {
		  
			  animator(ticker.children(":first"));
			  j=0;
			  $('#stop').show();
			  $('#play').hide();
			  
			  $("#ticker1").css("overflow", "hidden");
			  $("#ticker1 li").removeClass('stopped');
		});
		
		ticker.mouseleave(function() {
		if(j == 0)
		  animator(ticker.children(":first"));
		});
		
		
		
		
		
		ticker2.children().filter("ul").each(function() {
		  var dt = $(this),
		    container = $("<div>");
		  	dt.next().appendTo(container);
		  	dt.prependTo(container);
		 	container.appendTo(ticker2);
		});
		ticker2.css("overflow", "hidden");
		
		
		
		animator(ticker2.children(":first"));
		var k=0	
		$('#stop2').click(function() {
		  ticker2.children().stop();
		  k=1
		  $('#stop2').hide();
		  $('#play2').show();
		  
		  $("#ticker2").css("overflow", "scroll");
		  $("#ticker2 li").addClass("stopped");
		  
		});
		
				
		ticker2.mouseenter(function() {
		  ticker2.children().stop();
		});

		$('#play2').click(function() {
		  animator(ticker2.children(":first"));
		  k=0
		  $('#stop2').show();
		  $('#play2').hide();
		  
		  $("#ticker2").css("overflow", "hidden");
		  $("#ticker2 li").removeClass("stopped");
		  
		});
		
		ticker2.mouseleave(function() {
		if(k == 0)
		  animator(ticker2.children(":first"));
		});
		
		
		ticker3.children().filter("ul").each(function() {
		  var dt = $(this),
		    container = $("<div>");
		  	dt.next().appendTo(container);
		  	dt.prependTo(container);
		 	container.appendTo(ticker3);
		});
		ticker3.css("overflow", "hidden");
		
		
		
		animator(ticker3.children(":first"));
		var k=0	
		$('#stop3').click(function() {
		  ticker3.children().stop();
		  k=1
		  $('#stop3').hide();
		  $('#play3').show();
		  
		  $(".entender").css("overflow", "scroll");
		  $(".entender li").addClass("stopped");
		  
		});
		
				
		ticker3.mouseenter(function() {
		  ticker3.children().stop();
		});

		$('#play3').click(function() {
		  animator(ticker3.children(":first"));
		  k=0
		  $('#stop3').show();
		  $('#play3').hide();
		  
		  $(".entender").css("overflow", "hidden");
		  $(".entender li").removeClass("stopped");
		  
		});
		
		ticker3.mouseleave(function() {
		if(k == 0)
		  animator(ticker3.children(":first"));
		});


		ticker4.children().filter("ul").each(function() {
		  var dt = $(this),
		    container = $("<div>");
		  	dt.next().appendTo(container);
		  	dt.prependTo(container);
		 	container.appendTo(ticker4);
		});
		ticker4.css("overflow", "hidden");
		
		
		
		animator(ticker4.children(":first"));
		var k=0	
		$('#stop4').click(function() {
		  ticker4.children().stop();
		  k=1
		  $('#stop4').hide();
		  $('#play4').show();
		  
		  $("#ticker4").css("overflow", "scroll");
		  $("#ticker4 li").addClass("stopped");
		  
		});

		ticker4.mouseenter(function() {
		  ticker4.children().stop();
		});

		$('#play4').click(function() {
		  animator(ticker4.children(":first"));
		  k=0
		  $('#stop4').show();
		  $('#play4').hide();
		  
		  $("#ticker4").css("overflow", "hidden");
		  $("#ticker4 li").removeClass("stopped");
		  
		});
		
		ticker4.mouseleave(function() {
		if(k == 0)
		  animator(ticker4.children(":first"));
		});

		// triker5 start here
		ticker5.children().filter("ul").each(function() {
		  var dt = $(this),
		    container = $("<div>");
		  	dt.next().appendTo(container);
		  	dt.prependTo(container);
		 	container.appendTo(ticker5);
		});
		ticker5.css("overflow", "hidden");
		
		
		
		animator(ticker5.children(":first"));
		var k=0	
		$('#stop5').click(function() {
		  ticker5.children().stop();
		  k=1
		  $('#stop5').hide();
		  $('#play5').show();
		  
		  $("#ticker5").css("overflow", "scroll");
		  $("#ticker5 li").addClass("stopped");
		  
		});

		ticker5.mouseenter(function() {
		  ticker5.children().stop();
		});

		$('#play5').click(function() {
		  animator(ticker5.children(":first"));
		  k=0
		  $('#stop5').show();
		  $('#play5').hide();
		  
		  $("#ticker5").css("overflow", "hidden");
		  $("#ticker5 li").removeClass("stopped");
		  
		});
		
		ticker5.mouseleave(function() {
		if(k == 0)
		  animator(ticker5.children(":first"));
		});

		// triker6 start here
		ticker6.children().filter("ul").each(function() {
		  var dt = $(this),
		    container = $("<div>");
		  	dt.next().appendTo(container);
		  	dt.prependTo(container);
		 	container.appendTo(ticker6);
		});
		ticker6.css("overflow", "hidden");
		
		
		
		animator(ticker6.children(":first"));
		var k=0	
		$('#stop6').click(function() {
		  ticker6.children().stop();
		  k=1
		  $('#stop6').hide();
		  $('#play6').show();
		  
		  $("#ticker6").css("overflow", "scroll");
		  $("#ticker6 li").addClass("stopped");
		  
		});

		ticker6.mouseenter(function() {
		  ticker6.children().stop();
		});

		$('#play6').click(function() {
		  animator(ticker6.children(":first"));
		  k=0
		  $('#stop6').show();
		  $('#play6').hide();
		  
		  $("#ticker6").css("overflow", "hidden");
		  $("#ticker6 li").removeClass("stopped");
		  
		});
		
		ticker6.mouseleave(function() {
		if(k == 0)
		  animator(ticker6.children(":first"));
		});
		// triker7start here
		ticker7.children().filter("ul").each(function() {
		  var dt = $(this),
		    container = $("<div>");
		  	dt.next().appendTo(container);
		  	dt.prependTo(container);
		 	container.appendTo(ticker7);
		});
		ticker7.css("overflow", "hidden");
		
		
		
		animator(ticker7.children(":first"));
		var k=0	
		$('#stop7').click(function() {
		  ticker7.children().stop();
		  k=1
		  $('#stop7').hide();
		  $('#play7').show();
		  
		  $("#ticker7").css("overflow", "scroll");
		  $("#ticker7 li").addClass("stopped");
		  
		});

		ticker7.mouseenter(function() {
		  ticker7.children().stop();
		});

		$('#play7').click(function() {
		  animator(ticker7.children(":first"));
		  k=0
		  $('#stop7').show();
		  $('#play7').hide();
		  
		  $("#ticker7").css("overflow", "hidden");
		  $("#ticker7 li").removeClass("stopped");
		  
		});
		
		ticker7.mouseleave(function() {
		if(k == 0)
		  animator(ticker7.children(":first"));
		});
		
		
		$(".runningCourses").prepend("<span class='lftTop'></span><span class='rgtTop'></span><span class='btLft'></span><span class='btRgt'></span>");
		$(".commingCourses").prepend("<span class='lftTop1'></span><span class='rgtTop1'></span><span class='btLft1'></span><span class='btRgt1'></span>");
		$(".edge").prepend("<span class='lftEdge'></span><span class='rgtEdge'></span>");
		$(".message").prepend("<span></span>");
		$(document).ready(function(){
			$(".sf-vertical li:odd").addClass("even");
			$(".dataTable tr:even").addClass("even");
			$("#tabs table tr:odd").addClass("eventr");
		});
		
	  });// JavaScript Document