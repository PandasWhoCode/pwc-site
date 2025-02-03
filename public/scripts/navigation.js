// Toggle mobile menu
document.getElementById('nav-toggle').addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation(); // Prevent scroll handling
        const menu = document.getElementById('nav-menu');
        menu.classList.toggle('nav-menu-active');
        this.classList.toggle('nav-logo-active');
    }
});

// Handle dropdown on mobile
document.querySelectorAll('.dropdown .nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation(); // Prevent scroll handling
            const dropdownContent = this.nextElementSibling;
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        }
    });
});

// Handle smooth scrolling and mobile menu closing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Don't handle scroll for toggle button or dropdown toggles on mobile
        if (this.id === 'nav-toggle' || 
            (window.innerWidth <= 768 && this.classList.contains('nav-item') && this.nextElementSibling?.classList.contains('dropdown-content'))) {
            return;
        }

        e.preventDefault();
        
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            document.getElementById('nav-menu').classList.remove('nav-menu-active');
            document.getElementById('nav-toggle').classList.remove('nav-logo-active');
            
            // Close dropdown if it's a dropdown item
            if (this.classList.contains('dropdown-item')) {
                this.closest('.dropdown-content').style.display = 'none';
            }
        }

        // Scroll to target
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.getElementById('nav-menu').classList.remove('nav-menu-active');
        document.getElementById('nav-toggle').classList.remove('nav-logo-active');
        // Reset dropdown display
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.style.display = '';
        });
    }
});
