var i
var playButton = document.getElementById("play");
var playImage = document.getElementById("playImage");
var shuffleButton = document.getElementById("shuffleButton");
var shuffleImage = document.getElementById("shuffleImage");
var loopButton = document.getElementById("loopButton");
var loopImage = document.getElementById("loopImage");
var backButton = document.getElementById("backButton");
var backImage = document.getElementById("backImage");
var sideButton = document.getElementById("sideButton");
var close=document.getElementById("close");
var audio = document.getElementById("audio");
var playhead = document.getElementById('playhead');
var playPercent;
var sidebar = document.getElementById("songList");


var home  = {
    source: "music/music/Adventure/12 Home.mp3",
    title : "Home",
    artist: "Madeon",
    album : "Adventure",
    art : "music/music/Adventure/adventure.jpg"
}

var clarity = {
    source : "music/music/Clarity/05 Clarity (feat. Foxes).mp3",
    title : "Clarity",
    artist: "Zedd",
    album : "Clarity",
    art : "music/music/Clarity/clarity.png"
}
var shelter = {
    source: "music/music/Shelter/01 Shelter.mp3",
    title: "Shelter",
    artist: "Porter Robinson & Madeon",
    album: "Shelter: The Complete Edition",
    art: "music/music/Shelter/shelter.jpg",
}
var doneWithLove = {
    source: "music/music/True Colors/05 Done With Love.mp3",
    title: "Done With Love",
    artist: "Zedd",
    album : "True Colors",
    art: "music/music/True Colors/true colors.jpg"
}
var divinity = {
    source: "music/music/Worlds/01 Divinity (feat. Amy Millan).mp3",
    title: "Divinity",
    artist: "Porter Robinson",
    album : "Worlds",
    art: "music/music/Worlds/worlds.jpg"
}

var language = {
    source : "music/music/Language/01 Language.mp3",
    title : "Language",
    artist : "Porter Robinson",
    album : "Language (Single)",
    art: "music/music/Language/language.jpg"
}


var songList = [clarity,divinity,doneWithLove,home,language,shelter]
var currentSong

function songChosen() {
    for (i=0; i < songList.length; i++) {
        if (this.id === songList[i].title) {
            currentSong = songList[i].title
        }
        if (currentSong === songList[i].title) {
            currentSong = songList[i].title
            audio.src = songList[i].source
            audio.load()
            playImage.setAttribute('src', "icons/play.png")
            document.getElementById("title").innerHTML = songList[i].title;
            document.getElementById("artist").innerHTML = songList[i].artist;
            document.getElementById("albumName").innerHTML = songList[i].album;
            document.getElementById("currentArt").src = songList[i].art
            if (i != 0) {
                document.getElementById("previousArt").src = songList[i - 1].art
            }
            else {
                document.getElementById("previousArt").src = songList[5].art
            }
            if (i != 5) {
                document.getElementById("nextArt").src = songList[i + 1].art
            }
            else {
                document.getElementById("nextArt").src = songList[0].art
            }
        }
    }
}

document.getElementById('nextButton').addEventListener("click", next)
document.getElementById('nextArt').addEventListener("click", next)
function next () {
   for (i=0; i < songList.length; i++) {
        if (currentSong === songList[i].title){
            if (i<4) {    
                currentSong = songList[i+1].title;
                audio.src = songList[i+1].source;
                audio.load();
                document.getElementById("title").innerHTML = songList[i+1].title;
                document.getElementById("artist").innerHTML= songList[i+1].artist;
                document.getElementById("albumName").innerHTML = songList[i+1].album;
                document.getElementById("currentArt").src = songList[i+1].art;
                document.getElementById("nextArt").src = songList[i+2].art;
                document.getElementById("previousArt").src = songList[i].art;
                playImage.setAttribute('src', "icons/play.png")
                break;
            }
            else if (i === 4) {
                currentSong = songList[i+1].title;                
                audio.src = songList[i+1].source
                audio.load()
                document.getElementById("title").innerHTML = songList[i+1].title;
                document.getElementById("artist").innerHTML= songList[i+1].artist;
                document.getElementById("albumName").innerHTML = songList[i+1].album;
                document.getElementById("currentArt").src = songList[i+1].art;
                document.getElementById("nextArt").src = songList[0].art;
                document.getElementById("previousArt").src = songList[i].art;
                playImage.setAttribute('src', "icons/play.png")
                break;
            }
            else {
                currentSong = songList[0].title
                audio.src = songList[0].source
                audio.load();
                ;
                document.getElementById("title").innerHTML = songList[0].title;
                document.getElementById("artist").innerHTML= songList[0].artist;
                document.getElementById("albumName").innerHTML = songList[0].album;
                document.getElementById("currentArt").src = songList[0].art;
                document.getElementById("nextArt").src = songList[1].art;
                document.getElementById("previousArt").src = songList[5].art;
                playImage.setAttribute('src', "icons/play.png")
            }
        }
    }
};

document.getElementById("backButton").addEventListener("click", previous)
document.getElementById("previousArt").addEventListener("click", previous)
function previous(){
    for (i=0; i < songList.length; i++) {
        if (currentSong === songList[i].title){
            if (i > 1) {
                currentSong = songList[i-1].title;
                audio.src = songList[i-1].source;
                audio.load();
                ;
                document.getElementById("title").innerHTML = songList[i-1].title;
                document.getElementById("artist").innerHTML= songList[i-1].artist;
                document.getElementById("albumName").innerHTML = songList[i-1].album;
                document.getElementById("currentArt").src = songList[i-1].art;
                document.getElementById("nextArt").src = songList[i].art;
                document.getElementById("previousArt").src = songList[i-2].art;
                playImage.setAttribute('src', "icons/play.png")
                break;
            }
            else if (i === 1) {
                currentSong = songList[i-1].title;
                audio.src = songList[i-1].source;
                audio.load();
                
                document.getElementById("title").innerHTML = songList[i-1].title;
                document.getElementById("artist").innerHTML= songList[i-1].artist;
                document.getElementById("albumName").innerHTML = songList[i-1].album;
                document.getElementById("currentArt").src = songList[i-1].art;
                document.getElementById("nextArt").src = songList[i].art;
                document.getElementById("previousArt").src = songList[5].art;
                playImage.setAttribute('src', "icons/play.png")
                break;
            }
            if (i === 0) {
                currentSong = songList[5].title;
                audio.src = songList[5].source;
                audio.load();
                
                document.getElementById("title").innerHTML = songList[5].title;
                document.getElementById("artist").innerHTML= songList[5].artist;
                document.getElementById("albumName").innerHTML = songList[5].album;
                document.getElementById("currentArt").src = songList[5].art;
                document.getElementById("nextArt").src = songList[4].art;
                document.getElementById("previousArt").src = songList[0].art;
                playImage.setAttribute('src', "icons/play.png")
                break;
            }
        }
    }
}

var song = [];

for (i = 0; i < songList.length; i++) {
    song[i] = document.createElement("h2");
    song[i].id = songList[i].title;
    var songName = document.createTextNode(songList[i].title);
    song[i].appendChild(songName);
    sidebar.appendChild(song[i]);
    document.getElementById(songList[i].title).addEventListener("click", songChosen);

}




sideButton.addEventListener("click", showSidebar);

function showSidebar() {
    document.getElementById("main").style.marginLeft = "20%";
    document.getElementById("sidebar").style.width = "20%";
    document.getElementById("sidebar").style.display = "block";
}

close.addEventListener("click", closeSidebar);

function closeSidebar() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("sidebar").style.width = "20%";
    document.getElementById("sidebar").style.display = "none";
}

playButton.addEventListener("click", playAudio);

function playAudio() {
    //if audio is paused
    if (audio.paused) {
    //play audio        
            audio.play();
    //change icon to pause        
        playImage.setAttribute('src', "icons/pause.png")
        }
    else {
    //pause audio        
        audio.pause();
    //change icon to play        
        playImage.setAttribute('src', "icons/play.png")
        }
}

function sidebarOpen() {
    var pageLeft = document.getElementsByClassName("main");
    pageLeft.setAttribute('style', "margin-left: 25%")
    document.getElementById("sidebar").style.width = "25%";
    document.getElementById("sidebar").style.display = "block";
}
/*
shuffleButton.addEventListener("click", changeShuffleButton);

function changeShuffleButton() {
    console.log("shufflepress");
    if (shuffleImage.getAttribute('style') === "filter: invert(100%); border: 2px solid black; border-radius: 50%; width: 36px") {
        shuffleImage.setAttribute('style', 'filter:(0%)');
        console.log("noinvert");
    }
    else {
        shuffleImage.setAttribute('style', "filter: invert(100%); border: 2px solid black; border-radius: 50%; width: 36px");
        console.log("invert");
    }
}

loopButton.addEventListener("click", changeLoopButton);

function changeLoopButton() {
    console.log("loop pressed");
    if (loopImage.getAttribute('src') === "icons/loop1.png"){
        loopImage.setAttribute('style', "filter: invert(0%)");
        loopImage.setAttribute('src', "icons/loop.png");
        alert("off")
        audio.loop = false
    }
    else if (loopImage.getAttribute('style') === "filter: invert(100%); border: 2px solid black; border-radius: 50%; width: 36px") {
        loopImage.setAttribute('src', "icons/loop1.png");
        console.log("single");
        audio.loop = true
        alert("single")
    }
    else if (loopImage.getAttribute('src') === "icons/loop.png") {
    loopImage.setAttribute('style', 'filter: invert(100%); border: 2px solid black; border-radius: 50%; width: 36px');
    }
}
*/
var audioDuration = audio.duration

audio.addEventListener("canplaythrough", function () {
	audioDuration = audio.duration;
}, false);

audio.addEventListener("timeupdate", timeUpdate, false);
function timeUpdate() {
    playPercent = -10 + 402 * (audio.currentTime / audioDuration);
    // playhead.setAttribute("style", "left-margin: 100px");
    playhead.style.marginLeft = playPercent + "px";
    if (audio.currentTime == audioDuration) {
        playImage.setAttribute('src', 'icons/play.png');
    }
}


document.getElementById("timeline").addEventListener("click", function () {
    playPercent = event.offsetX / 402;
    var seekTime = playPercent * audioDuration;
    audio.currentTime = seekTime;
    
})

