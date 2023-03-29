const messages = [
    "Aquí es donde todo comienza",
    "COMMIT realizado",
    "Tu terminal no funciona",
    "COMMIT todos los archivos",
    "The same thing we do every night, Pinky - try to take over the world!",
    "Lock S-foils in attack position",
    "This commit is a lie",
    "I'll explain when you're older!",
    "Here be Dragons",
    "Reinventing the wheel. Again.",
    "This is not the commit message you are looking for",
    "Batman! (this commit has no parents)",
    "Mas palabras para escribir",
    "Mi primer NPM",
    "Platzi es una plataforma muy buena",
    "Poner en practica y ser mas eficiente en el día a día",
    "No delicuencia, más programación",
    "Esto es un cambio añadido para una versión nueva"
  ];
  
  const randomCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    randomCommit
  };