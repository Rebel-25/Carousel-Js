// /* eslint-disable quotes */
// function Carousel(){

// this.container = document.querySelector('#corousel');
// this.slides = this.container.querySelectorAll('.slide');
// this.indicatorsContainer = this.container.querySelector('#indicators-container');
// this.indicators = this.indicatorsContainer.querySelectorAll('.indicator');
// this.controls = this.container.querySelector('#controls-container');
// this.pauseBtn = this.controls.querySelector('#pause-btn');
// this.prevBtn = this.controls.querySelector('#prev-btn');
// this.nexteBtn = this.controls.querySelector('#next-btn');

//     this.curreentSlide = 0;
//     this.timerID = 0;
//     this.isPlaying = true;
//     this.swiperStartX = null;
//     this.swiperEndX = null;
//     this.slidesCount = this.slides.length;
//     this.interval = 2000;
   
    
//    this.SPACE = " ";
//    this.LEFT_ARROW = "ArrowLeft";
//    this.RIGHT_ARROW = "ArrowRight";
//    this.Fa_PAUSE = '<i class="far fa-pause-circle"></i>'; 
//    this.FA_PLAY ='<i class="far fa-play-circle"></i> ';

//    this.initLiseners();
//    }
   


//    Carousel.prototype = {
 
//  initLiseners(){

// this.pauseBtn.addEventListener( 'click',this.pausePlay.bind(this));
// this.prevBtn.addEventListener( 'click',this.prev.bind(this));
// this.nexteBtn.addEventListener( 'click',this.next.bind(this));
// this.indicatorsContainer.addEventListener('click', this.indicate.bind(this));
// document.addEventListener('keydown', this.pressKey.bind(this));
// this.container.addEventListener('touchstart',this.swiperStart.bind(this));
// this.container.addEventListener('touchend',this.swiperEnd.bind(this));




//      },    
//     goToNth(n) {

//         this.slides[this.curreentSlide].classList.toggle('active');
        
//         this.indicators[this.curreentSlide].classList.toggle('active');
        
//         this.curreentSlide = (this.slidesCount + n)  % this.slidesCount;
        
//         this.slides[this.curreentSlide].classList.toggle('active');
        
//         this.indicators[this.curreentSlide].classList.toggle('active');
//         },
        
   


//     goToPrev(){
//     this.goToNth(this.curreentSlide - 1);
//     console.log(this.goToPrev);     
// },

//     goToNext(){
//         console.log(this);
//         const newLocal =this;

//          newLocal.goToNth(this.curreentSlide +1);

//   },
//   play(){
//    this.pauseBtn.innerHTML = this.Fa_PAUSE;
//    this.isPlaying = !this.isPlaying;
 
//    this.timerID =  setInterval (this.goToNext,this.interval);



// },
//  pause(){
//     if(  this.isPlaying ){
//         this.pauseBtn.innerHTML = this.FA_PLAY;
//         this.isPlaying = !this.isPlaying;
//          clearInterval(this.timerID);
      
//     }
// },




//  pausePlay(){
//     if(this.isPlaying){
//         this.pause();

//     }else{
//         this.play();

//     }

// },
//  prev(){

//     this.pause();
//     this.goToPrev();


// } ,


//   next(){
//     this.pause();
//     this.goToNext();
// },



// indicate(e){

//     let target = e.target;

//     if(target.classList.contains('indicator')){

//         this.pause();
     
//         this.goToNth(target.bataset.slideTo);
      
//     }
  
// },

// pressKey(e){

// if(e.key === this.SPACE)this.pausePlay();
// if(e.key === this.LEFT_ARROW) this.prev();
// if(e.key === this.RIGHT_ARROW)this.next();

// },
// swiperStart (e) {
//   this.swiperStartX = e.changedTouches[0].pageX;
// },

// swiperEnd(e){
//     this.swiperEndX = e.changedTouches[0].pageX;

//     if( this.swiperStartX - this.swiperEndX > 50)this.next();

//     if( this.swiperStartX -this. swiperEndX <- 50)this.prev();

// },


//     init(){
//         const newLocal = this;
//     newLocal.timerID  = setInterval( () => this.goToNext(), this.interval );

// }
// };


// let carousel = new Carousel();
// carousel.init();
// // eslint-disable-next-line no-undef
// let carousel = new Carousel();
// carousel.init();

// 

