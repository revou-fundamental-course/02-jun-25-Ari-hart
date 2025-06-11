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
      const gender = document.getElementById("gender").value;
      const pesan = document.getElementById("pesan").value.trim();

      if (!nama || !tanggal || !gender || !pesan) {
        alert("Harap lengkapi semua data!");
        return false;
      }

      const waktu = new Date().toLocaleString();
      const output = `
        <strong>Waktu Submit:</strong> ${waktu}<br>
        <strong>Nama:</strong> ${nama}<br>
        <strong>Tanggal Lahir:</strong> ${tanggal}<br>
        <strong>Jenis Kelamin:</strong> ${gender}<br>
        <strong>Pesan:</strong> ${pesan}
      `;
      document.getElementById("outputData").innerHTML = output;
      document.getElementById("currentTime").textContent = waktu;
      return true;
    }

    function selectGender(value) {
      document.getElementById("gender").value = value;
      document.getElementById("btn-laki").classList.remove("active");
      document.getElementById("btn-perempuan").classList.remove("active");
      if (value === "Laki-laki") {
        document.getElementById("btn-laki").classList.add("active");
      } else {
        document.getElementById("btn-perempuan").classList.add("active");
      }
    }

    function startSlideshow() {
      const images = document.querySelectorAll(".banner img");
      let index = 0;
      setInterval(() => {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
      }, 3000);
    }
