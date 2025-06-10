function fillName() {
    const nameInput = document.getElementById('nameInput').value.trim();
    if(nameInput) {
        document.getElementById('userName').textContent = nameInput;
        alert(`Halo, ${nameInput}! Selamat datang di website kami.`);
    } else {
        alert('Mohon masukkan nama terlebih dahulu.');
    }
}

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const formResult = document.getElementById('formResult');

    if (!name) {
        alert('Nama harus diisi.');
        return false;
    }
    if (!email) {
        alert('Email harus diisi.');
        return false;
    }
    // Simple regex email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Format email tidak valid.');
        return false;
    }
    if (!phone) {
        alert('Nomor telepon harus diisi.');
        return false;
    }
    // Simple phone number validation (numbers only)
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone)) {
        alert('Nomor telepon hanya boleh berisi angka.');
        return false;
    }
    if (!message) {
        alert('Pesan harus diisi.');
        return false;
    }

    // Jika validasi berhasil
    formResult.textContent = `Terima kasih, ${name}. Pesan Anda sudah kami terima!`;
    
    // Bisa tambahkan kode untuk submit data ke server jika diperlukan
    return false;  // prevent form submit reload page
}