export default class Aluno {
    id: number;
    nome: string;
    idade: number;
    matricula: string;

    constructor(nome: string, idade: number, matricula: string, id: number) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
    }

    getNome(): string {
        return this.nome;
    }
    getId(): number {
        return this.id;
    }


    getIdade(): number {
        return this.idade;
    }

    getMatricula(): string {
        return this.matricula;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    setIdade(idade: number): void {
        this.idade = idade;
    }

    setMatricula(matricula: string): void {
        this.matricula = matricula;
    }
}

