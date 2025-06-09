const container = document.querySelector("#container");
container.style.backgroundColor = "pink";

for (i = 0; i < 16; i++) {
  const div = document.createElement("div");
  div.textContent = `${i}`;
  div.classList.toggle("square");
  container.appendChild(div);
  for (r = 1; r < 16; r++) {
    const div = document.createElement("div");
    div.textContent = "R:" + `${r}`;
    div.classList.toggle("square");
    container.appendChild(div);
  }
}
