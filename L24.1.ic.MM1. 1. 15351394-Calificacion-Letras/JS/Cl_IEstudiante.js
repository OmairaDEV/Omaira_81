export default class IEstudiante {
    readName() {
        return prompt("Enter name");
    }
    readFinalGrade() {
        return parseFloat(prompt("Enter the final grade"));
    }
    reportStudent(name, finalGrade) {
        const grade = this.calculateGrade(finalGrade);
        return `
            <br> Name: ${name}
            <br> Final Grade: ${finalGrade}
            <br> Grade: ${grade}
        `;
    }
    calculateGrade (grade) {
        const gradeScale = ['F', 'D', 'C', 'B', 'A'];
        const gradeIndex = Math.floor((grade - 60) / 10);
        return gradeScale[Math.max(0, Math.min(gradeIndex, 4))];
    }
}