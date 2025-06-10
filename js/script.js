  function updateTime() {
    const now = new Date();
    document.getElementById("currentTime").innerText = now.toLocaleString();
  }
  setInterval(updateTime, 1000);
  updateTime();

  function validateForm() {
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("message").value;

    if (!name || !dob || !gender || !message) {
      alert("Please fill in all fields.");
      return false;
    }

    const output = `Name: ${name}<br>Date of Birth: ${dob}<br>Gender: ${gender.value}<br>Message: ${message}`;
    document.getElementById("output").innerHTML = output;
    return false;
  }

  function enterWebsite() {
    const userName = document.getElementById("userNameInput").value.trim();
    if (userName) {
      document.getElementById("intro-screen").style.display = "none";
      document.getElementById("main-content").style.display = "block";
      document.getElementById("greeting").innerHTML = `<div class='greeting-name'>Hi, ${userName}</div>`;
    } else {
      alert("Silakan masukkan nama Anda terlebih dahulu.");
    }
  }