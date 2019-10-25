export class User{
    
  id?: string;
  nome: string;
  sobrenome: string;
  telefone: number;
  email: string;
  rg: string;
  senha: string;
  placa: string;
  nCartao: number;
  nomeCartao: string;
  cvv: number;

      
  constructor(nome: string, sobrenome: string, telefone: number, email: string, 
    rg: string, senha: string, placa:string, nCartao: number, nomeCartao: string, cvv: number){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.telefone = telefone;
    this.email = email;
    this.rg = rg;
    this.senha = senha;
    this.placa = placa;
    this.nCartao = nCartao;
    this.nomeCartao = nomeCartao;
    this.cvv = cvv;
  }
    
}