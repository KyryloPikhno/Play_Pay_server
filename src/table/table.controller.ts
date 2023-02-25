import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TableService } from './table.service';
import { CreateTableDto } from './dto/create.table.dto';
import { UpdateTableDto } from './dto/update.table.dto';

@Controller('tables')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get()
  async findAll(@Query('company') company: string) {
    return await this.tableService.findAll({
      companyName: new RegExp(company),
    });
  }

  @Post()
  async create(@Body() createTableDto: CreateTableDto) {
    return await this.tableService.create(createTableDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const table = await this.tableService.findOne(id);

    if (!table) {
      throw new NotFoundException();
    }

    return table;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTableDto: UpdateTableDto,
  ) {
    const table = await this.tableService.update(id, updateTableDto);

    if (!table) {
      throw new NotFoundException();
    }

    return table;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tableService.remove(id);
  }
}
