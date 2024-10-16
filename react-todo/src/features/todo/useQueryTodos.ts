import { useEffect, useState } from "react";
import axiosInstance from "../../libs/axios";
import { TodoQueryResponse } from "../../types/Types";
import { Todo } from "../../types/todo";

export const useQueryTodos = () => {
    const [state, setState] = useState<TodoQueryResponse<Todo[]>>({
        data: null,
        isLoading: true,
        isError: null,
    })

    const refetch = async () => {
        try {
            const response = await axiosInstance.get('/todos')
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

    useEffect(() => {
        refetch()
    }, [])

    return {
        ...state, refetch
    }
}