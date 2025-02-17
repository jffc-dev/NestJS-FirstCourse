import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './decorators/get-user.decorator';
import { User } from './entities/user.entity';
import { RawHeaders } from './decorators/raw-headers.decorator';
import { UserRoleGuard } from './guards/user-role/user-role.guard';
import { RoleProtected } from './decorators/role-protected.decorator';
import { ValidRoles } from './interfaces';
import { Auth } from './decorators/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createAuthDto: CreateUserDto) {
    return this.authService.create(createAuthDto);
  }

  @Post('login')
  loginUser(@Body() createAuthDto: LoginUserDto) {
    return this.authService.login(createAuthDto);
  }

  @Get('check-status')
  @Auth()
  checkAuthStatus(@GetUser() useer: User) {
    return this.authService.checkAuthStatus(useer);
  }

  @Get('private')
  @UseGuards(AuthGuard())
  testingPrivateRoute(
    @GetUser() user: User,
    @GetUser('email') emailUser: string,
    @RawHeaders() rawHeaders: any,
  ) {
    console.log(user);
    return {
      user,
      emailUser,
      rawHeaders,
    };
  }

  @Get('private2')
  @RoleProtected(ValidRoles.superUser)
  @UseGuards(AuthGuard(), UserRoleGuard)
  testingPrivateRoute2(@GetUser() user: User) {
    console.log(user);
    return {
      user,
    };
  }

  @Get('private3')
  @Auth(ValidRoles.user)
  testingPrivateRoute3(@GetUser() user: User) {
    console.log(user);
    return {
      user,
    };
  }
}
