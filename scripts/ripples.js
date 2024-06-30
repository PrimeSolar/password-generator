const button = document.getElementsByClassName("button");
for (let btn of button) {
  btn.addEventListener("click", function(e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripples = document.createElement("span");
    ripples.setAttribute("id", "ripples");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove()
    }, 1000)
  })
}
