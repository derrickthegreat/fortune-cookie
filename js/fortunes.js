const fortunes = [
  'About time I got out of that cookie.',
  'Come back later... I am sleeping.<br>(Yes, cookies need their sleep, too.)',
  'Some men dream of fortunes, others dream of cookies.',
  'Ignore previous cookie.',
  'I see money in your future... it is not yours though.',
  'To lower your stress level, get a dog.',
  'You will be hungry again in one hour.',
  'You will travel to many exotic places in your lifetime',
  'A nice cake is waiting for you.',
  'Be good to yourself. Dessert three times per week is OK.',
  'When in anger, sing the alphabet.',
  'The fortune you seek is in another cookie.',
  'You will become great if you believe in yourself.',
  'You can always find happiness at work on Friday.',
  'If a turtle doesn\'t have a shell, is it naked or homeless?',
  'May you someday be carbon neutral.',
  'You will live long enough to open many fortune cookies.',

]
const randomNumber = () => {
  return Math.ceil(Math.random() * 53)
}
const lottoNumbers = () => {
  const numbers = []
  const numPush = () => numbers.push(randomNumber())
  numPush()
  numPush()
  numPush()
  numPush()
  numPush()
  numPush()
  return numbers.join(' - ')
}
function refresh() {
  window.location = location.href
}
const $ = (id) => document.getElementById(id)
function newFortune() {
  const i = Math.floor(Math.random() * fortunes.length)
  document.getElementById('cookie').innerHTML = `<img src="./images/fortune-cookie-with-paper.jpg" width="300" id="cookie">`
  document.getElementById('message').innerHTML = ``
  document.getElementById('cookie-message').innerHTML = `<div class="cookie-message">
                                                          <div id="fortune">
                                                          </div>
                                                          <div id="lucky">
                                                          </div>
                                                          <div id="lotto">
                                                          </div>
                                                        </div>`
  document.getElementById('fortune').innerHTML = fortunes[i]
  document.getElementById('lucky').innerHTML = '<strong>Your Lucky Numbers:</strong>'
  document.getElementById('lotto').innerHTML = lottoNumbers()
  document.getElementById('button').innerHTML = `<button class="button" onclick="refresh()">New Cookie</button>`
}