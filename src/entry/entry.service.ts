import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entry } from './../entity/entry.entity';
import { EntryDto } from './dto/entry.dto';

@Injectable()
export class EntryService {

  constructor(
    @InjectRepository(Entry)
    private readonly entryRepository: Repository<Entry>,
  ) { }

  async createEntry(entryDto: EntryDto) {
    await this.entryRepository.insert(entryDto);
  }

  async findEntries() {
    const entries = await this.entryRepository.find({
      take: 10,
      order: { createdAt: 'ASC' },
    });

    return entries;
  }

}
