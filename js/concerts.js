// ═══════════════════════════════════════════
// ROSACANINE — Concerts
// Format div flex
// ═══════════════════════════════════════════

// ====== CONCERTS À VENIR ======

const concertsAvenir = [
    
  { date: "27 Mars 2026", lieu: "Les Marins d'eau douce", ville: "Ramonville Saint Agne (31)" },
  { date: "16 Avril 2026", lieu: "O Brian's", ville: "Bourges (18)" },
  { date: "17 Avril 2026", lieu: "MurrayField", ville: "Bourges (18)" },
  { date: "17 Avril 2026", lieu: "Festival", ville: "Bourges (18)" },
  { date: "18 Avril 2026", lieu: "O Berry", ville: "Vierzon (18)" },
  { date: "24 Avril 2026", lieu: "L'Engrenage", ville: "Balma (31)" },
  { date: "18 Juin 2026", lieu: "Festival AfterWorks", ville: "Négrepelisse (81)" },
  { date: "20 Juin 2026", lieu: "Festival des Sorcières", ville: "Pouyastruc (65)" },
  { date: "4 Juillet 2026", lieu: "Festival La Salvetat", ville: "La Salvetat Saint-Gilles (31)" },    
  { date: "26 Juillet 2026", lieu: "Riff'n'Rumble", ville: "Gayan (65)" },
  { date: "5 Septembre 2026", lieu: "Festival", ville: "" },
  { date: "11 Septembre 2026", lieu: "La VieDange", ville: "Les Versannes (24)" }
];


// ====== CONCERTS PASSÉS ======

const concertsPasses = [
    
  { date: "14 Mars 2026", lieu: "Tremplin Rue Libre", ville: "La Salvetat-Peyralès (12)" },
  { date: "13 Décembre 2025", lieu: "Ride'n'Rock", ville: "Montans (81)" },
  { date: "29 Novembre 2025", lieu: "Hangar 2.0", ville: "Bressuire (79)" },
  { date: "28 Novembre 2025", lieu: "La Taverne aux Ours", ville: "Parthenay (79)" },
  { date: "27 Novembre 2025", lieu: "Le Bar'ouf", ville: "Cholet (49)" },
  { date: "25 au 26 Novembre 2025", lieu: "Résidence", ville: "Cholet (49)" },
  { date: "15 Novembre 2025", lieu: "La Ruelle", ville: "Ségur-le-Château (19)" },
  { date: "14 Novembre 2025", lieu: "Le Dropkick", ville: "Limoges (87)" },
  { date: "27 au 29 Octobre 2025", lieu: "Résidence", ville: "L'Union (31)" },
  { date: "5 Septembre 2025", lieu: "Finale Tremplin Musical", ville: "La Salvetat Saint-Gilles (31)" },
  { date: "9 Août 2025", lieu: "Festival Kiosq'n'roll", ville: "Mirande (32)" },
  { date: "8 Août 2025", lieu: "L'antre Nous", ville: "Noilhans (32)" },
  { date: "11 Juillet 2025", lieu: "Brasserie de la Halle", ville: "Montauban (82)" },
  { date: "10 Juillet 2025", lieu: "Live Challenge", ville: "Montbrun Lauragais (31)" },
  { date: "28 Juin 2025", lieu: "Tremplin Musical", ville: "La Salvetat Saint-Gilles (31)" },
  { date: "21 Juin 2025", lieu: "Parc du Chateau", ville: "Launaguet (31)" },
  { date: "20 Juin 2025", lieu: "Montblanc Festival", ville: "Montblanc (32)" },
  { date: "19 Avril 2025", lieu: "Le Central", ville: "Bourges (18)" },
  { date: "18 Avril 2025", lieu: "La Folie B", ville: "Issoudun (36)" },
  { date: "18 Avril 2025", lieu: "The Black Swan", ville: "Bourges (18)" },
  { date: "17 Avril 2025", lieu: "Le Murrayfield", ville: "Bourges (18)" },
  { date: "17 Avril 2025", lieu: "Scène Berry", ville: "Bourges (18)" },
  { date: "16 Avril 2025", lieu: "Café Ô Berry", ville: "Vierzon (18)" },
  { date: "16 Avril 2025", lieu: "The Black Swan", ville: "Bourges (18)" },
  { date: "13 Mars 2025", lieu: "Le REX - DEPORTIVO", ville: "Toulouse (31)" },
  { date: "21 Février 2025", lieu: "Le 6MIC - Mouss et Akim (Zebda)", ville: "Aix en Provence (13)" },
  { date: "25 Janvier 2025", lieu: "Salle Yves Montant", ville: "Saint Alban (31)" },
  { date: "18 au 20 Janvier 2025", lieu: "Résidence", ville: "Saint Alban (31)" },
  { date: "29 Novembre 2024", lieu: "Levrette Café", ville: "Nantes (44)" },
  { date: "28 Novembre 2024", lieu: "Les Fleurs du Malt", ville: "Nantes (44)" },
  { date: "25 au 27 Novembre 2024", lieu: "Le Zinor", ville: "Montaigu (85)" },
  { date: "23 Novembre 2024", lieu: "Le Bar des artistes", ville: "La Roche-sur-Yon (85)" },
  { date: "22 Novembre 2024", lieu: "La Minute Blonde", ville: "Fontenay le Compte (85)" },
  { date: "9 Novembre 2024", lieu: "L'Impass", ville: "Aussone (31)" },
  { date: "5 Octobre 2024", lieu: "Le Cercle des Citoyens", ville: "Mont-de-Marsan (40)" },
  { date: "4 Octobre 2024", lieu: "Le Café Suspendu", ville: "Montblanc (32)" },
  { date: "28 Septembre 2024", lieu: "La Scène", ville: "Pau (64)" },
  { date: "6 Juillet 2024", lieu: "Festival de Lacave", ville: "Lacave (09)" },
  { date: "29 Juin 2024", lieu: "Festival Rock'N Boulouze", ville: "Seysses Savès (32)" },
  { date: "22 Juin 2024", lieu: "Parc du Chateau", ville: "Launaguet (31)" },
  { date: "21 Juin 2024", lieu: "Place Gambetta", ville: "Villefranche de Lauragais (31)" },
  { date: "20 Juin 2024", lieu: "Chez Granny", ville: "Cornebarrieu (31)" },
  { date: "1 Juin 2024", lieu: "Festival ô Fraises", ville: "Lapeyrouse-Fossat (32)" },
  { date: "27 Avril 2024", lieu: "Le Central", ville: "Bourges (18)" },
  { date: "26 Avril 2024", lieu: "Showcase au Pages du Donjon", ville: "Bourges (18)" },
  { date: "26 Avril 2024", lieu: "Le Central", ville: "Bourges (18)" },
  { date: "26 Avril 2024", lieu: "Le Belzebuth", ville: "Nevers (58)" },
  { date: "25 Avril 2024", lieu: "Scène Berry", ville: "Bourges (18)" },
  { date: "13 Avril 2024", lieu: "Rock'Eup Fest", ville: "Eup (31)" },
  { date: "23 Mars 2024", lieu: "Le Garage", ville: "Carbonne (31)" },
  { date: "2 Février 2024", lieu: "P'aus Café", ville: "Bonrepos sur Aussonnelle (31)" },
  { date: "3 Février 2024", lieu: "Detroit Brasserie", ville: "Toulouse (31)" },
  { date: "26 Janvier 2024", lieu: "Celtic Pub", ville: "Tarbes (65)" },
  { date: "8 au 10 Janvier 2024", lieu: "Le Bascala", ville: "Bruguières (31)" },
  { date: "9 Décembre 2023", lieu: "Festival A69", ville: "Castres (81)" },
  { date: "25 Novembre 2023", lieu: "Axis Musique", ville: "Toulouse (31)" },
  { date: "2 au 3 Octobre 2023", lieu: "Le Cri'Art", ville: "Auch (32)" },
  { date: "4 Août 2023", lieu: "La Grange", ville: "Toulouse (31)" },
  { date: "30 Juin 2023", lieu: "The MAD Jack", ville: "Mont-de-Marsan (40)" },
  { date: "28 au 29 Juin 2023", lieu: "La Tanière Records", ville: "Saint Perdon (40)" },
  { date: "17 Mars 2023", lieu: "Au Relais de la Diligence", ville: "Fonsorbes (31)" },
  { date: "16 Mars 2023", lieu: "La Brasserie du Levant", ville: "Toulouse (31)" }
];


// ════════════════
// GÉNÉRATION HTML 
// ════════════════

function remplirConcerts(containerId, data) {
  var container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  if (data.length === 0) {
      container.innerHTML = '<p style="text-align:center; color:#888; padding:20px;">Aucun concert pour le moment</p>';
      return;
  }

  data.forEach(function (item) {
      var concert = document.createElement('div');
      concert.className = 'concert';

      // Date
      var time = document.createElement('time');
      time.textContent = item.date.toUpperCase();

      // Séparateur 1
      var sep1 = document.createElement('span');
      sep1.className = 'sep';
      // sep1.textContent = '▼';
      sep1.innerHTML = `<img src="images/logo/icons/tache3.svg" alt="" class="sep-icon">`;

      // Lieu
      var lieu = document.createElement('span');
      lieu.className = 'lieu';
      lieu.textContent = item.lieu;

      // Construction
      concert.appendChild(time);
      concert.appendChild(sep1);
      concert.appendChild(lieu);

      // Ville (si renseignée)
      if (item.ville && item.ville.trim() !== '') {
          var sep2 = document.createElement('span');
          sep2.className = 'sep';
        //  sep2.textContent = '▼'; //
          sep2.innerHTML = `<img src="images/logo/icons/tache3.svg" alt="" class="sep-icon">`;

          var ville = document.createElement('span');
          ville.className = 'ville';
          ville.textContent = item.ville;

          concert.appendChild(sep2);
          concert.appendChild(ville);
      }

      // Boutons (si lien billetterie ou infos)
      if (item.lien || item.infos) {
          var buttons = document.createElement('div');
          buttons.className = 'buttons';

          if (item.infos) {
              var btnInfos = document.createElement('a');
              btnInfos.href = item.infos;
              btnInfos.className = 'btn-infos';
              btnInfos.textContent = 'infos';
              buttons.appendChild(btnInfos);
          }

          if (item.lien) {
              var btnBillet = document.createElement('a');
              btnBillet.href = item.lien;
              btnBillet.target = '_blank';
              btnBillet.rel = 'noopener noreferrer';
              btnBillet.className = 'btn-billet';
              btnBillet.textContent = 'billetterie';
              buttons.appendChild(btnBillet);
          }

          concert.appendChild(buttons);
      }

      container.appendChild(concert);
  });
}


// ═══════════════════════════════════════════
// EXÉCUTION
// ═══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function () {
  remplirConcerts('concerts-avenir', concertsAvenir);
  remplirConcerts('concerts-passes', concertsPasses);
});