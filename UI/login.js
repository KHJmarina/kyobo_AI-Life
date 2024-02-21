$(document).ready(function(){
    var error_txt = document.getElementById("error_txt");
    $('#login_btn').click(function() {
        if ($('#input_id').val().length === 0 || $('#input_pw').val().length === 0) {
            error_txt.style.display = "block";
        }
    })
});