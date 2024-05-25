import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Place } from './place.entity';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(Place)
    private readonly placeRepository: Repository<Place>,
  ) {}

  async findAll(): Promise<Place[]> {
    return this.placeRepository.find();
  }

  async create(placeData: Place): Promise<Place> {
    const place = this.placeRepository.create(placeData);
    return this.placeRepository.save(place);
  }
}

