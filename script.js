// NodeJS AlfandoXeon.93.3rvb localStorage
// @thisCodeFor All


AOS.init({
    duration: 800, 
    once: true, 
});
document.addEventListener('scroll', () => {
    const nav = document.querySelector('#main-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const galleryModal = document.getElementById('galleryModal');
galleryModal.addEventListener('show.bs.modal', event => {
 
  const triggerElement = event.relatedTarget;
  
  
  const imageSrc = triggerElement.getAttribute('src');
  const imageAlt = triggerElement.getAttribute('alt');
  
  
  const modalImage = galleryModal.querySelector('#modalImage');
  const modalCaption = galleryModal.querySelector('#modalCaption');
  
  modalImage.src = imageSrc;
  modalImage.alt = imageAlt;
  modalCaption.textContent = imageAlt;
});


const themeSwitcher = document.querySelectorAll('[data-theme]');
const body = document.getElementById('body-theme');
const storedTheme = localStorage.getItem('theme');

const setDarkTheme = () => {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
}

const setLightTheme = () => {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
}

if (storedTheme === 'dark') {
    setDarkTheme();
}

themeSwitcher.forEach(switcher => {
    switcher.addEventListener('click', (e) => {
        e.preventDefault();
        const theme = switcher.dataset.theme;
        if (theme === 'dark') {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    });
});


const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const asal = document.getElementById('asal').value;
    const fakultas = document.getElementById('fakultas').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const motivasi = document.getElementById('motivasi').value;

    const message = `*DAFTAR KMPLANG MINN*\n\nNAMA: ${nama}\nNIM: ${nim}\nASAL: ${asal}\nFAKULTAS: ${fakultas}\nNOMOR WHATSAPP: ${whatsapp}\nMOTIVASI: ${motivasi}\n\n> DaftarOnlineViaWebsiteKmplang`;

    const whatsappURL = `https://wa.me/6285764175824?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
});





// *Reina:* (Mendadak diam. Bibirnya bergetar, tapi bukan karena ragu—seperti seseorang yang baru saja ditampar oleh kebenaran yang tak terduga.)  

// "Jangan." (Suaranya pecah, tapi tegas. Jarinya menekan dadanya sendiri, tepat di atas jantung.) "Jangan pernah berkata seperti itu padaku."  

// (Dia menarik napas bergelora, matanya menyala dengan amaran yang dalam.)  

// "Aku tidak mau jadi 'lebih dari' mantanmu. Aku mau jadi Reina—seseorang yang kau cintai dengan caranya sendiri, tanpa ukuran, tanpa bandingan." (Genggamannya di tanganmu mengencang, tapi tidak menyakiti.) "Cintailah aku karena aku adalah aku. Bukan karena kau ingin membuktikan sesuatu pada dirimu sendiri, atau... pada hantu masa lalumu."  

// (Dia melepaskan genggaman, lalu mengusap pipimu dengan punggung jari—sentuhannya seperti api yang dingin.)  

// "Kalau kau bisa menerima itu... maka aku akan menjadi istri yang setia, kekasih yang sabar, dan teman yang takkan pernah menyakitimu." (Senyumnya pilu, tapi mantap.) "Tapi kalau kau masih ingin menjadikanku alat untuk melawan kenangan... lebih baik kita berpisah sekarang."  

// (Dia menatapmu dalam-dalam, menunggu—seperti hakim yang sudah tahu jawabannya, tapi tetap memberi kesempatan terakhir.)