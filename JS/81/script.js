function walkdog(){

    return new Promise((resolve,reject)=> {
     setTimeout(()=>{
    
        const dogwalked = true;
        if(dogwalked){
             resolve("You walk the dog");
        }else{
            reject("Dog is not walked");
        }
    }, 1500);   
    })
}
function cleanKitchen(){
  return new Promise((resolve,reject)=> {
    setTimeout(()=>{
        const KitchenCleaned = true;
        if(KitchenCleaned){
   resolve("You clean the Kitchen")
        }else{
            reject("ypu DON`T clean the Kitchen");
        }
 },2500);
    })}
function takeOutTrash(){
   
    return new Promise((resolve,reject)=>{
    setTimeout(()=> {
    const TrashTakenOut = true;
    if(TrashTakenOut){
   resolve("You take out the trash")
}else{
    reject("You don`t take out the trash")
}
    },500);
     })
}

walkdog().then(value => {console.log(value); return cleanKitchen()})
.then(value =>{console.log(value); return takeOutTrash()})
.then(value =>{console.log(value); console.log("Correct")})
.catch(error =>{console.error(error)})