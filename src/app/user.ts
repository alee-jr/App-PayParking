export class User{
    
  id?: string;
  nome: string;
  sobrenome: string;
  telefone: number;
  email: string;
  rg: string;
  senha: string;
      
  constructor(nome: string, sobrenome: string, telefone: number, email: string, rg: string, senha: string){
    this.nome = nome;
    this. sobrenome = sobrenome;
    this.telefone = telefone;
    this.email = email;
    this.rg = rg;
    this.senha = senha;
  }
    
}