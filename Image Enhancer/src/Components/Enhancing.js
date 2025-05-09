import { toast } from "react-toastify"
import axios from 'axios'

const api = import.meta.env.VITE_API_KEY;
const Base_URL = import.meta.env.VITE_BASE_URL;

export const ImageEnhancing = async (file) => {
    try {
        const taskId = await uploadImage(file);
        console.log(taskId)

        const enhanceImage = await PollOfEnhancing(taskId)
        console.log(enhanceImage)
        return enhanceImage
    }
    catch(err) {
        console.log(err)
        toast.error(err.message)
    }
}

const uploadImage = async (file) =>{
    const formData = new FormData();
    formData.append("image_file",file);
    const {data} =  await axios.post(`${Base_URL}/api/tasks/visual/scale`,formData,{
    headers:{
        'Content-Type': 'multipart/form-data', 
        'X-API-KEY': api
    }
    })

    if(!data?.data?.task_id){
        toast.error("Image Not Found!")
    }
    return data.data.task_id;
}

const FetchEnhanceImage = async (taskId) => {
    const {data} =  await axios.get(`${Base_URL}/api/tasks/visual/scale/${taskId}`,{
        headers:{
            'X-API-KEY': api
        }
        })
    
        if(!data?.data){
            toast.error("Image Not Found!")
        }
        return data.data;
}


const PollOfEnhancing = async (taskId, retries = 0) => {
    const result = await FetchEnhanceImage(taskId);
    if(result.state === 4){
        console.log("Processing...")
        if(retries >= 20) {
            console.log("Tries Exceeded!")
        }
        await new Promise((res) => setTimeout(res, 2000))
        return PollOfEnhancing(taskId, retries+1)
    }

    return result
}