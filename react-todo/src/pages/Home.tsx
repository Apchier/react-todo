import { TodoTable } from "../components/fragments/todo";
import TodoForm from "../components/fragments/todo/TodoForm";

export default function Home() {

    return (
        <div className="flex flex-col w-full min-h-screen bg-[#f0f0f0] p-[40px] gap-[40px]">
            <TodoForm />

            <div className="w-full h-auto text-white bg-black shadow-lg p-[50px]">
                <h1 className="text-2xl font-bold mb-[20px]">Todo Table</h1>
                <div className="overflow-x-auto overflow-y-auto max-h-[425px] border-4 border-white">
                    <TodoTable />
                </div>
            </div>
        </div>
    );
}
