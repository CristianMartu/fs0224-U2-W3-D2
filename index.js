const form = document.getElementById('myForm')
const inputText = document.getElementById('inputText')
const del = document.querySelector('button:last-of-type')
const label = document.querySelector('label')
const posTimer = document.getElementById('timer')
const NAME_SAVED = 'nameSaved'
const TIME = 'time'
let time = 0

form.addEventListener('submit', (event) => {
  event.preventDefault()
  localStorage.setItem(NAME_SAVED, inputText.value)
  label.textContent = inputText.value
  form.reset()
})

del.addEventListener('click', () => {
  form.reset()
  localStorage.removeItem(NAME_SAVED)
  label.textContent = ''
  time = 0
})

window.addEventListener('DOMContentLoaded', () => {
  time = sessionStorage.getItem(TIME)
  timer()
  if (localStorage.getItem(NAME_SAVED)) {
    label.textContent = localStorage.getItem(NAME_SAVED)
  }
})

window.addEventListener('beforeunload', () => {
  sessionStorage.setItem(TIME, time + 1)
})

const timer = () => {
  setInterval(() => {
    posTimer.innerText = time
    time++
  }, 1000)
}
