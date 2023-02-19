const EditUserValidator = values => {
    const errors = {};

    if(!values.name) {
        errors.name = 'Obrigatório';
    }

    if (!values.email) {
        errors.email = 'Obrigatório';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'E-mail inválido';
    }

    return errors;
}

export default EditUserValidator;