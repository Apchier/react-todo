import { useQueryTodos } from "../../../features/todo";
import { Todo } from "../../../types/todo";
import { TodoTableItem } from "./TodoTableItem";

const renderElements = (todos: Todo[]) => (todos.map(todo => <TodoTableItem key={todo.id} todo={todo} />))

export const TodoTable = () => {

    const { data: tododata, isLoading: todoLoading } = useQueryTodos()

    return (
        <table className="w-full bg-white">
            <thead>
                <tr className="sticky top-[-3px] bg-black text-white text-2xl border-4 border-white">
                    <th className="p-[20px] text-left">No ID</th>
                    <th className="p-[20px] text-left">Todo</th>
                    <th className="p-[20px] text-center">Status</th>
                    <th className="p-[20px] text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {tododata?.length === 0 && <tr><td colSpan={4} className="text-center">No data</td></tr>}
                {!todoLoading && tododata && renderElements(tododata)}
            </tbody>
        </table>
    )
}
