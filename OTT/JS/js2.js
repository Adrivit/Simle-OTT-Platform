var slide=document.getElementById("slider")
var images=['abc6.jpg','abc7.jpg','abc8.jpg','abc9.jpg','abc10.jpg']
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

//search bar
function SearchOperation()
{
   var input, filter, table, td, a, i, txtValue;
   input = document.getElementById("search");
   filter = input.value.toUpperCase();
   table = document.getElementById("myTable");
   td = document.getElementsByTagName("td");
   for (i = 0; i < td.length; i++)
   {
      a = td[i].getElementsByTagName("b")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1)
      {
         td[i].style.display = "inline-block";
      } 
      else 
      {
         td[i].style.display = "none";
      }
   }
}

//genre options
function NameChange(x)
{
   var i;
   var td = document.getElementsByTagName("td");
   document.getElementById("menu-button").innerHTML=x;
   if(x==="All")
   {
      for(i = 0; i < td.length; i++) 
      {
         td[i].style.display = "inline-block";
      } 
   }
   else if(x==="Action")
   {
      for(i = 0; i < td.length; i++) 
      {
         if(td[i].className=="action")
         td[i].style.display = "inline-block";
         else 
         td[i].style.display = "none";
      } 
   }
   else if(x==="Drama")
   {
      for(i = 0; i < td.length; i++) 
      {
         if(td[i].className=="drama")
         td[i].style.display = "inline-block";
         else 
         td[i].style.display = "none";
      } 
   }
   else  if(x==="Sci-Fi")
   {
      for(i = 0; i < td.length; i++) 
      {
         if(td[i].className=="sci-fi")
         td[i].style.display = "inline-block";
         else 
         td[i].style.display = "none";
      } 
   }
}