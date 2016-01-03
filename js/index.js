$(document).ready(function(){
    startCamera();
});
    
    function startCamera() {
        document.addEventListener('deviceready', this.takePicture, false);
    }

    function takePicture(){
        $(".jsCamera").on("click", function(){
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 25,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA,
                saveToPhotoAlbum: true
            });
        });
    }

    function onSuccess(imageURI){
        var image = document.getElementById('img');
        image.style.visibility = "visible";
        image.style.display = "block";
        image.style.width = "2rem";
        image.style.height = "2rem;";
        image.src = imageURI;
    }

    function onFail(message){
        alert("Failed because: " + message);
    }