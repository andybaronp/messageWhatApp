const form = document.getElementById('form');
const btn = document.getElementById('btn')
btn.disabled = true

const inputs = [code, number]


inputs.forEach((elemen) => {


    elemen.addEventListener('keyup', () => {

        if (elemen.value.length > 2) {

            btn.disabled = false

        }
    })
})



form.addEventListener('submit', e => {
    e.preventDefault()
    const code = parseInt(document.getElementById('code').value)
    const number = parseInt(document.getElementById('number').value)
    const message = document.getElementById('message').value

    const url = `https://wa.me/${code}${number}?text=${message}`
    window.open(url)

})