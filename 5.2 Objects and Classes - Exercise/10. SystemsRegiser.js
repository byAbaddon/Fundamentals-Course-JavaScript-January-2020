function systemsRegister(input) {                     //copy paste
  let systems = {}

  for (let i = 0; i < input.length; i++) {
      let [systemName, componentName, subcomponentName] = input[i].split(" | ")
      if (!systems.hasOwnProperty(systemName)) {
          systems[systemName] = {}
      }
      if (!(systems[systemName].hasOwnProperty(componentName))) {
          systems[systemName][componentName] = []
      }
      if (!(systems[systemName][componentName].includes(subcomponentName))) {
          systems[systemName][componentName].push(subcomponentName)
      }

  }

  let register = Object.entries(systems);
  register.sort((a, b) => {   
      if (Object.keys(b[1]).length - Object.keys(a[1]).length !== 0) {
          return Object.keys(b[1]).length - Object.keys(a[1]).length
      } else {               
          return a[0].localeCompare(b[0])
      }
  });

  register.forEach((x, i) => {                 
      let components = Object.entries(x[1])
      components.sort((a, b) => {
          return b[1].length - a[1].length
      });
      register[i][1] = components
  });

  for (let i = 0; i < register.length; i++) {   
      console.log(`${register[i][0]}`)
      for (let j = 0; j < register[i][1].length; j++) {   
          console.log(`|||${register[i][1][j][0]}`)
          for (let s = 0; s < register[i][1][j][1].length; s++) {  
              console.log(`||||||${register[i][1][j][1][s]}`)
          }
      }
  }

}

// systemsRegister([
//   'SULS | Main Site | Home Page',
//   'SULS | Main Site | Login Page',
//   'SULS | Main Site | Register Page',
//   'SULS | Judge Site | Login Page',
//   'SULS | Judge Site | Submittion Page',
//   'Lambda | CoreA | A23',
//   'SULS | Digital Site | Login Page',
//   'Lambda | CoreB | B24',
//   'Lambda | CoreA | A24',
//   'Lambda | CoreA | A25',
//   'Lambda | CoreC | C4',
//   'Indice | Session | Default Storage',
//   'Indice | Session | Default Security'
// ]
// )