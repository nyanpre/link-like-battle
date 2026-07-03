/// <reference types="vite/client" />
declare module 'react-player/lazy' {
  import { ComponentType } from 'react';
  import { ReactPlayerProps } from 'react-player';
  
  const ReactPlayer: ComponentType<ReactPlayerProps>;
  export default ReactPlayer;
}