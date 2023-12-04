function func(a,b){
return a+b
}
console.log(func(8,9))
let car={
    name:"suzuki",
    model:20
}
console.log(`${car.name} is my car with ${car.model} model`)
 let data= {
    dob:17,
    fname:"Ali",
    lname:"khan",
    phone:675789,
    name:function(){
        return this.fname+" "+this.lname
    }
 }
 console.log(`my name is ${data.name()} my number is ${data.phone}`)
//string methods
 let str='ali is good boy';
 let res=str.length;
 console.log(res)

 let sl=str.slice(7,11)
 console.log(sl)

 let subsg=str.substring(7,11)
 console.log(subsg)

 let str2="Ali is goodboy. Ali is 13 years"
 let rep= str2.replace("Ali","Ahmed")
console.log(rep)

let repl=str2.replace(/Ali/g, "Ahmed")
console.log(repl)

let str3="Cats are good.Cats are honest.I love cats"
 str3=str3.replaceAll("Cats", "Dogs")
str3=str3.replaceAll("cats", "dogs")
    console.log(str3)
    
let str4="Hello word"
text=str4.toUpperCase()
console.log(text)
text=str4.toLowerCase()
console.log(text)
spl=str3.split(" ")
console.log(str3[])