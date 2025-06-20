// التحقق من بيانات تسجيل الدخول
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const error = document.getElementById("error-message");

      // التحقق من الاسم وكلمة المرور
      if (
        username === "AmmarAhmedmansourking" &&
        password === "This is my password"
      ) {
        localStorage.setItem("authenticated", "true");
        window.location.href = "dashboard.html";
      } else {
        error.textContent = "❌ Invalid username or password";
        error.style.color = "red";
      }
    });
  }

  // إذا كان مسجل الدخول بالفعل
  if (
    window.location.pathname.endsWith("index.html") &&
    localStorage.getItem("authenticated") === "true"
  ) {
    window.location.href = "dashboard.html";
  }
});
