import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';

export const GetUser = createParamDecorator((data, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest();
  const user = req.user;

  if (data) {
    return user[data];
  }

  if (!user) throw new InternalServerErrorException('Invalid user in request');
  return user;
});
