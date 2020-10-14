gsap.registerPlugin(ScrollTrigger)

// *** DOM Elements
const magGlass = document.getElementById('magnifying_glass')
const jsLevel0 = document.querySelector('.level0')
const jsLine1 = document.getElementById('js_line_01')
const domElement1 = document.querySelector('#js_line_01 .dom-element')


// *** NESTING Timelines
function scene1() {
    let tl = gsap.timeline({
        defaults: {duration: 4},
        scrollTrigger: {
            trigger: '#js_line_01',
            start: "center 100px",  //^ element | scroller (viewport)
            end: "+=1000",  //^ relative position (200px after previous element)
            markers: true,
            scrub: true,
            // scrub: 1,  // ^ can also use # value to indicate how long after to keep going (catch up)
            toggleActions: 'restart pause reverse pause'
        }
    })
    tl.to('#js_line_01 .variable-def', {
        text: `const sketchContainer = `
    })
    .to('#js_line_01 .dom-ref', {
        text: `document`
    })
    .to('#js_line_01 .dom-method', {
        text: `.getElementById`
    })
    .to('#js_line_01 .dom-element', {
        text: `("sketch-container")`
    })
    .to(['#js_line_01 .dom-method', domElement1], {
        backgroundColor: 'rgba(163, 9, 32, 0.25)'
    })
    // .to(magGlass, {x: '-50px', delay: 2}) //! original hard-code position

    var p = MotionPathPlugin.getRelativePosition(magGlass, jsLevel0, [0.75, 0.5], [1, 0.25]) //^ coordinate going FROM, coordinate going TO, position in 1st element, position in 2nd element
    console.log(p)

    tl.to(magGlass, {
        x: '+=' + p.x,
        y: '+=' + p.y, 
        delay: 2
    })

    return tl
}

function scene2 () {
    const htmlLine01 = document.getElementById('html_line_01')

    // *** using convertCoordinates() method
    // var p = MotionPathPlugin.convertCoordinates(magGlass, htmlLine01, {x: 0, y: 0}) //^ coordinate going FROM, coordinate going TO, current coordinates

    // *** using getRelativePosition() method 
    // ***    with specific points in element
    // var p = MotionPathPlugin.getRelativePosition(magGlass, htmlLine01, [0, 0], [0, 0.5]) //^ coordinate going FROM, coordinate going TO position in 1st element, position in 2nd element

    var p = MotionPathPlugin.getRelativePosition(magGlass, htmlLine01, {x: -23, y: 0}, [0, 0.35]) //^ coordinate going FROM, coordinate going TO position in 1st element, position in 2nd element

    let tl = gsap.timeline({
        defaults: {duration: 5},
        scrollTrigger: {
            trigger: '#js_line_01 .dom-element',
            start: "+=1500px",  //^ element | scroller (viewport)
            // endTrigger: '#magnifying_glass',
            end: "+=600",  //^ relative position (300px after previous element)
            markers: true,
            scrub: true,
            toggleActions: 'restart pause reverse pause'
        }
    })

    // *** using convertCoordinates() method
    // tl.to(magGlass, {x: p.x, y: p.y}) 
    
    // *** using getRelativePosition() method
    tl.to(magGlass, {
        x: "+=" + p.x, 
        y: "+=" + p.y
    }) //^ using getRelativePosition
    .to(magGlass, {rotationY:180})

    return tl
}

// function scene3 () {
//     let tl = gsap.timeline({
//         defaults: {duration: 3}
//     })
//     tl.to('#js_line_02', {text: `for (let i=0; i<16; i++) {`})
//     .to('#js_line_03', {text: `let newRow = document.createElement("div")`})
//     return tl
// }

let master = gsap.timeline()
    .add(scene1())
    .add(scene2())
    // .add(scene3(), "-=0.5") //^ overlap slightly
