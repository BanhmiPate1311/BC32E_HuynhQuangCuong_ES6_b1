let str = document.querySelector(".heading").innerHTML;
let chars = [...str];
let html = "";
for (let i = 0; i < chars.length; i++) {
  html += `
        <span>${chars[i]}</span>
    `;
}
document.querySelector(".heading").innerHTML = html;
