import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MonitoringService } from '../services/monitoring.service';

@ApiTags('Health')
@Controller({
  version: '1',
  path: 'health',
})
export class HealthController {
  constructor(private readonly monitoringService: MonitoringService) {}
  @Get()
  health() {
    const version = this.monitoringService.currentMicroserviceVersion;

    return {
      statusCode: HttpStatus.OK,
      message: "Authentication Service it's OK!",
      version,
    };
  }
}
