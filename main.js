const rochi = {
  name: "Rocio",
  age: 23,
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  },
};

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCursito) {
  this.cursosAprobados.push(nuevoCursito);
};

const chulito = new Student("Christian Moreno", 26, [
  "Curso de Salesforce",
  "Curso de HTML",
  "Curso de JAVA",
]);

// Hacer que rochI APRUEBE otro curso
rochi.cursosAprobados.push("Curso de Responsive Design");
