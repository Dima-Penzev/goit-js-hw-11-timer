const timerDays = document.querySelector('[data-value="days"]');
const timerHours = document.querySelector('[data-value="hours"]');
const timerMins = document.querySelector('[data-value="mins"]');
const timerSecs = document.querySelector('[data-value="secs"]');

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.start();
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
    }, 1000);
  }

  getTimeComponents(time) {
    const days = this.padDays(Math.floor(time / (1000 * 60 * 60 * 24)));
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

  padDays(value) {
    return String(value).padStart(3, '0');
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});
