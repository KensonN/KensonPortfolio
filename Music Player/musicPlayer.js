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

var laLune = {
    source: "music/music/Adventure/04 La Lune (feat. Dan Smith).mp3",
    title : "La Lune",
    artist: "Madeon (ft. Dan Smith)",
    album: "Adventure",
    art: "music/music/Adventure/adventure.jpg"
}
var pixelEmpire = {
    source: "music/music/Adventure/11 Pixel Empire.mp3",
    title: "Pixel Empire",
    artist: "Madeon",
    album: "Adventure",
    art: "music/music/Adventure/adventure.jpg"
}
var youreOn = {
    source: "music/music/Adventure/02 You're On (feat. Kyan).mp3",
    title: "You're On",
    artist: "Madeon (ft. Kyan)",
    album: "Adventure",
    art: "music/music/Adventure/adventure.jpg"
}
var theCity = {
    source: "music/music/Adventure/15 The City.mp3",
    title: "The City",
    artist: "Madeon",
    album: "Adventure",
    art: "music/music/Adventure/adventure.jpg"
}
var spectrum = {
    source: "music/music/Clarity/03 Spectrum (feat. Matthew Koma).mp3",
    title: "Spectrum",
    artist: "Zedd",
    album: "Clarity",
    art: "music/music/Clarity/clarity.png"
}
var lostAtSea = {
    source: "music/music/Clarity/04 Lost At Sea (feat. Ryan Tedder).mp3",
    title: "Lost at Sea",
    artist: "Zedd",
    album: "Clarity",
    art: "music/music/Clarity/clarity.png"
}
var illusion = {
    source: "music/music/True Colors/11 Illusion (feat. Echosmith).mp3",
    title: "Illusion",
    artist: "Zedd (ft. Echosmith)",
    album: "True Colors",
    art: "music/music/True Colors/true colors.jpg"
}
var papercut = {
    source: "music/music/True Colors/08 Papercut (feat. Troye Sivan).mp3",
    title: "Papercut",
    artist: "Zedd (ft. Troye Sivan)",
    album: "True Colors",
    art: "music/music/True Colors/true colors.jpg"
}

var beautifulNow = {
    source: "music/music/True Colors/03 Beautiful Now (feat. Jon Bellion).mp3",
    title: "Beautiful Now",
    artist: "Zedd (ft. Jon Bellion)",
    album: "True Colors",
    art: "music/music/True Colors/true colors.jpg"
}
var sadMachine = {
    source: "music/music/Worlds/02_Sad_Machine.mp3",
    title: "Sad Machine",
    artist: "Porter Robinson",
    album: "Worlds",
    art: "music/music/Worlds/worlds.jpg"
}
var flicker = {
    source: "music/music/Worlds/04 Flicker.mp3",
    title: "Flicker",
    artist: "Porter Robinson",
    album: "Worlds",
    art: "music/music/Worlds/worlds.jpg"
}
var hearTheBells = {
    source: "music/music/Worlds/07 Hear the Bells (feat. Imaginary C.mp3",
    title: "Hear the Bells",
    artist: "Porter Robinson (ft. Imaginary Cities)",
    album: "Worlds",
    art: "music/music/Worlds/worlds.jpg"
}
var naturalLight = {
    source: "music/music/Worlds/08 Natural Light.mp3",
    title: "Natural Light",
    artist: "Porter Robinson",
    album: "Worlds",
    art: "music/music/Worlds/worlds.jpg"    
}
var seaOfVoices = {
    source: "music/music/Worlds/10 Sea of Voices.mp3",
    title: "Sea of Voices",
    artist: "Porter Robinson",
    album: "Worlds",
    art: "music/music/Worlds/worlds.jpg"    
}
var fellowFeeling = {
    source: "music/music/Worlds/11 Fellow Feeling.mp3",
    title: "Fellow Feeling",
    artist: "Porter Robinson",
    album: "Worlds",
    art: "music/music/Worlds/worlds.jpg" 
}
var goodbyeToAWorld = {
    source: "music/music/Worlds/12 Goodbye To a World.mp3",
    title: "Goodbye to a World",
    artist: "Porter Robinson",
    album: "Worlds",
    art: "music/music/Worlds/worlds.jpg" 
}
var ffs = {
    source: "music/music/Worlds/05 Fresh Static Snow.mp3",
    title: "Fresh Static Snow",
    artist: "Porter Robinson",
    album: "Worlds",
    art: "music/music/Worlds/worlds.jpg" 
}
var laLuneLive = {
    source: "music/music/Shelter Live/La Lune x Sea Of Voices (Shelter Edit).mp3",
    title: "La Lune x Sea of Voices (Shelter Live Edit)",
    artist: "Porter Robinson & Madeon",
    album: "Shelter Live",
    art: "music/music/Shelter Live/shelterlive.jpg"
}
var ffsLive = {
    source: "music/music/Shelter Live/Fresh Static Snow (Shelter Edit).mp3",
    title: "Fresh Static Snow (Shelter Live Edit)",
    artist: "Porter Robinson & Madeon",
    album: "Shelter Live",
    art: "music/music/Shelter Live/shelterlive.jpg"
}
var easy = {
    source: "music/music/Easy/01 Easy (Extended Remix).mp3",
    title: "Easy (Extended Remix)",
    artist: "Porter Robinson and Mat Zo",
    album: "Easy (Single)",
    art: "music/music/Easy/easy.jpg"
}
var raiseYourWeapon = {
    source: "music/music/Raise Your Weapon/01 Raise Your Weapon.m4a",
    title: "Raise Your Weapon",
    artist: "DeadMau5",
    album: "Raise Your Weapon (Single)",
    art: "music/music/Raise Your Weapon/Raise_Your_Weapon.png"
}
var theVeldt = {
    source: "music/music/The Veldt/01 The Veldt (feat. Chris James) [Or (1).mp3",
    title: "The Veldt",
    artist: "DeadMau5 (ft. Chris James)",
    album: "The Veldt (Single)",
    art:"music/music/The Veldt/veldt.jpg"
}
var OSTTT = {
    source: "music/music/OSTTT/OSTTT.wav",
    title:"OSTTT",
    artist: "Porter Robinson & Madeon",
    album: "UNRELEASED",
    art:"music/music/OSTTT/OSTTT.jpg"
}
var songList = [beautifulNow,clarity,divinity,doneWithLove,easy,fellowFeeling,ffs,ffsLive,flicker,goodbyeToAWorld,hearTheBells,home,illusion,laLune,laLuneLive,language,lostAtSea,naturalLight,OSTTT,papercut,pixelEmpire,raiseYourWeapon,sadMachine,seaOfVoices,shelter,spectrum,theCity,theVeldt,youreOn]
var currentSong;
var songAmount = songList.length-1

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
                document.getElementById("previousArt").src = songList[songAmount].art
            }
            if (i != songAmount) {
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
            if (i<songAmount-1) {    
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
            else if (i === songAmount-1) {
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
                document.getElementById("previousArt").src = songList[songAmount].art;
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
                document.getElementById("previousArt").src = songList[songAmount].art;
                playImage.setAttribute('src', "icons/play.png")
                break;
            }
            if (i === 0) {
                currentSong = songList[songAmount].title;
                audio.src = songList[songAmount].source;
                audio.load();
                
                document.getElementById("title").innerHTML = songList[songAmount].title;
                document.getElementById("artist").innerHTML= songList[songAmount].artist;
                document.getElementById("albumName").innerHTML = songList[songAmount].album;
                document.getElementById("currentArt").src = songList[songAmount].art;
                document.getElementById("nextArt").src = songList[songAmount-1].art;
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

var audioDuration = audio.duration

audio.addEventListener("canplaythrough", function () {
	audioDuration = audio.duration;
}, false);

audio.addEventListener("timeupdate", timeUpdate, false);
function timeUpdate() {
    playPercent = 402 * (audio.currentTime / audioDuration) - 10;
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

audio.loop();