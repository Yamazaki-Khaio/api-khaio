import Aluno from '../models/alunos';


export default async function saveAlunos(aluno: Aluno) {
    try {
        
        await Aluno.create(aluno as any);
        console.log("Aluno criado com sucesso!");
    } catch (error) {
        throw error;
    }
    
}


