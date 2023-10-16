const panels = document.querySelectorAll('.panel');  // The querySelectorAll() method returns all elements that matches a CSS selector(s).//

panels.forEach(panel => {
    panel.addEventListener('click', () => {   // The addEventListener() method attaches an event handler to a document.// 
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}