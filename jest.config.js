module.exports = {
  roots: ['<rootDir>/src/test'],
  testEnvironment: 'jsdom', // Usa el entorno jsdom para simular un navegador
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Ignorar archivos CSS
  },
  setupFilesAfterEnv: [require.resolve('@testing-library/jest-dom', 'jest-fetch-mock')], // Extender expect con matchers de DOM
}
