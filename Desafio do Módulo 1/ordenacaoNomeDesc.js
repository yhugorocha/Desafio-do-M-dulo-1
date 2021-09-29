function ordenacaoNomeDesc(employees){

    employees.sort((i1,i2)=>{
        if(i1.name > i2.name){
          return -1;
        }else if(i1.name < i2.name){
          return 1;
        }else{
          return 0;
        }
      });
      }
  
      export {ordenacaoNomeDesc};