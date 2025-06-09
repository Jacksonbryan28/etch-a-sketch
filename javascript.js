const container = document.querySelector("#container");
container.style.backgroundColor = "pink";

for (i = 0; i < 16; i++) {
  const div = document.createElement("div");
  div.textContent = `${i}`;
  container.appendChild(div);
}
