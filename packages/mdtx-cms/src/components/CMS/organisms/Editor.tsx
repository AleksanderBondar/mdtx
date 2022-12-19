import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useFileState, useRepositoryState } from '@/src/containers';
import {
  Code,
  CodeBlock,
  Quotes,
  Through,
  Bold,
  Italic,
  Comment,
  EditorLink,
  EditorDownload,
  Headings,
  FullScreen,
  BothPreview,
  EditPreview,
  MarkdownPreview,
  EditorColorPicker,
  UserInfo,
  EditorHelp,
  EditorInfo,
  Lists,
  EditorImage,
} from '../editor-functions';
import { useGitHub } from '@/src/utils';
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

export type commandsType =
  typeof import('@uiw/react-md-editor/lib/commands/index');
export type utilsType =
  typeof import('@uiw/react-md-editor/lib/utils/markdownUtils');

export const Editor: React.FC = () => {
  const { getContents } = useGitHub();
  const [color, setColor] = useState('#ffffff');
  const handleColor = (p: string) => setColor(p);
  const { selectedRepository, selectedBranch } = useRepositoryState();
  const {
    getSelectedFileByPath,
    setSelectedFileContentByPath,
    pickedFilePath,
  } = useFileState();

  const [commands, setCommands] = useState<commandsType>();
  const [utils, setUtils] = useState<utilsType>();
  const loaderCommands = async () => {
    const commands = await import('@uiw/react-md-editor').then(
      (mod) => mod.commands,
    );
    const utils = await import('@uiw/react-md-editor').then(
      (mod) => mod.MarkdownUtil,
    );
    setUtils(utils);
    setCommands(commands);
  };

  useEffect(() => {
    loaderCommands();
  }, []);
  const handleDownload = (text: string) => {
    if (!text) return;
    const file = new Blob([text], { type: 'text/plain' });
    const element = document.createElement('a');
    element.href = URL.createObjectURL(file);
    element.download = 'mdtx' + `-` + Date.now() + '.md';
    document.body.appendChild(element);
    element.click();
    if (element) {
      document.body.removeChild(element);
    }
  };
  const hardStyles = `
    .w-md-editor-toolbar li.active > button {
      background: #8484a140 !important;
      border-radius: 0.8rem;
    }
    .w-md-editor-toolbar li > button {
      border-radius: 0.8rem;
    }
    .w-md-editor-toolbar-child:active {
      display: flex;
      flex-direction: column;
    }
    .headingsButton {
      margin-left: 1.2rem !important;
      background-color: #11111D !important;
      border-radius: 0.8rem;
    }

    .w-md-editor-toolbar {
      background-color: #272839 !important;
      display: flex;
      align-items: center;
      min-height: 5.6rem;
      border-bottom: 2px solid #11111D;
    }
    .w-md-editor-toolbar ul {
      display: flex;
      align-items: center;
    }
    .w-md-editor-toolbar li > button > div:hover {
      background-color: transparent !important;
    }
    .w-md-editor-toolbar li > button {
      height: 100%;
    }
    
    .w-md-editor-toolbar li > button:hover, .w-md-editor-toolbar li > button:focus {
      background-color: transparent !important;
    }
    .w-md-editor-toolbar-divider {
      height: 2.8rem;
      width: 1px;
      margin: 0 1.6rem 0 1.6rem !important;
      vertical-align: middle;
      background-color: rgba(132, 132, 161, 0.5);
    }
    .w-md-editor-content {
      background-color: #1E1E2C !important;
    }
    .wmde-markdown-color {
      background-color: #1E1E2C !important;
    }
    .w-md-editor-preview {
      height: 100%;
      width: 40%;
    }
    .w-md-editor-input {
      height: 100%;
      width: 60%;
    }
    .w-md-editor-toolbar-child.active .w-md-editor-toolbar ul {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      width: 100%;
      gap: 0.8rem;
      padding: 0.4rem 0;
    }
    .w-md-editor-toolbar-child .w-md-editor-toolbar ul > li button {
      overflow: hidden !important;
    }
    #headings > button:focus,
    #headings > button:hover,
    #headings > button:active {
      background-color: #272839 !important;
      color: #272839 !important;
    }
    #headings > div {
      width: 16rem;
      positon: absolute;
      border-radius: 0 0 0.8rem 0.8rem;
      left: 2.2rem;
    }
    #headings > div > div {
      border-radius: 0 0 0.8rem 0.8rem;
      box-shadow: 0 1px 0 1px #9A99AD, 0 0 0 #9A99AD, 0 1px 1px #9A99AD;
    }
    #headings > div > div > ul > li {
      width: 100%;
      padding: 0.4rem 0 0.2rem 0;
    }
    #colors {
      positon: relative !important;
    }
    #colors > div {
      background-color: #272839 !important;
      width: 24rem;
      border-radius: 1.6rem;
      border: 1px solid #9A99AD;
      positon: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 0.6rem;
      padding: 0.8rem 0;
    }
  `;
  const [privateImageUrl, setPrivateImageUrl] = useState('');

  return commands && utils ? (
    <>
      <style>{hardStyles}</style>
      <MDEditor
        height={'100vh'}
        value={getSelectedFileByPath()?.content}
        onChange={(e) => {
          !!pickedFilePath && setSelectedFileContentByPath(e ? e : '');
        }}
        previewOptions={{
          transformImageUri: (src) => {
            if (selectedRepository?.private && selectedBranch) {
              const input = {
                owner: selectedRepository.full_name.split('/')[0],
                repo: selectedRepository.full_name.split('/')[1],
                path: src,
                ref: selectedBranch?.name,
              };
              getContents(input)
                .then((x) =>
                  setPrivateImageUrl(
                    ('download_url' in x && x.download_url) || '',
                  ),
                )
                .catch(() => {});
            }
            return selectedRepository?.private
              ? !src.includes('https') || !src.includes('http')
                ? privateImageUrl
                : src
              : !src.includes('https') || !src.includes('http')
              ? `https://github.com/${selectedRepository?.full_name}/blob/${selectedBranch?.name}/${src}?raw=true`
              : src;
          },
        }}
        commands={[
          Headings(commands),
          commands.divider,
          Bold(commands),
          Italic(commands),
          Through(commands),
          commands.divider,
          Comment(utils),
          Quotes(commands),
          Lists(commands),
          commands.divider,
          EditorLink(commands),
          EditorImage(commands),
          commands.divider,
          Code(commands),
          CodeBlock(commands),
          commands.divider,
          EditorColorPicker(commands, utils, handleColor, color),
          commands.divider,
          EditorDownload(handleDownload),
        ]}
        extraCommands={[
          commands.divider,
          FullScreen(commands),
          BothPreview(commands),
          MarkdownPreview(commands),
          EditPreview(commands),
          commands.divider,
          EditorHelp(commands),
          EditorInfo(commands),
          commands.divider,
          UserInfo(commands),
        ]}
      />
    </>
  ) : (
    <></>
  );
};
