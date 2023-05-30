import fs from 'fs'
import { parse } from 'csv-parse'

class ImportCategoryUseCase {
    constructor() {
    }

    execute(file: Express.Multer.File): void {

        const stream = fs.createReadStream(file.path)

        const parseFile = parse()

        //pega o que está sendo lido do stream e joga no lugar que queremos 
        stream.pipe(parseFile)

        parseFile.on("data", async(line) => {
            console.log(line);
        })
    }
}

export { ImportCategoryUseCase }