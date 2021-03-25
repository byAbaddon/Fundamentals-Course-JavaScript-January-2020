function systemsRegister(input) {
  let systems = {}

  for (line of input) {
    let [sys, component, name] = line.split(' | ')
    if (!systems[sys]) systems[sys] = {}
    if (!(systems[sys][component])) systems[sys][component] = []
    if (!(systems[sys][component].includes(name))) systems[sys][component].push(name)
  }

  
  let sortedRegister = Object.entries(systems).sort((a, b) => {  
    if(Object.keys(b[1]).length - Object.keys(a[1]).length !== 0) 
      return Object.keys(b[1]).length - Object.keys(a[1]).length
     return a[0].localeCompare(b[0])
    })

    sortedRegister.forEach((x, i) => {
      sortedRegister[i][1] = Object.entries(x[1]).sort((a, b) => b[1].length - a[1].length)
    })


    for (const [key, val] of sortedRegister) {
      console.log(key)
      for (const [_, v] of Object.entries(val)) {
        console.log(`|||${v[0]}`)
        v[1].forEach(el => console.log(`||||||${el}`))
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
// ])







console.log('--------------------------')

function systemsRegister2(input) {
  let systems = {};

  for (let i = 0; i < input.length; i++) {
      let [systemName, componentName, subcomponentName] = input[i].split(" | ");
      if (!systems.hasOwnProperty(systemName)) {
          systems[systemName] = {};
      }
      if (!(systems[systemName].hasOwnProperty(componentName))) {
          systems[systemName][componentName] = [];
      }
      if (!(systems[systemName][componentName].includes(subcomponentName))) {
          systems[systemName][componentName].push(subcomponentName);
      }

  }

  let register = Object.entries(systems);
  register.sort((a, b) => {   // sorted by amount of components
      if (Object.keys(b[1]).length - Object.keys(a[1]).length !== 0) {
          return Object.keys(b[1]).length - Object.keys(a[1]).length;
      } else {               // by second criteria - alphabetical
          return a[0].localeCompare(b[0]);
      }
  });

  register.forEach((x, i) => {                  // needs info
    let components = Object.entries(x[1]);
    console.log(components);
      components.sort((a, b) => {return b[1].length - a[1].length});
    register[i][1] = components;
    
  });

  for (let i = 0; i < register.length; i++) {    // i - system array
      console.log(`${register[i][0]}`);
      for (let j = 0; j < register[i][1].length; j++) {   // j - components array
          console.log(`|||${register[i][1][j][0]}`);
          for (let s = 0; s < register[i][1][j][1].length; s++) {   // s -subcomponents 
              console.log(`||||||${register[i][1][j][1][s]}`);
          }
      }
  }

}
// systemsRegister2([
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
// ])
