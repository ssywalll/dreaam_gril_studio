const trendingItems = [
  {
    title: "Korean Minimalist Chrome",
    tag: "Tren 2026",
    image: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Magnetic Cat Eye",
    tag: "Tren 2026",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "3D Luxury Embellished",
    tag: "Tren 2026",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Transparent Jelly Pink",
    tag: "Tren 2026",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Modern Micro French Tips",
    tag: "Tren 2026",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Aesthetic Dream Set",
    tag: "Tren 2026",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80"
  }
];

const galleryItems = [
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1604902396830-aca29e19b067?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80"
];

const socialItems = [
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=900&q=80"
];

function renderTrending() {
  const container = document.getElementById("trending-grid");
  container.innerHTML = trendingItems.map((item) => `
    <article class="trend-card section-fade overflow-hidden rounded-[1.7rem] bg-[#111827] shadow-card">
      <div class="relative aspect-[4/5] overflow-hidden">
        <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" class="h-full w-full object-cover opacity-90">
        <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
          <p class="text-[11px] font-bold uppercase tracking-[0.3em] text-pink-200">${item.tag}</p>
          <h3 class="mt-2 text-xl font-extrabold">${item.title}</h3>
        </div>
      </div>
    </article>
  `).join("");
}

function renderGallery() {
  const container = document.getElementById("gallery-grid");
  container.innerHTML = galleryItems.map((image, index) => `
    <article class="gallery-tile section-fade overflow-hidden rounded-[1.4rem] bg-white shadow-card">
      <img src="${image}" alt="Galeri design ${index + 1}" loading="lazy" decoding="async" class="aspect-square w-full object-cover">
    </article>
  `).join("");
}

function renderSocial() {
  const container = document.getElementById("social-grid");
  container.innerHTML = socialItems.map((image, index) => `
    <article class="social-tile section-fade overflow-hidden rounded-[1.4rem] bg-white p-3 shadow-card">
      <img src="${image}" alt="Postingan studio ${index + 1}" loading="lazy" decoding="async" class="aspect-square w-full rounded-[1rem] object-cover">
    </article>
  `).join("");
}

function revealOnScroll() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".section-fade").forEach((element) => {
      element.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".section-fade").forEach((element) => observer.observe(element));
}

renderTrending();
renderGallery();
renderSocial();
revealOnScroll();
