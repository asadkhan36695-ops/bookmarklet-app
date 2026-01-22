document.getElementById("addBtn").onclick = () => {
  const user = document.getElementById("username").value;
  const crypto = document.getElementById("crypto").value;
  const amount = document.getElementById("amount").value;

  if (!user || !amount) {
    alert("Please fill all fields");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${user} | ${crypto} | $${amount}`;
  document.getElementById("list").appendChild(li);
};

document.getElementById("closeBtn").onclick = () => {
  document.getElementById("demoApp").remove();
};
