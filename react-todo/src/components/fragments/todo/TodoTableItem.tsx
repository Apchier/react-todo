import { Todo } from "../../../types/todo";
import { ButtonDelete, ButtonEdit, ToggleButton } from "../../elements/todo";

type TodoTableItemProps = {
    todo: Todo
    text?: string
}


export const TodoTableItem = (props: TodoTableItemProps) => {
    return (
        <tr className="bg-black text-xl text-white border-4 border-white">
            <td className="px-[20px] py-[10px] border-r-4 border-white text-left">{props.todo.id}</td>
            <td className="px-[20px] py-[10px] border-r-4 border-white text-left">{props.todo.text}</td>
            <td className="px-[20px] py-[10px] border-r-4 border-white text-center">
                <ToggleButton todoID={props.todo.id} statusCheked={props.todo.status}/>
            </td>
            <td className="px-[20px] py-[10px] text-center justify-center gap-4 flex">
                <ButtonEdit todoID={props.todo.id} />
                <ButtonDelete todoID={props.todo.id} />
            </td>
        </tr>
    )
}

