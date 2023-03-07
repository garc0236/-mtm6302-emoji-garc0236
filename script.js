
const $cwrapper = document.getElementById('cwrapper')

const emojis = []

for (let i = 127801; i < 127850; i++) {
    emojis.push(`
    <div class="emoji">&#${i};</div>`)
}

$cwrapper.innerHTML +=  emojis.join('')
