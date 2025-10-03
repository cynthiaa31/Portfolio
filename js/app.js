const toggle = document.getElementById('toggle');
const toggleText = document.getElementById('toggle-text');
const body = document.body;

// Voir si le script fonctionne
console.log('Script chargé');

// élément toggle ? 
console.log('toggle element:', toggle);

toggle.addEventListener('click', () => {
    console.log('Toggle cliqué'); // Voir si le clic est détecté

    const isDarkMode = body.classList.contains('bg-black');
    console.log('Mode actuel :', isDarkMode ? 'Sombre' : 'Clair'); // mode actuel

    if (isDarkMode) {
        body.classList.remove('bg-black', 'text-white');
        body.classList.add('bg-white', 'text-black');
        toggle.classList.remove('dark');
        toggleText.textContent = 'LIGHT MODE';
    } else {
        body.classList.remove('bg-white', 'text-black');
        body.classList.add('bg-black', 'text-white');
        toggle.classList.add('dark');
        toggleText.textContent = 'DARK MODE';
    }
});

const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});
