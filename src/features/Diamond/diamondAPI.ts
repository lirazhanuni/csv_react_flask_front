import axios from "axios";
import Diamond from '../../app/models/Diamond';
import{MY_SERVER} from '../env'

export function getDiamonds() {
  return new Promise<{ data:Diamond[] }>((resolve) =>
  
    axios.get(MY_SERVER).then(res => resolve({data: res.data})))
}

export function addDiamond(yahalom:Diamond) {
  return new Promise<{ data: Diamond }>((resolve) =>
  
    axios.post(MY_SERVER, yahalom).then(res => resolve({data: res.data})))
}

export async function delDiamond(id:number) {
  return await axios.delete(MY_SERVER + "/" + id).then(res => id)
}

export async function updDiamond(yahalom: Diamond) {
  return await axios.put(MY_SERVER + "/" + yahalom.ID,yahalom).then(res => res.data)
}
