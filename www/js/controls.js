var curPage = 1;
var totalPages = 0;

$(function() {
    
	totalPages = $('.page').size();
	/*$("#navright").click(function(){
		nextPage();
	})
	$("#navleft").click(function(){
		prevPage();
	})*/

	$("#navleft").draggable();
	$("#navright").draggable();

});

function nextPage(){
	if(curPage < totalPages){
		curPage++;

		$('html, body').stop().animate({ scrollTop: (curPage * 1300) - 1300 + 138}, 4000);
	}
}

function prevPage(){
	if(curPage > 1){
		curPage--;

		$('html, body').stop().animate({ scrollTop: (curPage * 1300) - 1300 + 138}, 4000);
	}
}