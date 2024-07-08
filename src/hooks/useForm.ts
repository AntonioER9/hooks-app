import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initialForm: T) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}