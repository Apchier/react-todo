import { useMutationDeleteTodo } from "../../../features/todo"

type DeleteButtonProps = {
    todoID: string
    disabled?: boolean
    className?: string
    onClick?: () => void
}

export const ButtonDelete = (props: DeleteButtonProps) => {

    const { todoID } = props

    const { mutate: deleteTodo, isPending: deletePending } = useMutationDeleteTodo({
        onSuccess: () => {
            alert('success deleting todo')
            window.location.reload()
        }
    })

    const handleDelete = () => {
        deleteTodo(todoID)
    }


    return (
        <button form={todoID} type="submit" disabled={deletePending} className="bg-black text-white border-4 border-white w-[120px] py-2 text-xl font-semibold hover:bg-white hover:text-black" onClick={handleDelete}>
            {!deletePending ? 'Delete' : (
                <span className="animate-pulse">Deleting...</span>
            )}
        </button>
    )
}

