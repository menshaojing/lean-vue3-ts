import { UserConfig,ConfigEnv,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

//获取当前程序根路径
const root=process.cwd();
// https://vitejs.dev/config/
const userConfig= (configEnv:ConfigEnv):UserConfig=>{
  //命令 如 dev build等
  const command=configEnv.command;
  //获取mode参数 --mode 参数
  const mode=configEnv.mode;
  //配置参数集合
  let env:any;
  if(command === "build"){
    //如果是打包命令，根据mode参数，获取对应的配置参数集合 （vue-tsc && vite build） process.argv按照空格分割算下标
     env=loadEnv(process.argv[4] ==="--mode"?process.argv[5]:process.argv[4],root);
  }else{
    env=loadEnv(mode,root);
  }

  return{
    base:env.VITE_BASE_PATH,
    plugins:[vue()],
    build:{
      //terser -> 需要安装该插件 pnpm i terser -D
      minify:"terser",
      outDir:env.VITE_OUT_DIR || "dist",
      sourcemap:env.VITE_SOURCEMAP,
      terserOptions:{
        compress:{
          drop_console:env.VITE_DROP_CONSOLE,
          drop_debugger:env.VITE_DROP_DEBUGGER
        }
      }

    },
    server:{
      port:8336
    }
}
}

export default userConfig ;