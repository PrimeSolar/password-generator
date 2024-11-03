// Footer
footerContainer = document.querySelector("#footerContainer");

function footerContainerF(footerContainer) {
  if (footerContainer != null) {
    // Define footer content:
    footerContainer.innerHTML += `
<footer>
Copyright © <a href="https://firstsolar.github.io/web-developer/">Vladislav Kazantsev</a> 2024
</footer>
      `
  }
}
footerContainerF(footerContainer);
