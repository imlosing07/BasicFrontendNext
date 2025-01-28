export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
export async function createTask(taskData: any) {
    const response = await fetch(`${BACKEND_URL}/api/tasks`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        })
    const data = await response.json()
    console.log(data)
}

export async function getTasks() {
    const response = await fetch(`${BACKEND_URL}/api/tasks`)
    return await response.json()
}

export async function getTaskById(id: any) {
    const response = await fetch(`${BACKEND_URL}/api/tasks/${id}`)
    return await response.json()
}

export async function deleteTask(id: any) {
    const response = await fetch(`${BACKEND_URL}/api/tasks/${id}`,
        {
            method: 'DELETE'
        })
    return await response.json()
}

export async function updateTask(id: string, taskData: any) {
    const response = await fetch(`${BACKEND_URL}/api/tasks/${id}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        })
    return await response.json()
}