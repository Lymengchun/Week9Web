var epochTime = 0;
$(document).ready(function(){
    countDownEvent();
    $("#btn").click(function(){
        localStorage.setItem("inputEvent",$("#inputEvent").val());
        localStorage.setItem("eventDate",$("#eventDate").val());
        countDownEvent();        
    })
})

function day(second){
    let d = Math.floor(second / 86400);
    epochTime = second % 86400;
    return d;
}

function hours(second){
    let h = Math.floor(second / 3600);
    epochTime = second % 3600; 
    return h;
}

function minute(second){
    let min = Math.floor(second / 60);
    epochTime = second % 60;
    return min;
}

function countDownEvent(){
    if (localStorage.getItem("eventDate") !== ''){
        $("h5").html("BE READY FOR " + localStorage.getItem("inputEvent").toUpperCase() + " WITHIN");
        let interval = setInterval(function(){
            epochTime = new Date(localStorage.getItem("eventDate") + " 12:00:00 AM").getTime()/1000.0 - Math.floor(new Date().getTime()/1000.0);
            if(epochTime >= 0){
                $("h6").html(
                    day(epochTime).toString() + " days " +
                    hours(epochTime).toString() + " hours " + 
                    minute(epochTime).toString() + " mns " + 
                    epochTime.toString() + " secs "
                    )
            }else {
                clearInterval(interval);
            }
        },1000);
    }
}