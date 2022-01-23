import fs from 'fs';
export const deleteFile = async(filnename: string) => {
    try{    
        await fs.promises.stat(filnename);
    }catch{
        return;
    }    
    fs.promises.unlink(filnename);
};