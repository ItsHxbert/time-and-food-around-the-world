const timeZone = "Asia/Shanghai"; //TU SOBIE HUBERT WPISZ JAKĄ STREFĘ CZASOWĄ CHCESZ :))

function updateClock() {
  const now = new Date();
  const options = {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const formatter = new Intl.DateTimeFormat("pl-PL", options);
  document.getElementById("clockchina").textContent = formatter.format(now);
}

setInterval(updateClock, 1000);
updateClock();
