import { RowDataPacket } from 'mysql2';

export default interface IUser extends RowDataPacket {
  id_user: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  admin: boolean;
}
