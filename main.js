class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.start();
  }
  start() {
    document
      .querySelector(this.selector)
      .insertAdjacentHTML('afterbegin', this.makeTimerMarkup());
    this.intervalId = setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = this.targetDate - currentDate;
      const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);
      document.querySelector('[data-value="days"]').textContent = days;
      document.querySelector('[data-value="hours"]').textContent = hours;
      document.querySelector('[data-value="mins"]').textContent = mins;
      document.querySelector('[data-value="secs"]').textContent = secs;
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

  makeTimerMarkup() {
    return `<div class="field">
        <span class="value" data-value="days">00</span>
        <span class="label">Days</span>
      </div>

      <div class="field">
        <span class="value" data-value="hours">00</span>
        <span class="label">Hours</span>
      </div>

      <div class="field">
        <span class="value" data-value="mins">00</span>
        <span class="label">Minutes</span>
      </div>

      <div class="field">
        <span class="value" data-value="secs">00</span>
        <span class="label">Seconds</span>
      </div>`;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});
