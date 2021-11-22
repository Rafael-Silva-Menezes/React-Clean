import { AccountModel } from 'domain/models/accountModel';

type AutheticationParams = {
  email: string;
  passwor: string;
};
export interface Authentication {
  auth(params: AutheticationParams): Promise<AccountModel>;
}
