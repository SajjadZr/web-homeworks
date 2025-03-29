document.addEventListener("DOMContentLoaded", function () {
    function evaluateFormula(formulaElement) {
        const expression = formulaElement.getAttribute("evaluator");
        if (!expression) {
            formulaElement.textContent = "Invalid Formula";
            return;
        }

        try {

            const inputs = document.querySelectorAll("input");
            let values = {};

            inputs.forEach(input => {
                const id = input.id;
                const value = input.value.trim();

                if (!isNaN(value) && value !== "") {
                    values[id] = parseFloat(value);
                } else {
                    values[id] = NaN;
                }
            });

            let formula = expression.replace(/([a-zA-Z_][a-zA-Z0-9_]*)/g, match => {
                return values.hasOwnProperty(match) && !isNaN(values[match]) ? values[match] : "NaN";
            });

            const result = eval(formula);
            if (isNaN(result)) {
                formulaElement.textContent = "Invalid Formula";
            } else {
                formulaElement.textContent = result.toFixed(2);
            }
        } catch (error) {
            formulaElement.textContent = "Invalid Formula";
        }
    }

    function updateAllFormulas() {
        document.querySelectorAll("formula").forEach(evaluateFormula);
    }

    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", updateAllFormulas);
    });

    updateAllFormulas();
});

