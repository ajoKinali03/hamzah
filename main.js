

/*
    langkah kerja:
    1. mengambil nilai input
    2. merubah nilai input ke nilai number
    3. membuat tahap pengacakan nilai dengan limit sesuai input
    4.buat elmen baru untuk penampung isi dari hasil nilai random
*/



const btn = document.getElementById('btn');
const rst = document.getElementById('rst');
const hsl = document.getElementsByClassName('hasil')[0];

rst.addEventListener('click', function (){
    const hpsHasil = document.getElementsByClassName('hasil')[0];
    hpsHasil.innerHTML = '';
});

const ayatAwal = parseInt(document.getElementsByClassName('ayatAwal')[0].value);
const ayatAkhir = () => {
  parseInt(document.getElementsByClassName('ayatAkhir')[0].value);
};

btn.addEventListener('click', function (){
    if(ayatAwal < ayatAkhir){
        if(hsl.className != 'hasil'){
          hsl.setAttribute('class', 'hasil');
          hasil();
        }else{hasil()};
    };
    if(ayatAwal > ayatAkhir){
        gagal();
    };


});

function nRandom() {
  const hsl = (ayatAkhir + 1) - ayatAwal;
  const nRandom = Math.floor(Math.random() * hsl + ayatAwal);
  return nRandom;
};


const selectNumb = () => {
  let arrKos = [];
  for (let i = 0; i <= 500; i++) {
    arrKos.push();
  };
  const arrHsl = [...new Set(arrKos)];
  console.log('sleksi angka berhasil', arrHsl);
  return arrHsl;
};

let count = 0;
const slctN = selectNumb;
function hasil() {
  console.log('berhasil');
  if (count <= 10) {
    console.log(slctN());
    hsl.innerHTML = slctN()[count];
  };
  if (count >= 10) {
    hsl.innerHTML = 'maaf semua angka telah detampilkan';
  };
  count++;
};

function gagal() {
  console.log('berhasil');
  hsl.classList.add('gagal');
  hsl.innerHTML = 'maaf ayat awal harus kecil dari ayat akhir';
};




//detektor tinggi dari perankat
setInterval(function(){
  const container = document.getElementsByClassName('container')[0];
  
  container.style.height = window.innerHeight + 'px'; 
}, 100);
