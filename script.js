const button = document.getElementById("btn-clique-aqui");

button.addEventListener("click", () => {
  const message = document.createElement("div");
  message.innerText = "Te amo mamãe!";
  message.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
  message.style.position = "fixed";
  message.style.top = "20px";
  message.style.right = "20px";
  message.style.padding = "10px";
  message.style.borderRadius = "5px";
  message.style.color = "#fff";
  message.style.fontWeight = "bold";
  document.body.appendChild(message);
});
