const textcolorPicker = document.getElementById('text-color-picker');
const backgroundColorPicker = document.getElementById('background-color-picker');
const fontSizePicker = document.getElementById('font-size-picker');
const canvas = document.getElementById('signature-pad');
const ctx = canvas.getContext('2d');

const clearButton = document.getElementById('clear-btn');
const saveButton = document.getElementById('save-btn');  
const retriveButton = document.getElementById('retrieve-btn');

// Init fill
ctx.fillStyle = backgroundColorPicker.value || "#ffffff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Init stroke
ctx.strokeStyle = textcolorPicker.value || "#000000";
ctx.lineWidth = parseInt(fontSizePicker.value) || 10;
ctx.lineCap = 'round';

// Drawing logic
let isDrawing = false;

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
  ctx.closePath();
});

canvas.addEventListener('mouseout', () => {
  isDrawing = false;
});

// Change stroke color
textcolorPicker.addEventListener('input', () => {
  ctx.strokeStyle = textcolorPicker.value;
});

// Change font size (stroke thickness)
fontSizePicker.addEventListener('input', () => {
  ctx.lineWidth = parseInt(fontSizePicker.value);
});

// Change background color (resets canvas)
backgroundColorPicker.addEventListener('input', () => {
  ctx.fillStyle = backgroundColorPicker.value;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

// Clear canvas
clearButton.addEventListener('click', () => {
  ctx.fillStyle = backgroundColorPicker.value;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

// Save to image and local storage
saveButton.addEventListener('click', () => {
  const image = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = image;
  link.download = 'signature.png';
  link.click();
  localStorage.setItem('signature', image);
});

// Retrieve from local storage
retriveButton.addEventListener('click', () => {
  const savedImage = localStorage.getItem('signature');
  if (!savedImage) {
    alert("No signature saved yet!");
    return;
  }

  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
  img.src = savedImage;
});
