#LUIZ MIGUEL
# QUETÃO 1
# 1A)
A função calcularDesconto serve para calcular o valor final de um produto depois de aplicar um desconto em porcentagem.Primeiro, ela recebe dois valores: valor, que representa o preço original do produto, e percentual, que representa a porcentagem de desconto.

# 1B)
|Caso de teste|Valor de entrada|Resultado esperado|
|---|---|---|
| Desconto de 10% em um produto de R$ 100 | calcularDesconto 100, 10 | 90 |
| Desconto de 50% em um produto de R$ 200 | calcularDesconto 200, 50 | 100 |
| Valor inválido (zero)| calcularDesconto(0, 10) | Apresentar erro "Dados inválidos" |

# 1C) 
esse teste foi feito no operacoes.js na quetão 1 (C) que estara comentado

# 2A) 
ela verifica se um aluno ele esta aprovado ou reprovado de acordo com sua nota.Primeiro ela recebe a nota se ela for menos que 0 ou maior que 10 ela mostra uma mensagem de erro nota invalida.

# 2B)
|Caso de teste|Valor de entrada|Resultado esperado|
|---|---|---|
|Nota acima da média|verificarAprovacao(8) |Aprovado|
|Nota abaixo da média|verificarAprovacao(5) |Reprovado|
|Nota mínima permitida|verificarAprovacao(0) |Reprovado|
|Nota inválida|verificarAprovacao(11)	Erro: |"Nota inválida"|

# 2C)
esse teste foi feito no arquivo operacoes.js na quetão 2 (C)

# 2D)
teriamos que testa as outras duas funções dele que seria se a nota fosse invalida ou resprovado para a verificação do codigo se esta funcional.

# 3A) 
Nome: não pode estar vazio, ser nulo ou conter apenas espaços em branco.
Idade: deve ser igual ou maior que 18 anos e menor ou igual a 100 anos.
E-mail: não pode estar vazio e precisa conter o caractere @.

# 3B)
esse teste foi feito no arquivo operacoes.js na quetão 3 (B) que esta comentado

# 3C)
Quando apenas um dos dados estiver inválido, a função retorna false, mesmo que os outros estejam corretos. Isso acontece porque todos os campos precisam atender às condições para que o cadastro seja aprovado.

# 4A)
esse teste foi feito no arquivo operacoes.js na quetão 4 (A)

# 4B)
ele deve retorna zero porque as compra com maior ou igual a 200,00 não pagam fret como a compra e 200,00 ele não paga o frete ou seja cliente recebe o frete gratis.

# 5A)
o teste foi feito no arquivo operacoes.js

# 5B)
a entrada "25" e considerada um string, e a função so aceita entrada numericas.

# 6A)
Testes unitários são testes realizados para verificar se pequenas partes de um sistema, como funções, estão funcionando corretamente.

# 6B)
Teste D – FALHA: O preço é negativo, então a função lança um erro em vez de retornar -10, como o teste espera, os outros testes passaram

# 6C)
O Teste D apresenta uma expectativa incompatível, pois a função foi programada para lançar um erro sempre que a quantidade ou o preço unitário for negativo. Por isso, ela não pode retornar -10 nesse caso.

# 7A)
Teste C – FALHA: A senha possui 10 caracteres, então a função retorna true, mas o teste espera false.

# 7B)
O problema é que o teste espera que uma senha com 10 caracteres seja rejeitada, mas a função aceita qualquer senha com 8 caracteres ou mais. Portanto, o resultado correto seria true.

# 7C)
Não. A função verifica apenas se a senha possui pelo menos 8 caracteres. Ela não verifica letras maiúsculas, números ou caracteres especiais.

# 8A)
Teste D – FALHA: A quantidade solicitada é zero, então a função lança um erro "Quantidade inválida", mas o teste espera "Estoque insuficiente". os outros passam

# 8B)
Porque a função permite aprovar pedidos quando a quantidade solicitada é igual ao estoque disponível. Como existem exatamente 10 unidades e foram solicitadas 10, o pedido pode ser aprovado.

# 8C)
O problema é que o teste espera "Estoque insuficiente", mas a função determina que quantidades menores ou iguais a zero devem gerar um erro.

# 9A)
Teste 4 – FALHA: A primeira nota é -1, que é inválida. A função lança o erro "Notas inválidas", em vez de retornar 3,5.

# 9B)
verifique o codigo na pasta opercoes.js