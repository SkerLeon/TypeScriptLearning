//定義物件格式
enum Gender {
  man = "男",
  woman = "女"
}
interface Dog {
  readonly id:number,
  name:string,
  age:number,
  gender:Gender
}
interface Person {
  readonly socialSecurityId:string
  name:string,
  age:number,
  gender:Gender,
  isMarry:boolean,
  dog?:Dog[]
}
let Leon:Person = {
  socialSecurityId:"A123456789",
  name:"Leon",
  age:26,
  gender:Gender.man,
  isMarry:false,
  dog:[
    {
      id:1,
      name:"牧牧",
      age:10,
      gender:Gender.woman
    },
    {
      id:2,
      name:"柯柯",
      age:5,
      gender:Gender.man
    }
  ]
}

//定義函式格式
