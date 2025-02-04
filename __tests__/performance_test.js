const request = require('supertest');
const app = require('../src/index');

describe('Teste de performance da API', () => {
    it('Deve responder rapidamente', async () => {
        const start = Date.now();
        const response = await request(app).get('/api/tarefas');
        const duration = Date.now() - start;
        
        console.log(`Tempo de resposta: ${duration}ms`);
        expect(response.status).toBe(200);
        expect(duration).toBeLessThan(500);
    });

    afterAll(() => app.close());
});
