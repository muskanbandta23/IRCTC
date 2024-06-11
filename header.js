let a = document.querySelector(".tick")
let b = document.querySelector(".cross")
a.addEventListener("click", function(){
    let ans = document.querySelector("#ticket")
    let style = window.getComputedStyle(ans)
    // let display = style.getPropertyValue("display")
    ans.style.zIndex = 1;
})
b.addEventListener("click", function(){
    let ans = document.querySelector("#ticket")
    ans.style.zIndex = -1;
})