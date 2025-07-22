import { DDB } from 'dolphindb'

import type { DdbConfig } from './types.ts' 


export async function createDDBClient (configOptions: DdbConfig): Promise<DDB> {
    const urladdress = `ws://${configOptions.ip}:${configOptions.port}` // 模板字符串合并url
    const ddb = new DDB(urladdress,
        { 
            autologin: configOptions.autologin,
            username: configOptions.username,
            password: configOptions.password, 
            verbose: true
        }
    )
    await ddb.connect()
    return Promise.resolve(ddb) 
}
