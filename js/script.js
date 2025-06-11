    function displayGreeting() {
      const name = document.getElementById("nameInput").value;
      document.getElementById("greeting").textContent = "Hi " + name;
    }

    function updateTime() {
      const now = new Date();
      document.getElementById("currentTime").textContent = now.toLocaleString();
    }

    function validateForm(event) {
      event.preventDefault();
      const nama = document.getElementById("nama").value.trim();
      const tanggal = document.getElementById("tanggal").value;
      const gender = document.querySelector('input[name="gender"]:checked');
      const pesan = document.getElementById("pesan").value.trim();

      if (!nama || !tanggal || !gender || !pesan) {
        alert("Harap lengkapi semua data!");
        return false;
      }

      const output = `Nama: ${nama}<br>Tanggal Lahir: ${tanggal}<br>Jenis Kelamin: ${gender.value}<br>Pesan: ${pesan}`;
      document.getElementById("outputData").innerHTML = output;
      updateTime();
      return true;
    }
