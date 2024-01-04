import axios from "axios";
const url = "http://localhost:3005/api/persons"

function getNotes(){
    const request = axios.get(url)
    return request.then(resp => resp.data)
}

function createNote(newNote){
    const rq = axios.post(url,newNote)
    return rq.then(resp => resp.data)
}

function DeleteNote(id){
    const rq = axios.delete(`${url}/${id}`)
}

function updateNote(id, newNote){
    const rq = axios.put(`${url}/${id}`, newNote)
    return rq.then(resp => resp.data)
}

export default {createNote, getNotes, DeleteNote, updateNote}