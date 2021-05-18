import {Injectable, UnauthorizedException} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {User} from "../user/entities/user.entity";
import { Strategy } from 'passport-jwt';

export interface JwtPayload {
    id: string;
}

function  cookieExtractor(req: any): null | string {
    return (req && req.cookies) ? (req.cookies?.jwt ?? null): null;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: cookieExtractor,
            secretOrKey: 'S)D(AIS(D)AIW(E Ii a9sdja90dj9 9 j2390 j2342903j0  J()S()D J9j02311293j sadsd'
        });
    }

    async validate(payload: JwtPayload, done: (error, user) => void) {
        if (!payload || !payload.id) {
            return done(new UnauthorizedException(), false);
        }
        const user = await User.findOne({ currentTokenId: payload.id });
        if (!user) {
            return done(new UnauthorizedException(), false);
        }
        done(null, user);
    }

}


