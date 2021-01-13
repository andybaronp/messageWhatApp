const form = document.getElementById('form');
const btn = document.getElementById('btn')
const check = document.getElementById('check')
btn.disabled = true

// console.log(check.value);

const inputs = [code, number]
inputs.forEach((elemen) => {


    elemen.addEventListener('keyup', () => {

        if (elemen.value.length > 2) {

            btn.disabled = false

        }
    })
})


check.addEventListener('click', () => {

    if (check.value) {
        message.classList.toggle('off')
    }


})


form.addEventListener('submit', e => {
    e.preventDefault()
    const code = parseInt(document.getElementById('code').value)
    const number = parseInt(document.getElementById('number').value)
    const message = document.getElementById('message').value


    const url = `https://wa.me/${code}${number}?text=${message}`
    // window.open(url)
    window.location.href = url

})