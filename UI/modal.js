$(document).ready(function(){
    document.getElementById("defaultOpenModal").click();
});

/* 팝업 탭 메뉴 */
function openTabPop(evt, tabName) {
    var i, tabcontentPop, tablinksPop;
    tabcontentPop = document.getElementsByClassName("tabcontentPop");
    for (i = 0; i < tabcontentPop.length; i++) {
    tabcontentPop[i].style.display = "none";
    }
    tablinksPop = document.getElementsByClassName("tablinksPop");
    for (i = 0; i < tablinksPop.length; i++) {
    tablinksPop[i].className = tablinksPop[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// 팝업 열기
$(document).on("click", ".btn-open", function (e){
    var target = $(this).attr("href");
    $(target).addClass("show");
});

// 외부영역 클릭 시 팝업 닫기
$(document).mouseup(function (e){
    var LayerPopup = $(".modal");
    if(LayerPopup.has(e.target).length === 0){
        LayerPopup.removeClass("show");
    }
});

// 팝업 닫기 버튼
$(document).on("click", ".modal_close", function (e){
    var LayerPopup = $(".modal");
    LayerPopup.removeClass("show");
});

// 팝업 확인 버튼
$(document).on("click", ".modal_ok", function (e){
    var LayerPopup = $(".modal");
    LayerPopup.removeClass("show");
});