export default class Estudiante {
    constructor(name, finalGrade) {
        this._name = name;
        this._finalGrade = finalGrade;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set finalGrade(finalGrade) {
        this._finalGrade = finalGrade;
    }
    get finalGrade() {
        return this._finalGrade;
    }
    calculateGrade (grade) {
        const gradeScale = ['F', 'D', 'C', 'B', 'A'];
        const gradeIndex = Math.floor((grade - 60) / 10);
        return gradeScale[Math.max(0, Math.min(gradeIndex, 4))];
    }
}