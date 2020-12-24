$(document).ready(function(){


    
    $('#addEvent').click(function(){
        var Month = $('#monthId option:selected').text();
        var Day = $('#dayId option:selected').text();
        var Year = $('#yearId option:selected').text();
        var Hour = $('#hourId option:selected').text();
        var Minute = $('#minuteId option:selected').text();
        var Second = $('#secondId option:selected').text();

        
        
        $('#EventList').append('<li class="list-group-item">Date:'+Day+'&nbsp,'+Month+'&nbsp,'+Year+'&nbsp&nbsp Time:'+Hour+'&nbsp:'+Minute+'&nbsp:'+Second+'&nbsp<button type="button" class="btn btn-link">Edit</button> <button type="button" class="btn btn-link">Delete</button></li>');
        
    });

});


