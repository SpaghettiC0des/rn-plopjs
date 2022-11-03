module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  /**@see https://github.com/plopjs/plop/issues/116#issuecomment-394349706 */
  plop.setHelper('preCurly', t => `{${t}`);
  plop.setHelper('postCurly', t => `${t}}`);
  plop.setHelper('append', (str, suffix) => {
    if (typeof str === 'string' && typeof suffix === 'string') {
      return str + suffix;
    }
    return str;
  });

  [
    require('./tools/code-generator/templates/navigation/stackNavigatorGenerator'),
    require('./tools/code-generator/templates/navigation/drawerNavigator'),
    require('./tools/code-generator/templates/navigation/stackScreen'),
    require('./tools/code-generator/components/generator'),
  ].forEach(fn => fn(plop));
};
