const features = document.querySelector('#features')
const company = document.querySelector('#company')
const iconArrow = document.querySelectorAll('#arrow') 
const containerFeatures = document.querySelector('#dropdown-select-features')
const containerCompany = document.querySelector('#dropdown-select-company')

const showContainer = (element) => {
    element.classList.toggle('active')
} 

const toggleArrow = (arrow) => {
    arrow.classList.toggle('icon-active')
}

const toggleContainer = (container,arrow) => {
    showContainer(container)
    toggleArrow(arrow)
}

features.addEventListener('click', () => toggleContainer(containerFeatures,iconArrow[0]))
company.addEventListener('click', () => toggleContainer(containerCompany,iconArrow[1]))