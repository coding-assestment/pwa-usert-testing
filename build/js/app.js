function creataNode(element) {
    return document.createElement(element)
}
function append(parent, element) {
    return parent.appendChild(element)
}

var ul  = document.getElementById('people')

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data=>{
    let people = data
    console.log(people)
    return people.map(function (person) {
        let li = creataNode('li')
            span = creataNode('span')
        li.innerHTML = person.name
        span.innerHTML = person.email
        append(li, span)
        append(ul, li)
    })
})