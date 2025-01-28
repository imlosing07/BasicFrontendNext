"use client"
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { deleteTask } from '@/app/tasks/tasks.api'

function TaskCard({ task }: any) {
    const router = useRouter()

    const onDelete = async () => {
        const res = await deleteTask(task.id)
        console.log(res)
        router.refresh()
    }

    return (
        <Card onClick={() => router.push(`/tasks/${task.id}`)}>
            <CardHeader>
                <CardTitle>{task.name}</CardTitle>
            </CardHeader>

            <CardContent className=' '>
                <p>{task.description}</p>
                <p>{task.timeNeeded}</p>
            </CardContent>

            <CardFooter className='flex justify-between'>
                <Button>Realizar</Button>
                <Button onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/tasks/${task.id}/edit`);
                }}>Editar</Button>
                <Button
                    variant='destructive'
                    onClick={onDelete}
                >Eliminar</Button>
            </CardFooter>

        </Card>
    )
}

export default TaskCard;