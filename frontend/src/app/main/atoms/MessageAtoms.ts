import { atom } from 'recoil';
import { MessageType } from '../domain/Message';


export const defaultMessageValue: MessageType = {
    type: "info",
    message: '',
    isHidden: true
}

export  const messageState = atom<MessageType>({
    key: 'message',
    default: defaultMessageValue
});