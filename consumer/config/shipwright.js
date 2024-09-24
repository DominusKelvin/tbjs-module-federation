const { pluginReact } = require('@rsbuild/plugin-react')
const { ModuleFederationPlugin } = require('@module-federation/enhanced/rspack')
const { dependencies } = require('../package.json')

module.exports.shipwright = {
  build: {
    tools: {
      rspack: (config, { appendPlugins }) => {
        appendPlugins([
          new ModuleFederationPlugin({
            name: 'federation_consumer',
            remotes: {
              federation_provider:
                'federation_provider@http://localhost:1338/mf-manifest.json'
            },
            shared: {
              react: {
                singleton: true,
                requiredVersion: dependencies.react
              },
              'react-dom': {
                singleton: true,
                requiredVersion: dependencies['react-dom']
              },
              '@inertiajs/react': {
                singleton: true,
                requiredVersion: dependencies['@inertiajs/react']
              }
            }
          })
        ])
      }
    },
    plugins: [pluginReact()]
  }
}
