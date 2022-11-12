function dragDown(e) {
    const recipeDescription = document.getElementById(`${e}`)
    recipeDescription.classList.toggle('active')
}

// Fade in transition 
const sliders = document.querySelectorAll('.fade-in')

const appearOnScroll = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear')
            appearOnScroll.unobserve(entry.target)
        }
    })
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})