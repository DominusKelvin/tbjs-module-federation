const { pluginReact } = require('@rsbuild/plugin-react')
const { ModuleFederationPlugin } = require('@module-federation/enhanced/rspack')
const { dependencies } = require('../package.json')
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
            react: {
              singleton: true,
              requiredVersion: dependencies['react']
            },
            'react-dom': {
              singleton: true,
              requiredVersion: dependencies['react-dom']
            }
          })
        ])
      }
    },
    plugins: [pluginReact()]
  }
}
