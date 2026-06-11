import { v2 as cloudinary } from 'cloudinary';
import sharp from 'sharp';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
});

export const UploadProfileImg = async (img) => {
     try {
        const optimizedBuffer = await sharp(img)
            .resize(1080, 720, { fit: 'inside', withoutEnlargement: true })
            .jpeg({ quality: 80, mozjpeg: true }).toBuffer();


        const uploadResult = await cloudinary.uploader.upload(
            `data:image/jpeg;base64,${optimizedBuffer.toString('base64')}`,
            { resource_type: 'auto', quality: 'auto', folder: 'course' });

        return uploadResult;
    } 
    catch (error) {
        console.error('Error during image optimization or upload:', error);
        throw error;
    }
};