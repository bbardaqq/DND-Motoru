// Hesaplama formunu gösterir
function showCalculation(option) {
    document.getElementById('options').style.display = 'none';
    if (option === 'A') {
        document.getElementById('calculationA').classList.remove('hidden');
    } else if (option === 'B') {
        document.getElementById('calculationB').classList.remove('hidden');
    }
}

// A Seçeneği hesaplaması: Vuruş İhtimalini Hesaplar
function calculateA() {
    const num1 = parseFloat(document.getElementById('aNum1').value);
    const num2 = parseFloat(document.getElementById('aNum2').value);
    const num3 = parseFloat(document.getElementById('aNum3').value);
    const result = (num1 - num2) + num3; // Hesaplama
    document.getElementById('resultA').textContent = isNaN(result) ? 'Geçersiz giriş!' : result;
}

// B Seçeneği hesaplaması: Bir sayının karesini alır
function calculateB() {
    const num = parseFloat(document.getElementById('bNum').value);
    const result = num * num; // Karesini alma işlemi
    document.getElementById('resultB').textContent = isNaN(result) ? 'Geçersiz giriş!' : result;
}

// Ana menüye dönüş
function reset() {
    document.getElementById('options').style.display = 'block';
    document.getElementById('calculationA').classList.add('hidden');
    document.getElementById('calculationB').classList.add('hidden');
    document.getElementById('resultA').textContent = '0';
    document.getElementById('resultB').textContent = '0';
}
