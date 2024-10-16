import { useEffect, useState } from "react"
import axiosInstance from "../../libs/axios"
import { Todo } from "../../types/todo"
import { TodoQueryResponse } from "../../types/Types"


export const useQueryTodoID = (id: string) => {
    const [state, setState] = useState<TodoQueryResponse<Todo>>({
        data: null,
        isLoading: true,
        isError: null,
    })

    useEffect(() => {
        const refetch = async () => {
            try {
                const response = await axiosInstance.get(`/todos/${id}`)
                setState({
                    data: response.data.data,
                })
            } catch (error) {
                setState(prev => ({
                    ...prev,
                    isError: error instanceof Error ? error : new Error('An unknown error occurred'),
                }))
            } finally {
                setState((prev) => ({
                    ...prev,
                    isLoading: false
                }))
            }
        }
        refetch()
    }, [id])

    return { ...state }
}