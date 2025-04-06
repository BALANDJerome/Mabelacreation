// header
const headerContent = `<img src="./assets/img/Logo.png" alt="logo mabela création">`;
document.getElementById("Header").innerHTML = headerContent;

// nav
const navContent = `<span id="nav_btn">&#9777;</span>
    <a href="./index.html">Accueil</a>
    <a href="./pages1.html">Chambre</a>
    <a href="./pages2.html">Repas</a>
    <a href="./pages3.html">Salle de bain</a>
    <a href="./pages4.html">Balade</a>
    <!-- <a href="./pages5.html">Tissus</a> -->
    <a href="#Footer">Contact</a>`;
document.getElementById("Nav").innerHTML = navContent;

// footer
const footerContent = `<a id="mail" href="mailto:mabela.creation@gmail.com"><img src="./assets/img/e-mail.png" alt=""></a>
    <a id="facebook" href="https://www.facebook.com/profile.php?id=100083106081442" target="_blank"><img
        src="./assets/img/facebook.png" alt="logo facebook"></a>
    <a id="instagram" href="https://www.instagram.com/mabelacreation/profilecard/?igsh=bngzbm1wM205bjNx"
      target="_blank"><img src="./assets/img/instagram.png" alt="logo instagram"></a>
    <a id="whatsapp" href="https://wa.me/+33659152401" target="_blank"><img src="./assets/img/whatsapp.png"
        alt="logo whatsapp"></a>`;
document.getElementById("Footer").innerHTML = footerContent;
