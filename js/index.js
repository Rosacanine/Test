document.addEventListener('DOMContentLoaded', function () {

    // ─── 1. GOOGLE ANALYTICS DYNAMIQUE ───
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-91H8NZ161R';
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-91H8NZ161R');

    // ─── 2. SMOOTH SCROLL (Navigation) ───
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

    // ─── 3. BIO TOGGLE (Déplier/Replier) ───
    var bioToggle = document.getElementById('bio-toggle');
    var bioSuite = document.getElementById('bio-suite');

    if (bioToggle && bioSuite) {
        bioToggle.addEventListener('click', function () {
            var isVisible = bioSuite.classList.toggle('visible');
            bioToggle.classList.toggle('active', isVisible);
        });
    }

    // ─── 4. FAÇADE YOUTUBE ───
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

    // ─── 5. GALERIE PHOTOS ───
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
                    var headerH = document.getElementById('header') ? document.getElementById('header').offsetHeight : 0;
                    window.scrollTo({
                        top: photoMainEl.offsetTop - headerH - 20,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ─── 6. CHARGEMENT ET RENDU DES CONCERTS (Repo Distant) ───
    function afficherConcerts(elementId, listeConcerts) {
        var container = document.getElementById(elementId);
        if (!container || !Array.isArray(listeConcerts)) return;

        container.innerHTML = ''; // Vide le conteneur avant injection

        listeConcerts.forEach(function (c) {
            var concertDiv = document.createElement('div');
            concertDiv.className = 'concert';

            // Supporte majuscules ou minuscules dans les données distant (date/Date, lieu/Lieu, etc.)
            var dateVal = c.date || c.Date || '';
            var lieuVal = c.lieu || c.Lieu || '';
            var villeVal = c.ville || c.Ville || '';

            concertDiv.innerHTML =
                '<time>' + dateVal + '</time>' +
                '<span class="sep">/</span>' +
                '<span class="lieu">' + lieuVal + '</span>' +
                '<span class="sep">/</span>' +
                '<span class="ville">' + villeVal + '</span>';

            container.appendChild(concertDiv);
        });
    }

    // Récupération souple des variables distantes
    var avenir = (typeof concerts_avenir !== 'undefined') ? concerts_avenir : ((typeof concertsAvenir !== 'undefined') ? concertsAvenir : []);
    var passes = (typeof concerts_passes !== 'undefined') ? concerts_passes : ((typeof concertsPasses !== 'undefined') ? concertsPasses : []);

    afficherConcerts('concerts-avenir', avenir);
    afficherConcerts('concerts-passes', passes);

    // ─── 7. CONCERTS PASSÉS TOGGLE ───
    var concertsToggle = document.getElementById('concerts-toggle');
    var concertsPassesDiv = document.getElementById('concerts-passes');
    var titrePassesDiv = document.getElementById('titre-passes');

    if (concertsToggle && concertsPassesDiv) {
        concertsToggle.addEventListener('click', function () {
            var estVisible = concertsPassesDiv.style.display === 'block';

            if (estVisible) {
                concertsPassesDiv.style.display = 'none';
                if (titrePassesDiv) {
                    titrePassesDiv.style.display = 'none';
                }
                concertsToggle.classList.remove('active');
            } else {
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

    // ─── 8. LECTEUR AUDIO ───
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

                trackItems.forEach(function (el) {
                    el.classList.remove('active');
                });
                item.classList.add('active');
            }
        }

        trackItems.forEach(function (item, idx) {
            item.addEventListener('click', function () {
                jouerChanson(idx);
            });
        });

        playerAudio.addEventListener('ended', function () {
            var nextIndex = currentTrackIndex + 1;
            if (nextIndex < trackItems.length) {
                jouerChanson(nextIndex);
            }
        });
    }

});
