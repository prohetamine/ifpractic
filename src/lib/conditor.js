const Conditor = (code, require, varCount, result) => {
  try {
    eval(code)

    const vars = (code
                   .match(/var [A-Za-z$_\d]{1,130} = [^(;|\n)]+/gi) || [])
                   .map(
                     v =>
                      v.match(/var \d/)
                        ? false
                        : v.replace(/\s/gi, '')
                           .replace(/^var/, '')
                   )
                   .filter(v => v)
                   .map(v => {
                     const [name, data] = v.split('=')

                     return typeof(v) === 'string'
                              ? ({
                                name,
                                data
                              })
                              : v
                  })

    if (vars.length !== varCount) {
      return { result: false, isError: true, messageError: 'Are you using more or fewer variables than are provided for this task', recode: false }
    }

    let newCondition = ''
    let condition = code.match(/if(\s?)\(.+\)(\s?)\{/)[0].replace(/(if(\s?)\(|\)(\s?)\{)/gi, '')

    newCondition = condition

    vars.reverse().forEach(({ name, data }) => {
      if (name && data) {
        const regexp = new RegExp(name, 'gi')
        newCondition = newCondition.replace(regexp, data)
      }
    })

    const isRequire = require.filter(req => {
      const regexp = new RegExp(req.data.toString().replace(/\|/gi, '\\|'), 'gi')
      const matches = condition.match(regexp)

      try {
        const _regexp = new RegExp(req.elseData.toString().replace(/\|/gi, '\\|'), 'gi')
        const _matches = condition.match(_regexp)

        return matches
                ? req.count.includes(matches.length)
                    ? true
                    : _matches
                        ? req.count.includes(_matches.length)
                        : false
                : _matches
                    ? req.count.includes(_matches.length)
                    : false
      } catch (e) {
        return matches
                ? req.count.includes(matches.length)
                : false
      }
    }).length === require.length

    if (isRequire) {
      return { result: eval(condition) === result, isError: false, messageError: '', recode: vars.map(({ name, data }) => `var ${name} = ${data};`).join('\n')+`\n\nif (${condition}) {
  /* good work! */
}` }
    } else {
      return { result: false, isError: true, messageError: 'Not fulled data', recode: false }
    }
  } catch (e) {
    return { result: false, isError: true, messageError: e.toString(), recode: false }
  }
}

module.exports = Conditor
