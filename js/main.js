import { SurveyController, RegisterController, LoginController } from './controller.js';

document.addEventListener('DOMContentLoaded', () => {
    SurveyController.init();
});

document.addEventListener("DOMContentLoaded", function() {
    // Знаходимо всі кнопки "Відправити відповідь"
    const submitButtons = document.querySelectorAll(".submit-answer-btn");

    // Додаємо обробник події до кожної кнопки
    submitButtons.forEach(button => {
        button.addEventListener("click", SurveyController.handleSubmitAnswer);
    });
});

document.addEventListener('DOMContentLoaded', () => {
  // Для реєстрації користувача
  const registerForm = document.querySelector('#registerForm'); // знайти форму на сторінці
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();  // запобігаємо перезавантаженню сторінки
      RegisterController.registerUser();  // викликаємо метод реєстрації
    });
  }

  // Для логіну користувача
  const loginForm = document.querySelector('#loginForm');  // знайти форму на сторінці
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();  // запобігаємо перезавантаженню сторінки
      LoginController.loginUser();  // викликаємо метод логіну
    });
  }
});

// localStorage.clear();