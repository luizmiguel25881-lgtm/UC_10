const{ calcularDesconto, 
    verificarAprovacao,
    validarCadastro,
    calcularFrete,
    converterCelsiusParaFahrenheit,
    calcularTotal,
    validarSenha,
    verificarEstoque,
    calcularMedia
 } = require('../src/operacoes.js');

// QUESTÃO 1
// Testes para verificar se a função calcularDesconto está funcionando corretamente
describe('Testes da função calcularDesconto', () => {

    // Verifica se o desconto de 10% sobre 100 retorna 90
    test('deve calcular desconto de 10% corretamente', () => {
        expect(calcularDesconto(100, 10)).toBe(90);
    });

    // Verifica se o desconto de 50% sobre 200 retorna 100
    test('deve calcular desconto de 50% corretamente', () => {
        expect(calcularDesconto(200, 50)).toBe(100);
    });

    // Verifica se a função apresenta erro quando o valor informado é zero
    test('deve apresentar erro quando o valor for zero', () => {
        expect(() => calcularDesconto(0, 10)).toThrow('Dados inválidos');
    });
     test("bônus: aceita idades limite 18 e 100", () => {
        expect(validarCadastro("Ana Souza", 18, "ana@email.com")).toBe(true);
        expect(validarCadastro("Ana Souza", 100, "ana@email.com")).toBe(true);
    });

});

// QUESTÃO 2
// Testes para verificar se a função verificarAprovacao identifica a aprovação
describe('função verificarAprovacao', () => {

    // Verifica se uma nota 8 retorna Aprovado
    test('deve retornar Aprovado para nota 8', () => {
        expect(verificarAprovacao(8)).toBe('Aprovado');
    });

    // Verifica se uma nota 5 retorna Reprovado
    test('deve retornar Reprovado para nota 5', () => {
        expect(verificarAprovacao(5)).toBe('Reprovado');
    });

    // Verifica se uma nota 0 retorna Reprovado
    test('deve retornar Reprovado para nota 0', () => {
        expect(verificarAprovacao(0)).toBe('Reprovado');
    });

    // Verifica se uma nota maior que 10 apresenta erro
    test('deve apresentar erro para nota 11', () => {
        expect(() => verificarAprovacao(11)).toThrow('Nota inválida');
    });

});

// QUESTÃO 3
// Testes para verificar se os dados do cadastro são válidos
describe('função validarCadastro', () => {

    // Verifica se o cadastro retorna true quando todos os dados estão corretos
    test('deve retornar true quando todos os dados forem válidos', () => {
        expect(validarCadastro('João', 20, 'joao@gmail.com')).toBe(true);
    });

    // Verifica se retorna false quando todos os dados estão incorretos
    test('deve retornar false quando todos os dados forem inválidos', () => {
        expect(validarCadastro('', 15, 'joaogmail.com')).toBe(false);
    });

    // Verifica se retorna false quando o nome está vazio
    test('deve retornar false quando o nome estiver vazio', () => {
        expect(validarCadastro('', 20, 'joao@gmail.com')).toBe(false);
    });

    // Verifica se retorna false quando o nome contém apenas espaços
    test('deve retornar false quando o nome tiver apenas espaços', () => {
        expect(validarCadastro('   ', 20, 'joao@gmail.com')).toBe(false);
    });

    // Verifica se retorna false quando a idade não foi informada
    test('deve retornar false quando a idade estiver vazia', () => {
        expect(validarCadastro('João', '', 'joao@gmail.com')).toBe(false);
    });

    // Verifica se retorna false quando a idade é menor que 18 anos
    test('deve retornar false quando a idade for menor que 18', () => {
        expect(validarCadastro('João', 15, 'joao@gmail.com')).toBe(false);
    });

    // Verifica se retorna false quando a idade é maior que 100 anos
    test('deve retornar false quando a idade for maior que 100', () => {
        expect(validarCadastro('João', 101, 'joao@gmail.com')).toBe(false);
    });

    // Verifica se retorna false quando o email está vazio
    test('deve retornar false quando o email estiver vazio', () => {
        expect(validarCadastro('João', 20, '')).toBe(false);
    });

    // Verifica se retorna false quando o email não possui o símbolo @
    test('deve retornar false quando o email não tiver @', () => {
        expect(validarCadastro('João', 20, 'joaogmail.com')).toBe(false);
    });

});

// QUESTÃO 4
// Testes para verificar se o cálculo do frete está correto
describe('função calcularFrete', () => {

    // Verifica se o frete é grátis para uma compra de 250 reais
    test('Deve retornar 0 para compra de R$ 250', () => {
        expect(calcularFrete(250, 10)).toBe(0);
    });

    // Verifica se o frete é calculado de acordo com a distância
    test('Deve calcular o frete pela distância', () => {
        expect(calcularFrete(100, 10)).toBe(20);
    });

    // Verifica se o frete é grátis para uma compra de 200 reais
    test('Deve retornar 0 para compra de R$ 200', () => {
        expect(calcularFrete(200, 5)).toBe(0);
    });

    // Verifica o valor do frete quando a compra custa zero reais
    test('Deve calcular o frete para compra de R$ 0', () => {
        expect(calcularFrete(0, 10)).toBe(20);
    });

    // Verifica se a função apresenta erro quando o valor da compra é negativo
    test('Deve lançar erro para compra negativa', () => {
        expect(() => calcularFrete(-50, 10)).toThrow('Valores inválidos');
    });

    // Verifica se a função apresenta erro quando a distância é negativa
    test('Deve lançar erro para distância negativa', () => {
        expect(() => calcularFrete(100, -5)).toThrow('Valores inválidos');
    });

});

// QUESTÃO 5
// Testes para verificar a conversão de Celsius para Fahrenheit
describe('função converterCelsiusParaFahrenheit', () => {

    // Verifica se 0 graus Celsius corresponde a 32 graus Fahrenheit
    test('Deve converter 0°C para 32°F', () => {
        expect(converterCelsiusParaFahrenheit(0)).toBe(32);
    });

    // Verifica se 100 graus Celsius corresponde a 212 graus Fahrenheit
    test('Deve converter 100°C para 212 graus Fahrenheit', () => {
        expect(converterCelsiusParaFahrenheit(100)).toBe(212);
    });

    // Verifica se -40 graus Celsius corresponde a -40 graus Fahrenheit
    test('Deve converter -40°C para -40°F', () => {
        expect(converterCelsiusParaFahrenheit(-40)).toBe(-40);
    });

    // Verifica se 25 graus Celsius corresponde a 77 graus Fahrenheit
    test('Deve converter 25°C para 77 graus Fahrenheit', () => {
        expect(converterCelsiusParaFahrenheit(25)).toBe(77);
    });

    // Verifica se apresenta erro quando a temperatura é um número escrito como texto
    test('Deve lançar erro para texto numérico', () => {
        expect(() => converterCelsiusParaFahrenheit("25"))
            .toThrow("A temperatura deve ser numérica");
    });

    // Verifica se apresenta erro quando a temperatura é um texto que não representa número
    test('Deve lançar erro para texto não numérico', () => {
        expect(() => converterCelsiusParaFahrenheit("abc"))
            .toThrow("A temperatura deve ser numérica");
    });

});

// QUESTÃO 6 (B)
describe('função calcularTotal', () => {

    test("deve calcular o total corretamente", () => {
    expect(calcularTotal(3, 10)).toBe(30);
});

test("deve retornar zero quando a quantidade for zero", () => {
    expect(calcularTotal(0, 10)).toBe(0);
});

test("deve lançar erro quando a quantidade for negativa", () => {
    expect(() => calcularTotal(-2, 10)).toThrow("Valores inválidos");
});

test("deve lançar erro quando o preço for negativo", () => {
    expect(() => calcularTotal(2, -5)).toThrow("Valores inválidos");
});

});

//questão 7 (A)

describe('validarSenha', () => {
    test("deve aceitar senha com 8 caracteres", () => {
    expect(validarSenha("abc12345")).toBe(true);
});

test("deve rejeitar senha com menos de 8 caracteres", () => {
    expect(validarSenha("abc123")).toBe(false);
});

test("deve aceitar senha com 10 caracteres", () => {
    expect(validarSenha("abc1234567")).toBe(true);
});

test("deve aceitar senha com 12 caracteres", () => {
    expect(validarSenha("abc123456789")).toBe(true);
});
test("bônus: aceita senha só com letras minúsculas (sem número/maiúscula/especial)", () => {
        expect(validarSenha("abcdefgh")).toBe(true);
    });
});


//QUESTÃO 8 (A)

describe("Testes da verificarEstoque", () => {

    test("deve aprovar pedido quando há estoque suficiente", () => {
        expect(verificarEstoque(20, 5)).toBe("Pedido aprovado");
    });

    test("deve informar estoque insuficiente", () => {
        expect(verificarEstoque(5, 10)).toBe("Estoque insuficiente");
    });

    test("deve aprovar pedido com quantidade igual ao estoque", () => {
        expect(verificarEstoque(10, 10)).toBe("Pedido aprovado");
    });

   test("deve lançar erro para quantidade zero", () => {
    expect(() => verificarEstoque(10, 0))
    .toThrow("Quantidade inválida");
});

    test("deve lançar erro para quantidade negativa", () => {
        expect(() => verificarEstoque(10, -2))
        .toThrow("Quantidade inválida");
    });

});

//QUESTÃO 9 (A)

describe("Testes da função calcularMedia", () => {

    
    test("deve calcular a média corretamente", () => {
        expect(calcularMedia(8, 6)).toBe(7);
    });

  
    test("deve retornar 10 quando as duas notas forem 10", () => {
        expect(calcularMedia(10, 10)).toBe(10);
    });

    
    test("deve calcular a média quando uma nota for zero", () => {
        expect(calcularMedia(0, 8)).toBe(4);
    });

    
    test("deve lançar erro quando uma nota for negativa", () => {
        expect(() => calcularMedia(-1, 8)).toThrow("Notas inválidas");
    });

   
    test("deve lançar erro quando uma nota for maior que 10", () => {
        expect(() => calcularMedia(5, 15)).toThrow("Notas inválidas");
    });

    });

    
    test("deve retornar a própria nota quando forem iguais", () => {
        expect(calcularMedia(7, 7)).toBe(7);
    });

    
    test("deve lançar erro quando uma nota for maior que 10", () => {
        expect(() => calcularMedia(8, 11))
            .toThrow("Notas inválidas");
    });


