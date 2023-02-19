const LoginValidator = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Obrigatório';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'E-mail inválido';
    }

    if (!values.password) {
        errors.password = 'Obrigatório'
    } else if (values.password.length < 3) {
        errors.password = 'A senha deve ter no mínimo 3 caracteres';
    }

    return errors;
}

export default LoginValidator;