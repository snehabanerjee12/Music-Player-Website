
let progressBar= document.getElementById("progressBar");
let audio1 = document.getElementById('audio1');
let audio2 = document.getElementById('audio2');
let audio3 =  document.getElementById('audio3');
let audio4 = document.getElementById('audio4');

// Add more audio elements as needed
let mysong= document.getElementById("mysong");
let songPlay= document.getElementById("songPlay");


function toggleAudio(audioId) {
  let audioElement = document.getElementById(audioId);

  if (audioElement.paused) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
}

mysong.onloadedmetadeta= function(){
	progressBar.max = mysong.duration;
	progressBar.value = mysong.currentTime;
 }


function playPause(){
	if(songPlay.classList.contains("fa-pause")){
		mysong.pause();
		songPlay.classList.remove("fa-pause");
		songPlay.classList.add("fa-play");
	}
	else{
		mysong.play();
		songPlay.classList.add("fa-pause");
		songPlay.classList.remove("fa-play");
	}
}
if(mysongt.play()){
	setInterval(()=>{
		progressBar.value = mysong.currentTime;
	},500);
}


progressBar.onchange = function(){
	mysong.play();
	mysong.currentTime = progress.value;
	mysong.classList.add("fa-pause");
		mysong.classList.remove("fa-play");
}