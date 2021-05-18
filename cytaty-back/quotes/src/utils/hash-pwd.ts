import * as crypto from 'crypto';


export const hashPwd = (p: string): string => {
    const hmac = crypto.createHmac('sha512', 'dakjh as*@H# !*@182h31 842h3 UIDHS 1231i2h @!@(EH*S*(QWDQW(*#!* e(* H(D*S D9h8 sd*(ASHD@((*@#');
    hmac.update(p);
    return hmac.digest('hex');
}
