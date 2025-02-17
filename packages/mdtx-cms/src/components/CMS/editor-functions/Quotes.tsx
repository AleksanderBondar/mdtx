import { ICommand } from '@uiw/react-md-editor';
import { commandsType } from '../organisms/Editor';

export const Quotes = (commands: commandsType): ICommand => {
    return {
        ...commands.quote,
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19 3.82977V8.70914C19 13.9323 16.8236 16.64 12.2514 17.9684C11.7161 18.124 11.1906 17.6849 11.1906 17.0841V15.792C11.1906 15.4086 11.4096 15.0627 11.7421 14.9324C14.0623 14.0236 15.3438 13.3619 15.3438 10.5389H12.8125C11.8805 10.5389 11.125 9.71971 11.125 8.70914V3.82977C11.125 2.8192 11.8805 2 12.8125 2H17.3125C18.2445 2 19 2.8192 19 3.82977ZM7.1875 2H2.6875C1.75551 2 1 2.8192 1 3.82977V8.70914C1 9.71971 1.75551 10.5389 2.6875 10.5389H5.21875C5.21875 13.3619 3.93733 14.0236 1.61713 14.9324C1.28458 15.0627 1.06563 15.4086 1.06563 15.792V17.0841C1.06563 17.6849 1.59115 18.124 2.1264 17.9684C6.69865 16.64 8.875 13.9323 8.875 8.70914V3.82977C8.875 2.8192 8.11949 2 7.1875 2Z"
                    fill="#E1E5EE"
                />
            </svg>
        ),
    };
};
