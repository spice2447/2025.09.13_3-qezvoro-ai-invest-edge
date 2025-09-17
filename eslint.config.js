import next from 'eslint-config-next';

export default [
  ...next,
  // App Router файлы экспортируют metadata/generate* — снимаем правило
  {
    files: ['src/app/**/*.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  // shadcn/ui часто имеют утилитарные экспорты — ослабим и тут
  {
    files: ['src/components/ui/**/*.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  {
    files: ['src/components/ui/**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      // если не добавлял блок выше — добавь сюда и react-refresh:
      // 'react-refresh/only-export-components': 'off',
    },
  },
];
