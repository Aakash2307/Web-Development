console.log("welcome to spotify")

let songindex = 0;
let Audioelement =  new Audio('Songs/Night-Changes.mp3');
let masterplay = document.getElementById('masterplay');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName("songitem"));

let MyprogressBar = document.getElementById('MyProgressBar');
let songs = [
    {songname: 'Night Changes' , filePath:"Songs/Night-Changes.mp3" , coverPath:"download/cover.jpeg"},
    {songname: 'the nights' , filePath:"Songs/The-Nights.mp3" , coverPath:"download/the nights.jpeg"},
    {songname: 'challeya' , filePath:"Songs/Chaleya.mp3" , coverPath:"download/challeya.jpg"},
    {songname: 'naa ready' , filePath:"Songs/Naa-Ready.mps" , coverPath:"download/maaready.jpg"}
]
   



/*Audioelement.play()*/
// Handle play/pause click

masterplay.addEventListener('click',()=>{
    if(Audioelement.paused || Audioelement.currentTime<=0){
     Audioelement.play();
     
     gif.style.opacity = 1;  // gif to appear and disappear

    }else{
        Audioelement.pause();
       
        gif.style.opacity = 0;
    }
})
//Listen to the Events
Audioelement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')

    progress = parseInt((Audioelement.currentTime/Audioelement.duration)*100);
    console.log(progress);
    MyprogressBar.value = progress;
})

MyprogressBar.addEventListener('change',()=>{
    Audioelement.currentTime = MyprogressBar.value * Audioelement.duration/100;
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
     element.classlist.add();
     element.classlist.add();
    })
}

Array.from(document.getElementById('songitemPlay')).forEach(()=>{
    element.addEventListener('click',(e)=>{
        index = parseInt(e.target.id);
        makeallplays();
        e.target.classlist.remove("");
        e.target.classlist.add("");
         Audioelement.currentTime = 0;
        Audioelement.src = `Songs/${songindex+1}.mp3`
        Audioelement.play();
    })

    
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})