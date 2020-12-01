function solve(input) {
    const indexSlash = input.lastIndexOf('\\');
    const indexPoint = input.lastIndexOf('.');
    const file = input.substring(indexSlash + 1, indexPoint)
    const ext = input.substring(indexPoint + 1);
    console.log(`File name: ${file}`);
    console.log(`File extension: ${ext}`);
}

solve(
    'C:\\Internal\\training-internal\\Template.pptx'
)