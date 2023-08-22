import { AuthModule } from "src/config/jwt/jwt.module";
import { UserModule } from "./user/user.module";

export const V1Routes = [
    {
      path: 'user',
      module: UserModule,
    },
    {
      path: 'auth',
      module: AuthModule,
    },
];