// scripts.js - Dreameo Work Frontend Logic with Email Inbox

const blogs = [
  {
    id: "blog1",
    name: "Tech Zone",
    earningsToday: 1.25,
    emails: [
      {
        address: "techzone.1@email.com",
        inbox: [
          {
            from: "adsense@google.com",
            subject: "Earnings update",
            time: "09:22 AM",
            snippet: "Your daily revenue is ready..."
          },
          {
            from: "alert@pinterest.com",
            subject: "Policy Notice",
            time: "08:01 AM",
            snippet: "One of your pins was removed."
          }
        ]
      },
      { address: "techzone.2@email.com", inbox: [] },
      { address: "techzone.3@email.com", inbox: [] },
      { address: "techzone.4@email.com", inbox: [] },
      { address: "techzone.5@email.com", inbox: [] }
    ]
  }
  // يمكنك تكرار هذا النموذج لبقية المدونات blog2 إلى blog10
];

function renderBlogs() {
  const container = document.getElementById("blogs-container");
  container.innerHTML = "";

  blogs.forEach((blog) => {
    const card = document.createElement("div");
    card.className = "blog-card";

    card.innerHTML = `
      <h3>${blog.name}</h3>
      <p><strong>Earnings Today:</strong> $${blog.earningsToday.toFixed(2)}</p>
      <button class="inbox-toggle" onclick="toggleInbox('${blog.id}')">📥 عرض الإيميلات</button>
      <div class="inbox" id="${blog.id}-inbox" style="display: none;"></div>
    `;

    container.appendChild(card);
  });
}

function toggleInbox(blogId) {
  const inboxEl = document.getElementById(`${blogId}-inbox`);
  const blog = blogs.find((b) => b.id === blogId);
  inboxEl.innerHTML = "";

  blog.emails.forEach((email) => {
    const block = document.createElement("div");
    block.className = "email-box";
    block.innerHTML = `<h4>📧 ${email.address}</h4>`;

    if (email.inbox.length === 0) {
      block.innerHTML += `<p class='empty'>📭 لا توجد رسائل</p>`;
    } else {
      email.inbox.forEach((msg) => {
        block.innerHTML += `
          <div class="email-msg">
            <p><strong>${msg.from}</strong> — ${msg.subject}</p>
            <small>${msg.time} — ${msg.snippet}</small>
          </div>
        `;
      });
    }

    inboxEl.appendChild(block);
  });

  inboxEl.style.display = inboxEl.style.display === "none" ? "block" : "none";
}

function calculateTotalEarnings() {
  const total = blogs.reduce((sum, blog) => sum + blog.earningsToday, 0);
  document.getElementById("total-earnings").textContent = `$${total.toFixed(2)}`;
}

window.addEventListener("DOMContentLoaded", () => {
  renderBlogs();
  calculateTotalEarnings();
});
