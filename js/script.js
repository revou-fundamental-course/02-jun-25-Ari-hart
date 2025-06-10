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
