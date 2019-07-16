export class Usuario {
    nome: string;
    email: string;
    cpf: any;
    nascimento: Date;
    senha: string;
    constructor(nome: string, email: string, nascimento: Date, senha: string) {
        this.nome = nome;
        this.email = email;
        this.cpf = this.cpf;
        this.nascimento = nascimento;
        this.senha = senha;
    }
}
