import { Injectable, Inject } from '@nestjs/common';
import * as oracledb from 'oracledb';

@Injectable()
export class OracleService {
  private connection: oracledb.Connection;

  constructor(@Inject('ORACLE_CLIENT') private readonly oracleClient: typeof oracledb) {}

  async connect() {
    try {
      this.connection = await this.oracleClient.getConnection({
        user: 'P09779_1_2',
        password: 'MFQHqFMxVp',
        connectString: '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=200.3.193.24)(PORT=1522))(CONNECT_DATA=(SERVICE_NAME=ESTUD)))'
      });
    } catch (err) {
      console.error('Error connecting to Oracle:', err);
      throw err;
    }
  }

  async executeQuery(query: string, params: any[] = []) {
    try {
      if (!this.connection) {
        await this.connect();
      }
      const result = await this.connection.execute(query, params);
      return result.rows;
    } catch (err) {
      console.error('Error executing query:', err);
      throw err;
    }
  }

  async disconnect() {
    if (this.connection) {
      try {
        await this.connection.close();
      } catch (err) {
        console.error('Error disconnecting from Oracle:', err);
        throw err;
      }
    }
  }
  async getDataFromTable(tableName: string) {
    const query = `SELECT * P09779_1_2.${tableName}`;
    return await this.executeQuery(query);
  }
}