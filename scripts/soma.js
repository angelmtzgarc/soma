const container = document.querySelector('.container')

/* A N I M A C I O N */
for (let i = 0; i <= 30; i++) {
    const pills = document.createElement('div');
    pills.classList.add('pill');
    container.appendChild(pills);

    function animatePills() {
        anime({
            targets: '.pill',
            translateX: function() {
                return anime.random(1, 1500);
            },
            translateY: function() {
                return anime.random(1, 900);
            },
            scale: function() {
                return anime.random(0.5, 2);
            },
            rotate: function() {
                return anime.random(0, 360);
            },
            duration: 10000,
            easing: 'easeInOutQuad',
            complete: animatePills,

        })
    }
    animatePills()
}

/* A B O U T */
function about() {
    alert('El Soma es una droga ficticia que aparece en la novela "Un mundo feliz" de Aldous Huxley.')
}