import nav from "../components/nav.js";
document.querySelector("#navbar").innerHTML=nav();

let getData= async(url)=>{
    try{
        let response=await fetch(url);
       let data=await response.json();
      return data.meals

    }catch(err){
        console.log("err:",err)
    }
}
let append=(data,cont)=>{
    data.forEach(({strMealThumb,strMeal,strCategory,strArea})=>{

        let div=document.createElement("div")

        let img=document.createElement("img")
        img.src=strMealThumb;

        let name=document.createElement("h2")
        name.innerText=strMeal;

        let p=document.createElement("p")
        p.innerText=strCategory;

        let des=document.createElement("p")
        des.innerText=strArea;

        div.append(img,name,p,des)
        cont.append(div)
        
    })

}


export {getData,append}