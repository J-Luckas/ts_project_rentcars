
import {parse as csvParse} from 'csv-parse';
import fs  from 'fs';
import ICategoriesRepository from '../../repositories/ICategoriesRepository';

interface IImportCategory {
    name: string;
    description: string;
}

export class ImportCategoryUseCase {

    constructor(private categoryRepository: ICategoriesRepository) {}

    loadCategory( file: Express.Multer.File  ): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream( file.path );
            const categories: IImportCategory[] = [];


            const parseFile = csvParse();
            stream.pipe( parseFile );

            parseFile.on('data', async (data: any) => {
                const [name, description] = data;
                categories.push({
                    name,
                    description
                });
            })
                .on('end', () => {
                    resolve( categories );
                })
                .on('error', (err: Error) => {
                    reject( err );
                });
        });
    }

    async execute( file: Express.Multer.File ): Promise<void>{
        const categories = await this.loadCategory( file );
        
        categories.forEach( (category: IImportCategory) => {
            const { name, description } = category;

            const categoryExists = this.categoryRepository.findByName( name );

            if( !categoryExists ){
                this.categoryRepository.create( { name, description } );
            }
        
        });
    }
}