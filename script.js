// Ambil elemen progress bar
const progressWord = document.getElementById("progressWord");
const progressPPT = document.getElementById("progressPPT");
const progressExcel = document.getElementById("progressExcel");
const progressCorel = document.getElementById("progressCorel");
const progressCPP = document.getElementById("progressCPP");
const progressJava = document.getElementById("progressJava");
const progressPHP = document.getElementById("progressPHP");
const progressJS = document.getElementById("progressJS");
const progressPython = document.getElementById("progressPython");

// ================= Fungsi global untuk menandai materi selesai =================
function setMateriSelesaiWord(nomorMateri) { localStorage.setItem(`msword_materi${nomorMateri}_selesai`, 'true'); updateAllProgress(); }
function setMateriSelesaiPPT(nomorMateri) { localStorage.setItem(`ppt_materi${nomorMateri}_selesai`, 'true'); updateAllProgress(); }
function setMateriSelesaiExcel(nomorMateri) { localStorage.setItem(`excel_materi${nomorMateri}_selesai`, 'true'); updateAllProgress(); }
function setMateriSelesaiCorel(nomorMateri) { localStorage.setItem(`corel_materi${nomorMateri}_selesai`, 'true'); updateAllProgress(); }
function setMateriSelesaiCPP(nomorMateri) { localStorage.setItem(`cpp_materi${nomorMateri}_selesai`, 'true'); updateAllProgress(); }
function setMateriSelesaiJava(nomorMateri) { localStorage.setItem(`java_materi${nomorMateri}_selesai`, 'true'); updateAllProgress(); }
function setMateriSelesaiPHP(nomorMateri) { localStorage.setItem(`php_materi${nomorMateri}_selesai`, 'true'); updateAllProgress(); }
function setMateriSelesaiJS(nomorMateri) { localStorage.setItem(`js_materi${nomorMateri}_selesai`, 'true'); updateAllProgress(); }
function setMateriSelesaiPython(nomorMateri) { localStorage.setItem(`python_materi${nomorMateri}_selesai`, 'true'); updateAllProgress(); }

// ================= Fungsi menghitung progress semua kelas =================
function updateAllProgress() {
    updateProgressBar("msword", 3, "msword_quiz_selesai", progressWord);
    updateProgressBar("ppt", 3, "ppt_quiz_selesai", progressPPT);
    updateProgressBar("excel", 3, "excel_quiz_selesai", progressExcel);
    updateProgressBar("corel", 3, "corel_quiz_selesai", progressCorel);
    updateProgressBar("cpp", 3, "cpp_quiz_selesai", progressCPP);
    updateProgressBar("java", 3, "java_quiz_selesai", progressJava);
    updateProgressBar("php", 3, "php_quiz_selesai", progressPHP);
    updateProgressBar("js", 3, "js_quiz_selesai", progressJS);
    updateProgressPython();
}

// Fungsi helper update progress bar
function updateProgressBar(prefix, totalMateri, quizKey, progressBarElement) {
    let selesai = 0;
    for (let i = 1; i <= totalMateri; i++) {
        if (localStorage.getItem(`${prefix}_materi${i}_selesai`) === 'true') selesai++;
    }
    if (localStorage.getItem(quizKey) === 'true') selesai++;
    let persen = Math.round((selesai / (totalMateri + 1)) * 100);
    if (progressBarElement) {
        progressBarElement.style.width = persen + "%";
        progressBarElement.innerText = persen + "%";
    }
}

// ================= Progress Python (materi + quiz + sertifikat) =================
function updateProgressPython() {
    let totalMateri = 3; 
    let selesaiCount = 0;

    // Materi
    for (let i=1; i<=totalMateri; i++){
        if(localStorage.getItem(`python_materi${i}_selesai`) === 'true') selesaiCount++;
    }

    // Quiz
    if(localStorage.getItem('python_quiz_selesai') === 'true') selesaiCount++;

    // Sertifikat
    if(localStorage.getItem('python_sertifikat_selesai') === 'true') selesaiCount++;

    let persen = Math.round((selesaiCount / (totalMateri + 2)) * 100); // 3 materi + 1 quiz + 1 sertifikat

    if(progressPython){
        progressPython.style.width = persen + "%";
        progressPython.innerText = persen === 100 ? "Completed" : persen + "%";
    }
}

// ================= Tombol Materi Selanjutnya =================
function checkMateriSelanjutnyaCPP() {
    const semuaMateriSelesai = localStorage.getItem("cpp_materi1_selesai")==='true' && localStorage.getItem("cpp_materi2_selesai")==='true' && localStorage.getItem("cpp_materi3_selesai")==='true';
    const tombolNext = document.getElementById("cppNextButton");
    if(tombolNext) tombolNext.disabled = !semuaMateriSelesai;
}
function checkMateriSelanjutnyaJava() {
    const semuaMateriSelesai = localStorage.getItem("java_materi1_selesai")==='true' && localStorage.getItem("java_materi2_selesai")==='true' && localStorage.getItem("java_materi3_selesai")==='true';
    const tombolNext = document.getElementById("javaNextButton");
    if(tombolNext) tombolNext.disabled = !semuaMateriSelesai;
}
function checkMateriSelanjutnyaPHP() {
    const semuaMateriSelesai = localStorage.getItem("php_materi1_selesai")==='true' && localStorage.getItem("php_materi2_selesai")==='true' && localStorage.getItem("php_materi3_selesai")==='true';
    const tombolNext = document.getElementById("phpNextButton");
    if(tombolNext) tombolNext.disabled = !semuaMateriSelesai;
}
function checkMateriSelanjutnyaJS() {
    const semuaMateriSelesai = localStorage.getItem("js_materi1_selesai")==='true' && localStorage.getItem("js_materi2_selesai")==='true' && localStorage.getItem("js_materi3_selesai")==='true';
    const tombolNext = document.getElementById("jsNextButton");
    if(tombolNext) tombolNext.disabled = !semuaMateriSelesai;
}
function checkMateriSelanjutnyaPython() {
    const semuaMateriSelesai = localStorage.getItem("python_materi1_selesai")==='true' && localStorage.getItem("python_materi2_selesai")==='true' && localStorage.getItem("python_materi3_selesai")==='true';
    const tombolNext = document.getElementById("pythonNextButton");
    if(tombolNext) tombolNext.disabled = !semuaMateriSelesai;
}

// ================= Jalankan saat page load dan storage berubah =================
window.onload = function() {
    updateAllProgress();
    checkMateriSelanjutnyaCPP();
    checkMateriSelanjutnyaJava();
    checkMateriSelanjutnyaPHP();
    checkMateriSelanjutnyaJS();
    checkMateriSelanjutnyaPython();
};

window.addEventListener('storage', function() {
    updateAllProgress();
    checkMateriSelanjutnyaCPP();
    checkMateriSelanjutnyaJava();
    checkMateriSelanjutnyaPHP();
    checkMateriSelanjutnyaJS();
    checkMateriSelanjutnyaPython();
});
