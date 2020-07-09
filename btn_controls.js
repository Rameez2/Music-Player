


var songtitle = document.getElementById('songtitle');
var fillBar = document.getElementById('fill');
var pre = document.getElementById('Pre');
var btn = document.getElementById('play');
var next = document.getElementById('Next');
var simage = document.getElementById('simage')
var bimage = document.getElementById('bimage')
var channelname = document.getElementById('chname')



currentSong = 0;
var songs =['OnMyWay.mp3','Faded.mp3','Cradles.mp3']
var images = ['onmyway.jpg','faded.jpg','cradles.jpg']
var chname = ['Alan Walker','Alan Walker','Cradles'] 
var song = new Audio()


//          PLAY SONG

window.onload = playsong()


function playsong(){

    song.src = songs[currentSong]
    songtitle.textContent = songs[currentSong]
    song.play()
    btn.innerHTML = `<i class="fa fa-pause" aria-hidden="true"></i>`
    channelname.textContent = chname[currentSong]
    fillBar.addEventListener('change',function(){
        song.currentTime = fillBar.value;

    })


    song.addEventListener('timeupdate',function(){
        var position = song.currentTime / song.duration;
        fillBar.style.width = position * 100 + "%";


    })

    song.addEventListener('ended',function(){

        Next()


    })



}

// PLAY PAUSE FUNCTION

 function Play(){   
    if(song.paused){
    song.play()
    btn.innerHTML = `<i class="fa fa-pause" aria-hidden="true"></i>`


    }
    else{

        song.pause()
        btn.innerHTML = `<i class="fa fa-play" aria-hidden="true"></i>`
    }}

    song.addEventListener('timeupdate',function(){

        var position = song.currentTime / song.duration;
        fillBar.style.width = position;

    })

//              NEXT FUNCTION

function Next(){

    
    currentSong++;
    if(currentSong >2){

        currentSong = 0;
        console.log('Curent song is ',currentSong);
        Play()
    }
    playsong()

    bimage.src = images[currentSong];
    simage.src = images[currentSong];


}









//              PREVIOUS FUNCTION

function Pre(){

    
    currentSong--;
    if(currentSong <0){

        currentSong = 0;
        console.log('Curent song is ',currentSong);
        Play()
    }
    playsong()

    bimage.src = images[currentSong];
    simage.src = images[currentSong];

     


}








