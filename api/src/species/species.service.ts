import { Injectable } from '@nestjs/common';

@Injectable()
export class SpeciesService {
  getAllSpecies(): string {
    return 'Hello Species!';
  }
}
