const { pluginReact } = require('@rsbuild/plugin-react')
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack'

module.exports.shipwright = {
  build: {
    dev: {
      assetPrefix: 'http://localhost:1338'
    },
    tools: {
      rspack: (config, { appendPlugins }) => {
        config.output.uniqueName = 'federation_provider'
        appendPlugins([
          new ModuleFederationPlugin({
            name: 'federation_provider',
            exposes: {
              './GoogleButton': './assets/js/components/GoogleButton.jsx',
              './InputEmail': './assets/js/components/InputEmail.jsx',
              './InputText': './assets/js/components/InputText.jsx',
              './InputPassword': './assets/js/components/InputPassword.jsx',
              './InputButton': './assets/js/components/InputButton.jsx',
              './AppLayout': './assets/js/layouts/AppLayout.jsx'
            },
            shared: ['react', 'react-dom']
          })
        ])
      }
    },
    plugins: [pluginReact()]
  }
}
