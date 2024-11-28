var ul=document.getElementById("list-container")
var input=document.getElementById("input")
function add()
{
    var listadd = document.createElement("li")

    listadd.innerHTML=input.value + "<button onclick='deleteitem(event)'>Delete</button>"
    ul.append(listadd)
}
function deleteitem(event)
{
    event.target.parentElement.remove()
}