/// <reference types="vite/client" />


//使用接口定义环境参数
interface ImportMetaEnv {
    // 环境
  readonly  NODE_ENV:string;
    
    // 接口前缀
  readonly  VITE_API_BASEPATH:string;
    
    // 打包路径
  readonly  VITE_BASE_PATH:string;
    
    // 是否删除debugger
  readonly  VITE_DROP_DEBUGGER:boolean;
    
    // 是否删除console.log
  readonly  VITE_DROP_CONSOLE:boolean;
    
   // 是否sourcemap
   readonly VITE_SOURCEMAP:boolean;
    
    // 输出路径
   readonly  VITE_OUT_DIR:string;
    
    // 标题
   readonly VITE_APP_TITLE:string;

}
declare global {
    interface ImportMeta {
      readonly env: ImportMetaEnv
    }
  }
