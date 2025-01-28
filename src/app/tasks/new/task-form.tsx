"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { createTask, updateTask } from '../tasks.api'
import { useParams, useRouter } from 'next/navigation'

function TaskForm({ task }: any) {

    const { register, handleSubmit } = useForm(
        {
            defaultValues:
                task ? { name: task.name, description: task.description, timeNeeded: task.timeNeeded } : {}
        }
    )
    const router = useRouter()
    const params = useParams<{ taskID: string }>();
    

    const onsubmit = handleSubmit(async (data) => {
        if (params.taskID) {
            const res = await updateTask(params.taskID, {
                ...data,
                timeNeeded: Number(data.timeNeeded)
            })
            console.log(res)
        }
        await createTask({
            ...data,
            timeNeeded: Number(data.timeNeeded)
        })
        router.push('/')
    })

    return (
        <form onSubmit={onsubmit} className="flex flex-col gap-4">
            <Label>Nombre de la tarea</Label>
            <Input type="text"
                {...register('name')}
            />

            <Label>Descripción de la tarea</Label>
            <Input
                {...register('description')}
            />

            <Label>Duracion de la tarea</Label>
            <Input type="number"
                {...register('timeNeeded')}
            />

            <Button>
                {
                    params.taskID ? 'Actualizar tarea' : 'Crear tarea'
                }
            </Button>
        </form>
    )
}

export default TaskForm