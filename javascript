document.getElementById('registrationForm').addEventListener('submit', function (e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value;

  if (name.length < 3) {
    alert("Name must be at least 3 characters.");
    e.preventDefault();
    return;
  }

  if (!email.includes('@')) {
    alert("Please enter a valid email.");
    e.preventDefault();
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert("Phone number must be 10 digits.");
    e.preventDefault();
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    e.preventDefault();
    return;
  }
});
