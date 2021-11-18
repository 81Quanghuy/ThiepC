var modal = document.querySelector(".modal");
var modal1 = document.querySelector(".modal1");
var modal2 = document.querySelector(".modal2");

var modalContent = document.querySelector(".modal--content");
var modalContent1 = document.querySelector(".modal--content1");
var modalContent2 = document.querySelector(".modal--content2");

var ContentItems =document.querySelectorAll(".content--item");

var video = document.querySelector(".video");
var video1 = document.querySelector(".video1");
// hàm mở modal 
function ContentOnClick(ContentItems, video, modal, source){
    ContentItems.onclick = function(){
        modal.classList.toggle("active");
        if(video && source){
            video.src =`${source}`;
            video.autoplay = true;   
        }
    }
}
ContentOnClick(ContentItems[0],video1,modal,"../Thiep2/Video/videochucmung2.mp4");
ContentItems[1].onclick = function() {
    modal1.classList.add("active");
}
ContentOnClick(ContentItems[2],video,modal2,"../Thiep2/Video/videochucmung.mp4");
// hàm thực hiện thoát khỏi modal
function OnClick(modal, video){
    modal.onclick =function()    {
        modal.classList.remove("active");
        if(video)
        video.src = " ";
    }
}
OnClick(modal,video1);
OnClick(modal1);
OnClick(modal2,video);
// hàm thực hiện việc không nổi bọt của modal
function mdContOnclick (modalContent){
    modalContent.onclick = function(e){
        e.stopPropagation();
    }
}
mdContOnclick(modalContent);
mdContOnclick(modalContent2);
mdContOnclick(modalContent1);