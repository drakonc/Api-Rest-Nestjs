import { IsString } from 'class-validator';
import { Type, Exclude, Expose } from 'class-transformer';

@Exclude()
export class LoggedInDto {

    @Expose()
    @IsString()
    token: string;

}