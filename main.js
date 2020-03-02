// // fetch("data.json")
// .then((response)=>{
//     return response.json();
// }).then((data)=>{
//     //console.log(data);
//     display_info(data.basics);
// })
// var bodyelement=document.querySelector("#root");
// function display_info(info){
//     let card=document.createElement("div");
//     let heading=document.createElement("h2");
//     let h1=document.createElement("a");
//     let h2=document.createElement("a");
//     let h3=document.createElement("h3")
//     card.classList.add("card");
//     heading.textContent=info.name;
//     h1.href="mailto:"+info.email;
//     h1.textContent=info.email;
//     let br=document.createElement("br");
//     let br1=document.createElement("br");
//     h2.href="tel:"+info.mobile;
//     h2.textContent=info.mobile;

//     h3.textContent=info.role;
//     bodyelement.appendChild(card);
//     card.append(heading);
    
   
//     let line=document.createElement("hr");
//     line.color="red";
//     card.append(line);
//     card.append(h1);
//     card.append(br);
//     card.append(br1);
//     card.append(h2);
//     card.append(h3)
//     var button=document.createElement("a");
//     button.textContent="view profile";
//     button.classList.add("btn");
//     card.append(button);
// }
fetch("data.json")
.then((response)=>{
    return response.json();
}).then((data)=>{
    //console.log(data);
    display_info(data.basics);
})
var bodyelement=document.querySelector("#root");
function display_info(info){
    let card=document.createElement("div");
    let heading=document.createElement("h2");
    let h1=document.createElement("a");
    let h2=document.createElement("a");
    let h3=document.createElement("h3")
    card.classList.add("card");
    heading.textContent=info.Name;
    h1.href="mailto:"+info.Email;
    h1.textContent=info.Email;
    let br=document.createElement("br");
    let br1=document.createElement("br");
    h2.href="tel:"+info.Mobile;
    h2.textContent=info.Mobile;
    h3.textContent=info.Role;
    bodyelement.appendChild(card);
    card.append(heading);
    let line=document.createElement("hr");
    // line.color="red";
    card.append(line);
    card.append(h1);
    card.append(br);
    card.append(br1);
    card.append(h2);
    card.append(h3)
     var button=document.createElement("a");
     button.textContent="view profile";
     button.classList.add("btn");
     card.append(button);
}