function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Please enter both email and password.");
    return;
  }

    document.getElementById("loginSection").classList.add("hidden");
    document.getElementById("dashboardSection").classList.remove("hidden");
    document.getElementById("userRole").textContent = email;
    renderCharts(); 

}

function logout() {
  document.getElementById("dashboardSection").classList.add("hidden");
  document.getElementById("loginSection").classList.remove("hidden");
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}

function renderCharts() {
  const lineCtx = document.getElementById("lineChart").getContext("2d");
  new Chart(lineCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: "Revenue",
        data: [1200, 1900, 3000, 2500, 3200, 4000],
        borderColor: "white",
        backgroundColor: "rgba(255,255,255,0.2)",
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { labels: { color: "white" } } },
      scales: {
        x: { ticks: { color: "white" } },
        y: { ticks: { color: "white" } }
      }
    }
  });

  
  const pieCtx = document.getElementById("pieChart").getContext("2d");
  new Chart(pieCtx, {
    type: "pie",
    data: {
      labels: ["Stocks", "Savings", "Investments"],
      datasets: [{
        label: "Distribution",
        data: [40, 30, 30],
        backgroundColor: ["#f44336", "#e91e63", "#9c27b0"]
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { labels: { color: "white" } } }
    }
  });
}
