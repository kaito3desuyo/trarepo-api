import { ValidationPipe, UnprocessableEntityException } from '@nestjs/common';

export const customValidationPipe = new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidUnknownValues: true,
    exceptionFactory: e => new UnprocessableEntityException(e),
});
