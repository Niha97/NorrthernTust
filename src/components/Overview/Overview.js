import React from 'react';
import classes from './Overview.css';
import StatusCard from '../StatusCard/StatusCards';


const overview=(props)=>{
  
  const tasks  = {
     task : {
      name: 'Task Status',
      percent: '1',
      completed: '2',
      target: '155'

    },
    document : {
      name: 'Documenet Task status',
      percent: '3',
      completed: '1',
      target: '30'
    },      
  };


  const status = Object.keys(tasks).map((task) => {
    return <StatusCard title={tasks[task].name} percent={tasks[task].percent} completed = {tasks[task].completed} target={tasks[task].target} />
  })
	return(
			<div data-test="component-overview">
        <div>
        	<h1> Overview </h1>	
        </div>
        <div>
          {status}
        </div>
			</div>			
		);
}


export default overview;