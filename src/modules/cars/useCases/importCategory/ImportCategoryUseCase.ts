import fs from 'fs'
import { parse } from 'csv-parse'
import { ICategoryRepository } from '../../repositories/ICategoriesRepository'
import { inject, injectable } from 'tsyringe';

interface IImportCategory {
    name: string;
    description: string;
}
@injectable()
class ImportCategoryUseCase {
    constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoryRepository ) {
    }

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]>{
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path)
            const categories: IImportCategory[] = []
    
            const parseFile = parse()
    
            //pega o que está sendo lido do stream e joga no lugar que queremos 
            stream.pipe(parseFile)
    
            parseFile.on("data", async(line) => {
                const [ name, description ] = line
    
                categories.push({
                    name, 
                    description,
                })
            })
            .on("end", () => {
                //remove o arquivo da pasta tmp assim que finalizar a promise
                fs.promises.unlink(file.path)
                resolve(categories)
            })
            .on("error", (err) => {
                reject(err)
            })
        })
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file)
        
        categories.map(category => {
            const {name, description} = category;

            const existCategory = this.categoriesRepository.findByName(name);

            if(!existCategory) {
                this.categoriesRepository.create({
                    name,
                    description,
                })
            }
        })
       
    }
}

export { ImportCategoryUseCase }