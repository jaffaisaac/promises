/**
 * promises solve the call back hell
 * promises take instruction like:- first do this,
 *                                - then do this,
 *                                - next to that,
 *                                - next , next ,next according to your program.
 * 
 */


//here is our  ice cream project in Promise 

/**
 * here are the steps in the making and serving  of the  ice cream and time in seconds
 * place_order ----->2s
 * cut_frult  ------>2s
 * Add water & ice-->1s
 * start machine --->1s
 * select container->2s
 * select toppings ->3s
 * serve ice cream-->2s
 */


let stocks ={
    fruits: ["strawberry" ,"graps","bananas","apples"],
    Liquids:["water","Ice"],
    holder:["cone","cup","stick"],
    toppings :["chocolates","peanuts"]
}

//this condition is to check if the shop is open or closed
let is_open =true;
//if true customer will be serve ice cream or closed no service 


let order =(time ,work)=>{

    return new Promise(  (resolve,reject)=>{
        if(is_open){
            // here you must create a relationship btn time and work as in the asynchronous function as below
            setTimeout(()=>{
                resolve(work())
            },time)
        }else{
            reject(console.log(`Our Shop is closed`))
        }
    } )
}
order(2000, ()=>console.log(`${stocks.fruits[0]} was selected from the fruilts`))
.then(
    ()=>{
        return order(0000,()=>console.log(`Production has started`))
    }
).then(
    ()=>{
        return order(2000,()=>{console.log(`cutting the fruilts in progress`)})
    }
).then(
    ()=>{
        return order(1000,()=>{console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} was add to the Solution`)})
    }
).then(
    ()=>{
        return order(1000,()=>console.log(`Machine has started`))
    }
).then(
    ()=>{
        return order(2000,()=>{console.log(` ${stocks.holder[1]} has been selected `)})
    }
).then(
    ()=>{
        return order(3000,()=>console.log(`${stocks.toppings[1]} has been add to top `))
    }
).then(
    ()=>{
        return order(1000,()=>console.log(`Ice Cream ready!!! Pick and Go `))
    }
)