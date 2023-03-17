const draggables = document.querySelectorAll(".draggable")
const containers = document.querySelectorAll(".container")

draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging")
    })

    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging")
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container, e.clientX)
        const draggable = document.querySelector(".dragging")
        if(afterElement != null ){
            container.insertBefore(draggable, afterElement)
        }
    })
})

function getDragAfterElement(container, x){
    const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = x - box.left - box.width / 2
        if (offset < 0 && offset > closest.offset){
            return { offset: offset, element: child}
        }else{
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}

function rm1(){ document.getElementById("index1").style.display = "none"; }
function rm2(){ document.getElementById("index2").style.display = "none"; }
function rm3(){ document.getElementById("index3").style.display = "none"; }
function rm4(){ document.getElementById("index4").style.display = "none"; }
function rm5(){ document.getElementById("index5").style.display = "none"; }
function rm6(){ document.getElementById("index6").style.display = "none"; }
function rm7(){ document.getElementById("index7").style.display = "none"; }
function rm8(){ document.getElementById("index8").style.display = "none"; }
function rm9(){ document.getElementById("index9").style.display = "none"; }
function rm10(){ document.getElementById("index10").style.display = "none"; }
function rm12(){ 
    document.getElementById("index1").style.display = "block"; 
    document.getElementById("index2").style.display = "block"; 
    document.getElementById("index3").style.display = "block"; 
    document.getElementById("index4").style.display = "block"; 
    document.getElementById("index5").style.display = "block"; 
    document.getElementById("index6").style.display = "block"; 
    document.getElementById("index7").style.display = "block"; 
    document.getElementById("index8").style.display = "block"; 
    document.getElementById("index9").style.display = "block"; 
    document.getElementById("index10").style.display = "block"; 
}
function rm11(){ document.getElementById("index11").style.display = "none"; }

function link(){
    setTimeout(function(){
        location.href = "index2.html";
        clearTimeout(link);
    },3000);
}