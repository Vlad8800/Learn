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

async function doChores(){
try{
    const walkDogResult = await walkdog();
console.log(walkDogResult)

const cleanKitcheResult = await cleanKitchen()
console.log(cleanKitcheResult)

const tekeOutTrashResult = await takeOutTrash()
console.log(tekeOutTrashResult)
}
catch(error){
    console.log(error)
}
}
 doChores()