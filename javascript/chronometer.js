class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
   this.intervalId = setInterval(() => {
     this.currentTime +=1;
     if(callback){
      callback();
     }  
   },1000)
  }

  getMinutes() {
    let min = Math.floor(this.currentTime /60);
    return min;
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getmiliSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if(value < 10) {
      return `0${value}`;
    }else {
      return `${value}`;
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here}
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let min = this.computeTwoDigitNumber(this.getMinutes());
    let seg = this.computeTwoDigitNumber(this.getSeconds());
    let mil = this.computeTwoDigitNumber(this.getmiliSeconds());
    return `${min}:${seg}`

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}