import packageJson from '../../../package.json'

interface DefaultConfig {
  mode: 'developing' | 'production'
  baseURL: string
  version: string
}

const production = process.env.NODE_ENV === 'production'
const baseURL = process.env.NEXT_PUBLIC_BASEURL ?? ''

const defaultConfig: DefaultConfig = production
  ? { version: packageJson.version, mode: 'production', baseURL }
  : { version: packageJson.version, mode: 'developing', baseURL }

export default defaultConfig
