import { useState } from "react"
import axiosInstance from "../../libs/axios"
import { TodoMutationResponse } from "../../types/Types"

export const useMutationDeleteTodo = ({ onSuccess }: { onSuccess: () => void }) => {
    const [state, setState] = useState<TodoMutationResponse>({
        data: null,
        isPending: false,
        isError: null,
    })

    const mutate = async (id: string) => {
        try {
            const response = await axiosInstance.delete(`/todos/${id}`)
            setState({
                data: response.data.data,
                isPending: true,
            })
            onSuccess()
        } catch (error) {
            setState(prev => ({
                ...prev,
                error: error instanceof Error ? error : new Error('An unknown error occurred'),
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

