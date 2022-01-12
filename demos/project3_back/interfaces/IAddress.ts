import { RowDataPacket } from 'mysql2';

export default interface IAddress extends RowDataPacket {
  address1: string;
  address2: string;
  postal_code: string;
  city: string;
  id_user: number;
}
