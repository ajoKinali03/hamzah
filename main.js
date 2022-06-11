

/*
    langkah kerja:
    1. mengambil nilai input
    2. merubah nilai input ke nilai number
    3. membuat tahap pengacakan nilai dengan limit sesuai input
    4.buat elmen baru untuk penampung isi dari hasil nilai random
*/



const btn = document.getElementById('btn');
const rst = document.getElementById('rst');

rst.addEventListener('click', function (){
    const hpsHasil = document.getElementsByClassName('hasil')[0];
    hpsHasil.innerHTML = '';
});


btn.addEventListener('click', function (){

     //mengambil nilai input ayat pertama
    let ayatAwal = parseInt(document.getElementsByClassName('ayatAwal')[0].value);

    let ayatAkhir = parseInt(document.getElementsByClassName('ayatAkhir')[0].value);
    
    const nRandom = () => {
      const hsl = (ayatAkhir +  1) - ayatAwal;
        const nRandom = Math.floor(Math.random() * hsl + ayatAwal);
        return nRandom;
    };
  
    const hsl = document.getElementsByClassName('hasil')[0];
    const hasil = () => {
        hsl.innerHTML = nRandom();
    };

    const gagal = () => {
      hsl.classList.add('gagal');
      hsl.innerHTML = 'maaf ayat awal harus kecil dari ayat akhir';
    };
    
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



//detektor tinggi dari perankat
setInterval(function(){
  const container = document.getElementsByClassName('container')[0];
  
  container.style.height = window.innerHeight + 'px'; 
}, 100);
