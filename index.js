const form = document.getElementById('myForm')
const textArea = document.getElementById('textArea')
const del = document.querySelector('button:last-of-type')
const label = document.querySelector('label')
const posTimer = document.getElementById('timer')
const NAME_SAVED = 'nameSaved'
const TIME = 'time'
let time = 0

form.addEventListener('submit', (event) => {
  event.preventDefault()
  localStorage.setItem(NAME_SAVED, textArea.value)
  label.textContent = textArea.value
  form.reset()
})

del.addEventListener('click', () => {
  form.reset()
  localStorage.removeItem(NAME_SAVED)
  label.textContent = ''
  time = 0
})

window.addEventListener('DOMContentLoaded', () => {
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
    if (sessionStorage.getItem(TIME)) {
      time = sessionStorage.getItem(TIME)
      sessionStorage.removeItem(TIME)
    }
    posTimer.innerText = time
    time++
  }, 1000)
}
