import Aluno from '../models/alunos'; // Importe o modelo Aluno

export async function criarAluno(nome: string, email: string, matricula: string, idade: number) {
  try {
    const aluno = await Aluno.create({ nome, email, matricula, idade });
    return aluno;
  } catch (error) {
    throw error;
  }
}

export async function buscarAlunoPorId(id: number) {
  try {
    const aluno = await Aluno.findByPk(id);
    return aluno;
  } catch (error) {
    throw error;
  }
}

export async function buscarTodosAlunos() {
  try {
    const alunos = await Aluno.findAll();
    return alunos;
  } catch (error) {
    throw error;
  }
}

export async function atualizarAluno(id: number, nome: string, email: string, matricula: string, idade: number) {
  try {
    const aluno = await Aluno.findByPk(id);
    if (aluno) {
      aluno.nome = nome;
      aluno.email = email;
      aluno.matricula = matricula;
      aluno.idade = idade;
      await aluno.save();
      return aluno;
    } else {
      throw new Error("Aluno não encontrado");
    }
  } catch (error) {
    throw error;
  }
}

export async function excluirAluno(id: number) {
  try {
    const aluno = await Aluno.findByPk(id);
    if (aluno) {
      await aluno.destroy();
      return aluno;
    } else {
      throw new Error("Aluno não encontrado");
    }
  } catch (error) {
    throw error;
  }
}
