let all = document.querySelectorAll("span");
let outPut = document.querySelector("input");
all.forEach((ele) => {
    ele.onclick = function() {
        outPut.value += ele.textContent
    }
})
all[7].onclick = () => outPut.value += "*";
all[0].onclick = () => outPut.value = "";
all[2].onclick = () => outPut.value = outPut.value.slice(0, -1)
all[all.length - 1].onclick = () => {
    try {
        outPut.value = eval(outPut.value)
    } catch (error) {
        outPut.value = "Error"
    }
}