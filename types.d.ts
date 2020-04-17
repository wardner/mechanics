declare namespace Express {
  export interface Request {
    user?: {
      id: number,
      name: string,
      lastname: string,
      email: string,
      password: string,
      role: string
    };
  }
}
