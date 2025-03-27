import axios from 'axios';

const apiUrl = "http://localhost:5108/items"

export default {
  getTasks: async () => {
    const result = await axios.get(apiUrl)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    return await axios.post(apiUrl, {name: name,isComplete:false})
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    return await axios.put(`${apiUrl}/${id}`,{isComplete: isComplete})
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    return await axios.delete(`${apiUrl}/${id}`)
  }
};
