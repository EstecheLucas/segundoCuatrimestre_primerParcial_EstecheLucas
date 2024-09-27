// ? CREAR LAS VALIDACIONES PARA LAS ORDERS AQUÍ

export const createOrderValidations = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
};


