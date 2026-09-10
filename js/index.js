document.addEventListener('DOMContentLoaded', function () {

    // --- Charge Google Analytics dynamiquement ---
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-91H8NZ161R';
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-91H8NZ161R');
    
    // ─── SMOOTH SCROLL (uniquement pour la nav) ───
    var navLinks = document.querySelectorAll('.topnav a, .footer-nav a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');

            if (targetId === '#') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var header = document.getElementById('header');
                var headerHeight = header ? header.offsetHeight : 0;
                var targetPosition = target.offsetTop - headerHeight - 10;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ─── BIO TOGGLE ───
    var bioToggle = document.getElementById('bio-toggle');
    var bioSuite = document.getElementById('bio-suite');

    if (bioToggle && bioSuite) {
        bioToggle.addEventListener('click', function () {
        var isVisible = bioSuite.classList.toggle('visible');
        bioToggle.classList.toggle('active', isVisible);
    });
}

    // ─── FAÇADE YOUTUBE ───
    var mainFacade = document.querySelector('.youtube-facade');
    if (mainFacade) {
        mainFacade.addEventListener('click', function () {
            var videoId = this.getAttribute('data-id');
            if (videoId && !this.querySelector('iframe')) {
                this.innerHTML = '<iframe src="https://www.youtube.com/embed/' + videoId +
                    '?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
            }
        });
    }

    // ─── GALERIE PHOTOS (miniatures → grande photo) ───
    var photoThumbLinks = document.querySelectorAll('.photo-thumb-link');
    var photoPrincipale = document.getElementById('photo-principale');

    photoThumbLinks.forEach(function (thumb) {
        thumb.addEventListener('click', function (e) {
            e.preventDefault();

            var fullSrc = this.getAttribute('data-full');

            if (photoPrincipale && fullSrc) {
                photoPrincipale.src = fullSrc;
                photoPrincipale.alt = this.querySelector('img').alt || 'Rosacanine';

                photoThumbLinks.forEach(function (t) {
                    t.classList.remove('active');
                });
                this.classList.add('active');

                var photoMainEl = document.querySelector('.photo-main');
                if (photoMainEl) {
                    var headerH = document.getElementById('header').offsetHeight;
                    window.scrollTo({
                        top: photoMainEl.offsetTop - headerH - 20,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    // ─── CONCERTS (remplir les données) ───
    if (typeof remplirConcerts === 'function') {
        remplirConcerts('concerts-avenir', concertsAvenir);
        remplirConcerts('concerts-passes', concertsPasses);
    }

    // ─── CONCERTS PASSÉS TOGGLE ───
var concertsToggle = document.getElementById('concerts-toggle');
var concertsPassesDiv = document.getElementById('concerts-passes');
var titrePassesDiv = document.getElementById('titre-passes');

if (concertsToggle && concertsPassesDiv) {
    concertsToggle.addEventListener('click', function () {
        var estVisible = concertsPassesDiv.style.display === 'block';

        if (estVisible) {
            // Masquer la section
            concertsPassesDiv.style.display = 'none';
            if (titrePassesDiv) {
                titrePassesDiv.style.display = 'none';
            }
            concertsToggle.classList.remove('active');
        } else {
            // Afficher la section
            concertsPassesDiv.style.display = 'block';
            if (titrePassesDiv) {
                titrePassesDiv.textContent = '';
                titrePassesDiv.style.borderBottom = '1px solid #FF008C';
                titrePassesDiv.style.margin = '20px 0';
                titrePassesDiv.style.display = 'block';
            }
            concertsToggle.classList.add('active');
        }
    });
}

    // ─── LECTEUR AUDIO ───
    var playerAudio = document.querySelector('.player audio');
    var trackItems = document.querySelectorAll('.player .tracklist li');

    if (playerAudio && trackItems.length > 0) {
        var currentTrackIndex = 0;

        function jouerChanson(index) {
            if (index < 0 || index >= trackItems.length) return;

            currentTrackIndex = index;
            var item = trackItems[index];
            var audioSrc = item.getAttribute('data-src');

            if (audioSrc) {
                playerAudio.src = audioSrc;
                playerAudio.play();

                // Gestion de la classe CSS active
                trackItems.forEach(function (el) {
                    el.classList.remove('active');
                });
                item.classList.add('active');
            }
        }

        // Clic sur un morceau de la tracklist
        trackItems.forEach(function (item, idx) {
            item.addEventListener('click', function () {
                jouerChanson(idx);
            });
        });

        // Passage automatique au morceau suivant à la fin
        playerAudio.addEventListener('ended', function () {
            var nextIndex = currentTrackIndex + 1;
            if (nextIndex < trackItems.length) {
                jouerChanson(nextIndex);
            }
        });
    }

});