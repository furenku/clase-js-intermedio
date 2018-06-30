let state = {
    taskList: [
        // {
        //     text: "Exercitation anim et consectetur aute qui velit magna adipisicing excepteur aliqua do non laborum aute.",
        //     time: "Mañana",
        //     duration: "0.5"
        // },
        // {
        //     text: "Commodo laboris ipsum tempor dolor ipsum sit aliqua mollit amet incididunt dolor mollit id ea.",
        //     time: "Hoy",
        //     duration: "2"
        // }
    ]
}


updateTaskListView = () => {

    let taskList = document.querySelector('.tasks ul')
    let taskTotalDuration = document.querySelector('.tasks .total-duration .hours')

    taskList.innerHTML = ''

    let totalDuration = 0

    totalDuration = state.taskList.reduce(
        (p,n) => parseInt(n.duration) + p, 0 
    )

    state.taskList.forEach( task => {

        // totalDuration += parseInt(task.duration)

        let newLi = document.createElement('li')


        let textDiv = document.createElement('div')
        textDiv.setAttribute('class','text')
        textDiv.innerHTML = task.text
        

        let timeDiv = document.createElement('div')
        timeDiv.setAttribute('class','time')
        timeDiv.innerHTML = task.time
        
        
        let durationDiv = document.createElement('div')
        durationDiv.setAttribute('class','duration')
        durationDiv.innerHTML = task.duration
        

        newLi.appendChild( textDiv )
        newLi.appendChild( timeDiv )
        newLi.appendChild( durationDiv )



        taskList.appendChild( newLi )
        
    })

    taskTotalDuration.textContent = totalDuration    
    

}


const form = document.getElementsByTagName('form')[0]

form.addEventListener('submit', (event) => {

    event.preventDefault()

    let taskInput = document
    .querySelector('form input[name=task]')

    let timeInput = document
    .querySelector('form input[name=time]')
   
    let durationInput = document
    .querySelector('form input[name=duration]')


    let task = taskInput.value
    taskInput.value = ''

    let time = timeInput.value
    timeInput.value = ''


    let duration = durationInput.value
    durationInput.value = ''

    addTask( task, time, duration );

})



function addTask( task, time, duration ) {

    let newTask = {
        text: task,
        time: time,
        duration: duration
    }

    state.taskList.push( newTask )
    
    updateTaskListView()

    storeState()

}


function readStoredState() {
    if( !! localStorage.getItem('state') ) {   
        state = JSON.parse( localStorage.getItem('state') )    
    }
}

function storeState() {
    localStorage.setItem('state', JSON.stringify( state ) )
}





readStoredState()

updateTaskListView()
