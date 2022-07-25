let polyhedron1 = document.querySelector(".polyhedron")
    // let polyhedron2 = document.querySelector(".down")

let WIDTH = document.body.clientWidth
let HEIGHT = document.body.clientHeight
    // const P = document.getElementById('polyhedron')
    // P.style.
    // console.log(WIDTH + '*' + HEIGHT)

let rotateBase1 = polyhedron1.querySelector(".upleft")
let rotateBase2 = polyhedron1.querySelector(".upright")
    // let rotateBase3 = polyhedron2.querySelector(".downleft")
    // let rotateBase4 = polyhedron2.querySelector(".downright")

window.addEventListener("mousemove", (e) => {
    // console.log(e.pageX)
    // console.log(e.pageY)
    let k = 400
    var rotate = `rotateX(${k * e.pageY / 1080}deg) rotateZ(${-k * e.pageX / 1920}deg)`
    rotateBase1.style.transform = rotate
    rotateBase2.style.transform = rotate
        // rotateBase3.style.transform = rotate
        // rotateBase4.style.transform = rotate
});