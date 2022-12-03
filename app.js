

window.addEventListener('load', ()=> {
    const form = document.querySelector('#task-form')
    const input = document.querySelector("#task-input")
    const list_el = document.querySelector("#tasks")
    const saved = JSON.parse(localStorage.getItem('tasks'))


    form.addEventListener('submit', (event) =>{
        event.preventDefault()

        const task = input.value

        if(!task){
            alert('Please add a task')
            return
        }

        const task_element = document.createElement("div")
        task_element.classList.add('task')

        const task_content_element = document.createElement('div')
        task_content_element.classList.add('content')

        task_element.appendChild(task_content_element)

        const task_input_element = document.createElement('input')
        task_input_element.classList.add("text")
        task_input_element.type = "text"
        task_input_element.value = task
        task_input_element.setAttribute('readonly', 'readonly')

        task_content_element.appendChild(task_input_element)

        const task_actions = document.createElement("div")
        task_actions.classList.add('actions')

        const task_edit = document.createElement('button')
        task_edit.classList.add('edit')
        task_edit.innerHTML = "Edit"

        const task_delete = document.createElement('button')
        task_delete.classList.add('delete')
        task_delete.innerHTML = "Delete"

        task_actions.appendChild(task_edit)
        task_actions.appendChild(task_delete)

        task_element.appendChild(task_actions)

    
        list_el.appendChild(task_element)
        
        input.value = ""

        task_edit.addEventListener('click', () =>{
            if (task_edit.innerText.toLowerCase()=='edit'){
                task_input_element.removeAttribute('readonly')
                task_input_element.focus()
                task_edit.innerText = "Save"
            }else{
                task_input_element.setAttribute('readonly', 'readonly')
                task_edit.innerText = 'Edit'
            }
        })

        task_delete.addEventListener('click', () =>{
            list_el.removeChild(task_element)
        })
        localStorage.setItem("task", task)
    })

})
