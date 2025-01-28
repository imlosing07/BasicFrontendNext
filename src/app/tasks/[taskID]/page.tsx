import React from 'react'
import { getTaskById } from '@/app/tasks/tasks.api'
import TaskCard from '@/components/task-card'

async function TaskPage(params: any) {
  const { taskID } = await params.params;
  const data = await getTaskById(taskID)
  return (
    <div>
      <h1>TaskPage</h1>
      <TaskCard task={data} />
    </div>

  )
}

export default TaskPage