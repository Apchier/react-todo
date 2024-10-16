import { useMutationUpdateTodo, useQueryTodos } from "../../../features/todo"

type ToggleButtonProps = {
    todoID: string
    className?: string
    statusCheked?: boolean
}

export const ToggleButton = (props: ToggleButtonProps) => {
    const { todoID, statusCheked } = props
    const { refetch: todoRefetch } = useQueryTodos()

    const { mutate: toggleStatus, isPending: togglePending } = useMutationUpdateTodo({
        onSuccess: () => {
            alert('Success change status todo')
            window.location.reload()
            todoRefetch()
        }
    })

    return (
        <label htmlFor="status">
            <input id="status"
                name="status"
                className="w-[20px] h-[20px] mr-2"
                checked={Boolean(statusCheked)}
                onChange={(e) => toggleStatus(todoID, { status: e.target.checked })}
                disabled={togglePending}
            />
            {statusCheked ? 'Done' : 'On Going'}
        </label>
    )
}
