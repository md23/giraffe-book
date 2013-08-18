var curPage = 1;
var totalPages = 0;
var pageHeight = 0;
var totalSpeed = 4000;
$(function() {
    
	totalPages = $('.page').size();
	$("#navright").click(function(){
		nextPage();
	})
	$("#navleft").click(function(){
		prevPage();
	})

	/*$("#navleft").draggable();
	$("#navright").draggable();*/

});

function nextPage(){
	if(curPage < totalPages){
		getCurrentPage();
		curPage++;
		var distanceToGo = Math.abs(pageHeight - (((curPage-1) * 1300) + 130));
		var speed = (distanceToGo/1300) * totalSpeed;
		$('html, body').stop().animate({ scrollTop: ((curPage-1) * 1300) + 130}, speed);
	}
}

function prevPage(){
	if(curPage > 1){
		getCurrentPage();
		curPage--;
		var distanceToGo = Math.abs(pageHeight - (((curPage-1) * 1300) + 130));
		var speed = (distanceToGo/1300) * totalSpeed;
		$('html, body').stop().animate({ scrollTop: ((curPage-1) * 1300) + 130}, speed);
	}
}

function getCurrentPage(){
	pageHeight = $('body').scrollTop(); 
	curPage = Math.ceil(pageHeight / 1300);
	if(curPage <= 0){
		curPage = 1;
	}
}