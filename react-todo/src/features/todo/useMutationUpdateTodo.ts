import { useState } from "react"
import axiosInstance from "../../libs/axios"
import { TodoMutationResponse } from "../../types/Types"
import { UpdateTodoInput } from "../../types/todo"

export const useMutationUpdateTodo = ( { onSuccess }: { onSuccess: () => void }) => {
    const [state, setState] = useState<TodoMutationResponse>({
        data: null,
        isPending: false,
        isError: null,
    })

    const mutate = async (id: string, data: UpdateTodoInput) => {
        setState(prev => ({ ...prev, isPending: true }))

        try {
            const response = await axiosInstance.patch(`/todos/${id}`, data)
            setState({
                data: response.data.data,
                isPending: true, 
            })
            onSuccess()
        } catch (error) {
            setState(prev => ({
                ...prev,
                isPending: false,
                isError: error instanceof Error ? error : new Error('An unknown error occurred'),
            }))
        } finally {
            setState(prev => ({ 
                ...prev, 
                isPending: false 
            }))
        }
    }

    return {
        mutate,
        ...state
    }
}