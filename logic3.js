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

let mainForm = document.getElementById('inputContainer');
let txtname = document.getElementById('name');
let imgfile = document.getElementById('imgload');
let btn = document.getElementById('download');

mainForm.addEventListener('input', () => {
    if (txtname.value.length > 0 && imgfile.value.length > 0) {
        btn.removeAttribute('disabled');
    } else {
        btn.setAttribute('disabled', "disabled");
    }
});