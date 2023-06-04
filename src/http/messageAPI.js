import {$authHost} from './index';

export const createMessage = async (message) => {
    
    const {data} = await $authHost.post('api/message/create/', message)
    
    return data;
}

export const fetchMessages = async (id) => {
    const {data} = await $authHost.get('api/message/' + id)
    return data;
}

export const deleteMessage = async (id) => {
    const {data} = await $authHost.post('api/message/delete', {id: id})
    return {data}
}

export const remakeMessage = async (id, newMessage) => {
    const {data} = await $authHost.post('api/message/remake', {
        id: id,
        newMessage: newMessage
    })
    return data;
}