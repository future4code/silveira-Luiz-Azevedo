import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types/types";


export  const getData = (token: string): authenticationData => {
  const payload = jwt.verify(token, "senhaSuperSegura") as any;
  const result = {
    id: payload.id,
    role:payload.role
  };
  return result;
}; 