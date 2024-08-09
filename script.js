function slideDown() {
    const mainContent = document.getElementById('main-content');
    const hiddenContent = document.getElementById('hidden-content');

    mainContent.style.transform = 'translateY(-100vh)';
    
    setTimeout(() => {
        hiddenContent.style.display = 'block';
        hiddenContent.style.opacity = '1';
        hiddenContent.scrollIntoView({ behavior: 'smooth' });
    }, 500); // This should match the transition duration in the CSS
}