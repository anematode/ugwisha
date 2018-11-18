const defaultNames = {
  A: 'Period A', B: 'Period B', C: 'Period C', D: 'Period D',
  E: 'Period E', F: 'Period F', G: 'Period G',
  b: 'Brunch', l: 'Lunch', f: 'Flex', s: 'SELF'
};
const defaultColours = {
  A: 'f44336', B: '3F51B5', C: 'FFEB3B', D: '795548',
  E: 'FF9800', F: '9C27B0', G: '4CAF50',
  b: null, l: null, f: '607D8B', s: '9E9E9E'
};
let scheduleWrapper;
let inputs;
function setSchedule(schedule) {
  scheduleWrapper.innerHTML = '';
  inputs = {};
  scheduleWrapper.appendChild(createFragment(schedule.map(pd => {
    const periodName = createElement('input', {
      attributes: {
        type: 'text',
        placeholder: defaultNames[pd.period],
        value: options['periodName_' + pd.period]
      },
      listeners: {
        change() {
          options['periodName_' + pd.period] = periodName.value;
          save();
          updateStatus();
          inputs[pd.period].forEach(input => input !== periodName && (input.value = periodName.value));
        }
      }
    });
    if (!inputs[pd.period]) inputs[pd.period] = [];
    inputs[pd.period].push(periodName);
    return createElement('div', {
      classes: [
        'period',
        options['periodColour_' + pd.period] === null ? 'transparent' : undefined
      ],
      styles: {
        '--colour': options['periodColour_' + pd.period] === null ? undefined : '#' + options['periodColour_' + pd.period]
      },
      children: [
        periodName,
        createElement('span', {
          classes: 'time',
          html: formatTime(pd.start) + ' &ndash; ' + formatTime(pd.end)
        }),
        createElement('span', {
          classes: 'duration',
          html: formatDuration(pd.end - pd.start, false) + ' long'
        })
      ]
    });
  })));
}

const timezone = new Date().getTimezoneOffset(); // could try to sync it to PT for everyone, but DST :(
function timeLeft(schedule, offset = 0) {
  const now = Date.now() + offset;
  const toNextMinute = 60000 - now % 60000;
  const minutes = Math.floor((now / 60000 - timezone) % 1440);
  const period = schedule.find(pd => pd.end > minutes);
  const status = { secondCounter: null, nextMinute: toNextMinute };
  if (period) {
    status.period = period.period;
    if (period.start > minutes) {
      status.type = 'until';
      status.value = period.start - minutes;
    } else {
      status.type = 'left in';
      status.value = period.end - minutes;
      status.progress = (minutes - period.start) / (period.end - period.start);
    }
    if (status.value < 1) {
      status.secondCounter = () => {
        const now = Date.now();
        return {
          secondsLeft: 60 - now / 1000 % 60,
          stop: Math.floor((now / 60000 - timezone) % 1440) > period
        };
      };
    }
  } else {
    const lastPeriod = schedule[schedule.length - 1];
    status.period = lastPeriod.period;
    status.type = 'since';
    status.value = minutes - lastPeriod.end;
  }
  return status;
}
function getPeriodChipHTML(period) {
  const colour = options['periodColour_' + period];
  let str = '<span class="period-chip';
  if (colour === null) str += ' transparent';
  str += '"';
  if (colour !== null) str += ` style="--colour: #${colour};"`;
  str += `>${options['periodName_' + period]}</span>`;
  return str;
}

let previewTime, previewMsg, progressBar;
function updateStatus(startInterval = false) {
  const status = timeLeft(tempSchedule);
  previewTime.textContent = formatDuration(status.value, true);
  previewMsg.innerHTML = status.type + ' ' + getPeriodChipHTML(status.period);
  if (status.type === 'left in') {
    progressBar.style.opacity = 1;
    progressBar.style.setProperty('--progress', status.progress * 100 + '%');
  } else {
    progressBar.style.opacity = 0;
  }
  if (startInterval) setTimeout(updateStatus, status.nextMinute);
}

ready.push(() => {
  scheduleWrapper = document.getElementById('periods');
  Object.keys(defaultNames).forEach(pd => {
    if (options['periodName_' + pd] === undefined)
      options['periodName_' + pd] = defaultNames[pd];
  });
  Object.keys(defaultColours).forEach(pd => {
    if (options['periodColour_' + pd] === undefined)
      options['periodColour_' + pd] = defaultColours[pd];
  });
  previewTime = document.getElementById('preview-time');
  previewMsg = document.getElementById('preview-msg');
  progressBar = document.getElementById('progress');
  updateStatus(true);
});
