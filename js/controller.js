
import { SurveyModel, UserModel } from './model.js';
import { SurveyView } from './view.js';

export const SurveyController = {
    init() {
        const addBtn = document.getElementById("addAnswerBtn");
        if (addBtn) {
            addBtn.addEventListener("click", SurveyView.addAnswerField);
        }

        const saveBtn = document.getElementById("saveSurvey");
        if (saveBtn) {
            saveBtn.addEventListener("click", this.handleSaveSurvey.bind(this));
        }

        this.displayAllSurveys();
    },

    handleSaveSurvey() {
        const question = SurveyView.getQuestion();
        const answers = SurveyView.getAnswers();

        if (!question || answers.length === 0) {
            alert("Введіть питання та хоча б одну відповідь.");
            return;
        }

        const survey = {
            question,
            answers,
            createdAt: new Date().toISOString()
        };

        SurveyModel.save(survey);
        SurveyView.clearForm();
        alert("Опитування збережено!");

        this.displayAllSurveys(); // оновлення списку
    },

    displayAllSurveys() {
        const surveys = SurveyModel.getAll();
        SurveyView.displaySurveys(surveys);
    },

    // Збір відповідей з форми:
    getSelectedAnswers(formId) {
        const form = document.getElementById(formId);
        const selectedAnswers = [];
        
        const inputs = form.querySelectorAll('input[type="radio"]:checked, input[type="checkbox"]:checked');
        inputs.forEach(input => {
            selectedAnswers.push(input.value);
        });

        return selectedAnswers;
    },

    // Обробка натискання на кнопку "Відправити відповідь":
    handleSubmitAnswer(event) {
        // Отримуємо картку, до якої належить кнопка
        const card = event.target.closest('.card-body');

        // Знаходимо вибрані варіанти відповіді всередині цієї картки
        const selectedAnswer = card.querySelector('input[name="answer"]:checked');

        if (selectedAnswer) {
            const questionText = card.querySelector('.card-title').textContent;
            const answer = selectedAnswer.value;
            const timestamp = new Date().toLocaleString();

            const answerData = {
                question: questionText,
                answer: answer,
                timestamp: timestamp
            };

            let savedAnswers = JSON.parse(localStorage.getItem("surveyAnswers")) || [];
            savedAnswers.push(answerData);
            localStorage.setItem("surveyAnswers", JSON.stringify(savedAnswers));
            alert("Ваша відповідь збережена!");
            SurveyView.showSavedAnswers()
        } else {
            alert("Будь ласка, виберіть відповідь перед відправкою.");
        }
    }
};

export class RegisterController {
  static registerUser() {
    const email = document.querySelector('#inputEmail').value;
    const password = document.querySelector('#inputPassword').value;
    const confirmPassword = document.querySelector('#inputPasswordAgain').value;
    // Перевірка правильності введених даних
    if (password === confirmPassword) {
      // console.log("RegisterController triggered");
      // console.log(email, password, confirmPassword);
      const user = { email, password };
      localStorage.setItem('user', JSON.stringify(user));
      // SurveyView.showRegisteredUsers()
      alert('Реєстрація успішна');
    } else {
      alert('Паролі не співпадають');
    }
  }
}
  
export class LoginController {
  static loginUser() {
    const email = document.querySelector('#inputEmail').value;
    const password = document.querySelector('#inputPassword').value;
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
      alert('Вхід успішний');
    } else {
      alert('Невірні дані для входу');
    }
  }
}
  
