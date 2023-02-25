import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { Table, TableDocument } from './schemas/table.schema';
import { CreateTableDto } from './dto/create.table.dto';
import { UpdateTableDto } from './dto/update.table.dto';

@Injectable()
export class TableService {
  constructor(
    @InjectModel(Table.name)
    private readonly tableModel: Model<TableDocument>,
  ) {}

  async create(createCatDto: CreateTableDto): Promise<Table> {
    return new this.tableModel(createCatDto).save();
  }

  async findAll(company): Promise<Table[]> {
    return this.tableModel.find(company).exec();
  }

  async findOne(id: string) {
    return this.tableModel.findOne({ id });
  }

  async update(id: string, updateTableDto: UpdateTableDto) {
    return this.tableModel.updateOne({ id }, { $set: updateTableDto });
  }

  async remove(id: string) {
    return this.tableModel.deleteOne({ id });
  }
}
