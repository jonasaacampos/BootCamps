def text_separator(char):
    print(char * 50)

class Conta:
    def __init__(self, numero, titular, saldo):
        self.numero = numero
        self.titular = titular
        self.saldo = saldo

    def depositar(self, valor):
        self.saldo += valor
        print(f"Depósito de R${valor:.2f} realizado com sucesso!")

    def sacar(self, valor):
        if self.saldo >= valor:
            self.saldo -= valor
            print(f"Saque de R${valor:.2f} realizado com sucesso!")
        else:
            print("Saldo insuficiente!")

    def extrato(self):
        print(f"Número da conta: {self.numero}")
        print(f"Titular: {self.titular}")
        print(f"Saldo: R${self.saldo:.2f}")

def main():

    message = """
    Bem-vindo ao sistema bancário!
    Caso não seja cadastrada nova conta o sistema irá criar uma conta padrão.
    """

    text_separator("-=")
    print(message)
    text_separator("-=")

    while True:
        print("\n--- Sistema Bancário ---")
        print("0. Inserir nova conta:")
        print("1. Consultar saldo")
        print("2. Realizar depósito")
        print("3. Realizar saque")
        print("4. Sair")

        opcao = input("Digite a opção desejada: ")

        if opcao == "0":
            numero = input("Digite o número da conta: ")
            titular = input("Digite o nome do titular: ")
            saldo = float(input("Digite o saldo da conta: "))
            conta = Conta(numero, titular, saldo)
            continue
        elif opcao == "1":
            conta.extrato()
        elif opcao == "2":
            valor = float(input("Digite o valor do depósito: "))
            conta.depositar(valor)
        elif opcao == "3":
            valor = float(input("Digite o valor do saque: "))
            conta.sacar(valor)
        elif opcao == "4":
            print("Saindo do sistema...")
            break
        else:
            print("Opção inválida!")
        
        if opcao != "0":
            conta = Conta("123456", "João Silva", 1000.00)

if __name__ == "__main__":
    main()
