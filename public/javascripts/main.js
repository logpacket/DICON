var onload = function () {
    var kospi = document.querySelector('.kospi');
    var kosdaq = document.querySelector('.kosdaq');
    var unlisted = document.querySelector('.unlisted');

    if (!kospi && !kosdaq && !unlisted) {
        if(kospi.classList.contains("hide")){
            kospi.classList.remove("hide");
        }
        if(kosdaq.classList.contains("hide")){
            kosdaq.classList.remove("hide");
        }
        if(unlisted.classList.contains("hide")){
            unlisted.classList.remove("hide");
        }
    } else {
        
    }
};