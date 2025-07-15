const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

function highlightKeywords(template,keywords){
    return template.replace(/\$\{(\d+)\}/g, (match, index) => {
        const word = keywords[Number(index)];
        if (word !== undefined) {
        return `<span class='highlight'>${word}</span>`;
        }
        return match;
    });
}

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);
// Expected: "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."