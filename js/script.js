function hitung() {
    const beratBadanElement = document.getElementById('berat-badan');
    const tinggiBadanElement = document.getElementById('tinggi-badan');
    const usiaElement = document.getElementById('usia');
    const jenisKelaminElement = document.querySelector('input[name="jenis-kelamin"]:checked');

    if (!beratBadanElement || !tinggiBadanElement || !usiaElement || !jenisKelaminElement) {
        alert('Pastikan semua data terisi dengan benar!');
        return;
    }

    const beratBadan = parseFloat(beratBadanElement.value);
    const tinggiBadan = parseFloat(tinggiBadanElement.value);
    const usia = parseInt(usiaElement.value);

    if (isNaN(beratBadan) || isNaN(tinggiBadan) || isNaN(usia)) {
        alert('Pastikan semua input memiliki nilai valid.');
        return;
    }

    const tinggiBadanMeter = tinggiBadan / 100;
    const bmi = beratBadan / (tinggiBadanMeter * tinggiBadanMeter);

    // Update hasil BMI di halaman
    const hasilBMI = document.getElementById('hasilBMI');
    if (hasilBMI) {
        hasilBMI.textContent = bmi.toFixed(2);
    }

    // Tentukan kategori berdasarkan BMI
    if (bmi < 18.5) {
        // Kategori: Kekurangan berat badan
        document.getElementById('tampilkan').innerText = "Kekurangan berat badan";
        document.getElementById('tampilkan2').innerText = "Anda kekurangan berat badan";
        document.getElementById('tampilkan3').innerText = "Hasil BMI kurang dari 18.5";
        document.getElementById('tampilkan4').innerHTML = 
            "Anda berada dalam kategori underweight atau kekurangan berat badan. <br>" +
            "Untuk meningkatkan berat badan, Anda disarankan mengonsumsi makanan bergizi tinggi dan kaya kalori serta melakukan olahraga untuk meningkatkan massa otot. <br>" +
            "Jika BMI Anda berada dalam kategori ini, penting untuk mencapai berat badan ideal demi menjaga kesehatan tubuh.";
    } else if (bmi < 24.9) {
        // Kategori: Normal (Ideal)
        document.getElementById('tampilkan').innerText = "Normal (Ideal)";
        document.getElementById('tampilkan2').innerText = "Anda memiliki berat badan ideal";
        document.getElementById('tampilkan3').innerText = "Hasil BMI antara 18.5 dan 24.9";
        document.getElementById('tampilkan4').innerHTML = 
            "Anda berada dalam kategori normal atau berat badan ideal.<br>" +
            "Untuk mempertahankan berat badan ini, Anda dianjurkan menjaga pola makan seimbang dan aktif bergerak secara rutin.<br>" +
            "Pastikan untuk tetap memantau berat badan agar tidak berpindah ke kategori lain yang berisiko bagi kesehatan.";
    } else if (bmi < 29.9) {
        // Kategori: Kelebihan berat badan
        document.getElementById('tampilkan').innerText = "Kelebihan berat badan";
        document.getElementById('tampilkan2').innerText = "Anda kelebihan berat badan";
        document.getElementById('tampilkan3').innerText = "Hasil BMI antara 25.0 dan 29.9";
        document.getElementById('tampilkan4').innerHTML = 
            "Anda berada dalam kategori overweight atau kelebihan berat badan.<br>" +
            "Langkah terbaik untuk menurunkan berat badan adalah dengan mengatur pola makan, mengurangi asupan kalori berlebih, dan meningkatkan aktivitas fisik.<br>" +
            "Jika BMI Anda berada di kategori ini, menurunkan berat badan ke kisaran ideal dapat membantu mengurangi risiko penyakit terkait.";
    } else {
        // Kategori: Kegemukan (Obesitas)
        document.getElementById('tampilkan').innerText = "Kegemukan (Obesitas)";
        document.getElementById('tampilkan2').innerText = "Anda memiliki berat badan berlebih";
        document.getElementById('tampilkan3').innerText = "Hasil BMI lebih dari 30.0";
        document.getElementById('tampilkan4').innerHTML = 
            "Anda berada dalam kategori obesitas atau berat badan berlebih secara signifikan.<br>" +
            "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori yang dikonsumsi, menghindari makanan tinggi lemak dan gula, serta melakukan olahraga secara teratur.<br>" +
            "Jika BMI Anda berada dalam kategori ini, menurunkan berat badan ke kategori normal sangat dianjurkan untuk mencegah risiko penyakit serius.";
    }
}


function resetform() {
    document.querySelector('form').reset();
    document.getElementById('hasilBMI').textContent = '0';
    document.getElementById('tampilkan').textContent = 'Berat badan Anda';
    document.getElementById('tampilkan2').textContent = '.....';
    document.getElementById('tampilkan3').textContent = 'Hasil BMI';
    document.getElementById('tampilkan4').textContent = '';
}
