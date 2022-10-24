import prompt from 'prompt-sync'
const input = prompt()

class Produto {
    private id: number;
    private descricao: string;
    private qtd_produtos: number;
    private valor_unitario: number;

    constructor (id: number, descricao: string, qtd_produtos: number, valor_unitario: number) {
        this.id = id;
        this.descricao = descricao;
        this.qtd_produtos = qtd_produtos;
        this.valor_unitario = valor_unitario;
    }

    repor (qtd_produtos: number): number {
        return this.qtd_produtos ++;
    }

    darBaixa (qtd_produtos: number): number {
        return this.qtd_produtos --;
    }
}

class ProdutoPerecivel extends Produto {
    data_validade : Date;

    constructor (data_validade: Date) {
        super(id, descricao, qtd_produtos, valor_unitario);
    }

    ehValido () : string{
        let data_atual : Date = new Date();
        if (this.data_validade > data_atual){
            return "Produto válido!";
        }
        else {
            return "Produto inválido!";
        }
    }

}

class Estoque extends ProdutoPerecivel {
    private produtos : Array <string> = [];

    constructor (produtos: Array<string>) {
        super(id, descricao, qtd_produtos, valor_unitario, data_validade);
        this.produtos = produtos;
    }

}