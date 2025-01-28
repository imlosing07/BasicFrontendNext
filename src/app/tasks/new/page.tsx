import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ProductForm from "./task-form"
import { getTaskById } from "../tasks.api"

type Props = {
    params: {
        taskID: string
    }
}

async function CreateTaskPage({params}: Props) {
    const task = await getTaskById(params.taskID)
    return (
        <div className="h-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>{
                        params.taskID ? 'Editar tarea' : 'Crear tarea'
                        }</CardTitle>
                </CardHeader>

                <CardContent>
                    <ProductForm task={task}/>
                </CardContent>
            </Card>
        </div>
    )
}

export default CreateTaskPage