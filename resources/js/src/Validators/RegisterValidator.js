import LoginValidator from "./LoginValidator";

const RegisterValidator = values => {
    const errors = LoginValidator(values);

    if (!values.name) {
        errors.name = 'Obrigatório';
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Obrigatório'
    } else if (values.password !== values.confirmPassword) {
        let error = 'As senhas devem corresponder'
        errors.confirmPassword = error;
        errors.password = error;
    }

    return errors;
}

export default RegisterValidator;