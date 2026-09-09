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
            bioToggle.textContent = isVisible ? '-' : '+';
        });
    }

    // ─── FAÇADE YOUTUBE ───
    function initFacade(facade) {
        facade.addEventListener('click', function handler() {
            var videoId = this.dataset.id;
            if (videoId) {
                this.innerHTML = '<iframe src="https://www.youtube.com/embed/' + videoId +
                    '?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
                this.removeEventListener('click', handler);
            }
        });
    }

    document.querySelectorAll('.youtube-facade').forEach(initFacade);

    // ─── MINIATURES VIDÉOS ───
    var playBtnSvg =
        '<svg class="play-btn" viewBox="0 0 68 48">' +
        '<path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,0,34,0,34,0S12.21,0,6.9,1.55' +
        'C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,' +
        '2.49,5.41,5.42,6.19C12.21,48,34,48,34,48s21.79,0,27.1-1.55c2.93-0.78,4.64-3.26,5.42' +
        '-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#FF008C"/>' +
        '<path d="M 45,24 27,14 27,34" fill="#fff"/></svg>';

    var videoMain = document.querySelector('.video-main');

    document.querySelectorAll('.thumb-link').forEach(function (thumb) {
        thumb.onclick = function (e) {
            e.preventDefault();

            var videoId = this.getAttribute('data-id');
            var mainFacade = document.querySelector('.video-main .youtube-facade');

            if (mainFacade && videoId) {
                mainFacade.setAttribute('data-id', videoId);
                mainFacade.innerHTML =
                    '<img src="https://i.ytimg.com/vi/' + videoId + '/hqdefault.jpg" ' +
                    'alt="Cliquez pour lire" width="480" height="360">' +
                    playBtnSvg;

                mainFacade.onclick = function () {
                    this.innerHTML = '<iframe src="https://www.youtube.com/embed/' + this.getAttribute('data-id') +
                        '?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
                    this.onclick = null;
                };

                document.querySelectorAll('.thumb-link').forEach(function (t) {
                    t.classList.remove('active');
                });
                this.classList.add('active');
            }
        };
    });

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

    // ─── CONCERTS PASSÉS TOGGLE (doit être APRÈS remplirConcerts) ───
    var concertsToggle = document.getElementById('concerts-toggle');
    var concertsPassesDiv = document.getElementById('concerts-passes');
    var titrePassesDiv = document.getElementById('titre-passes');

    if (concertsToggle) {
        concertsToggle.addEventListener('click', function () {
            if (concertsPassesDiv.style.display === 'block') {
                concertsPassesDiv.style.display = 'none';
                titrePassesDiv.style.display = 'none';
                concertsToggle.textContent = 'concerts pass\u00e9s';
            } else {
                concertsPassesDiv.style.display = 'block';
                titrePassesDiv.style.display = 'block';
                concertsToggle.textContent = 'Masquer les concerts pass\u00e9s';
            }
        });
    }

});