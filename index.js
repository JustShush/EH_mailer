const fs = require('fs');
const pdf = require('pdf-parse');
const pdf2html = require('pdf2html');

async function pdfToHtml(filePath) {
	try {
		const pdfBuffer = fs.readFileSync(filePath);
		const data = await pdf(pdfBuffer);

		return new Promise((resolve, reject) => {
			pdf2html.html(filePath, (err, html) => {
				if (err) {
					reject(`Conversion error: ${err}`);
				} else {
					resolve(html);
				}
			});
		});
	} catch (error) {
		console.error("Error reading or converting PDF:", error);
		throw error;
	}
}

// Example usage
pdfToHtml('test.pdf')
	.then(html => console.log(html))
	.catch(error => console.error(error));
