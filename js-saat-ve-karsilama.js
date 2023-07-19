function login() {
    const name = document.getElementById("name").value;
    if (name.trim() !== "") {
      const loginScreen = document.getElementById("loginScreen");
      const encounterScreen = document.getElementById("encounterScreen");
      const message = document.getElementById("message");
      const clockAndDay = document.getElementById("clockAndDay");
  
      loginScreen.style.display = "none";
      encounterScreen.style.display = "block";
  
      message.textContent = `Merhaba, ${name}!  Hoşgeldiniz.Başarilar `;
      setInterval(showClockAndDay, 1000);
    }
  }
  
  function showClockAndDay() {
    const date = new Date();
    const clock = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const second = date.getSeconds().toString().padStart(2, "0");
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const day = days[date.getDay()];
  
    const clockAndDay = `${clock}:${minute}:${second} - ${day}`;
    document.getElementById("clockAndDay").textContent = clockAndDay;
  }
  