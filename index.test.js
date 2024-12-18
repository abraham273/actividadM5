const { CalculaTipo } = require('./indexNOX');

test('CalculaTipo returns correct value for ventas >= 500 and factor === 100', () => {
    expect(CalculaTipo(500, 0)).toBe(5);
});

test('CalculaTipo returns correct value for ventas >= 500 and factor > 50', () => {
    expect(CalculaTipo(600, 100)).toBe(4);
});

test('CalculaTipo returns correct value for ventas >= 500 and factor === 0', () => {
    expect(CalculaTipo(500, 500)).toBe(0);
});

test('CalculaTipo returns correct value for ventas < 500 and factor > 50', () => {
    expect(CalculaTipo(400, 100)).toBe(3);
});

test('CalculaTipo returns correct value for ventas < 500 and factor <= 50', () => {
    expect(CalculaTipo(400, 300)).toBe(2);
});
