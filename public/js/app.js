//console.log('client side js')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value

  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''

  const searchUrl = '/weather?address='+ encodeURI(location)
  fetch(searchUrl).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error

      } else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
      }
    })
  })
})
