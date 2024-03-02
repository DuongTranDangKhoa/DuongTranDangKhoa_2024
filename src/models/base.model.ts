import type { Pool, PoolClient, QueryConfig } from 'pg';

export class BaseModel {
  db: Pool | PoolClient;

  constructor(db: Pool | PoolClient) {
    this.db = db;
  }

  public async query(queryConfig: QueryConfig): Promise<any> {
    return (await this.db.query(queryConfig)).rows;
  }
}
