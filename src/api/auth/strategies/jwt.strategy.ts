import { UnauthorizedException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ConfigService } from '../../config/config.service';
import { Configuration } from '../../config/config.key';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly _confgService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: _confgService.get(Configuration.JWT_SECRET)
        });
    }

    async validate() {

    }
}