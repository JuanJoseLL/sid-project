import { Controller, Get, Post, Body } from '@nestjs/common';
import { PlaceService } from './place.service';
import { Place } from './place.entity';

@Controller('places')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Get()
  async findAll(): Promise<Place[]> {
    return this.placeService.findAll();
  }

  @Post()
  async create(@Body() placeData: Place): Promise<Place> {
    return this.placeService.create(placeData);
  }
}

