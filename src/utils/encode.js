import bcrypt from "bcrypt";
export const encoedpasswordfunc = (unHashPassword) => {
    const saltRounds = 10;
    const hash = bcrypt.hashSync(unHashPassword, saltRounds);
    return hash;
};
