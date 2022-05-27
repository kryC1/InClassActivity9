$(document).ready(function() {
	$("a").on("click", function() {
		var myTitle = $(this).attr("title");        
        	myJSON("json_files/" + myTitle + ".json");
	});
}); // end ready

function myJSON(myURL) {
    $.ajax({ url: myURL, dataType: "text", success: function (data) {
            var myData = $.parseJSON(data);
		
	    $("main > h1").html(myData.speakers[0].title);	
            $("main > h2").html(myData.speakers[0].month + "<br/>" + myData.speakers[0].speaker);
            $("main > p").html(myData.speakers[0].text);
            $("main > img").attr("src", myData.speakers[0].image);
        }
    });
}
