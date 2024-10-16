import { useForm } from "react-hook-form";
import { useMutationCreateTodo, useMutationUpdateTodo, useQueryTodoID, useQueryTodos } from "../../../features/todo";
import { ButtonSubmit } from "../../elements/todo";
import TodoFormInner from "./TodoFormInner";
import { CreateTodoInput, createTodoSchema } from "../../../types/todo";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTodoStore } from "../../../stores/todo";
import { useEffect } from "react";

export default function TodoForm() {

    const { globalTodoID, setGlobalTodoID } = useTodoStore()
    const {refetch: todoRefetch } = useQueryTodos()
    const { data: todoIDData } = useQueryTodoID(globalTodoID)

    const handleSuccess = (action: 'created' | 'updated') => {
        todoRefetch()
        alert(`success ${action} todo`)
        form.reset()
        window.location.reload()
        if (action === 'updated') setGlobalTodoID('')
    }

    const { mutate: createTodo, isPending: createPending } = useMutationCreateTodo({
        onSuccess: () => handleSuccess('created')
    })

    const { mutate: updateTodo, isPending: updatePending } = useMutationUpdateTodo({
        onSuccess: () => handleSuccess('updated')
    })
    
    const form = useForm<CreateTodoInput>({
        defaultValues: {
            text: ''
        },
        resolver:zodResolver(createTodoSchema)
    })

    useEffect(() => {
        if (globalTodoID && todoIDData) form.setValue('text', todoIDData.text)
    }, [globalTodoID, form, todoIDData])

    const submitFormCondition = (values: CreateTodoInput) => {
        if (!globalTodoID) {
            createTodo(values)
        } else {
            updateTodo(globalTodoID, {
                ...values,
                status: Boolean(todoIDData?.status)
            })
        }
    }

    const handleSubmit = form.handleSubmit((values: CreateTodoInput) => submitFormCondition(values))

    return (
        <div className="flex flex-col w-full justify-center h-[250px] text-white bg-black shadow-lg p-[50px]">
            <h1 className="text-2xl font-bold mb-[20px]">Todo List</h1>
            <div className="w-full flex items-center gap-4">
                <TodoFormInner form={form} handleSubmit={handleSubmit}/>
                <ButtonSubmit formID='todo-form' disabled={createPending || updatePending} />
            </div>
        </div>
    )
}
