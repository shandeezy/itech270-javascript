window.onload = () =>{
 //document.querySelector("#time-btn").addEventListener("click" , getTheTime)
 document.querySelector("#time-btn").addEventListener("click" , (e)=>{
    e.preventDefault()
    console.log(e)
 })
    document.querySelector("#toggle-heading").addEventListener("click", toggleContent)


}


const getTheTime =()=>{
    const button = document.querySelector("#time-btn");
    console.log(button);
}
const toggleContent = (e)=>{
    const content = document.querySelector("#toggle-content");
    if(content.style.display != "block"){
        content.style.display = "block";
     }else{
        content.style.display = "none";

    }
    console.log(content.style.display)
}