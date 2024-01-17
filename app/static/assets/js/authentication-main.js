(function () {
    'use strict';
    if (localStorage.getItem("ynexdarktheme")) {
        document.querySelector("html").setAttribute("data-theme-mode", "dark")
        document.querySelector("html").setAttribute("data-menu-styles", "dark")
        document.querySelector("html").setAttribute("data-header-styles", "dark")
    }
    if (localStorage.ynexrtl) {
        let html = document.querySelector('html');
        html.setAttribute("dir", "rtl");
        document.querySelector("#style")?.setAttribute("href", "../assets/libs/bootstrap/css/bootstrap.rtl.min.css");
            // rtlFn();
    }
    if (localStorage.getItem("ynexlayout") == "horizontal") {
        document.querySelector("html").setAttribute("data-nav-layout", "horizontal") 
    }
    function localStorageBackup() {

        // if there is a value stored, update color picker and background color
        // Used to retrive the data from local storage
        if (localStorage.primaryRGB) {
            if (document.querySelector('.theme-container-primary')) {
                document.querySelector('.theme-container-primary').value = localStorage.primaryRGB;
            }
            document.querySelector('html').style.setProperty('--primary-rgb', localStorage.primaryRGB);
        }
        if (localStorage.bodyBgRGB && localStorage.bodylightRGB) {
            if (document.querySelector('.theme-container-background')) {
                document.querySelector('.theme-container-background').value = localStorage.bodyBgRGB;
            }
            document.querySelector('html').style.setProperty('--body-bg-rgb', localStorage.bodyBgRGB);
            document.querySelector('html').style.setProperty('--body-bg-rgb2', localStorage.bodylightRGB);
            document.querySelector('html').style.setProperty('--light-rgb', localStorage.bodylightRGB);
            document.querySelector('html').style.setProperty('--form-control-bg', `rgb(${localStorage.bodylightRGB})`);
            document.querySelector('html').style.setProperty('--input-border', "rgba(255,255,255,0.1)");
            let html = document.querySelector('html');
            html.setAttribute('data-theme-mode', 'dark');
            html.setAttribute('data-menu-styles', 'dark');
            html.setAttribute('data-header-styles', 'dark');


        }
        if (localStorage.ynexdarktheme) {
            let html = document.querySelector('html');
            html.setAttribute('data-theme-mode', 'dark');
        }
        if (localStorage.ynexrtl) {
            let html = document.querySelector('html');
            html.setAttribute('dir', 'rtl');
            document.querySelector("#style")?.setAttribute("href", "../assets/libs/bootstrap/css/bootstrap.rtl.min.css");
            setTimeout(() => {
                rtlFn();
            }, 10);
        }
    }
    localStorageBackup()

})();


function ltrFn() {
    let html = document.querySelector('html')
    if(!document.querySelector("#style").href.includes('bootstrap.min.css')){
        document.querySelector("#style")?.setAttribute("href", "../assets/libs/bootstrap/css/bootstrap.min.css");
    }
    html.setAttribute("dir", "ltr");
}

function rtlFn() {
    let html = document.querySelector('html');
    html.setAttribute("dir", "rtl");
    document.querySelector("#style")?.setAttribute("href", "../assets/libs/bootstrap/css/bootstrap.rtl.min.css");
}