addEventListener('load', function() {

    function filter() {

        var kospiChecked = kospi.checked;
        var kosdaqChecked = kosdaq.checked;
        var unlistedChecked = unlisted.checked;
        

        if (!kospiChecked && !kosdaqChecked && !unlistedChecked) {    
            kospiList.classList.add("on");
            kosdaqList.classList.add("on");
            unlistedList.classList.add("on");
        } else {
            if (kospiChecked) {
                kospiList.classList.add("on");
            } else {
                kospiList.classList.remove("on");
            }
    
            if (kosdaqChecked) {
                kosdaqList.classList.add("on");
            } else {
                kosdaqList.classList.remove("on");
            }

            if (unlistedChecked) {
                unlistedList.classList.add("on");
            } else {
                unlistedList.classList.remove("on");
            }
            
        }
    }

    
    
    var kospiList = document.querySelector(".kospi-list");
    var kosdaqList = document.querySelector(".kosdaq-list");
    var unlistedList = document.querySelector(".unlisted-list");

    var kospi = document.querySelector('#kospi');
    var kosdaq = document.querySelector('#kosdaq');
    var unlisted = document.querySelector('#unlisted');

    kospi.addEventListener("change", filter);
    kosdaq.addEventListener("change", filter);
    unlisted.addEventListener("change", filter);

    // var kospi = document.frmJoin.U_checkAgreement1.checked;
    // var kosdaq = document.frmJoin.U_checkAgreement2.checked;
    // var unlisted = document.frmJoin.U_checkAgreement1.checked;


    




    
});