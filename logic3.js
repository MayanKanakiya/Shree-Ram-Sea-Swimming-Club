document.getElementById("download").addEventListener("click", function () {
    html2canvas(document.getElementById("imgSection"),
        {
            allowTaint: true,
            useCORS: true
        }).then(function (canvas) {
            var anchorTag = document.createElement("a");
            document.body.appendChild(anchorTag);
            anchorTag.download = "file.png";
            anchorTag.href = canvas.toDataURL();
            anchorTag.target = '_blank';
            anchorTag.click();
        });
});

let txtUname = document.getElementById("name");
let userName = document.getElementById("userName");
txtUname.onkeyup = function () {
    userName.innerText = txtUname.value;
}

$("#name").attr("maxlength", 22);
$("#name").attr("minlength", 3);