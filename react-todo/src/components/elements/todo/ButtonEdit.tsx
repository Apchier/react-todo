import { useTodoStore } from "../../../stores/todo"

type EditButtonProps = {
    todoID: string
    disabled?: boolean
    className?: string
    onclick?: () => void
}


export const ButtonEdit = (props: EditButtonProps) => {

    const { todoID } = props
    const { setGlobalTodoID, globalTodoID } = useTodoStore()
    const disabled = globalTodoID === todoID

    const handleUpdate = () => setGlobalTodoID(todoID)

    return (
        <button form={todoID} type="submit" disabled={disabled} className="bg-black text-white border-4 border-white w-[120px] py-2 text-xl font-semibold hover:bg-white hover:text-black" onClick={handleUpdate}>
            {disabled ? 'On Update' : 'Update'}
        </button>
    )
}
