import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Table, TableDocument } from './schemas/table.schema';
import { CreateTableDto } from './dto/create.table.dto';

@Injectable()
export class TableService {
  constructor(
    @InjectModel(Table.companyName)
    private readonly tableModel: Model<TableDocument>,
  ) {}

  async create(createCatDto: CreateTableDto): Promise<Table> {
    return await this.tableModel.create(createCatDto);
  }

  async getAll() {
    return await this.tableModel.find().exec();
  }
}
