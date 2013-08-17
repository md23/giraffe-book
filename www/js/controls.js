var curPage = 1;
var totalPages = 0;

$(function() {
    
	totalPages = $('.page').size();
	$("#navright").click(function(){
		nextPage();
	})
	$("#navleft").click(function(){
		prevPage();
		console.log("test");
	})

});

function nextPage(){
	if(curPage < totalPages){
		curPage++;

		$('html, body').animate({ scrollTop: (curPage * 1300) - 1300 + 138}, 4000);
	}
}

function prevPage(){
	if(curPage > 1){
		curPage--;

		$('html, body').animate({ scrollTop: (curPage * 1300) - 1300 + 138}, 4000);
	}
}