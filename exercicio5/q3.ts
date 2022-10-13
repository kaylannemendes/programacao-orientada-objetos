class Banco {
contas: Conta[] = [];

inserir(conta: Conta): void {}
alterar(conta: Conta): void {}
excluir(numero: string): void{}
//consultar(numero: string): Conta {}

sacar(numero: string, valor: number): void {}
depositar(numero: string, valor: number): void {}
transfeir(numeroOrigem: string, numeroDestino: String, valor: number): void {}
}