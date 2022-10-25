/*
        Необходимо сделать тип для результата валидации
        формы, основываясь на типе формы
*/

interface IForm {
    name: string;
    password: string;
}

const form: IForm = {
    name: 'Johna',
    password: '123',
};

const formValidation: Validation<IForm> = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'should be longer 5 symbols' },
};


type Validation<T> = {
    [K in keyof T]: {
        isValid: true;
    } | {
        isValid: false;
        errorMessage: string;
    }
};
