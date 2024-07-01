let boxes = document.querySelectorAll(".main-box .box")

boxes.forEach((box, i) => {

    let heading = box.querySelector(".heading")
    let icon = box.querySelector(".heading i")

    heading.querySelector("h3").innerHTML = `Heading ${i + 1}`

    heading.addEventListener("click", () => {
        
        for (let i = 0; i < boxes.length; i++) {

            if (boxes[i] != box) {
                boxes[i].classList.remove("act")
            } else {
                box.classList.toggle("act")
                box.children[1].className = ("animate__animated animate__bounceInDown")
            }
            
        }
        
        if (icon.classList.contains("fa-minus")) {
            icon.classList.replace("fa-minus", "fa-plus")
        } else {
            document.querySelectorAll(".main-box .box .heading .fa-minus").forEach(minus => {minus.classList.replace("fa-minus", "fa-plus")})
            icon.classList.replace("fa-plus", "fa-minus")
        }

    })
})