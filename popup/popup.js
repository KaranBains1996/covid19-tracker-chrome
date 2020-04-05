const confirmedCtn = document.querySelector('.confirmed');
const activeCtn = document.querySelector('.active');
const recoveredCtn = document.querySelector('.recovered');
const deceasedCtn = document.querySelector('.deceased');
const lastUpdatedSpan = document.querySelector('.lu-value');

async function init() {
  const response = await fetch('https://api.covid19india.org/data.json');
  const body = await response.json();

  const confirmedDelta = body.statewise[0].deltaconfirmed;
  const recoveredDelta = body.statewise[0].deltarecovered;
  const deceasedDelta = body.statewise[0].deltadeaths;

  const confirmedCount = body.statewise[0].confirmed;
  const activeCount = body.statewise[0].active;
  const recoveredCount = body.statewise[0].recovered;
  const deceasedCount = body.statewise[0].deaths;

  const lastUpdatedTime = body.statewise[0].lastupdatedtime;

  updateDeltas(confirmedDelta, recoveredDelta, deceasedDelta);
  updateValues(confirmedCount, activeCount, recoveredCount, deceasedCount);
  updateLastUpdatedTime(lastUpdatedTime);
}

function updateDeltas(confirmedDelta, recoveredDelta, deceasedDelta) {
  confirmedCtn.querySelector('.data-change').innerHTML = `[+${confirmedDelta}]`;
  recoveredCtn.querySelector('.data-change').innerHTML = `[+${recoveredDelta}]`;
  deceasedCtn.querySelector('.data-change').innerHTML = `[+${deceasedDelta}]`;
}

function updateValues(confirmedCount, activeCount, recoveredCount, deceasedCount) {
  confirmedCtn.querySelector('.data-value').innerHTML = confirmedCount;
  activeCtn.querySelector('.data-value').innerHTML = activeCount;
  recoveredCtn.querySelector('.data-value').innerHTML = recoveredCount;
  deceasedCtn.querySelector('.data-value').innerHTML = deceasedCount;
}

function updateLastUpdatedTime(time) {
  lastUpdatedSpan.innerHTML = time;
}

window.onload = init;