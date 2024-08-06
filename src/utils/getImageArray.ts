import getImagePath from "./getImagePath";

const getImageArray = (data : any, imageType : string = 'backdrops') => {
    let result = data[imageType];
    if (result.length) {
        result = result.map((file : any) => getImagePath(file.file_path))
        return result.slice(0,15)
    } else {
        return ['/film1.jpg', '/film2.jpg', '/film3.jpg', '/film4,jpg'];
    }
}

export default getImageArray;