const to_do_list=[];
let acc='';

function render(){
    for(let i=0;i<to_do_list.length;i++){
        acc=acc+`<p> 
            ${to_do_list[i].name} ${to_do_list[i].date}
            <button onclick="to_do_list.splice(${i},1)
            render();">
            Delete
            </button>
        </p>`; //Generating the HTML
    }

    document.querySelector('.js-to-do-list').innerHTML=acc;
}

function addtodo(){
    const d=document.querySelector('.JS-input').value;
    const c=document.querySelector('.Js_Date').value;
    to_do_list.push({name:d, date:c});
    document.querySelector('.JS-input').value='';
    render();
    acc='';
}