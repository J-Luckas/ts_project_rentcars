import { Request, Response } from 'express';
import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase';
import { container } from 'tsyringe';


export class UpdateUserAvatarController {
    async handle(req: Request, res: Response): Promise<Response> {
        
        const { id } = req.user;
        const avatar  = req.file.filename;
        const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);
        await updateUserAvatarUseCase.execute({ userId: id, avatar: avatar });

        return res.sendStatus(204);
    }
}