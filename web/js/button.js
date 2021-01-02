var resetBtn = document.querySelector('#reset');
resetBtn.addEventListener("click", resetCanvas);

function resetCanvas(event){
    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
}

// ajax
var sendBtn = document.querySelector('#send');
sendBtn.addEventListener("click", sendAjax);
function sendAjax(event){
    var canvas = document.querySelector('canvas');
    
    $.ajax({
        // ### code 작성 ###
    })
}