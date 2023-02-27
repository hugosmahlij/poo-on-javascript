/* const rochi = {
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

// Prototipos con la sintáxis de clases
class Student2 {
  constructor({email, name, age, cursosAprobados}) {
    this.email = email;
    this.name = name;
    this.age = age;
    this.cursosAprobados = [];
  }

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

const roper = new Student2({
  name: "Gonzalo",
  age: 26,
  email: "gonza@dota2.com",
});
 */

/* const piyu = {
  name: "Christian",
  username: "piyu69",
  points: 420,
  socialMedia: {
    twitter: "piyudestroyer",
    instagram: "lil.off",
    facebook: "Chrsitian Costa Liloff",
  },
  approvedCourses: [
    "Curso de ser europeo",
    "Curso de ser groso",
    "Curso de facha",
  ],
  learningPaths: [
    {
      name: "Ingenieria en Sistemas",
      courses: ["Sistemas1", "Estructura de programación"],
    },
    {
      name: "Ser europeo",
      courses: [
        "Curso de ser europeo",
        "Curso de ser groso",
        "Curso de dejar el euro atrás",
      ],
    },
  ],
};

const antonio = {
  name: "Antonio",
  username: "antonioevangelio",
  points: 420,
  socialMedia: {
    twitter: "antonioR",
    instagram: "dana.barrientos",
    facebook: "Antonio Rodriguez",
  },
  approvedCourses: [
    "Curso de ser quinielero",
    "Curso de saber contar guita",
    "Curso de gorriado",
  ],
  learningPaths: [
    {
      name: "Quiniela",
      courses: ["Curso de ser quinielero", "Curso de saber contar guita"],
    },
    {
      name: "Ser gorriado",
      courses: ["Curso de gorriado", "Curso de creertelas todas"],
    },
  ],
}; */

/* 
class LearningPath {
  constructor({ name, courses = [] }) {
    (this.name = name), (this.courses = courses);
  }
}

const escuelaWeb = new LearningPath({
  name: "Desarrollo Web",
  courses: ["html", "css", "javascript"],
});
const escuelaData = new LearningPath({
  name: "Data Science",
  courses: ["Logica", "Numeros", "Valores"],
});
const escuelaVideojuegos = new LearningPath({
  name: "Game Develop",
  courses: ["Unreal", "Pawno"],
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    (this.socialMedia = {
      twitter,
      instagram,
      facebook,
    }),
      (this.approvedCourses = approvedCourses);
    this.learningPaths = learningPaths;
  }
}

const mateas = new Student({
  name: "Matias",
  username: "MATe",
  email: "mati@colgado.com",
  twitter: "matifrndz",
  learningPaths: [escuelaData],
});

const fabi = new Student({
  name: "Fab;ian",
  username: "Verrael",
  email: "fabi@flamer.com",
  facebook: "Fabián Yrala",
  learningPaths: [escuelaVideojuegos],
}); */

function videoPlay(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com";
  console.log("Se está repoduciendo desde la url " + urlSecreta);
}

function videoStop(id) {
  const urlSecreta = "https://platziultrasecretomasquelanasa.com";
  console.log("Se ha pausado la url " + urlSecreta);
}

class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  repoducir() {
    videoPlay(this.videoID);
  }

  pausar() {
    videoStop(this.videoID);
  }
}

class Course {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }
}
