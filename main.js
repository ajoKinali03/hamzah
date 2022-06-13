

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


let biner = 0;
rst.addEventListener('click', function (){
  biner++;
  const ayatAwal = parseInt(document.getElementsByClassName('ayatAwal')[0].value);
  const ayatAkhir = parseInt(document.getElementsByClassName('ayatAkhir')[0].value);

  if(biner == 1){
    rst.innerText = 'reset';
    rst.setAttribute('type', 'reset');


    let count = 0;
    const slctN = selectNumb();
    btn.addEventListener('click', function (){
      if(ayatAwal < ayatAkhir){
        const limit = (ayatAkhir+1) - ayatAwal;
        if (count <= limit) {
          hsl.setAttribute('class', 'hasil');
          hsl.innerText = slctN[count];
        };
        if (count >= limit) {
          hsl.setAttribute('class', 'gagal');
          hsl.innerText = 'maaf semua angka telah ditampilkan';
        };
        count++;

      }else{
        hsl.setAttribute('class', 'gagal');
        hsl.innerText = 'maaf input yang anda masukan tidak sesuai';
      };
    });

    function nRandom() {
      const hsl = (ayatAkhir + 1) - ayatAwal;
      const nRandom = Math.floor(Math.random() * hsl + ayatAwal);
      return nRandom;
    };

    function selectNumb(){
      let arrKos = [];
      for (let i = 0; i <= 500; i++) {
        arrKos.push(nRandom());
      };
      const arrHsl = [...new Set(arrKos)];
      return arrHsl;
    };
  };

  if(biner == 2){
    rst.innerText = 'start';
    rst.setAttribute('type', 'button');

    const hpsHasil = document.getElementById('hpsTampil');
    hpsHasil.innerHTML = '';
  };
  if(biner >= 2){
    biner *= 0;
  };  
});




//detektor tinggi dari perankat
setInterval(function(){
  const container = document.getElementsByClassName('container')[0];
  
  container.style.height = window.innerHeight + 'px'; 
}, 100);
