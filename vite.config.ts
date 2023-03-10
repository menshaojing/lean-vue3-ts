import { UserConfig,ConfigEnv,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import path from 'path'
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
    resolve:{
      //alias简化,修改tsconfig.json （不修改没有提示）
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
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
      //指定auto-imports.d.ts生成路径
      dts:"src/types/auto-imports.d.ts"
    }),
      Components({
      resolvers: [ElementPlusResolver(),
        // 自动注册图标组件,默认是开启所有的图标，图标集合在这个网站 https://iconify.design/icon-sets/.
        //添加自定义图标collectionid,我们命名为my-incns，添加customCollections参数，将我们自定义集合放进去
      IconsResolver({customCollections:["my-incns"]})],
      //指定components.d.ts生成路径
      dts: 'src/types/components.d.ts',
    }),
    //自动安装图标
    Icons({
      autoInstall: true,
      //添加自定义集合，"my-incns"是collection集合id，star是图片名称，star的值为svg代码
      customCollections:{
        "my-incns":{
        star:'<svg  width="24" height="24" viewBox="0 0 1024 1024" >'+
        '<path fill="currentColor" d="M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0a208 208 0 0 1 416 0z"/></svg>'
      },
    }
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