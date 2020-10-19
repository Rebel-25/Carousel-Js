(function (){
    /* eslint-disable quotes */
let container = document.querySelector('#corousel');
let slides = container.querySelectorAll('.slide');
let indicatorsContainer = container.querySelector('#indicators-container');
let indicators = indicatorsContainer.querySelectorAll('.indicator');
let controls = container.querySelector('#controls-container');
let pauseBtn = controls.querySelector('#pause-btn');
let prevBtn = controls.querySelector('#prev-btn');
let nexteBtn = controls.querySelector('#next-btn');

let curreentSlide = 0;
let timerID = 0;
let isPlaying = true;
let swiperStartX = null;
let swiperEndX = null;
 
const SPACE = ' ';
const LEFT_ARROW = 'ArrowLeft';
const RIGHT_ARROW = 'ArrowRight';
const Fa_PAUSE = '<i class="far fa-pause-circle"></i>';
const FA_PLAY ='<i class="far fa-play-circle"></i> ';

let slidesCount = slides.length;
let interval = 2000;

function goToNth(n){
slides[curreentSlide].classList.toggle('active');
indicators[curreentSlide].classList.toggle('active');
curreentSlide = (slidesCount + n)  % slidesCount;
slides[curreentSlide].classList.toggle('active');
indicators[curreentSlide].classList.toggle('active');
}

function goToPrev(){
    goToNth(curreentSlide - 1);  
}

function goToNext(){
    goToNth(curreentSlide +1);
}

function play(){
    pauseBtn.innerHTML = Fa_PAUSE;
    isPlaying = !isPlaying;
    timerID = setInterval(goToNext,interval);
}

function pause(){
    if(  isPlaying ){
        pauseBtn.innerHTML = FA_PLAY;
        isPlaying = ! isPlaying;
        clearInterval(timerID);
    }
}

function pausePlay(){
    if(isPlaying){
        pause();

    }else{
        play();
    }
}

function prev(){

    pause();
    goToPrev();
} 

function next(){
    pause();
    goToNext();
}

function indicate(e){
    let target = e.target;
    if(target.classList.contains('indicator')){
        pause();
        goToNth(target.getAttribute ('data-slide-to'));
    }
}

function pressKey(e){
if(e.key === SPACE)pausePlay();
if(e.key === LEFT_ARROW) prev();
if(e.key === RIGHT_ARROW)next();
}

function swiperStart (e) {
  swiperStartX = e.changedTouches[0].pageX;
}

function swiperEnd(e){
    swiperEndX = e.changedTouches[0].pageX;
    if( swiperStartX - swiperEndX > 50)next();
    if( swiperStartX - swiperEndX <- 50)prev();
}

pauseBtn.addEventListener( 'mouseup',pausePlay);
prevBtn.addEventListener( 'mouseup',prev);
nexteBtn.addEventListener( 'mouseup',next);
indicatorsContainer.addEventListener('click', indicate);
document.addEventListener('keydown', pressKey);
container.addEventListener('touchstart',swiperStart);
container.addEventListener('touchend',swiperEnd);

timerID = setInterval(goToNext,interval);

}());



