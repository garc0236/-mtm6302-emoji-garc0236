
const $cwrapper = document.querySelector('.cwrapper')

const emojis = []

for (let i = 127801; i < 127850; i++) {
    emojis.push(`
    <div class="emoji">&#${i};<p class="ref">${i}</p></div>
    `)
}

$cwrapper.innerHTML +=  emojis.join('')
