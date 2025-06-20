// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// بيانات وهمية للمدونات
const blogs = Array.from({ length: 10 }, (_, i) => {
  const id = i + 1;
  return {
    name: `Blog ${id}`,
    earnings: {
      day: +(Math.random() * 3 + 1).toFixed(2),
      week: +(Math.random() * 30 + 5).toFixed(2),
      month: +(Math.random() * 100 + 20).toFixed(2),
    },
    views: Math.floor(Math.random() * 2000 + 300),
    aiAgents: Math.floor(Math.random() * 5 + 1),
    emailAccounts: Array.from({ length: 5 }, (_, j) => ({
      email: `blog${id}_email${j + 1}@dreameo.com`,
      password: `pass${j + 1}Blog${id}`,
      platforms: ["Google", "Pinterest", "Reddit"].slice(
        0,
        Math.floor(Math.random() * 3 + 1)
      ),
      inbox: [`Welcome to Blog ${id} email ${j + 1}`, `Stats update`, `Error report`],
    })),
    projects: [
      {
        name: "Auto Blogger",
        status: Math.random() > 0.2 ? "✅ Running" : "❌ Failed",
        lastWorkflow: new Date().toLocaleString(),
      },
      {
        name: "AI Agent",
        accounts: 5,
        status: Math.random() > 0.2 ? "✅ Running" : "❌ Failed",
        lastWorkflow: new Date().toLocaleString(),
      },
    ],
    mastodonStatus: Math.random() > 0.9 ? "❌ Banned" : "✅ Active",
    lastPost: `Last post at ${new Date().toLocaleTimeString()}`,
  };
});

// Dashboard Page
const blogsContainer = document.getElementById("blogs-container");
if (blogsContainer) {
  let sumDay = 0, sumWeek = 0, sumMonth = 0, sumViews = 0, totalAgents = 0;

  blogs.forEach((blog) => {
    const card = document.createElement("div");
    card.className = "blog-card";
    card.innerHTML = `
      <h3>📰 ${blog.name}</h3>
      <p><strong>Views:</strong> ${blog.views}</p>
      <p><strong>Earnings Today:</strong> $${blog.earnings.day}</p>
      <p><strong>Earnings This Week:</strong> $${blog.earnings.week}</p>
      <p><strong>Earnings This Month:</strong> $${blog.earnings.month}</p>
      <p><strong>Mastodon:</strong> ${blog.mastodonStatus}</p>
      <p><strong>Last Post:</strong> ${blog.lastPost}</p>
      <div><strong>Projects:</strong></div>
      ${blog.projects
        .map(
          (p) => `
        <p>🔧 ${p.name} - ${p.status} <br/><small>Last: ${p.lastWorkflow}</small></p>
      `
        )
        .join("")}
    `;
    blogsContainer.appendChild(card);

    sumDay += blog.earnings.day;
    sumWeek += blog.earnings.week;
    sumMonth += blog.earnings.month;
    sumViews += blog.views;
    totalAgents += blog.aiAgents;
  });

  document.getElementById("sum-day").textContent = `$${sumDay.toFixed(2)}`;
  document.getElementById("sum-week").textContent = `$${sumWeek.toFixed(2)}`;
  document.getElementById("sum-month").textContent = `$${sumMonth.toFixed(2)}`;
  document.getElementById("total-views").textContent = sumViews;
  document.getElementById("total-agents").textContent = totalAgents;

  document.getElementById("total-earnings").textContent = `$${sumDay.toFixed(2)}`;

  // إرسال تنبيه إذا تجاوزت 5$
  if (sumDay >= 5) {
    console.log("🔔 Alert: Earnings exceeded $5 today! Email sent to raromero084@gmail.com");
  }
}

// Inbox Page
const inboxContainer = document.getElementById("inbox-container");
if (inboxContainer) {
  blogs.forEach((blog, i) => {
    const section = document.createElement("div");
    section.className = "blog-card";
    section.innerHTML = `<h3>📥 ${blog.name}</h3>`;
    blog.emailAccounts.forEach((acc) => {
      section.innerHTML += `
        <div class="email-card">
          <p><strong>Email:</strong> ${acc.email}</p>
          <p><strong>Inbox:</strong> ${acc.inbox.join(", ")}</p>
        </div>
      `;
    });
    inboxContainer.appendChild(section);
  });
}

// Emails Info Page
const emailListContainer = document.getElementById("email-accounts-list");
if (emailListContainer) {
  blogs.forEach((blog) => {
    blog.emailAccounts.forEach((acc) => {
      const card = document.createElement("div");
      card.className = "blog-card";
      card.innerHTML = `
        <h3>📧 ${acc.email}</h3>
        <p><strong>Password:</strong> ${acc.password}</p>
        <p><strong>Platforms:</strong> ${acc.platforms.join(", ")}</p>
      `;
      emailListContainer.appendChild(card);
    });
  });
                  }
