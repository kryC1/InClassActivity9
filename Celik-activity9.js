$(document).ready(function() {
    $("a").click(function () {
        var title = $(this).attr("title");        
        getJSON("json_files/" + title + ".json"); 
    });
}); // end ready

function getJSON(myURL) {
    $.ajax({ url: myURL, dataType: "text", success: function (data) {
            var json = $.parseJSON(data);
		
	    $("main > h1").html(json.speakers[0].title);	
            $("main > h2").html(json.speakers[0].month + "<br/>" + json.speakers[0].speaker);
            $("main > p").html(json.speakers[0].text);
            $("main > img").attr("src", json.speakers[0].image);
        }
    });
}
