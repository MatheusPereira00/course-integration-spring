export interface Products {
  name: string | null;
  id: string | null;
  price: string | null;
}

export interface NewProducts {
  name: string | null;
  id: string | null;
  price: string | null;
}

export class User {
  public email: string;
  public senha: string;

  constructor(email: string, senha: string) {
    (this.email = email), (this.senha = senha);
  }
}
