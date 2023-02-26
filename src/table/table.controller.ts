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
import { Table } from './schemas/table.schema';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('table')
@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get()
  async findAll(@Query('company') company: string): Promise<Table[]> {
    return this.tableService.findAll({
      companyName: new RegExp(company),
    });
  }

  @ApiResponse({ status: 201, type: Table })
  @Post()
  async create(@Body() createTableDto: CreateTableDto): Promise<Table> {
    return this.tableService.create(createTableDto);
  }

  @ApiQuery({ name: 'id', example: '12345' })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Table> {
    return this.tableService.findById(id);
  }

  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateTableDto: UpdateTableDto,
  ): Promise<Table> {
    return this.tableService.updateById(id, updateTableDto);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string): Promise<Table> {
    return this.tableService.deleteById(id);
  }
}
