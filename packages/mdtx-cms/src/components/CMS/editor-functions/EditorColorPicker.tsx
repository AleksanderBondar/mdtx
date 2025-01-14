import { ICommand } from '@uiw/react-md-editor';
import { ColorPicker } from '../atoms/ColorPicker';
import { commandsType, utilsType } from '../organisms/Editor';

export const EditorColorPicker = (
    commands: commandsType,
    utils: utilsType,
    handleColor: (p: string) => void,
    color: string,
): ICommand => {
    return commands.group([], {
        name: 'colors',
        groupName: 'colors',
        value: 'colors',
        liProps: { id: 'colors' },
        buttonProps: {
            className: 'colorsButton',
            'aria-label': 'Choose color',
            title: 'Choose color',
            style: { padding: 0, margin: '0 1.6rem' },
        },
        children: ({ close, getState, textApi }) => {
            return (
                <div className="relative small flex flex-col gap-[1.6rem] px-[5.6rem] py-[0.4rem] items-center justify-center">
                    <ColorPicker
                        getState={getState}
                        textApi={textApi}
                        utils={utils}
                        color={color}
                        onChange={handleColor}
                        close={close}
                    />
                </div>
            );
        },
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2 10C2 14.4183 5.58172 18 10 18C11.3255 18 12.4 16.9255 12.4 15.6V15.2C12.4 14.8285 12.4 14.6427 12.4205 14.4867C12.5623 13.4098 13.4098 12.5623 14.4867 12.4205C14.6427 12.4 14.8285 12.4 15.2 12.4H15.6C16.9255 12.4 18 11.3255 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10Z"
                    stroke="#E1E5EE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M6 10.8C6.44183 10.8 6.8 10.4418 6.8 10C6.8 9.55817 6.44183 9.2 6 9.2C5.55817 9.2 5.2 9.55817 5.2 10C5.2 10.4418 5.55817 10.8 6 10.8Z"
                    stroke="#E1E5EE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M13.2 7.6C13.6418 7.6 14 7.24183 14 6.8C14 6.35817 13.6418 6 13.2 6C12.7582 6 12.4 6.35817 12.4 6.8C12.4 7.24183 12.7582 7.6 13.2 7.6Z"
                    stroke="#E1E5EE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8.4 6.8C8.84183 6.8 9.2 6.44183 9.2 6C9.2 5.55817 8.84183 5.2 8.4 5.2C7.95817 5.2 7.6 5.55817 7.6 6C7.6 6.44183 7.95817 6.8 8.4 6.8Z"
                    stroke="#E1E5EE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    });
};
