// *** TIMELINE!
// const timeline = gsap.timeline({
//     defaults: {duration: 3}
// })

// timeline
//     .to('#js_line_01', {duration: 4, text: `const sketchContainer = document.getElementById("sketch-container")`})
//     .to('#js_line_02', {text: `for (let i=0; i<16; i++) {`})
//     .to('#js_line_03', {text: `let newRow = document.createElement("div")`})
//     .to('#js_line_04', {duration: 2.5, text: `newRow.classList.add('row')`})
//     // .to('#js_line_05', {duration: 2.5, text: `for (let j=0; j<16; j++) {`})

//     // .to('#js_line_06', {text: `let newBox = document.createElement('div')`})
//     // .to('#js_line_07', {duration: 3, text: `newBox.classList.add('box')`})
//     // .to('#js_line_08', {duration: 3, text: `newRow.appendChild(newBox)`})
//     // .to('#js_line_09', {duration: .5, text: `}`})
//     .to('#js_line_10', {text: `sketchContainer.appendChild(newRow)`})
//     .to('#js_line_11', {duration: .5, text: `}`})


// *** NESTING Timelines
// function scene1() {
//     let tl = gsap.timeline({
//         defaults: {duration: 3}
//     })
//     tl.to('#js_line_01', {duration: 4, text: `const sketchContainer = document.getElementById("sketch-container")`})
//     return tl
// }

function scene1() {
    let tl = gsap.timeline({
        defaults: {duration: 1}
    })
    tl.to('#js_line_practice .variable-def', {
        text: `const sketchContainer = `
    })
    .to('#js_line_practice .dom-ref', {
        text: `document`
    })
    .to('#js_line_practice .dom-method', {
        text: `.getElementById`
    })
    .to('#js_line_practice .dom-element', {
        text: `("sketch-container")`
    })
    .to(['#js_line_practice .dom-method', '#js_line_practice .dom-element'], {
        // newClass: `+=container_highlight`
        // backgroundColor: 'red'
        backgroundColor: 'rgba(163, 9, 32, 0.25)'
        // className: `+=container_highlight`
    })
    return tl
}

function scene2 () {
    let tl = gsap.timeline({
        defaults: {duration: 3}
    })
    tl.to('#js_line_02', {text: `for (let i=0; i<16; i++) {`})
    .to('#js_line_03', {text: `let newRow = document.createElement("div")`})
    return tl
}

let master = gsap.timeline()
    .add(scene1())
    .add(scene2(), "-=0.5") // overlap slightly
