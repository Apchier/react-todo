import { Todo } from "./todo";

export type TodoQueryResponse<T extends Todo | Todo[]> = {
    data?: T | null,
    isLoading?: boolean;
    isError?: Error | null;
    refetch?: () => Promise<void>;
}

export type TodoMutationResponse = {
    mutate?: () => Promise<void>;
    data?: Todo | null
    isPending?: boolean
    isError?: Error | null
    variables? : Todo | null
}

