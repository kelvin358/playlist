var songList = [];

$("button").click(function(){  
    songList.push(.song.val());

    songList.forEach(function(song){
        $(.songlist).append("<div>" + .song.val() + "</div>");
    })
});