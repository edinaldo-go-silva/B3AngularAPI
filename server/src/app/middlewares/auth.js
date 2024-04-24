import jwt from "jsonwebtoken";
import { promisify } from "util";
import authConfig from "../../config/auth";

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    console.log('Token não foi fornecido');
    return res.status(401).json({ error: "Token não foi fornecido" });
  }

  // {beare,token}
  const [, token] = authHeader.split(" ");

  console.log('Iniciando validacao do Token... ');

  try {

    var tokenss = jwt.sign({ foo: "Bearer" }, authConfig.secret);
    console.log('tokenss => ' + tokenss);

    return next();

  } catch (err) {
  
    console.log('Token super invalido => ' + err);
    return res.status(401).json({ erro: "Token super invalido" });
  }
};
