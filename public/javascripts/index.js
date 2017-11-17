onload = function () {

    // fetch("../data.json").then(function (response) {
    //     return response.json();
    // }).then(function (json) {

    // });
    
    var tagsList = document.querySelector("#tags");
    var menu = document.querySelector('.menu');
    var menuList = document.querySelector('.menu-list');
    var topArrow = document.querySelector('#top-arrow');
    var upButton = document.querySelector('#up-button');
    var bottomBar = document.querySelector("#bottom-bar");
    var mpob = document.querySelector(".mpob");
    var mpobCode = document.querySelector(".mpob-code");

    mpob.addEventListener("change", function () {
        if(mpob.checked) {
            mpobCode.disabled = false;
        } else {
            mpobCode.disabled = true;
        }
    })

    upButton.addEventListener("click", function () {
        if(!bottomBar.classList.contains("on")){
            bottomBar.classList.add("on");
        } else {
            bottomBar.classList.remove("on");
        }
    });

    menu.addEventListener("click", function () {
        if(!menuList.classList.contains("on")){
          menuList.classList.add("on");
        } else {
          menuList.classList.remove("on");
        }
    });
    
    TagCanvas.Start('myCanvas','tags',{
        textColour: '#ff0000',
        outlineColour: '#000000',
        reverse: true,
        depth: 0.8,
        clickToFront: 1000,
        maxSpeed: 0.02,
        shadow: "#000000",
        zoom: 1,
        zoomMax: 2,
        zoomMin: 0.6,
        zoomStep: 0.03,
    });
    
    tagsList.style.display = "none";
};