export default class Nota {
    id: number;
    nota: number;
    idAluno: number;
    idProfessor: number;

    constructor(nota: number, idAluno: number, idProfessor: number, id: number) {
        this.id = id;
        this.nota = nota;
        this.idAluno = idAluno;
        this.idProfessor = idProfessor;
    }

    getId(): number {
        return this.id;
    }

    getNota(): number {
        return this.nota;
    }

    getIdAluno(): number {
        return this.idAluno;
    }


    getIdProfessor(): number {
        return this.idProfessor;
    }

    setNota(nota: number): void {
        this.nota = nota;
    }

    setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }


    setIdProfessor(idProfessor: number): void {
        this.idProfessor = idProfessor;
    }
}