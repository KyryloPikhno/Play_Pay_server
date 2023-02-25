import { Body, Controller, Post } from "@nestjs/common";
import { TableService } from "./table.service";
import { CreateTableDto } from "./dto/create.table.dto";

@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {
  }

  @Post()
  async create(@Body() createTableDto: CreateTableDto) {
    await this.tableService.create(createTableDto);

  @Get()
  async getAll(){
      return this.tableService.getAll();
    }
  }
}
