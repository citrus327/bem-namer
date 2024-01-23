const join = (a: string, b: string, seperator: string) => {
  return [a, b].filter(Boolean).join(seperator);
};


const bem = (baseClassName = '') => ({
  b: (block?: string) => {
    if (!block) return baseClassName;
    return `${baseClassName}-${block}`;
  },
  m: (block = '', modifier = '') => {
    let _modifier = modifier;
    let _block = block;

    if (!_modifier && _block) {
      _modifier = _block;
      _block = '';
    }

    if (!_block && _modifier) {
      return join(baseClassName, _modifier, '--');
    }

    return join(join(baseClassName, block, '-'), modifier, '--');
  },
});

export { bem };