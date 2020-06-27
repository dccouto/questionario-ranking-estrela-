export class Pergunta {
    id: number;
    descricao: string;
    respostas: Array<Resposta> = [];    
}

export class Resposta {
    id: number;
    descricao: string;
}

