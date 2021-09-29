var corpoTabela = document.querySelector("tbody"); 


function opcaoOrdenacao(){
  var opcaoOrdenacao = document.getElementById('ordenacao').value;
  //onload(document.getElementById('body'));
  console.log(opcaoOrdenacao);
  
  if(opcaoOrdenacao == '1'){
    ordenacaoNomeAsc();
  }else if(opcaoOrdenacao == '2'){
    ordenacaoNomeDesc();
  }
}


function ordenacaoNomeAsc(){
    let employeesPromise = fetch("http://localhost:3000/employees");
    employeesPromise.then((r1) => {
      r1.json().then((employees) => {
        let rolesPromise = fetch("http://localhost:3000/roles");
        rolesPromise.then((r2) => {
          r2.json().then((roles) => {
          let table = renderTableNomeAsc(employees, roles);
          document.getElementById("app").innerHTML = table;
          });
        });
      });
    });
}

function ordenacaoNomeDesc(){
  let employeesPromise = fetch("http://localhost:3000/employees");
  employeesPromise.then((r1) => {
    r1.json().then((employees) => {
      let rolesPromise = fetch("http://localhost:3000/roles");
      rolesPromise.then((r2) => {
        r2.json().then((roles) => {
          let table = renderTableNomeDesc(employees, roles);
          document.getElementById("app").innerHTML = table;
        });
      });
    });
  });
}


  function renderTableNomeAsc(employees, roles) {
    
    employees.sort((i1,i2)=>{
      if(i1.name < i2.name){
        return -1;
      }else if(i1.name > i2.name){
        return 1;
      }else{
        return 0;
      }
    });

    let rows = employees.map((employee) => {
      let role = roles.find((role) => role.id == employee.role_id);
  
      return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td></tr>`;
    });
    return `<table>${rows.join("")}</table>`;
    }
  

  function renderTableNomeDesc(employees, roles) {
  
    
    employees.sort((i1,i2)=>{
      if(i1.name > i2.name){
        return -1;
      }else if(i1.name < i2.name){
        return 1;
      }else{
        return 0;
      }
    });
    
    let rows = employees.map((employee) => {
      let role = roles.find((role) => role.id == employee.role_id);
      return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td></tr>`;
    });
    return `<table>${rows.join("")}</table>`;
  }
    
    
  
  