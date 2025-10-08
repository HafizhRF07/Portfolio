// =====================
// PARTICLES
// =====================
function createParticles() {
  const particlesContainer = document.querySelector(".particles");
  if (!particlesContainer) return;
  const particleCount = 50;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle");
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";
    particle.style.width = Math.random() * 4 + 2 + "px";
    particle.style.height = particle.style.width;
    particle.style.animationDuration = Math.random() * 20 + 10 + "s";
    particle.style.animationDelay = Math.random() * 20 + "s";
    particlesContainer.appendChild(particle);
  }
}
createParticles();

// =====================
// HERO TEXT TYPING
// =====================
const texts = ["Data Science", "Aspiring Data & Visualization Specialist"];
let index = 0, charIndex1 = 0, deleting = false;
const textSpan = document.querySelector(".text");

function type() {
  const currentText = texts[index];
  if (!deleting) {
    textSpan.textContent = currentText.slice(0, charIndex1 + 1);
    charIndex1++;
    if (charIndex1 === currentText.length) {
      deleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    textSpan.textContent = currentText.slice(0, charIndex1 - 1);
    charIndex1--;
    if (charIndex1 === 0) {
      deleting = false;
      index = (index + 1) % texts.length;
    }
  }
  setTimeout(type, 60);
}
type();


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const menuIcon = menuToggle.querySelector(".menu-icon");
const menuText = menuToggle.querySelector(".menu-text");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    menuIcon.textContent = "✖";
    menuText.classList.add("hidden");
  } else {
    menuIcon.textContent = "☰";
    menuText.classList.remove("hidden");
  }
});


// Smooth scroll dengan offset untuk header fixed
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute("href");
    if (targetId === "#" || targetId === "#hero") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      
      if (navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
        menuIcon.textContent = "☰";
        menuText.classList.remove("hidden");
      }
      return;
    }
    
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;
    
    if (!targetElement.classList.contains('is-visible')) {
      targetElement.classList.add('is-visible');
    }
    
    setTimeout(() => {
      let headerOffset = 100;
      
      if (targetId === '#about') {
        headerOffset = 50;
      } else if (targetId === '#education') {
        headerOffset = 60;
      } else if (targetId === '#portfolio') {
        headerOffset = 110;
      } else if (targetId === '#contact') {
        headerOffset = 110;
      }
      
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }, 150);
    
    if (navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");
      menuIcon.textContent = "☰";
      menuText.classList.remove("hidden");
    }
  });
});

// =====================
// TYPING EFFECT SUBTITLE
// =====================
const typingText = document.querySelector(".typing-text");
const text = "Welcome to my portfolio!\nI'm Hafizh Riyandi Fawwaz, a Fresh Graduate in Data Science eager to turn data into impactful insights and predictive solutions.";
let charIndex = 0;

function typeEffect() {
  if (charIndex < text.length) {
    typingText.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

// =====================
// SKILLS CLONE
// =====================
const skills = document.querySelector(".skills");
if (skills) {
  const skillsContainer = document.querySelector('.skills-container');
  if (skillsContainer) {
    for (let i = 0; i < 3; i++) {
      const skillsClone = skills.cloneNode(true);
      skillsContainer.append(skillsClone);
    }
  }
}

// =====================
// PORTFOLIO TABS + CAROUSEL + MODAL + FIREBASE
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const AUTO_INTERVAL = 3000;

  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  const underline = document.querySelector(".underline");

  tabContents.forEach((t) => (t.style.display = "none"));
  const defaultBtn = document.querySelector(".tab-btn.active") || tabButtons[0];
  if (defaultBtn) {
    defaultBtn.classList.add("active");
    const targetId = defaultBtn.dataset.target;
    if (targetId && document.getElementById(targetId)) {
      document.getElementById(targetId).style.display = "block";
      animatePortfolio(targetId);
    }
    setTimeout(() => moveUnderline(defaultBtn), 50);
  }

  function moveUnderline(btn) {
    if (!underline || !btn) return;
    const underlineWidth = btn.offsetWidth * 0.4;
    const containerRect = btn.parentElement.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const left =
      btnRect.left -
      containerRect.left +
      (btn.offsetWidth - underlineWidth) / 2;
    underline.style.width = `${underlineWidth}px`;
    underline.style.left = `${left}px`;
  }

  window.addEventListener("resize", () => {
    const active = document.querySelector(".tab-btn.active");
    if (active) moveUnderline(active);
  });

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((tc) => (tc.style.display = "none"));

      btn.classList.add("active");
      const id = btn.dataset.target;
      if (id && document.getElementById(id)) {
        document.getElementById(id).style.display = "block";
        animatePortfolio(id);
      }
      moveUnderline(btn);

      if (id === "certificates") startAutoScroll();
      else stopAutoScroll();
    });
  });

  const carouselSection = document.getElementById("certificates");
  let wrapper, track, cards;
  let currentIndex = 0;
  let direction = 1;
  let autoTimer = null;

  function safeQuery() {
    if (!carouselSection) return false;
    wrapper = carouselSection.querySelector(".certificates-wrapper");
    track = carouselSection.querySelector(".certificates-track");
    if (!wrapper || !track) return false;
    cards = track.querySelectorAll(".certificate-card");
    return true;
  }

  function getCardWidth() {
    if (!cards.length || !track) return 0;
    return 320;
  }

  function getTotalTrackWidth() {
    if (!cards || !cards.length || !track) return 0;
    const cardWidth = 320;
    const gap = 20;
    return (cardWidth * cards.length) + (gap * (cards.length - 1));
  }

  function getVisibleCards() {
    if (!wrapper || !cards.length) return 1;
    const wrapperWidth = wrapper.clientWidth;
    const cardWidth = 320;
    const gap = 20;

    let count = 0;
    let totalWidth = 0;

    while (totalWidth + cardWidth <= wrapperWidth && count < cards.length) {
      totalWidth += cardWidth;
      if (count > 0) totalWidth += gap;
      count++;
    }

    return Math.max(1, count);
  }

  function getMaxIndex() {
    if (!cards || !cards.length || !wrapper) return 0;
    const totalWidth = getTotalTrackWidth();
    const wrapperWidth = wrapper.clientWidth;

    if (totalWidth <= wrapperWidth) return 0;

    const visibleCount = getVisibleCards();
    const maxIdx = Math.max(0, cards.length - visibleCount);

    return maxIdx;
  }

  function updateTrack() {
    if (!track || !cards || !cards.length || !wrapper) return;
    const max = getMaxIndex();

    if (currentIndex > max) currentIndex = max;
    if (currentIndex < 0) currentIndex = 0;

    const offset = currentIndex * 340;

    track.style.transition = "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    track.style.transform = `translateX(-${offset}px)`;
  }

  function autoStep() {
    const max = getMaxIndex();
    if (max <= 0) return;

    currentIndex += direction;

    if (currentIndex >= max) {
      currentIndex = max;
      direction = -1;
    } else if (currentIndex <= 0) {
      currentIndex = 0;
      direction = 1;
    }

    updateTrack();
  }

  function startAutoScroll() {
    if (!safeQuery()) return;
    stopAutoScroll();
    if (getMaxIndex() <= 0) return;
    autoTimer = setInterval(autoStep, AUTO_INTERVAL);
  }

  function stopAutoScroll() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function resetAutoScroll() {
    stopAutoScroll();
    setTimeout(() => {
      startAutoScroll();
    }, AUTO_INTERVAL);
  }

  let navButtonsAttached = false;
  
  function attachNavButtons() {
    if (!carouselSection || navButtonsAttached) return;
    
    const navWrapper = carouselSection.querySelector(".nav-buttons-wrapper");
    if (!navWrapper) return;
    
    const prevBtn = navWrapper.querySelector(".nav-btn.left");
    const nextBtn = navWrapper.querySelector(".nav-btn.right");

    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const newIndex = currentIndex - 1;
        if (newIndex >= 0) {
          currentIndex = newIndex;
          direction = -1;
          updateTrack();
          resetAutoScroll();
        }
      }, { once: false });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const maxIdx = getMaxIndex();
        const newIndex = currentIndex + 1;
        if (newIndex <= maxIdx) {
          currentIndex = newIndex;
          direction = 1;
          updateTrack();
          resetAutoScroll();
        }
      }, { once: false });
    }
    
    navButtonsAttached = true;
  }

  function attachHoverPause() {
    if (!wrapper) return;
    wrapper.addEventListener("mouseenter", stopAutoScroll);
    wrapper.addEventListener("mouseleave", startAutoScroll);
  }

  let swipeHandlers = null;

  function attachSwipe() {
    if (!track) return;

    if (swipeHandlers) {
      track.removeEventListener("touchstart", swipeHandlers.start);
      track.removeEventListener("touchmove", swipeHandlers.move);
      track.removeEventListener("touchend", swipeHandlers.end);
      track.removeEventListener("touchcancel", swipeHandlers.cancel);
    }

    let startX = 0, currentX = 0, isDragging = false;
    let startTime = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    function getTranslateX() {
      const style = window.getComputedStyle(track);
      const matrix = style.transform;
      if (matrix === 'none') return 0;
      const values = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
      return parseFloat(values[4]) || 0;
    }

    const handleStart = (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      startTime = Date.now();

      prevTranslate = getTranslateX();
      currentTranslate = prevTranslate;

      track.style.transition = "none";
      stopAutoScroll();
    };

    const handleMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();

      currentX = e.touches[0].clientX;
      const diff = currentX - startX;

      currentTranslate = prevTranslate + diff;

      const cardWidth = 320;
      const gap = 20;
      const totalWidth = (cardWidth * cards.length) + (gap * (cards.length - 1));
      const wrapperWidth = wrapper.clientWidth;

      const minTranslate = Math.min(0, -(totalWidth - wrapperWidth));
      const maxTranslate = 0;

      if (currentTranslate > maxTranslate) {
        currentTranslate = maxTranslate;
      } else if (currentTranslate < minTranslate) {
        currentTranslate = minTranslate;
      }

      track.style.transform = `translateX(${currentTranslate}px)`;
    };

    const handleEnd = () => {
      if (!isDragging) return;
      isDragging = false;

      const moved = currentX - startX;
      const duration = Date.now() - startTime;
      const velocity = Math.abs(moved) / duration;

      const currentOffset = Math.abs(currentTranslate);
      const cardWidth = 320;
      const gap = 20;

      let targetIndex = Math.round(currentOffset / (cardWidth + gap));

      const maxIdx = getMaxIndex();

      if (velocity > 0.4 && Math.abs(moved) > 40) {
        if (moved < 0) {
          targetIndex = Math.min(maxIdx, targetIndex + 1);
        } else if (moved > 0) {
          targetIndex = Math.max(0, targetIndex - 1);
        }
      }

      targetIndex = Math.max(0, Math.min(maxIdx, targetIndex));

      currentIndex = targetIndex;
      track.style.transition = "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      updateTrack();
      resetAutoScroll();
    };

    const handleCancel = () => {
      if (!isDragging) return;
      isDragging = false;
      track.style.transition = "transform 0.3s ease-out";

      const currentOffset = Math.abs(getTranslateX());
      const cardWidth = 320;
      const gap = 20;
      let targetIndex = Math.round(currentOffset / (cardWidth + gap));

      const maxIdx = getMaxIndex();
      targetIndex = Math.max(0, Math.min(maxIdx, targetIndex));

      currentIndex = targetIndex;
      updateTrack();
      resetAutoScroll();
    };

    track.addEventListener("touchstart", handleStart, { passive: false });
    track.addEventListener("touchmove", handleMove, { passive: false });
    track.addEventListener("touchend", handleEnd);
    track.addEventListener("touchcancel", handleCancel);

    swipeHandlers = {
      start: handleStart,
      move: handleMove,
      end: handleEnd,
      cancel: handleCancel
    };
  }

  function initCarousel() {
    if (!safeQuery()) return;
    if (currentIndex > getMaxIndex()) currentIndex = getMaxIndex();
    updateTrack();
    
    if (!navButtonsAttached) {
      attachNavButtons();
      attachHoverPause();
      attachSwipe();
    }
    
    const activeTab = document.querySelector(".tab-btn.active")?.dataset.target;
    if (activeTab === "certificates") startAutoScroll();
  }

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    if (!safeQuery()) return;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      cards = track.querySelectorAll(".certificate-card");
      if (currentIndex > getMaxIndex()) currentIndex = getMaxIndex();
      updateTrack();
      const active = document.querySelector(".tab-btn.active");
      if (active) moveUnderline(active);
    }, 120);
  });

  initCarousel();
  window.addEventListener("load", initCarousel);

  window.openModal = function (imgSrc) {
    const modal = document.getElementById("certificateModal");
    if (!modal) return;
    modal.style.display = "block";
    const modalImg = document.getElementById("modalImg");
    if (modalImg) modalImg.src = imgSrc;
    document.body.style.overflow = "hidden";
  };

  window.closeModal = function () {
    const modal = document.getElementById("certificateModal");
    if (!modal) return;
    modal.style.display = "none";
    document.body.style.overflow = "";
  };

  const modalEl = document.getElementById("certificateModal");
  if (modalEl) {
    modalEl.addEventListener("click", (e) => {
      if (e.target === modalEl) closeModal();
    });
  }

  const showAllBtn = document.getElementById("showAllBtn");
  const hiddenCards = document.querySelectorAll(".project-card.hidden");
  let isExpanded = false;

  if (showAllBtn) {
    showAllBtn.addEventListener("click", function () {
      if (!isExpanded) {
        hiddenCards.forEach((card) => card.classList.remove("hidden"));
        showAllBtn.textContent = "Show Less";
        isExpanded = true;
      } else {
        hiddenCards.forEach((card) => card.classList.add("hidden"));
        showAllBtn.textContent = "Show All Projects";
        isExpanded = false;
      }
    });
  }

  function animatePortfolio(tab) {
    if (tab === "certificates") {
      gsap.fromTo(
        "#certificates .certificate-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        }
      );
    } else if (tab === "projects") {
      gsap.fromTo(
        "#projects .project-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        }
      );
    } else if (tab === "skills") {
      gsap.fromTo(
        "#skills .skill-chip",
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.1,
        }
      );
    }
  }
  
  const fadeInSections = document.querySelectorAll('.fade-in-section');
  
  const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('is-visible');
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);
  
  fadeInSections.forEach(section => {
    appearOnScroll.observe(section);
  });

  import('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js').then((firebaseApp) => {
    return Promise.all([
      import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'),
      import('https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js')
    ]).then(([firebaseAuth, firebaseDatabase]) => {
      const { initializeApp } = firebaseApp;
      const { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } = firebaseAuth;
      const { getDatabase, ref, push, onValue, query, orderByChild, remove, get } = firebaseDatabase;

      const firebaseConfig = {
        apiKey: "AIzaSyCEcafrhmiztofjSsvIGysF7RRkdULfOo4",
        authDomain: "riyandif-portfolio.firebaseapp.com",
        databaseURL: "https://riyandif-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "riyandif-portfolio",
        storageBucket: "riyandif-portfolio.firebasestorage.app",
        messagingSenderId: "739928864857",
        appId: "1:739928864857:web:95ef8207c550ff4b741948"
      };

      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const database = getDatabase(app);
      const provider = new GoogleAuthProvider();

      let currentUser = null;
      let selectedRating = 0;

      const ADMIN_EMAILS = [
        'hafizhrf3072@gmail.com',
        'hafizh.r.fawwaz@gmail.com',
      ];

      function isAdmin(email) {
        return ADMIN_EMAILS.includes(email);
      }

      const authSection = document.getElementById('authSection');
      const ratingSection = document.getElementById('ratingSection');
      const googleLoginBtn = document.getElementById('googleLoginBtn');
      const logoutBtn = document.getElementById('logoutBtn');
      const stars = document.querySelectorAll('#ratingStars .star');
      const ratingText = document.getElementById('ratingText');
      const submitRatingBtn = document.getElementById('submitRating');
      const commentsList = document.getElementById('commentsList');

      if (googleLoginBtn) {
        googleLoginBtn.addEventListener('click', async () => {
          try {
            const result = await signInWithPopup(auth, provider);
            currentUser = result.user;
          } catch (error) {
            alert('Login failed: ' + error.message);
          }
        });
      }

      if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
          try {
            await signOut(auth);
            currentUser = null;
          } catch (error) {
            alert('Logout failed: ' + error.message);
          }
        });
      }

      onAuthStateChanged(auth, (user) => {
        if (user) {
          currentUser = user;
          if (authSection) authSection.classList.add('hidden');
          if (ratingSection) ratingSection.classList.remove('hidden');

          const userAvatar = document.getElementById('userAvatar');
          const userName = document.getElementById('userName');
          const userEmail = document.getElementById('userEmail');

          if (userAvatar) userAvatar.src = user.photoURL || 'https://via.placeholder.com/50';
          if (userName) userName.textContent = user.displayName;
          if (userEmail) userEmail.textContent = user.email;
        } else {
          if (authSection) authSection.classList.remove('hidden');
          if (ratingSection) ratingSection.classList.add('hidden');
        }
      });

      stars.forEach(star => {
        star.addEventListener('click', function() {
          selectedRating = parseInt(this.dataset.rating);
          updateStars();
          if (ratingText) ratingText.textContent = `You rated ${selectedRating} star${selectedRating > 1 ? 's' : ''}`;
        });

        star.addEventListener('mouseenter', function() {
          const rating = parseInt(this.dataset.rating);
          highlightStars(rating);
        });
      });

      const ratingStars = document.getElementById('ratingStars');
      if (ratingStars) {
        ratingStars.addEventListener('mouseleave', function() {
          updateStars();
        });
      }

      function highlightStars(rating) {
        stars.forEach((star, index) => {
          if (index < rating) {
            star.classList.add('active');
          } else {
            star.classList.remove('active');
          }
        });
      }

      function updateStars() {
        highlightStars(selectedRating);
      }

      if (submitRatingBtn) {
        submitRatingBtn.addEventListener('click', async () => {
          const userComment = document.getElementById('userComment');
          const comment = userComment ? userComment.value.trim() : '';

          if (selectedRating === 0) {
            alert('Please select a rating!');
            return;
          }

          if (!comment) {
            alert('Please write a comment!');
            return;
          }

          try {
            const commentsRef = ref(database, 'comments');
            await push(commentsRef, {
              userId: currentUser.uid,
              userName: currentUser.displayName,
              userEmail: currentUser.email,
              userPhoto: currentUser.photoURL,
              rating: selectedRating,
              comment: comment,
              timestamp: Date.now()
            });

            if (userComment) userComment.value = '';
            selectedRating = 0;
            updateStars();
            if (ratingText) ratingText.textContent = 'Select a rating';

            alert('Thank you for your rating and comment!');
          } catch (error) {
            alert('Failed to submit: ' + error.message);
          }
        });
      }

      function showReplyForm(commentId) {
        document.querySelectorAll('.reply-form').forEach(form => form.remove());

        const commentItem = document.querySelector(`[data-comment-id="${commentId}"]`);
        if (!commentItem) return;

        const replyForm = document.createElement('div');
        replyForm.className = 'reply-form';
        replyForm.innerHTML = `
          <textarea placeholder="Write your reply..." class="reply-textarea"></textarea>
          <div class="reply-form-buttons">
            <button class="reply-submit-btn">Reply</button>
            <button class="reply-cancel-btn">Cancel</button>
          </div>
        `;

        commentItem.appendChild(replyForm);

        const textarea = replyForm.querySelector('.reply-textarea');
        const submitBtn = replyForm.querySelector('.reply-submit-btn');
        const cancelBtn = replyForm.querySelector('.reply-cancel-btn');

        textarea.focus();

        submitBtn.addEventListener('click', async () => {
          const replyText = textarea.value.trim();
          if (!replyText) {
            alert('Please write a reply!');
            return;
          }

          try {
            const repliesRef = ref(database, `replies/${commentId}`);
            await push(repliesRef, {
              userId: currentUser.uid,
              userName: currentUser.displayName,
              userEmail: currentUser.email,
              userPhoto: currentUser.photoURL,
              reply: replyText,
              timestamp: Date.now()
            });

            replyForm.remove();
            alert('Reply posted successfully!');
          } catch (error) {
            alert('Failed to post reply: ' + error.message);
          }
        });

        cancelBtn.addEventListener('click', () => {
          replyForm.remove();
        });
      }

      async function loadReplies(commentId, repliesContainer) {
        const repliesRef = ref(database, `replies/${commentId}`);
        const repliesQuery = query(repliesRef, orderByChild('timestamp'));

        onValue(repliesQuery, (snapshot) => {
          repliesContainer.innerHTML = '';

          if (!snapshot.exists()) {
            return;
          }

          const replies = [];
          snapshot.forEach((childSnapshot) => {
            replies.push({
              id: childSnapshot.key,
              ...childSnapshot.val()
            });
          });

          replies.forEach(replyData => {
            const replyItem = document.createElement('div');
            replyItem.className = 'reply-item';

            const timeAgo = getTimeAgo(replyData.timestamp);
            const isOwner = currentUser && currentUser.uid === replyData.userId;
            const isCurrentUserAdmin = currentUser && isAdmin(currentUser.email);
            
            const canDelete = isOwner || isCurrentUserAdmin;
            const deleteBtn = canDelete ? `<button class="delete-reply-btn" data-comment-id="${commentId}" data-reply-id="${replyData.id}" title="Delete reply"><i class="fas fa-trash-alt"></i></button>` : '';
            
            const adminBadge = isAdmin(data.userEmail || '') ? '<span class="admin-badge">Admin</span>' : '';

            commentItem.innerHTML = `
              <div class="comment-header">
                <div class="comment-author-info">
                  <img src="${data.userPhoto || 'https://via.placeholder.com/36'}" alt="${data.userName}" class="comment-avatar">
                  <span class="comment-author">${data.userName}${adminBadge}</span>
                </div>
                <div class="comment-stars">${starsHTML}</div>
              </div>
              <p class="comment-text">${data.comment}</p>
              <div class="comment-footer">
                <div class="comment-actions">
                  <span class="comment-date">${timeAgo}</span>
                  <div class="like-dislike-buttons">
                    <button class="like-btn" data-id="${data.id}">
                      <i class="fas fa-thumbs-up"></i>
                      <span>0</span>
                    </button>
                    <button class="dislike-btn" data-id="${data.id}">
                      <i class="fas fa-thumbs-down"></i>
                      <span>0</span>
                    </button>
                  </div>
                  ${replyBtn}
                </div>
                ${deleteBtn}
              </div>
              <div class="replies-section"></div>
            `;

            repliesContainer.appendChild(replyItem);
          });

          repliesContainer.querySelectorAll('.delete-reply-btn').forEach(btn => {
            btn.addEventListener('click', async function() {
              const commentId = this.getAttribute('data-comment-id');
              const replyId = this.getAttribute('data-reply-id');
              if (confirm('Are you sure you want to delete this reply?')) {
                try {
                  await remove(ref(database, `replies/${commentId}/${replyId}`));
                  alert('Reply deleted successfully!');
                } catch (error) {
                  alert('Failed to delete reply: ' + error.message);
                }
              }
            });
          });
        });
      }

      const commentsRef = ref(database, 'comments');
      const commentsQuery = query(commentsRef, orderByChild('timestamp'));

      onValue(commentsQuery, (snapshot) => {
        if (!commentsList) return;
        commentsList.innerHTML = '';

        if (!snapshot.exists()) {
          commentsList.innerHTML = '<div class="empty-comments">No comments yet. Be the first to leave a rating!</div>';
          return;
        }

        const comments = [];
        snapshot.forEach((childSnapshot) => {
          comments.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        comments.reverse().forEach(data => {
          const commentItem = document.createElement('div');
          commentItem.className = 'comment-item';
          commentItem.setAttribute('data-comment-id', data.id);

          let starsHTML = '';
          for (let i = 1; i <= 5; i++) {
            starsHTML += `<span class="star ${i <= data.rating ? 'active' : ''}">★</span>`;
          }

          const timeAgo = getTimeAgo(data.timestamp);
          const isOwner = currentUser && currentUser.uid === data.userId;
          const isCurrentUserAdmin = currentUser && isAdmin(currentUser.email);
          
          const canDelete = isOwner || isCurrentUserAdmin;
          const deleteBtn = canDelete ? `<button class="delete-btn" data-id="${data.id}" title="Delete comment"><i class="fas fa-trash-alt"></i></button>` : '';
          
          const replyBtn = currentUser && !isOwner ? `<button class="reply-btn" data-id="${data.id}"><i class="fas fa-reply"></i> Reply</button>` : '';
          
          const adminBadge = isAdmin(data.userEmail || '') ? '<span class="admin-badge">Admin</span>' : '';

          commentItem.innerHTML = `
            <div class="comment-header">
              <div class="comment-author-info">
                <img src="${data.userPhoto || 'https://via.placeholder.com/40'}" alt="${data.userName}" class="comment-avatar">
                <span class="comment-author">${data.userName}${adminBadge}</span>
              </div>
              <div class="comment-stars">${starsHTML}</div>
            </div>
            <p class="comment-text">${data.comment}</p>
            <div class="comment-footer">
              <div>
                <span class="comment-date">${timeAgo}</span>
                ${replyBtn}
              </div>
              ${deleteBtn}
            </div>
            <div class="replies-section"></div>
          `;

          commentsList.appendChild(commentItem);

          const repliesContainer = commentItem.querySelector('.replies-section');
          loadReplies(data.id, repliesContainer);
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
          btn.addEventListener('click', async function() {
            const commentId = this.getAttribute('data-id');
            if (confirm('Are you sure you want to delete this comment?')) {
              try {
                await remove(ref(database, `comments/${commentId}`));
                await remove(ref(database, `replies/${commentId}`));
              } catch (error) {
                alert('Failed to delete: ' + error.message);
              }
            }
          });
        });

        document.querySelectorAll('.reply-btn').forEach(btn => {
          btn.addEventListener('click', function() {
            if (!currentUser) {
              alert('Please sign in to reply!');
              return;
            }
            const commentId = this.getAttribute('data-id');
            showReplyForm(commentId);
          });
        });
      });

      function getTimeAgo(timestamp) {
        const now = Date.now();
        const diff = now - timestamp;
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
        if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        return 'Just now';
      }
    });
  });
});