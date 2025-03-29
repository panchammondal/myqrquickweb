function generateQR() {
    let qrText = document.getElementById("qrText").value;
    let qrCodeContainer = document.getElementById("qrCode");
    let downloadBtn = document.getElementById("downloadBtn");

    if (qrText.trim() === "") {
        alert("Please enter text or URL!");
        return;
    }

    qrCodeContainer.innerHTML = ""; // Clear previous QR code

    let qr = new QRCode(qrCodeContainer, {
        text: qrText,
        width: 256,
        height: 256
    });

    setTimeout(() => {
        let qrCanvas = qrCodeContainer.getElementsByTagName("canvas")[0];
        if (qrCanvas) {
            let qrImage = qrCanvas.toDataURL("image/png");
            downloadBtn.style.display = "block";
            downloadBtn.onclick = function () {
                let link = document.createElement("a");
                link.href = qrImage;
                link.download = "qrcode.png";
                link.click();
            };
        }
    }, 500);
}
