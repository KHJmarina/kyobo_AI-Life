$(document).ready(function(){
    document.getElementById("defaultOpen").click();
    document.getElementById("defaultOpenModal").click();
    snbData();
    // setClassChart();
    modalPopup();
});

function snbData() {
    /*** File 가상 데이터 ***/
    var Dropdown = 'Dropdown';
    var file = 'File';
    for(var i = 0; i < 5; i++){
        console.log("File 드롭다운 i: " + i);
        $('#navFile').append('<button class="dropdown-btn">'+Dropdown+'<i class="fa fa-caret-down"></i></button>');
        $('#navFile').append('<div class="dropdown-container" id="dropdown-container'+i+'"></div>');
        for(var j = 0; j < 3; j++){
            console.log("File j: " + j);
            $('#dropdown-container'+i).append('<a href="#">'+file+'</a>');
        }
    }

    /*** DB 가상 데이터 ***/
    var db = 'DB';
    for(var k = 0; k < 10; k++){
        console.log("DB 리스트: " + k);
        $('#navDB').append('<div class="dropdown-container"><a href="#modal-db" class="btn-open">'+db+'</a></div>');
    }

    ClickDropdown();
}

/* 트리구조 메뉴 드롭다운 이벤트 */
function ClickDropdown() {
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;
    
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
}


/* 우측 rnb 온오프 작동 */
function openRnb() {
    var rnb = document.getElementById("rnb");
    var wrap = document.getElementById("wrap");
    if(rnb.style.right == '0px') {
        rnb.style.right = "-420px";
        wrap.style.paddingRight = "0px";
    } else {
        rnb.style.right = "0px";
        wrap.style.paddingRight = "420px";
    }
}


/* 좌측 snb 온오프 작동 */
function openSnb() {
    var snb_icon = document.getElementById("snb_icon");
    var snb = document.getElementById("snb");
    var wrap = document.getElementById("wrap");
    if(snb.style.display == 'none') {
        snb.style.display = "block";
        snb_icon.style.display = "none";
        wrap.style.paddingLeft = "250px";
    } else {
        snb.style.display = "none";
        snb_icon.style.display = "block";
        wrap.style.paddingLeft = "50px";
    }
}


/* 좌측 snb 탭 메뉴 */
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}



/* 우측 GPU 사용량 모니터링 바를 추가하는 함수. 시간대별로 갱신할 경우 아래 함수 사용 */
// function setClassChart() {
//     var chartTxt = document.getElementsByClassName('chartTxt')
//     var bar_per = document.getElementsByClassName('bar_per')

//     var chart_time = document.getElementsByClassName("chart_time");
    
//     $('.chart_area')[0].remove();
//     $('.chart_inner').append('<div class="chart_area"><div class="chart_txt">GPU가 <span class="chartTxt">0%</span>를 초과하였습니다.</div>'+
//                             '<div class="chart_bar"><div class="bar_per"></div></div>' +
//                             '<div class="chart_time">00시 00분</div></div>');

//     chartTxt[3].innerHTML = '100%';
//     bar_per[3].style.width = '100%';
//     chart_time[3].innerHTML = '12시 00분';
// }



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