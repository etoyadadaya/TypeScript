"use strict";
const form = {
    name: 'Johna',
    password: '123',
};
const formValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'should be longer 5 symbols' },
};
