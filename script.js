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
    const num1 = parseFloat(document.getElementById('bNum1').value); //aralik1 buyuk olan
    const num2 = parseFloat(document.getElementById('bNum2').value); //aralik2 kucuk olan
    const num3 = parseFloat(document.getElementById('bNum3').value); //ek hasar yuzdelik olarak girilecek
    const num4 = parseFloat(document.getElementById('bNum4').value); //base skill puanı tam haliyle girilecek

    const num5 = Math.floor(Math.random() * ((num1 - num2) + 1)) + num2; // Vurus araligindan rastgele sayi ceker. Ornegin 10-15 ise 10-15 arasindan bir sayi ceker.
    const num6 = 1+ (num3/100); // Yuzdelik hasar hesabi
    const num7 = 1+ ((num4 - 10)/100); // Base skill puanından 10 eksilt ve yuzdelik olarak ekle. Ornegin 15 ise 5% ekstra hasar verir.
    const result = num5*num6*num7; // Hesaplama
    document.getElementById('resultB').textContent = result;
}

// Ana menüye dönüş
function reset() {
    document.getElementById('options').style.display = 'block';
    document.getElementById('calculationA').classList.add('hidden');
    document.getElementById('calculationB').classList.add('hidden');
    document.getElementById('resultA').textContent = '0';
    document.getElementById('resultB').textContent = '0';
}
