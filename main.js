const toastBtn = document.querySelector("#toastBtn");
const toastArea = document.querySelector("#toastArea")
let counter = 1;
let generateToast = function(){
    let toast = document.createElement("DIV");
    toast.classList.add('toast');
    toast.textContent = "This is a toast msg " + counter;
    toastArea.appendChild(toast)
    counter++;

    setTimeout(()=>{
        toast.classList.add("add")
    },250)
    setTimeout(()=>{
        toast.classList.add("remove");
        setTimeout(()=>{
            toast.remove();
            counter--
        },250)
    },3000)
}

toastBtn.addEventListener('click',generateToast);

