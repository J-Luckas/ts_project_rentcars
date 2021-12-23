import { v4 as uuidV4 } from "uuid";
class Category {

    constructor( name: string, description: string) {
        if( !this.id )
            this.id = uuidV4();        
        this.name = name;
        this.description = description;
        this.created_at = new Date();
    }

    id?: string;
    name: string;
    description: string;
    created_at: Date;

}

export default Category;