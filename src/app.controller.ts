import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication Root')
@Controller()
export class AppController {
  @Get()
  getRoot(): string {
    return 'Authentication Service';
  }
}
