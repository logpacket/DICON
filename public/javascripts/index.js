onload = function () {
    
    var tagsList = document.querySelector("#tags");
    
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