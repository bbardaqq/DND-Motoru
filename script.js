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
    const num4 = ((num1 - num2) + num3); // Yuzdelik Hesaplama - Ornegin sonuc 65 ise 0,65 olarak hesaplar. 100 olursa 1 olur ve vurus kesinlesir.
    const minOran = 5; // %5
    const maxOran = 95; // %95
    const num5 = Math.max(minOran, Math.min(maxOran, num4)) / 100; // Oranı sınırlıyoruz. %5 ile %95 arasında olacak. Kesin vuruş veya kesin kaçırma olmayacak.

    const rastgelesayi = Math.random(); // Rastgele sayi cekme - bunu yuzdelikle karsilastirarak vurus yapilip yapilmayacagini belirleyecegiz.
     
    // document.getElementById("resultC").textContent = num5;
    if (rastgelesayi < num5) {
        
        document.getElementById("resultA").innerText = "Vurus Basarili";
        logMessage("Vurus Basarili! Oran: %" + (num5 * 100).toFixed(1));
        } else {
        document.getElementById("resultA").innerText = "Vurus Basarisiz";
        logMessage("Vurus Basarisiz. Oran: %" + (num5 * 100).toFixed(1));
        }
    //document.getElementById('resultA').textContent = result;
}


// B Seçeneği hesaplaması: Hasarı Hesaplar
function calculateB() {
    const num1 = parseFloat(document.getElementById('bNum1').value); //aralik1 
    const num2 = parseFloat(document.getElementById('bNum2').value); //aralik2 
    const num3 = parseFloat(document.getElementById('bNum3').value); //ek hasar yuzdelik olarak girilecek (%50 ise direkt 50 yazılacak, 100 ise 100 yazılacak)
    const num4 = parseFloat(document.getElementById('bNum4').value); //base skill puanı tam haliyle girilecek (skill puanı 10 ise 10 yazılacak, 15 ise 15 yazılacak)

    const lower = Math.min(num1, num2); // Aralıkların en küçüğü
    const upper = Math.max(num1, num2); // Aralıkların en büyüğü


    const num5 = Math.floor(Math.random() * ((upper - lower) + 1)) + lower; // Vurus araligindan rastgele sayi ceker. Ornegin 10-15 ise 10-15 arasindan bir sayi ceker.
    const num6 = 1+ (num3/100); // Yuzdelik hasar hesabi. Ornegin 50 ise 1.5 olarak hesaplar. 100 ise 2 olarak hesaplar.
    const num7 = 1+ ((num4 - 10)/10); // Base skill puanından 10 eksilt ve yuzdelik olarak ekle. Ornegin 15 ise 50% ekstra hasar verir. Yani 1.5 olarak hesaplar. 10 ise 1 olarak hesaplar.
    const result = num5*num6*num7; // Hesaplama
    document.getElementById('resultB').textContent = result;
    logMessage("Hasar Hesaplandı: " + result.toFixed(2));
}

// Ana menüye dönüş
function reset() {
    document.getElementById('options').style.display = 'block';
    document.getElementById('calculationA').classList.add('hidden');
    document.getElementById('calculationB').classList.add('hidden');
    document.getElementById('resultA').textContent = '0';
    document.getElementById('resultB').textContent = '0';
}

let logCount = 0;
let logHidden = false;

function logMessage(msg) {
    const logList = document.getElementById("logList");
    const li = document.createElement("li");
    const time = new Date().toLocaleTimeString();
    li.textContent = `[${time}] ${msg}`;

    if (msg.includes("Basarili")) {
        li.classList.add("log-success");
    } else if (msg.includes("Basarisiz")) {
        li.classList.add("log-fail");
    }

    logList.prepend(li);
    logCount++;

    // Otomatik temizleme
    if (logCount > 50) {
        clearLog();
        logMessage("⛔ Otomatik temizlendi (50 kayıt sınırı)");
    }
}

function clearLog() {
    const logList = document.getElementById("logList");
    logList.innerHTML = "";
    logCount = 0;
}

function toggleLog() {
    const logList = document.getElementById("logList");
    logHidden = !logHidden;
    logList.style.display = logHidden ? "none" : "block";
}