const galleryData = [
    {
        title: "Profile Card",
        image: "screenshot.png",
        description: "Interactive glassmorphism profile card",
        link: null
    },
    {
        title: "CourseGuide",
        image: "screenshot1.png",
        description: "Matric exam practice platform — up to 200 questions per subject",
        link: "https://github.com/MawandeM-98/CourseGuide"
    },
    {
        title: "React Product Explorer",
        image: "screenshot2.png",
        description: "React product explorer built with Vite, Tailwind CSS, and JSON Server",
        link: "https://github.com/MawandeM-98/react-product-explorer"
    },
    {
        title: "Who Wants to Be a Millionaire",
        image: "screenshot3.png",
        description: "Interactive quiz game inspired by the iconic TV show",
        link: "https://github.com/MawandeM-98/who-wants-to-be-a-millionaire-mock-game"
    },
    {
        title: "Angular Product Explorer",
        image: "screenshot4.png",
        description: "Angular 20 product catalog with Signal Store and REST API",
        link: "https://github.com/MawandeM-98/product-explorer-signalstore"
    },
    {
        title: "ChatByte",
        image: "screenshot5.png",
        description: "Real-time chat application",
        link: null
    }
];

function loadGallery() {
    const container = document.getElementById('galleryContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    galleryData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'gallery-card glass-card';
        
        // Build link HTML conditionally
        const linkHtml = item.link 
            ? `<a href="${item.link}" target="_blank" class="gallery-link" onclick="event.stopPropagation()">View Project →</a>`
            : `<span class="gallery-link gallery-link-disabled">Coming Soon</span>`;
        
        card.innerHTML = `
            <div class="gallery-image-wrapper" data-index="${index}">
                <img src="${item.image}" 
                     alt="${item.title}" 
                     class="gallery-image"
                     loading="lazy">
                <div class="gallery-overlay">
                    <span class="gallery-zoom">🔍 View</span>
                </div>
            </div>
            <div class="gallery-info">
                <h3 class="gallery-title">${item.title}</h3>
                <p class="gallery-description">${item.description}</p>
                ${linkHtml}
            </div>
        `;
        
        card.querySelector('.gallery-image-wrapper').addEventListener('click', () => {
            openLightbox(index);
        });
        
        container.appendChild(card);
    });
}

// Lightbox functionality
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const caption = document.getElementById('lightboxCaption');
    
    const item = galleryData[index];
    img.src = item.image;
    img.alt = item.title;
    caption.textContent = item.title;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
    
    document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
    document.getElementById('lightbox')?.addEventListener('click', (e) => {
        if (e.target.id === 'lightbox') closeLightbox();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
});