export const SurveyView = {
    getQuestion() {
        return document.getElementById("question").value.trim();
    },

    getAnswers() {
        return Array.from(document.getElementsByClassName("answer"))
            .map(input => input.value.trim())
            .filter(ans => ans !== "");
    },

    addAnswerField() {
        const container = document.getElementById("answers-container");
        const input = document.createElement("input");
        input.type = "text";
        input.className = "answer w-100 form-control my-2";
        input.placeholder = "Варіант відповіді";
        container.appendChild(input);
    },

    clearForm() {
        document.getElementById("question").value = "";
        document.getElementById("answers-container").innerHTML = `
            <input type="text" class="answer w-100 form-control" placeholder="Варіант відповіді">
        `;
    },
    
    displaySurveys(surveys) {
        const container = document.getElementById("surveys-list");

        if (!container) return;

        container.innerHTML = "";

        if (surveys.length === 0) {
            container.innerHTML = "<p class='text-muted'>Немає опитувань.</p>";
            return;
        }

        surveys.forEach((survey, index) => {
            const div = document.createElement("div");
            div.className = "card m-4";
            div.style = "border: 0;"
            div.innerHTML = `
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${survey.question}</h5>
                    <form id="survey-${index}" class="survey-form">
                        <ul class="list-group list-group-flush">
                            ${survey.answers.map((ans, i) => `
                                <li class="list-group-item">
                                    <input type="radio" name="answer" id="answer-${index}-${i}" value="${ans}">
                                    <label for="answer-${index}-${i}">${ans}</label>
                                </li>
                            `).join("")}
                        </ul>
                    </form>
                    <button class="btn btn-success mt-3 mb-2 submit-answer-btn">Відправити відповідь</button>
                    <small class="text-muted">Створено: ${new Date(survey.createdAt).toLocaleString()}</small>
                </div>
            `;
            container.appendChild(div);
        });
    },

    showSavedAnswers() {
        const savedAnswers = JSON.parse(localStorage.getItem("surveyAnswers")) || [];
        savedAnswers.forEach((answerData, index) => {
            console.log(`Відповідь #${index + 1}:`);
            console.log(`Питання: ${answerData.question}`);
            console.log(`Відповідь: ${answerData.answer}`);
            console.log(`Час: ${answerData.timestamp}\n`);
        });
    },

    showRegisteredUsers() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.forEach(user => {
            console.log('Зареєстрований користувач:', user.email);
        });
    }
};