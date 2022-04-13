const time = [...document.querySelectorAll("[data-time]")].map(x => x.dataset.time).map(timeCode => {
      const [mins, secs] = timeCode.split(':').map(parseFloat)
      return (mins * 60) + secs;
    }).reduce((prev, next) => prev + next)

let secondsLeft = time;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours + " hours", mins + " minutes", secondsLeft + " seconds");

