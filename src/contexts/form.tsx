import { createContext, useContext, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { RStore, Store, useStoreData } from "../utilities/customStore";

type IFormContext = RStore;

interface IFormProviderProps {
    children: React.ReactNode | React.ReactNode[]
}

const FormContext = createContext<IFormContext>({} as IFormContext);

const FormProvider = ({ children }: IFormProviderProps) => {

    return (
        <FormContext.Provider value={useStoreData()}>
            {children}
        </FormContext.Provider>
    )
}

function useFormContext<SelectorOutput>(selector: (store: Store) => SelectorOutput): [SelectorOutput, (value: Partial<Store>) => void] {
    const formStore = useContext(FormContext);

    if (!formStore) {
        throw new Error("Must use useForm within a FormProvider!")
    }

    // const state = useSyncExternalStore(formStore.subscribe, () => selector(formStore.get()))

    const [state, setState] = useState(selector(formStore.get()));

    useEffect(() => {
        return formStore.subscribe(() => setState(selector(formStore.get())))
    }, []);

    return [
        state,
        formStore.set
    ];
}

export { FormProvider, useFormContext as useFormContext }