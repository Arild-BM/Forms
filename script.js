const fName = document.getElementById("fname")
const size = document.getElementById("size")
const sizeOutput = document.getElementById("size-output")
const submit = document.getElementById("submit")


size.addEventListener("mousemove", function() {
    sizeOutput.textContent = size.value
})