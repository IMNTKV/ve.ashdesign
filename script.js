/* =========================================
   1. EFFETS VISUELS & SCROLL
   ========================================= */

// Parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Fade in on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});


/* =========================================
   2. DONNÉES DES PROJETS (COMPLET 1-10)
   ========================================= */

const projectData = {
    1: {
        title: 'Villa Néon',
        description: 'Une résidence exceptionnelle alliant luxe et technologie. Éclairage cyberpunk personnalisé, domotique intégrée et design futuriste pour une expérience de vie unique. Chaque pièce a été pensée pour créer une atmosphère immersive et avant-gardiste.',
        images: [
            { name: 'Salon principal avec éclairage néon', placeholder: 'gem.png' },
            { name: 'Chambre avec technologie intégrée', placeholder: 'gem.png' },
            { name: 'Cuisine moderne futuriste', placeholder: 'villa-neon-cuisine.jpg' },
            { name: 'Salle de bain avec éclairage LED', placeholder: 'villa-neon-sdb.jpg' }
        ]
    },
    2: {
        title: 'Penthouse Virtuel',
        description: 'Au sommet de la ville, cet espace moderne intègre la technologie holographique la plus avancée. Vitrages intelligents, mobilier connecté et ambiance lumineuse adaptative pour un confort optimal 24h/24.',
        images: [
            { name: 'Vue panoramique du penthouse', placeholder: 'penthouse-vue.jpg' },
            { name: 'Zone holographique centrale', placeholder: 'penthouse-holo.jpg' },
            { name: 'Terrasse avec vue sur la ville', placeholder: 'penthouse-terrasse.jpg' },
            { name: 'Bureau high-tech intégré', placeholder: 'penthouse-bureau.jpg' }
        ]
    },
    3: {
        title: 'Gaming Lounge',
        description: 'Salle de gaming professionnelle avec setup multi-écrans, éclairage RGB synchronisé et acoustique optimisée. Un espace dédié aux passionnés de e-sport avec tout le confort nécessaire pour des sessions prolongées.',
        images: [
            { name: 'Setup gaming principal', placeholder: 'gaming-setup.jpg' },
            { name: 'Zone streaming professionnelle', placeholder: 'gaming-stream.jpg' },
            { name: 'Éclairage RGB synchronisé', placeholder: 'gaming-rgb.jpg' },
            { name: 'Espace détente lounge', placeholder: 'gaming-lounge.jpg' }
        ]
    },
    4: {
        title: 'Bar Dystopique',
        description: 'Un bar au design futuriste unique avec comptoir luminescent, mobilier sur-mesure et système d\'éclairage dynamique. L\'atmosphère parfaite pour des soirées inoubliables dans un cadre cyberpunk authentique.',
        images: [
            { name: 'Comptoir luminescent principal', placeholder: 'bar-comptoir.jpg' },
            { name: 'Zone lounge avec banquettes', placeholder: 'bar-lounge.jpg' },
            { name: 'Éclairage d\'ambiance néon', placeholder: 'bar-neon.jpg' },
            { name: 'Cave à vins high-tech', placeholder: 'bar-cave.jpg' }
        ]
    },
    5: {
        title: 'Boutique Tech',
        description: 'Espace commercial avant-gardiste avec vitrines interactives, éclairage architectural et parcours client optimisé. Design minimaliste et technologie de pointe pour une expérience d\'achat révolutionnaire.',
        images: [
            { name: 'Vitrine interactive principale', placeholder: 'boutique-vitrine.jpg' },
            { name: 'Zone d\'exposition produits', placeholder: 'boutique-expo.jpg' },
            { name: 'Comptoir de vente moderne', placeholder: 'boutique-comptoir.jpg' },
            { name: 'Espace démonstration VR', placeholder: 'boutique-vr.jpg' }
        ]
    },
    6: {
        title: 'Studio Sonore',
        description: 'Studio d\'enregistrement acoustiquement traité avec isolation professionnelle, éclairage d\'ambiance et équipements haut de gamme. Un environnement créatif optimal pour les artistes exigeants.',
        images: [
            { name: 'Cabine d\'enregistrement principale', placeholder: 'studio-cabine.jpg' },
            { name: 'Régie avec console de mixage', placeholder: 'studio-regie.jpg' },
            { name: 'Espace vocal isolation', placeholder: 'studio-vocal.jpg' },
            { name: 'Zone lounge créatif', placeholder: 'studio-lounge.jpg' }
        ]
    },
    7: {
        title: 'Bureau Corporate',
        description: 'Espaces de travail modernes et ergonomiques favorisant la productivité et le bien-être. Zones collaboratives, salles de réunion high-tech et design épuré pour une entreprise tournée vers l\'avenir.',
        images: [
            { name: 'Open space moderne', placeholder: 'bureau-openspace.jpg' },
            { name: 'Salle de réunion connectée', placeholder: 'bureau-reunion.jpg' },
            { name: 'Zone de collaboration', placeholder: 'bureau-collab.jpg' },
            { name: 'Espace détente employés', placeholder: 'bureau-detente.jpg' }
        ]
    },
    8: {
        title: 'Loft Urbain',
        description: 'Réinvention d\'un espace industriel en loft contemporain. Volumes ouverts, matériaux bruts sublimés et intégration technologique discrète pour un style de vie urbain sophistiqué.',
        images: [
            { name: 'Espace de vie principal', placeholder: 'loft-living.jpg' },
            { name: 'Cuisine ouverte industrielle', placeholder: 'loft-cuisine.jpg' },
            { name: 'Mezzanine chambre design', placeholder: 'loft-mezzanine.jpg' },
            { name: 'Détails briques apparentes', placeholder: 'loft-details.jpg' }
        ]
    },
    9: {
        title: 'Showroom Luxe',
        description: 'Espace d\'exposition prestigieux avec mise en scène lumineuse spectaculaire. Chaque élément est pensé pour valoriser les produits dans un environnement raffiné et technologique.',
        images: [
            { name: 'Entrée principale showroom', placeholder: 'showroom-entree.jpg' },
            { name: 'Zone exposition centrale', placeholder: 'showroom-expo.jpg' },
            { name: 'Éclairage architectural', placeholder: 'showroom-light.jpg' },
            { name: 'Espace VIP privé', placeholder: 'showroom-vip.jpg' }
        ]
    },
    10: {
        title: 'Résidence Émeraude',
        description: 'Villa de prestige intégrant un jardin vertical bioluminescent unique. Fusion parfaite entre nature et technologie pour un habitat écologique et futuriste. Le summum du luxe durable.',
        images: [
            { name: 'Façade avec jardin vertical', placeholder: 'emeraude-facade.jpg' },
            { name: 'Salon avec vue sur jardin', placeholder: 'emeraude-salon.jpg' },
            { name: 'Système bioluminescent', placeholder: 'emeraude-bio.jpg' },
            { name: 'Terrasse écologique', placeholder: 'emeraude-terrasse.jpg' }
        ]
    }
};


/* =========================================
   3. GESTION DU MODAL (DÉTAILS PROJET)
   ========================================= */

function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projectData[projectId];
    
    // Sécurité : vérifie si le projet existe
    if (!project) return;
    
    // Mettre à jour le titre et la description
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    
    // Générer la galerie d'images
    const gallery = document.getElementById('modalGallery');
    gallery.innerHTML = ''; // Vider la galerie
    
    project.images.forEach(image => {
        const imageDiv = document.createElement('div');
        imageDiv.className = 'modal-image';
        
        // Création de l'élément image
        const imgElement = document.createElement('img');
        imgElement.src = `images/${image.placeholder}`;
        imgElement.alt = image.name;
        
        // --- ACTIVATION DU ZOOM (LIGHTBOX) ---
        imgElement.style.cursor = 'zoom-in';
        imgElement.onclick = function() {
            openLightbox(this.src);
        };
        
        imageDiv.appendChild(imgElement);
        gallery.appendChild(imageDiv);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}


/* =========================================
   4. GESTION DE LA LIGHTBOX (ZOOM IMAGE)
   ========================================= */

function openLightbox(imgSrc) {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    
    // Vérification que les éléments HTML existent
    if (lightbox && lightboxImg) {
        lightbox.style.display = "block";
        lightboxImg.src = imgSrc;
    } else {
        console.error("Erreur : La Lightbox n'est pas trouvée dans le HTML.");
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    if (lightbox) {
        lightbox.style.display = "none";
    }
}


/* =========================================
   5. ÉVÉNEMENTS (CLICS & CLAVIER)
   ========================================= */

// Fermer le modal ou la lightbox en cliquant à l'extérieur
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    const lightbox = document.getElementById('imageLightbox');
    
    // Si on clique sur le fond noir du Modal Projet
    if (event.target === modal) {
        closeModal();
    }
    
    // Si on clique sur le fond noir de la Lightbox
    if (event.target === lightbox) {
        closeLightbox();
    }
}

// Fermer avec la touche ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const lightbox = document.getElementById('imageLightbox');
        const modal = document.getElementById('projectModal');
        
        // On ferme d'abord le zoom s'il est ouvert
        if (lightbox && lightbox.style.display === "block") {
            closeLightbox();
        } 
        // Sinon on ferme le modal du projet
        else if (modal && modal.style.display === "block") {
            closeModal();
        }
    }
});
/* =========================================
   6. NAVIGATION & LOGIQUE CONTACT
   ========================================= */

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Redirection vers la page contact avec le nom du forfait
document.querySelectorAll('.package-btn').forEach(button => {
    button.addEventListener('click', function() {
        const packageName = this.closest('.package-card').querySelector('.package-name').textContent;
        // On redirige vers contact.html
        window.location.href = `contact.html?forfait=${encodeURIComponent(packageName)}`;
    });
});

// LOGIQUE D'AFFICHAGE SUR LA PAGE CONTACT
window.addEventListener('DOMContentLoaded', () => {
    // On cherche l'élément qui doit afficher le nom du forfait (le span)
    const packageNameSpan = document.getElementById('package-name');
    const interestDisplay = document.getElementById('interest-display');
    
    // Si ces éléments existent (donc on est sur la page contact)
    if (packageNameSpan && interestDisplay) {
        const params = new URLSearchParams(window.location.search);
        const forfaitChoisi = params.get('forfait');
        
        // Si un forfait est présent dans l'URL, on l'affiche
        if (forfaitChoisi) {
            packageNameSpan.textContent = forfaitChoisi;
            interestDisplay.style.display = 'inline-block'; // Rend le message visible
        }
    }
});

// Console log final
console.log('V.E. Ash Design - Système opérationnel');