

type employee={id:number,empName:string};
type department={deptmt:string}

type company=employee & department;

let entryofStudent : company= {deptmt:'QA',id:1225,empName:'Nandha'}  ;

console.log(entryofStudent)