
let input = document.querySelector('.add');
let list = document.querySelector('.todos');
let search = document.querySelector('.search input');

const template = newTodo=>{
    const html = `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${newTodo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `;
    list.innerHTML+= html;
}

//add item
input.addEventListener('submit',e=>{
    e.preventDefault();
    let newTodo = input.add.value.trim();
    if(newTodo.length){
        template(newTodo);
        input.reset();
    }
    
})
//delete item
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})
//search item

let filterTodos = (term)=>{
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));

}

search.addEventListener('keyup',()=>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})