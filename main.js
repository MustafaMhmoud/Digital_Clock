







setInterval(() =>{ // دي اللى هتخليه يعمل ريفرش على طول 
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');
  let ampm = document.getElementById('ampm');

  let hh = document.getElementById('hh');
  let mm = document.getElementById('mm');
  let ss = document.getElementById('ss');

  let hr_dot = document.querySelector('.hr_dot');
  let min_dot = document.querySelector('.min_dot');
  let sec_dot = document.querySelector('.sec_dot');

let h = new Date().getHours() + 1;
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = h > 12 ? "PM" : "AM";

// convert 24hr clock to 12hr clock
if (h > 12) {
  h = h -12;
}
// add zero before single digit Number
h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

hours.innerHTML = h + "<br><span>hours</span>";
minutes.innerHTML = m + "<br><span>minutes</span>";
seconds.innerHTML = s + "<br><span>seconds</span>";
ampm.innerHTML = am;

//12 hrs clock
  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  // 60 minutes
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  // 60 seconds
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  // 360 / 12 = 30
  hr_dot.style.transform = `rotate(${h * 30}deg)`;
  // 360 / 60 = 6 
  min_dot.style.transform = `rotate(${m * 6}deg)`;
  // 360 / 60 = 6
  sec_dot.style.transform = `rotate(${s* 6}deg)`;
})
