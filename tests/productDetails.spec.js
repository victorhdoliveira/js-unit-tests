const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
    // Teste se productDetails é uma função.
    it('Verificando se productDetails é uma função', () => { 
      expect(typeof productDetails).toBe('function')
    })
    // Teste se o retorno da função é um array.
    it('Verificando se o output da função é um array', () => { 
    expect(Array.isArray(productDetails('firstProduct', 'secondProduct'))).toBeTruthy() 
    })
    // Teste se o array retornado pela função contém dois itens dentro.
    it('Verificando se o array tem dois itens', () => { 
      expect(productDetails.length).toBe(2) 
    })
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    it('Verificando se dentro do array há dois objetos', () => { 
      expect(typeof productDetails('firstProduct', 'secondProduct')).toBe('object') 
    })
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    it('Verificando se os parâmentros e objetos são diferentes', () => { 
      expect(Object.values(productDetails('firstProduct', 'secondProduct')[0])).toContain('firstProduct') 
      expect(Object.values(productDetails('firstProduct', 'secondProduct')[1])).toContain('secondProduct')
    })
    // Teste se os dois productIds terminam com 123.
    it('Verificando se os produtosIds terminam com 123', () => { 
      const id1 = productDetails('firstProduct', 'secondProduct')[0].details.productId
      const id2 = productDetails('firstProduct', 'secondProduct')[1].details.productId
      expect(id1).toContain('firstProduct123') 
      expect(id2).toContain('secondProduct123') 
});
})