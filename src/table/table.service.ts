import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Table, TableDocument } from './schemas/table.schema';
import { CreateTableDto } from './dto/create.table.dto';

@Injectable()
export class TableService {
  constructor(
    @InjectModel(Table.name)
    private readonly tableModel: Model<TableDocument>,
  ) {}

  async create(createCatDto: CreateTableDto): Promise<Table> {
    return new this.tableModel(createCatDto).save();
  }

  async findAll(): Promise<Table[]> {
    return this.tableModel.find().exec();
  }

  // async findOne(name: string) {
  //   return this.tableModel.findOne({ name });
  // }

  // async update(name: string, updateBreedDto: UpdateBreedDto) {
  //   return this.tableModel.updateOne({ name }, { $set: updateBreedDto });
  // }

  // async remove(id: string) {
  //   return this.tableModel.deleteOne({ id });
  // }
}
