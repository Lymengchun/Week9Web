$(document).ready(function(){
    var epochTime = 0;

   
    $('#btAddEvent').click(function(){
        var EventName = $('#EventNameId').val();
        var Date = $('#dateId').val();

        console.log(EventName);
        console.log(Date);
        $("h5").html("BE READY FOR " +Date+ " WITHIN");
    });

});





