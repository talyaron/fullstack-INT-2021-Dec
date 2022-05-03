const root:HTMLElement=document.querySelector('#root');
root.onmouseenter=handleChange;
function handleChange(ev:any){
    ev.target.style.color="red"
}