const timerId = document.getElementById('timer-1');
const timerDays = document.querySelector('[data-value="days"]');
const timerHours = document.querySelector('[data-value="hours"]');
const timerMins = document.querySelector('[data-value="mins"]');
const timerSecs = document.querySelector('[data-value="secs"]');

class CountdownTimer {
  constructor({ targetDate }) {
    this.targetDate = targetDate;
  }
  start() {
    this.intervalId = setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = this.targetDate - currentDate;
        const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);
        timerDays.textContent = days;
        timerHours.textContent = hours;
        timerMins.textContent = mins;
        timerSecs.textContent = secs;
      console.log(`${days}:${hours}:${mins}:${secs}`);
    }, 1000);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

timer.start();


/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
