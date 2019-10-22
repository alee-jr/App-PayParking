

export class Park{
  id?: string;
  email: string;
  endereco: string;
  nome: string;
  razao: string;
  cnpj: number;
  responsavel: string;
  rg: string;
  vagas: number;
  preco: number;
  senha: string;
   
  constructor(
    email: string,
    endereco: string,
    nome: string,
    razao: string,
    cnpj: number,
    responsavel: string,
    rg: string,
    vagas: number,
    preco: number,
    senha: string) {
    
    this.email = email;
    this.endereco = endereco;
    this.nome = nome;
    this.razao = razao;
    this.cnpj = cnpj;
    this.responsavel = responsavel;
    this.rg = rg;
    this.vagas = vagas;
    this.preco = preco;
    this.senha = senha;
      
  }
}