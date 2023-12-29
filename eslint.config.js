import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  rules: {
    'unused-imports/no-unused-vars': 'off',
  },
})
