import random
import string
from faker import Faker

def text_separator(char):
    print(char * 50)


class Cliente:
    def __init__(self, nome):
        self.nome = nome

class Conta:
    def __init__(self, numero, cliente, saldo=0.0):
        self.numero = numero
        self.cliente = cliente
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
        print(f"Titular: {self.cliente.nome}")
        print(f"Saldo: R${self.saldo:.2f}")

class Banco:
    def __init__(self):
        self.contas = {}

    def criar_conta(self, numero, cliente, saldo=0.0):
        if numero in self.contas:
            print("Conta já existe!")
        else:
            self.contas[numero] = Conta(numero, cliente, saldo)
            print("Conta criada com sucesso!")

    def obter_conta(self, numero):
        return self.contas.get(numero)
    
    def gerar_conta_aleatoria(self):
        fake = Faker()
        while True:
            numero = ''.join(random.choices(string.digits, k=6))
            if numero not in self.contas:
                cliente = Cliente(f'{fake.first_name()} {fake.last_name()}')
                conta = Conta(numero, cliente)
                self.contas[numero] = conta
                self.contas[numero].saldo = random.uniform(100.0, 1000.0)
                print("Conta fictícia criada com sucesso!")
                return conta

def main():
    message = """
    Bem-vindo ao sistema bancário!
    Caso não seja cadastrada nova conta o sistema irá criar uma conta padrão.
    """

    text_separator("-=")
    print(message)
    text_separator("-=")

    banco = Banco()

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
            nome_cliente = input("Digite o nome do titular: ")
            saldo = float(input("Digite o saldo da conta: "))
            cliente = Cliente(nome_cliente)
            banco.criar_conta(numero, cliente, saldo)
            continue
        elif opcao == "1":
            numero = input("Digite o número da conta: ")
            conta = banco.obter_conta(numero)
            if conta:
                conta.extrato()
            else:
                print("Conta não encontrada!")
                print("Nenhuma conta encontrada. Gerando conta aleatória...")
                conta = banco.gerar_conta_aleatoria()
                conta.extrato()
        elif opcao == "2":
            numero = input("Digite o número da conta: ")
            conta = banco.obter_conta(numero)
            if conta:
                valor = float(input("Digite o valor do depósito: "))
                conta.depositar(valor)
            else:
                print("Conta não encontrada!")
        elif opcao == "3":
            numero = input("Digite o número da conta: ")
            conta = banco.obter_conta(numero)
            if conta:
                valor = float(input("Digite o valor do saque: "))
                conta.sacar(valor)
            else:
                print("Conta não encontrada!")
        elif opcao == "4":
            print("Saindo do sistema...")
            break
        else:
            print("Opção inválida!")

if __name__ == "__main__":
    main()