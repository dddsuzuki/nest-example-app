import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entry } from './../entity/entry.entity';
import { EntryController } from './entry.controller';
import { EntryService } from './entry.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Entry]),
  ],
  exports: [
    TypeOrmModule,
  ],
  controllers: [EntryController],
  providers: [EntryService],
})
export class EntryModule { }
