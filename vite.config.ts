import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import vitePluginForArco from '@arco-plugins/vite-react'
import UnoCSS from 'unocss/vite'
import {presetUno,presetAttributify,presetMini} from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UnoCSS({
    presets:[
      presetUno(),
      presetMini()
    ]
  }),react()],
})
