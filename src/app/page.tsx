import Link from 'next/link'
import React from 'react'
import {buttonVariants } from '@/components/ui/button'
import { getTasks } from './tasks/tasks.api'
import TaskCard from '@/components/task-card'

export const dynamic = "force-dynamic"
async function HomePage() {
  const tasks = await getTasks()
  return (
    <>
      <div className='flex justify-between'>
        <h1 className='text-4xl font-bold'>
          TaskPoints
        </h1>
        <Link href="/tasks/new" className={buttonVariants()} >
          Crear tarea
        </Link>
      </div>

      <div className='grid grid-cols-5 gap-4 pt-4'>
        {tasks.map((task: any) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </>

  )
}

export default HomePage