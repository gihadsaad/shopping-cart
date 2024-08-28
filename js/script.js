 
 let rendData=document.querySelector(".rendData");
let rendDataCart=document.querySelector(".rendDataCart");
let daynamic_count=document.querySelector(".daynamiccount");
let arr=[];


 async function getData(){
    let response= await fetch("https://fakestoreapi.com/products");

    let data= await response.json();
//console.log(data)
     data.map ((ele) =>{
      let productMainDiv=document.createElement("div");
   //console.log(ele)
     let createImgEle=document.createElement("img");
     let createTitle=document.createElement("p");
     let createPriceEle=document.createElement("p");
     let createTextPrice=document.createTextNode(`price: $${ele.price}`);
     let createbtnEle=document.createElement("button");
     let btnText=document.createTextNode("Add To Cart");
    let createTextTitle=document.createTextNode(`${ele.title.slice(0,35)} ...`);
     createImgEle.setAttribute("src",ele.image);
     createImgEle.setAttribute("class","myImage");
     productMainDiv.setAttribute("class","boxmain")
     createTitle.appendChild(createTextTitle);
     createPriceEle.setAttribute("class","priceelemet")
     createbtnEle.setAttribute("class","btnelement")
     createPriceEle.appendChild(createTextPrice);
    
     createTitle.setAttribute("class","productTitle")
     createbtnEle.appendChild(btnText);
     productMainDiv.appendChild(createImgEle);
     productMainDiv.appendChild(createTitle);
     productMainDiv.appendChild(createPriceEle);
     productMainDiv.appendChild(createbtnEle);
     rendData.appendChild(productMainDiv);

     //rendData.appendChild(createImgEle);
     //rendData.appendChild(createTitle);
     //rendData.appendChild(createbtnEle)
     //rendData.appendChild(createPriceEle);
     

     function addToCart(image ,price){
      arr.push({ii:image,pp:price});
      console.log(arr)
      //let myCData=[];
      //let d={image,price}
      //myCData.push(d);
      //console.log(image,price);
      //alert("product added to cart")
      let cartMDiv=document.createElement("div")
        let cartImgEle=document.createElement("img");
        let cartTresh=document.createElement("i")
        cartTresh.setAttribute("class","fa-solid fa-trash")
        cartImgEle.setAttribute("src",image);
        let cartPriceEle=document.createElement("p");
         cartImgEle.setAttribute("class","cartImage");
         cartMDiv.setAttribute("class","cartstyle")
        let cartTextPrice=document.createTextNode(`$${price}`);
        cartPriceEle.setAttribute("class","cartprice")
        cartPriceEle.appendChild(cartTextPrice);
        // daynamic_count.innerHTML=myCData.length;
        daynamic_count.innerHTML=arr.length;
        cartMDiv.appendChild(cartImgEle);
        cartMDiv.appendChild(cartPriceEle);
        cartMDiv.appendChild(cartTresh);
        rendDataCart.appendChild(cartMDiv);
     }

     createbtnEle.addEventListener("click",() => addToCart(ele.image,ele.price))
     });

}
getData()