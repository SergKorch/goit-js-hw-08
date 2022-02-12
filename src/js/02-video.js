import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const saveData = 'videoplayer-current-time';
console.log(saveData)
const player = new Player('vimeo-player')
const timeSave = localStorage.getItem(saveData);
console.log(timeSave)
if (timeSave) {
  player.setCurrentTime(timeSave);
}

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(saveData, data.seconds.toString());
  }, 1000),
);
