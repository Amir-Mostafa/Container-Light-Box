var imgs=document.getElementsByTagName("img");
var close=document.getElementById("close");
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var LightBox=document.getElementById("LightBox");
var LightBoxContainer=document.getElementById("LightBoxContainer");
var portImgs=[];
var index=0;
for(var i=0;i<imgs.length;i++)
{
    portImgs[i]=imgs[i].src;
    imgs[i].addEventListener("click",show);
}
function show(i)
{
    LightBoxContainer.style.display="flex";
    LightBox.style.backgroundImage="url("+i.target.src+")";
    index=portImgs.indexOf(i.target.src)   ;
}

close.addEventListener("click",exit);
function exit()
{
    LightBoxContainer.style.display="none";
}

prev.addEventListener("click",getPrevImg);
function getPrevImg()
{
    index=(index-1)%portImgs.length;
    if(index==-1)
        index=portImgs.length-1;
    LightBox.style.backgroundImage="url("+portImgs[index]+")";
}

next.addEventListener("click",getNextImg);
function getNextImg()
{
    index=(index+1)%portImgs.length;
    LightBox.style.backgroundImage="url("+portImgs[index]+")";   
}

document.addEventListener("keyup",getImgByKey);
function getImgByKey(e)
{
    if(e.keyCode==39)
    getNextImg();
    else if(e.keyCode==37)
        getPrevImg();

    else if(e.keyCode==27)
        exit();
}
LightBoxContainer.addEventListener("click",function(e){
    if(e.target!=next&&e.target!=prev&&e.target!=LightBox)
        exit();
})

