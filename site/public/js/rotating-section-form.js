$(function() {

    $("[name='rotating_assignment_type']").change(function() {
        var val = $(this).val();
        if (val !== "redo") {
            $('#redo-data').hide();
        }
        else {
            $('#redo-data').show();
        }
        if (val !== "fewest"){
            $('#fewest-exclude').hide();
        }else{
            $('#fewest-exclude').show();
        }
    });
});

$(document).ready(function() {
    $('#redo-data').hide();
    $('#fewest-exclude').hide();
});