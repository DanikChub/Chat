import {$authHost} from './index';

export const createChat = async (chat, users) => {
    const {data} = await $authHost.post('api/chat/create/', 
        {
            name: chat,
            users_: users
        }
    );

    return data
}

export const fetchChats = async () => {
    const {data} = await $authHost.get('api/chat/')

    return data
}

export const fetchChat = async (id) => {
    const {data} = await $authHost.get('api/chat/' + id)

    return data
}