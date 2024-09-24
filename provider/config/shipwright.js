const { pluginReact } = require('@rsbuild/plugin-react')
const { ModuleFederationPlugin } = require('@module-federation/enhanced/rspack')
const { dependencies } = require('../package.json')
module.exports.shipwright = {
  build: {
    dev: {
      assetPrefix: true
    },
    tools: {
      rspack: (config, { appendPlugins }) => {
        config.output.uniqueName = 'federation_provider'
        appendPlugins([
          new ModuleFederationPlugin({
            name: 'federation_provider',
            exposes: {
              './components/GoogleButton':
                './assets/js/components/GoogleButton.jsx',
              './components/InputEmail':
                './assets/js/components/InputEmail.jsx',
              './components/InputText': './assets/js/components/InputText.jsx',
              './components/InputPassword':
                './assets/js/components/InputPassword.jsx',
              './components/InputButton':
                './assets/js/components/InputButton.jsx',
              './layouts/AppLayout': './assets/js/layouts/AppLayout.jsx'
            },
            shared: {
              react: {
                singleton: true,
                requiredVersion: dependencies['react']
              },
              'react-dom': {
                singleton: true,
                requiredVersion: dependencies['react-dom']
              }
            }
          })
        ])
      }
    },
    plugins: [pluginReact()]
  }
}
