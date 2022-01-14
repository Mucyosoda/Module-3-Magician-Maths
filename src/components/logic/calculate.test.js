import calculate from "./calculate";


describe('calculator displays the correct result', () => {

  test('operators return correct sum', () => {
    const res = calculate( {
      total: '7',
      next: '3',
      operation: '+',
    }, '=');
    expect(res.total).toEqual('10');   
  });

  test('operators return correct product', () => {
    const res = calculate( {
      total: '7',
      next: '3',
      operation: 'x',
    }, '=');
    expect(res.total).toEqual('21');   
  });

  test('operators return correct difference', () => {
    const res = calculate( {
      total: '7',
      next: '3',
      operation: '-',
    }, '=');
    expect(res.total).toEqual('4');   
  });

  test('operators return correct quotient', () => {
    const res = calculate( {
      total: '15',
      next: '3',
      operation: '÷',
    }, '=');
    expect(res.total).toEqual('5');   
  });

  
  test('"AC" operator returns null', () => {
      const res = calculate({
        total: '7',
        next: '3',
        operation: '+',
      }, 'AC');
      expect(res).toEqual({ total: null, next: null, operation: null });
  });
});
