import UserModel from '#Schemas/user.schema.js';



const userLoginController = async (req, res) => {
    const { email, password } = req.body;

    const existingUserByEmail = await UserModel.findOne({ email }).exec();
    if (!existingUserByEmail)
        return res.status(401).send({ errors: ['Credenciales incorrectas'] });

    const checkPassword = await compare(password, existingUserByEmail.password);

    if (!checkPassword)
        return res.status(401).send({ errors: ['Credenciales incorrectas'] });


    
};

export default userLoginController;
