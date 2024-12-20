import bcrypt from "bcrypt";

export const encoedpasswordfunc = (unHashPassword: string) => {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(unHashPassword, saltRounds);
  return hash;
};
