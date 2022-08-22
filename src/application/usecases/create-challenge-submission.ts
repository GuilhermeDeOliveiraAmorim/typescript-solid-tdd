import { Submission } from "../../domain/entities/submission"
import { StudentsRepository } from "../repositories/StudentsRepository";

type CreateChallengeSubmissionRequeste = {
    studantId: string;
    challengeId: string;
}

export class CreateChallengeSubmission {
    constructor(
        private studentsRepository: StudentsRepository
    ){};

    async execute({studantId, challengeId}: CreateChallengeSubmissionRequeste) {
        const student = await this.studentsRepository.findById(studantId);

        if (!student) {
            throw new Error("student não existe!");
        }

        const challenge = await this.studentsRepository.findById(challengeId);

        if (!challenge) {
            throw new Error("challenge não existe!");
        }

        const submission = Submission.create({
            studantId,
            challengeId
        });

        return submission;
    }
}