import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty()
    id: Intl ; 
    
    @ApiProperty
    email: string ; 
  }
