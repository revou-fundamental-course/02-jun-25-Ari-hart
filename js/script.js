function validateMessageForm() {
        let valid = true;

        const name = document.getElementById("name").value.trim();
        const birthdate = document.getElementById("birthdate").value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');
        const messageText = document.getElementById("messageText").value.trim();

        const nameError = document.getElementById("nameError");
        const birthdateError = document.getElementById("birthdateError");
        const genderError = document.getElementById("genderError");
        const messageTextError = document.getElementById("messageTextError");

        nameError.textContent = "";
        birthdateError.textContent = "";
        genderError.textContent = "";
        messageTextError.textContent = "";

        if (name === "") {
            nameError.textContent = "Nama wajib diisi.";
            valid = false;
        }

        if (birthdate === "") {
            birthdateError.textContent = "Tanggal lahir wajib diisi.";
            valid = false;
        }

        if (!gender) {
            genderError.textContent = "Silakan pilih jenis kelamin.";
            valid = false;
        }

        if (messageText.length < 10) {
            messageTextError.textContent = "Pesan minimal 10 karakter.";
            valid = false;
        }

        return valid;
    }