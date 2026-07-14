import { v2 as cloudinary } from 'cloudinary';

//cloudinary configuration
cloudinary.config({
  cloud_name: process.env.ClOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if(!localFilePath) {
      return null
    }
    const response = await cloudinary.uploader.upload(localFilePath, { resource_type: "auto" });
    console.log("File uploaded to Cloudinary:", response.secure_url);

    // once the file is uploaded to cloudinary, we can delete the local file
    fs.unlinkSync(localFilePath);
    return response;
  }
  catch (error) {
    fs.unlinkSync(localFilePath);
    return null
  }
}

export { uploadOnCloudinary}