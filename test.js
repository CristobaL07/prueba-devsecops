const sumar = require('./app');

if (sumar(5, 5) === 10) {
  console.log("✅ Test PASADO: La suma funciona correctamente.");
  process.exit(0); // 0 significa "Todo OK, luz verde"
} else {
  console.error("❌ Test FALLADO: La suma está rota.");
  process.exit(1); // 1 significa "Error crítico, detén la pipeline"
}
