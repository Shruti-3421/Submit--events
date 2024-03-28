   const cl = console.log;
 
   const todoForm = document.getElementById('todoForm')
   const todoItem = document.getElementById('todoItem') 
   const todoContainer = document.getElementById('todoContainer')   
 
     const todoArr= [];

   const  todoTemplating = (arr) => {
        //templating
         let result = ``;
        arr.forEach(item => {
        result +=`<li class="list-group-item">${item.todoItem}</li>`
     })
         todoContainer.innerHTML = result;
   }

	 const onTodoAdd = (eve) => {
      eve.preventDefault();
     // cl(`submitted !!!`)
       let todoVal = todoItem.value;
       let todoobj = {
         todoItem : todoVal
       }
      //  cl(todoVal)
    //  todoArr.push(todoVal);
      todoArr.push(todoobj); 
        cl(todoArr);
      todoTemplating(todoArr);
  /* //templating
     let result = ``;
     todoArr.forEach(item => {
       result +=`<li class="list-group-item">${item.todoItem}</li>`
     })
         todoContainer.innerHTML = result;*/  //above seprate function create line 9
        eve.target.reset();
    }
	
	todoForm.addEventListener('submit', onTodoAdd)
	
	
	
	
	