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
        url: "http://localhost:5000/predict", // 클라이언트가 요청을 보낼 서버의 URL 주소
        type: "GET",
        data:{
            image: canvas.toDataURL()
        }
    })
    // HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
    .done(function(json) {
        console.log(json); 
        var answer = document.querySelector("#answer");
        answer.innerHTML = json["answer"];      
    })
    // HTTP 요청이 실패하면 오류와 상태에 관한 정보가 fail() 메소드로 전달됨.
    .fail(function(xhr, status, errorThrown) {
        console.log("error");
    })
}