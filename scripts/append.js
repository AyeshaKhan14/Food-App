 let getData= async(url)=>{
    try{
        let response=await fetch(url);
        let data=await response.json();
        // console.log(data.categories)
        return data.categories 

    }catch(err){
        console.log("err:",err)
    }
}
let append=(data,cont)=>{
    data.forEach(({strCategoryThumb,strCategory,strCategoryDescription})=>{

        let div=document.createElement("div")

        let img=document.createElement("img")
        img.src=strCategoryThumb;

        let name=document.createElement("h2")
        name.innerText=strCategory;

        let p=document.createElement("p")
        p.innerText=strCategoryDescription;

        div.append(img,name)
        cont.append(div)
        
    })

}


export {getData,append}

