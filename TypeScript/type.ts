//在TS裡面除了JS基本型別以外，還新增了其他的型別可以作使用
let a:string = "" //字串

const b:number = 100 //數字

const c:boolean = true //布林

const d:null = null //空值

const e:undefined = undefined //未定義

const f:any = "any" //任意型別，使用這個型別會跳過型別檢查，不會報錯，但建議不要使用這個型別，不然用TS就沒有意義了
let f1 //如果不指定任何類型和值，其變數會是any屬性
a = f  //f的類型是any，可以賦值給任何一個變數而不會有型別檢查，這樣就失去了使用TS的意義

// const g:number[] = [2,6,3,8,8]
const g:Array<number> = [2,6,3,6,3] //陣列有兩種寫法，都可以規範陣列裡面的數值

const g1:[boolean,string,number] = [true,"",30] //這種方式叫做元組，可以理解成規範陣列裡面固定索引值的型別

const h:{name:string;age:number} = {
  name:"Leon",
  age:20
} //物件則是可以先規範裡面的屬性型別

function i () : void {
  console.log("hello");
  return undefined
}//空型別，則是針對確定不會有任何返回值的函式做使用，例如只會執行副作用不需要返回任何值的函式，比較特別的是如果返回undefine也算是空的值

function j(message:string) : never {
  throw new Error(message)
}//永不型別，針對無限迴圈或是檢測錯誤訊息的函式作使用，

enum direction {
  Up = 1,
  Down,
  Left,
  Right
}
enum state{
  Success = "SUCCESS",
  Fail = "FAIL",
  Pending = "PENDING"
}
const dir: direction = direction.Up; 
const message:state = state.Success//枚舉型別，可以自定義數值名稱並利用類似物件key跟value的概念去使用它，通常會用在已經知道會有哪些值的情況下

let value:unknown = [10,20,20,33]
// value + 10 = 30
if(Array.isArray(value)){
  const value2 = value.map(item => item + 30)
} //unkown型別類似於any，但它會限制使用者在每次要使用它時，都要做型別偵測不然會報錯，陣列和物件都要使用函式去偵測，其他基本型別就使用typeof即可


//在TS裡面會在建立變數會直接指定型別，若已經宣告了變數型別在更改成其他型別就會報錯
const k:string = ""
const k1:20 = 20 //也可以使用這種方式去定義型別 

//在TS裡面如果直接這樣賦值，TS會自動抓取賦值的型別做限制
let l = true
// l = "字串" 這邊如果賦值不同型別則會報錯
l = false

//可以使用聯合型別來去規範變數可使用的型別類型有哪些
let m: string | boolean = ""
m = true

//也可以使用這種方式在限制型別之外，限制固定的數值
let m1: "字串" | true | 30
m1 = 30 

//還有一種叫做類型斷言的技巧，是當我們很確定一個值的型別時，可以用的方式
let n:unknown
let n1:string

n1 = n as string //可以利用as關鍵字進行類型檢查
n1 = <string>n //也可以利用這種方式實現類型斷言