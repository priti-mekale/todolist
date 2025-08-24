const cl=console.log;

const todoForm =document.getElementById('todoForm')
const todoItem =document.getElementById('todoItem')
const todoContainer =document.getElementById('todoContainer')

 todoArr =[];
 const templating = arr=>{
		let result =`<ul class="list-group">`;
		for(let i=0;i<arr.length;i++){
			result += `<li class="list-group-item">${arr[i].todoItem}</li>`
		}
		result +=`</ul">`
		todoContainer.innerHTML=result
 }
 templating(todoArr)

const onTodoAdd = eve=>{
	eve.preventDefault()
	
	let todoObj={
		todoItem : todoItem.value
	}
	todoForm.reset()
		cl(todoObj)
		todoArr.push(todoObj)
		templating(todoArr)
}



todoForm.addEventListener('submit',onTodoAdd)





