import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TableService } from './table.service';
import { CreateTableDto } from './dto/create.table.dto';
import { Table } from "./schemas/table.schema";

@Controller('tables')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Post()
  async create(@Body() createTableDto: CreateTableDto) {
    return await this.tableService.create(createTableDto);

    @Get()
    async findAll(): Promise<Table[]>  {
      return this.tableService.findAll();
    }

  // @Get('id')
  //   findOne(@Param('id') name: string) {
  //     return this.tableService.findOne(name);
  //   }

  // @Put(':name')
  //   update(@Param('id') id: string, @Body() updateBreedDto: UpdateBreedDto) {
  //     return this.tableService.update(id, updateBreedDto);
  //   }

  // @Delete(':id')
  //   remove(@Param('name') id: string) {
  //     return this.tableService.remove(id);
  //   }
  }
}
