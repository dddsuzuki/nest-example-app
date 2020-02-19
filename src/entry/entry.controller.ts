import { Controller, Get, Post, Body } from '@nestjs/common';
import { EntryDto } from './dto/entry.dto';
import { EntryService } from './entry.service';

@Controller('entry')
export class EntryController {

  constructor(private readonly entryService: EntryService) { }

  @Get()
  async getEntries() {
    const entries = await this.entryService.findEntries();

    return entries;
  }

  @Post()
  async createEntry(@Body() entryDto: EntryDto) {
    await this.entryService.createEntry(entryDto);
  }

}
