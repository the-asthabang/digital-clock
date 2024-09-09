var slideimg = document.getElementById("imgcontainer");
var images= new Array(
     "ocean.jpg" ,
     "pock.jpg",
     "lombergini.jpg",
     "orange.jpg",
     "lombergini.jpg",
     "dog.jpg",
     "leaf.jpg",
     "multihome.jpg",
     "water.jpg",
     "do what you love.jpg",
     "scene.jpg",
     "fish.jpg",
     "dry.jpg",
     "car.jpg",
     "violet.jpg",
     "owl.jpg",
     "rose.jpg",
     "sun.jpg",
     "books.jpg",
     "blue.jpg",
     "sea.jpg",
     "light.jpg",
     
     

);
var len =images.length;
var i=0;
function slider(){
    if (i> len-1){
        i=0;
    }
    slideimg.src= images[i];
    i++;
    setTimeout('slider()',3000);

}
const time =document.getElementById('time');
const timeformat =document.getElementById('timeformat');
document.addEventListener('DOMContentLoaded',()=>
{
    setInterval(showtime,1000);
});

const showtime = ()=>{
    let date=new Date();
     let hr= date.getHours();
     let min=date.getMinutes();
     let sec = date.getUTCSeconds();

    hr=hr<10 ? `0${hr}`:hr;
    time.innerHTML=`${hr}:${min}:${sec}`;
    timeformat.innerHTML=hr>12?"pm":"am";
}
