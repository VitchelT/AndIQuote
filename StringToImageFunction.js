
// function stringToImage(text) {
//     // Get the canvas element
//     const canvas = document.getElementById('canvas');
//     const context = canvas.getContext('2d');

//     // Set canvas dimensions
//     canvas.width = 350; // Adjust width according to the content
//     canvas.height = 350; // Adjust height accordingly

//     // Define the styling for the container box
//     const padding = 20;
//     const boxWidth = canvas.width - 2 * padding;
//     const boxHeight = canvas.height - 2 * padding;
//     const borderRadius = 33;

//     // Draw the black box with a yellow border
//     // context.fillStyle = 'black';
//     // context.strokeStyle = 'rgba: (162, 145, 121, 0.868)';
//     // context.lineWidth = 5;

//     // Create a rounded rectangle for the black container with border
//     // drawRoundedRect(context, padding, padding, boxWidth, boxHeight, borderRadius);
//     // context.fill();
//     // context.stroke();

//     // Set initial text styling
//     let fontSize = 26;
//     context.font = `${fontSize}px sans-serif`;
//     context.fillStyle = 'white';
//     context.textAlign = 'center';
//     context.textBaseline = 'middle';
//     context.imageSmoothingQuality = 'high';

//     // Prepare the text for line breaks
//     let lines = wrapText(context, text, boxWidth, fontSize);
    
//     // If text is too long, reduce the font size until it fits
//     while (lines.length * fontSize > boxHeight) {
//         fontSize -= 2;
//         context.font = `${fontSize}px sans-serif`;
//         lines = wrapText(context, text, boxWidth, fontSize);
//     }

//     // Draw the text (centered and justified)
//     const textX = canvas.width / 2;
//     const lineHeight = fontSize * 1.1; // Adjust the line height accordingly
//     const startY = (canvas.height - lines.length * lineHeight) / 1.7;

//     lines.forEach((line, index) => {
//         const lineY = startY + index * lineHeight;
//         context.fillText(line, textX, lineY, boxWidth);
//     });

//     // // Convert the canvas content to a .jpg file
//     // const link = document.getElementById('download-link');
//     // link.href = canvas.toDataURL('image/jpeg');
//     // link.style.display = 'block';
// }

// // Helper function to wrap text into multiple lines
// function wrapText(context, text, maxWidth, fontSize) {
//     const words = text.split(' ');
//     let line = '';
//     let lines = [];

//     for (let i = 0; i < words.length; i++) {
//         const testLine = line + words[i] + ' ';
//         const testWidth = context.measureText(testLine).width;
//         if (testWidth > maxWidth) {
//             lines.push(line.trim());
//             line = words[i] + ' ';
//         } else {
//             line = testLine;
//         }
//     }
//     lines.push(line.trim());

//     return lines;
// }

// // Helper function to draw a rounded rectangle
// function drawRoundedRect(ctx, x, y, width, height, radius) {
//     ctx.beginPath();
//     ctx.moveTo(x + radius, y);
//     ctx.lineTo(x + width - radius, y);
//     ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
//     ctx.lineTo(x + width, y + height - radius);
//     ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
//     ctx.lineTo(x + radius, y + height);
//     ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
//     ctx.lineTo(x, y + radius);
//     ctx.quadraticCurveTo(x, y, x + radius, y);
//     ctx.closePath();
// }

// // Call the function with your desired string
// // stringToImage("Give me six hours to chop down a tree and I will spend the first four sharpening the axe.");
