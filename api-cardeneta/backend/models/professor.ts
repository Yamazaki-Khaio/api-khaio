export default class Professor {
    id: number;
    nome: string;
    email: string;
    senha: string;

    constructor(nome: string, email: string, senha: string, id: number) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    getNome(): string {
        return this.nome;
    }
    getId(): number {
        return this.id;
    }
    getEmail(): string {
        return this.email;
    }
    getSenha(): string {
        return this.senha;
    }
    setNome(nome: string): void {
        this.nome = nome;
    }
    setEmail(email: string): void {
        this.email = email;
    }
    setSenha(senha: string): void {
        this.senha = senha;
    }
}

