
/*
Functions below
*/
class Err{
    constructor(){

    }
    createError(message){
        confirm(message)
    }
}
class CookieClicker{
    constructor(){
            const{cookies,items}= this.load()
            this.items=items||{clickMultiplier:1,passiveIncome:0}//this
            this.cookies=cookies||0
               const run=()=>{
                window.requestAnimationFrame(run)
                this.update()
            }
            run()
    }
    addPoints(amount){
        this.cookies+=amount
    }
    removePoints(amount){
        this.cookies-=amount
    }
    giveItem(item,amount=1){
        this.items[item]+=amount;
    }
    buy(item,cost){
        if(this.cookies<cost){
           throw `Not enought cookies`
        }else{
            this.removePoints(cost)
            this.giveItem(item)
            return `Bought ${item}`
        }
    }
    save(data={}){
        return localStorage.setItem("data",JSON.stringify(data))
    }
    load(){
        const data= localStorage.getItem("data")
        return (data?JSON.parse(data):({}))
    }
    update(){
        const multiLvl=document.getElementById("multiLvl")
        const counter = document.getElementById("counter")
        const passLvl = document.getElementById("passLvl")
        counter.innerText=`${this.cookies||'0'}`
        multiLvl.innerText=`${this.items.clickMultiplier||1}`
        passLvl.innerText=`${this.items.passiveIncome||0}`
    }
    reset(){
        this.cookies=0
        this.items={clickMultiplier:1,passiveIncome:0}
    }
}
/*
Code to execute below
*/
const clicker = new CookieClicker()
const multicost=document.getElementById("multiCost")
const passcost = document.getElementById("passCost")
multicost.innerText=Math.floor((clicker.items.clickMultiplier+1)*20)
passcost.innerText=Math.floor((clicker.items.passiveIncome+1)*50)
window.onclose=()=>clicker.save({items:clicker.items,cookies:clicker.cookies})
setInterval(()=>{
    clicker.save({items:clicker.items,cookies:clicker.cookies})
    clicker.addPoints(clicker.items.passiveIncome)
    const title = document.getElementById("title")
    const countr = title.innerText.split("|")
    title.innerText=countr[0]+"|"+clicker.cookies
},1000)
const img = document.getElementById("image")
img.src="./images/discord.png"
img.onclick=()=>clicker.addPoints(clicker.items.clickMultiplier)
img.width=100;
img.height=100;
const err=new Err()
const multiBuy = document.getElementById("multiBuy")
multiBuy.addEventListener("click",()=>{
    try{
        clicker.buy("clickMultiplier",Math.floor(clicker.items.clickMultiplier*20))
    }catch(e){
        console.log(e)
        err.createError(e)
    }
    multicost.innerText=Math.floor((clicker.items.clickMultiplier+1)*20)
})
const passBuy = document.getElementById("passBuy")
const reset = document.getElementById("reset")
passBuy.addEventListener("click",()=>{
    try{
        clicker.buy("passiveIncome",Math.floor(clicker.items.passiveIncome*50))
    }catch(e){
        console.log(e)
        err.createError(e)
    }
    passcost.innerText=Math.floor((clicker.items.passiveIncome+1)*50)
})
reset.addEventListener("click",()=>{
    console.log("reset")
    clicker.reset()
})