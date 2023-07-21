import { useReducer } from "react";

interface IRandomReducerProps { }

enum ReducerAction {
    LOG = "log",
    DELETE = "delete",
    RESET = "reset"
}

interface IItem {
    id: number;
    value: number;
}

interface IReducerState {
    items: IItem[]
}

interface IReducerAction {
    type: ReducerAction;
    payload: IItem;
}

const SEED = 1000;

function reducer(state: IReducerState, { type, payload }: IReducerAction): IReducerState {
    switch (type) {
        case ReducerAction.LOG:
            alert(`ID: ${payload.id} | Value: ${payload.value}`)
            return state;
        case ReducerAction.DELETE:
            const index = state.items.findIndex(({ id }) => id === payload.id);
            const newItems = [...state.items];

            newItems.splice(index, 1);

            return {
                items: newItems
            }
        case ReducerAction.RESET:
            return {
                items: generateRandomItems()
            }
        default:
            return state;
    }
}

function generateRandomItems(length: number = 10) {
    return Array.from({ length }).map<IItem>((_, i) => ({
        id: i + 1,
        value: Math.floor(Math.random() * SEED)
    }));
}

const Item = ({ item, handleDispatch }: { item: IItem, handleDispatch(action: IReducerAction): void }) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24
        }}>
            <span>{item.value}</span>
            <div style={{
                display: "flex",
                gap: 8
            }}>
                <button onClick={() => handleDispatch({ type: ReducerAction.LOG, payload: item })}>LOG</button>
                <button onClick={() => handleDispatch({ type: ReducerAction.DELETE, payload: item })}>DELETE</button>
            </div>
        </div>
    )
}

const RandomReducer = ({ }: IRandomReducerProps) => {
    const [items, itemsDispatch] = useReducer(reducer, { items: generateRandomItems() });

    function handleDispatch(action: IReducerAction) {
        itemsDispatch(action);
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 8
        }}>
            <button onClick={() => handleDispatch({ type: ReducerAction.RESET, payload: { id: 1, value: 1 } })}>RESET</button>
            {items.items.map((item) => (
                <Item key={item.id} item={item} handleDispatch={handleDispatch} />
            ))}
        </div>
    )
}
export default RandomReducer;