// prints the time every second
setInterval(() => {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}, 1000);
