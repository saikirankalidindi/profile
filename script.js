    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const toggleRegisterLink = document.getElementById("toggle-register");
    const toggleLoginLink = document.getElementById("toggle-login");

    toggleRegisterLink.addEventListener("click", () => {
      loginForm.style.display = "none";
      registerForm.style.display = "block";
    });

    toggleLoginLink.addEventListener("click", () => {
      loginForm.style.display = "block";
      registerForm.style.display = "none";
    });


  
  const forgotPasswordLink = document.getElementById('forgotPasswordLink');
  const switchToRegisterLink = document.getElementById('switchToRegister');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulate successful login
    // In a real scenario, you would perform actual authentication here
    const email = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    
    if (email === 'thesaiedfs' && password === 'password') {
      // Display toast message
      const toast = document.createElement('div');
      toast.classList.add('toast');
      toast.textContent = 'Login successful!';
      document.body.appendChild(toast);
      
      // Redirect to another page after a delay
      setTimeout(function() {
        window.location.href = 'responsive/index.html';
      }, 2000); // 2 seconds
    } else {
      // Handle incorrect credentials here
      // For example, display an error message
      // You can also show an error toast
    }
  });