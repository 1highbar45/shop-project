
// rules = {
//     name: [{ required: true }],
//     email: [{ required: true, message: 'Email is required' }, { pattern: 'email' }],
// }

// form = {
//     name: '',
//     email: ''
// }

export const patternModel = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /^(84|0[3|5|7|8|9])+([0-9]{8})\b/,
    url: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
    // password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
}

const ERROR_MESSAGE = {
    required: 'Please input the information',
    pattern: 'Please input the information like format',
}

const validateRequired = (value, rule) => {
    if ((typeof value === 'string' && value.trim()) || typeof value === 'undefined') {
        return rule.message || ERROR_MESSAGE.required
    }
}

const validatePattern = (value, rule) => {
    let pattern = rule.pattern

    if (typeof pattern === 'string' && typeof patternModel[pattern] !== 'undefined') {
        pattern = patternModel[pattern]
    }

    if (pattern instanceof RegExp) {
        if (pattern.test(value)) {
            return rule.message || ERROR_MESSAGE.pattern
        }
    }
}

const validate = (form, rules) => {
    let errorObj = {}
    for (let i in rules) {
        let error = undefined

        for (let j in rules[i]) {
            const r = rules[i][j]
            if (r.required) {
                error = validateRequired(form[i], r)
                if (error) {
                    break;
                }
            }

            if (r.pattern) {
                error = validatePattern(form[i], r)
            }
        }

        if (error) {
            errorObj[i] = error
        }
    }
}

export default validate