import { CreateChallengeSubmission } from "./create-challenge-submission";

describe('Testes', () => {
    it('Testes de submissão', async () => {
        const sut = new CreateChallengeSubmission();

        const response = await sut.execute({
            studantId: 'fake-student',
            challengeId: 'fake-challenge-id',
        });
        
        expect(response).toBeTruthy();
    });
});