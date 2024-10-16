import { UseFormReturn } from "react-hook-form"
import { CreateTodoInput } from "../../../types/todo"

type TodoFormInnerProps = {
    form: UseFormReturn<CreateTodoInput>
    handleSubmit: () => void
}

export default function TodoFormInner(props: TodoFormInnerProps) {
    const { form, handleSubmit: onSubmit } = props

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} id="todo-form" className="flex w-full justify-center items-center gap-[25px]">
            <input
                type="text"
                id="text"
                {...form.register("text")}
                className="border-4 border-white outline-none p-[10px] w-full py-2 text-black text-xl font-semibold"
                placeholder="Add or edit todo"
            />
        </form>
    )
}
