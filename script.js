function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let day = today.toDateString();
    let session = "AM";
    m = checkTime(m);
    s = checkTime(s);
    if(h > 12){
        h-=12;
        session="PM";
    }
    document.getElementById('digiclock').innerHTML =  h + ":" + m + ":" + s;
    document.getElementById('digidate').innerHTML = day +" "+ session;
    setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }