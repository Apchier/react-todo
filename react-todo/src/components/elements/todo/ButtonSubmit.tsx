import { useTodoStore } from "../../../stores/todo"

type SubmitButtonProps = {
    formID?: string
    disabled?: boolean
    className?: string
    isPending?: boolean
}

export const ButtonSubmit = (props: SubmitButtonProps) => {
    const { formID, disabled } = props
    const { globalTodoID } = useTodoStore()
    return (
        <button
            form={formID}
            type="submit"
            disabled={disabled}
            className={`bg-black text-white border-4 border-white w-[250px] py-2 text-xl font-semibold hover:bg-white hover:text-black ${props.className}`} onClick={() => console.log('submit')}>
            {globalTodoID ? !disabled ? 'Update' : (
                <span className="animate-pulse">Updating...</span>
            ) : !disabled ? 'Post' : (
                <span className="animate-pulse">Posting...</span>
            )}
        </button>
    )
}
