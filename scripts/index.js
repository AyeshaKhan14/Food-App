import nav from "../components/navbar.js";
document.querySelector("#navbar").innerHTML=nav();

import  {getData,append} from "./append.js";
//container ko .then ke bhr hi declr krna
let cont=document.querySelector("#showData")



let SearchInput=async()=>{
    try{
       let input=document.querySelector("#query").value;
        let response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        var data=await response.json();
         console.log(data.meals)
        appendContainer(data.meals)
    }catch(err){
        console.log(err)
    }
    
}
//index.js me sib import or .then hnga baki sab dusre js me
 getData(`https://www.themealdb.com/api/json/v1/1/categories.php`).then((res)=>{
      // console.log(res)
       append(res,cont)    //append index.js me hnga or return other js me

 });


 //nav-search


 let x=document.querySelector("#query");
    x.addEventListener("input",SearchInput)
    
    x.addEventListener("click",()=>{
        container.style.display="block"
    })
    cont.addEventListener("mouseout",()=>{
        container.style.display="none"
    })
 
 let appendContainer=(data)=>{
 let container=document.querySelector("#container")
     data.forEach(({strMealThumb,strMeal})=>{
 
         let Div=document.createElement("div")
 
         let img=document.createElement("img")
         img.src=strMealThumb;
 
         let h2=document.createElement("h2")
         h2.innerText=strMeal;

         let meal={
            strMealThumb,
            strMeal
         }
 
         Div.append(img,h2)
         Div.addEventListener("click",()=>{
            nextPage(meal)
         })
         container.append(Div)
        //  container.style.display="none"
 
     })
 
 }
 let nextPage=(meal)=>{
    localStorage.setItem("mealdata",JSON.stringify(meal));
    window.location.href="showRecp.html"
 }
