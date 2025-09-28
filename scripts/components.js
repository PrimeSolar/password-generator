// The Library of Custom Reusable Web Components
// This file is the library containing my collection of custom, reusable web components
// that can be used across different parts of the project. These components go beyond what browsers provide,
// allowing for expanded capabilities and functionality in the project.

// Footer
const footerContainer = document.querySelector("#footerContainer");

function footerContainerF(footerContainer) {
  if (footerContainer != null) {
    // Define footer content:
    footerContainer.innerHTML += `
<footer>
Copyright © <a href="https://primesolar.github.io/web-developer/">Vladislav Kazantsev</a> ${new Date().getFullYear()}
</footer>
      `;
  }
}
footerContainerF(footerContainer);

console.log("components.js is completed");
