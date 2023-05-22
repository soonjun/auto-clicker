let totalCount = 0;
function buttonClick() {
    if(document.contains(document.querySelector('.community-points-summary'))){
        let standard = document.querySelector('.community-points-summary');
        let point_btn = standard.querySelectorAll("button")[1];
        if(point_btn != null) {
            point_btn.click();
            totalCount++;
            console.log("number of buttons clicked! : " + totalCount);
        }
    }
}

console.log("Enable auto-click!");

setTimeout(function(){
    buttonClick();
    setInterval(function() {
        buttonClick();
    }, 300000);
}, 10000);
  