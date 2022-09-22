

choice = true

ArrayGerentes = []
ArrayVendedores = []
ArrayVendas = []

class Funcionario{
    Nome 
    Salario
}

class Gerente extends Funcionario{
    Departamento

    ExibirInformacao(NomeGerente){
        ArrayGerentes.forEach(FindGerente)

        function FindGerente(item){
            if(item.Nome == NomeGerente){
                return alert(`Nome: ${item.Nome}, Departamento: ${item.Departamento}, Salário: ${item.Salario}`)
            }
        }

    }
}

class Vendedor extends Funcionario{
    PercentualComissao

    CalcularSalario(NomeVendedorDois){

        ArrayVendedores.forEach(FindVendedorDois)
       
        function FindVendedorDois(item){
            if(item.Nome == NomeVendedorDois){
            let SalarioComPercentual = Number((item.PercentualComissao / 100))
            SalarioComPercentual = (SalarioComPercentual * item.Salario) + item.Salario
            return alert(SalarioComPercentual)
            }
        }
    }

    ExibirInformacoes(NomeVendedor){

        ArrayVendedores.forEach(FindVendedor)

        function FindVendedor(item){
            if(item.Nome == NomeVendedor){
                let SalarioComPercentual = Number((item.PercentualComissao / 100))
                SalarioComPercentual = (SalarioComPercentual * item.Salario) + item.Salario
                return alert(`Nome: ${item.Nome}, Salário: ${item.Salario}, Salário Com Percentual: ${SalarioComPercentual}, Percentual: ${item.PercentualComissao}`)
            }
        }
    }
}

class Produto{
    Nome
    Valor
}

class Venda{
    Vendedor
    ValorTotal
    ListaDeProdutos = []

    AdicionarProduto(){
        let CreateProduto = new Produto()
        CreateProduto.Nome = prompt("Qual o nome do produto ?")
        CreateProduto.Valor = Number(prompt("Qual o valor do produto ?"))
        if(CreateProduto.Nome == "" || CreateProduto.Valor == ""){
            return alert("Valores Inválidos")
        }

        ArrayVendas.forEach(FindValorTotal)

        function FindValorTotal(item){
            if(item.ValorTotal == 0){
                item.ListaDeProdutos.push(CreateProduto.Valor)
            }
        }

        
    }

    CalcularTotal(){
        let Reducer = (accumulator, curr) => accumulator + curr

        ArrayVendas.forEach(VerificateCalcularTotal)

        function VerificateCalcularTotal(item){
            if(item.ValorTotal == 0){
                item.ValorTotal = item.ListaDeProdutos.reduce(Reducer)
                return alert (item.ValorTotal)
            }
        }
        
    }

    FinalizarVenda(NomeVendedor){
        ArrayVendas.forEach(FindVendedorName)

        function FindVendedorName(item){
            if(item.Nome == NomeVendedor){
                return alert(`Vendendor: ${item.Vendedor}, Valor Total: ${item.ValorTotal}`)
            }
        }
        
    }
}




while(choice){
    choice = prompt("1 Gerente  /// 2  Vendedor /// 3 Venda /// 4 Encerrar")
    switch(choice){
        case "1":
        CreateGerente()
        break;

        case "2":
        CreateVendedor()
        break;

        case "3":
        if(ArrayVendedores.length == 0){
            alert("Cadastre um vendedor antes de fazer uma venda")
        }

        else{
        CreateVenda()
        }
        break;   
        
        case "4":
        choice = false
        break;

        default:
        alert("Opção inválida")
        break;    
    }
}

function CreateGerente(){
    let NewGerente = new Gerente()
    choice = prompt("1 Cadastrar Gerente /// 2 Ver seus dados")

    if(choice == "1"){
        NewGerente.Nome = prompt("Qual o seu nome ?")
        NewGerente.Salario = Number(prompt("Qual o seu salario ?"))
        NewGerente.Departamento = prompt("Qual o seu departamento ?")

        if(NewGerente.Nome == "" || NewGerente.Salario == "" || NewGerente.Departamento == ""){
            return alert("Valores Inválidos")
        }

        else{
            ArrayGerentes.push(NewGerente)
        }
    }

    if(choice == "2"){
        if(ArrayGerentes.length > 0){
            let NomeGerente = prompt("Qual o seu nome ?")
            NewGerente.ExibirInformacao(NomeGerente)
        }
        else{
            return alert("Nenhum gerente cadastrado")
        }
    }
}

function CreateVendedor(){
    let NewVendedor = new Vendedor()

    choice = prompt("1 Cadastrar Vendedor /// 2 Ver seus dados /// 3 Ver salário com percentual")

    switch(choice){
        case "1":
        NewVendedor.Nome = prompt("Qual o seu nome ?")
        NewVendedor.Salario = Number(prompt("Qual o seu salario ?"))
        NewVendedor.PercentualComissao = Number(prompt("Qual o seu percentual de comissão ?"))
    
        if(NewVendedor.Nome == "" || NewVendedor.Salario == "" || NewVendedor.PercentualComissao == ""){
            return alert("Valores Inválidos")
        }
    
        else{
            ArrayVendedores.push(NewVendedor)
        }
        break;

        case "2":
        if(ArrayVendedores.length > 0){
            let NomeVendedor = prompt("Qual o seu nome ?")
            if(NomeVendedor == ""){
                return alert("Valores Inválidos")
            }
            else{
                NewVendedor.ExibirInformacoes(NomeVendedor)
            }
        }

        else{
            return alert("Nenhum vendedor cadastrado")
        }
        break;

        case "3":

        if(ArrayVendedores.length > 0){
        NomeVendedorDois = prompt("Qual o seu nome ?")

        if(NomeVendedorDois == ""){
            return alert("Valores Inválidos")
        }
        else{
            NewVendedor.CalcularSalario(NomeVendedorDois)
        }
        }

        else{
        alert ("Nenhum vendedor cadastrado")    
        }
        break;

        default:
        alert("Opção Inválida")
        break;    
    }
}

function CreateVenda(){
    let NewVenda = new Venda()

    choice = prompt("1 Cadastrar Venda /// 2 Adicionar Produto /// 3 Calcular Total /// 4 Finalizar Venda")
    switch(choice){
        case "1":
        NewVenda.ValorTotal = 0
        let ChooseVendedor = prompt("Digite o nome do vendedor")
        
        ArrayVendedores.forEach(VerificarVendedor)
        
        function VerificarVendedor(item){
            if(item.Nome == ChooseVendedor){
                NewVenda.Vendedor = ChooseVendedor
            }
        }
        if(NewVenda.Vendedor == undefined || NewVenda.Vendedor == ""){
            return alert("Vendedor Inválido")
        }
        
        ArrayVendas.push(NewVenda)
        break;

        case "2":
        NewVenda.AdicionarProduto(NewVenda.ValorTotal)    
        break;

        case "3":
        if(ArrayVendedores.length > 0){
        NewVenda.CalcularTotal(NewVenda.ValorTotal)    
        }

        else{
        alert("Nenhuma venda cadastrada")
        }
        break;

        case "4":
        if(ArrayVendas.length > 0){
        NewVenda.FinalizarVenda(NewVenda.Vendedor)
        }
        else{
        alert("Nenhuma venda cadastrada")
        }
        break;

        default:
        alert("Opção Inválida")
        break;
    }
    
}

