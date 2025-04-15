window.onload = () =>{
 //document.querySelector("#time-btn").addEventListener("click" , getTheTime)
 document.querySelector("#time-btn").addEventListener("click" , (e)=>{
    e.preventDefault()
    console.log(e)
 })


}


const getTheTime =()=>{
    const button = document.querySelector("#time-btn");
    console.log(button);
}
