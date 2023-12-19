// Make it usable
const cardButtons = document.querySelectorAll('.btn')
const cardForm = document.querySelector('.popup')
const formPopup = document.querySelector('.popup__form')
const closeButton = formPopup.querySelector('.btn')
const team = document.getElementById('team')
const buttle = document.getElementById('buttle')
const teamMan = team.querySelectorAll('.slider__man')
const teamDots = team.querySelectorAll('.slider__dot')
const buttleMan = buttle.querySelectorAll('.slider__man')
const buttleDots = buttle.querySelectorAll('.slider__dot')

// Auth
function openPopup(popup) {
    popup.classList.add('popup_opened')
}

cardButtons.forEach((button) => {
    button.addEventListener('click', function () {
        openPopup(cardForm)
    })
})

function closePopup(popup) {
    popup.classList.remove('popup_opened')
}

closeButton.addEventListener('click', function () {
    closePopup(cardForm)
})

// Slider
function cleanAtiveClass(sliders, sliderDots) {
    sliders.forEach((men) => {
        men.classList.remove('slider__man_show_active')
    })
    sliderDots.forEach((dot) => {
        dot.classList.remove('slider__dot_show_active')
    })
}

function addActiveClass(sliders, sliderDots, idx) {
    const slider = sliders[idx]
    const sliderDot = sliderDots[idx]
    slider.classList.add('slider__man_show_active')
    sliderDot.classList.add('slider__dot_show_active')
}

teamDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        cleanAtiveClass(teamMan, teamDots)
        addActiveClass(teamMan, teamDots, idx)
    })
})

buttleDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        cleanAtiveClass(buttleMan, buttleDots)
        addActiveClass(buttleMan, buttleDots, idx)
    })
})
