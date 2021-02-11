// JavaScript Document
$(function() {
		var ticker = $("#ticker1");
		var ticker2 = $("#ticker2");
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
			duration = (distance + parseInt(currentItem.css("marginTop"))) / 0.025;
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