var slide=document.getElementById("slider")
var images=['abc1.jpg','abc2.jpg','abc3.jpg','abc4.jpg','abc5.jpg']
var i=0;

//previous button
function prevBtnEvent()
{
   if(i<=0) i=images.length;
   i--;
   return setImg();
}

//next button
function nextBtnEvent()
{
   if(i>=images.length-1) i=-1;
   i++;
   return setImg();
}

//Setting image on screen
function setImg()
{
   return slide.setAttribute("src","Images/"+images[i]);
}
