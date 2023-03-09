import { UserConfig,ConfigEnv,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
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
    //vite中默认的自定义变量前缀为VITE_，如果你想不使用默认的前缀，可以在envPrefix中添加自定义前缀，例如我们添加了APP_前缀
    envPrefix:["VITE_","APP_"],
    base:env.VITE_BASE_PATH,
    plugins:[
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      vue(),
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      AutoImport({
      resolvers: [ElementPlusResolver(),
        // 自动导入图标组件
      IconsResolver()],
    }),
      Components({
      resolvers: [ElementPlusResolver(),
        // 自动注册图标组件,默认是开启所有的图标，图标集合在这个网站 https://iconify.design/icon-sets/.
      IconsResolver()],
    }),
    //自动安装图标
    Icons({
      autoInstall: true
    })],
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