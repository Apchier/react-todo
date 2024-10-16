import { create } from 'zustand'

type TodoStore = {
    todoLength: number,
    setTodoLength: (todoLength: number) => void
    globalTodoID: string,
    setGlobalTodoID: (globalTodoID: string) => void
}

export const useTodoStore = create<TodoStore>((set) => ({
    globalTodoID: '',
    setGlobalTodoID: (globalTodoID: string) => set(() => ({ globalTodoID })),
    todoLength: 0,
    setTodoLength: (todoLength: number) => set(() => ({ todoLength })),
}))