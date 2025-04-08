export const SurveyModel = {
    save(survey) {
        const surveys = JSON.parse(localStorage.getItem("surveys") || "[]");
        surveys.push(survey);
        localStorage.setItem("surveys", JSON.stringify(surveys));
    },

    getAll() {
        return JSON.parse(localStorage.getItem("surveys") || "[]");
    }
};

export class UserModel {
    static saveUser(email, password) {
        const user = { email, password };
        localStorage.setItem(email, JSON.stringify(user));
    }

    static getUser(email) {
        const user = localStorage.getItem(email);
        return user ? JSON.parse(user) : null;
    }

    static userExists(email) {
        return localStorage.getItem(email) !== null;
    }
}