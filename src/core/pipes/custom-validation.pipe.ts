import { ValidationPipe, UnprocessableEntityException } from '@nestjs/common';

export const customValidationPipe = new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidUnknownValues: true,
    validationError: {
        target: false,
        value: false,
    },
    exceptionFactory: (e) => new UnprocessableEntityException(e),
});
