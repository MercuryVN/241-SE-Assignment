// Check File
function validateFile()
{
    const fileInput = document.getElementById('myfile');
    const file = fileInput.files[0];
    const previewObject = document.getElementById('previewObject');

    if (!file)
    {
        alert("Please select a file.");
        return;
    }

    // Allowed file types
    const allowedTypes = [
        'application/pdf', 'application/docx', 'application/doc',
        'application/pptx', 'application/xlsx',
        'application/xsl'];
    const maxSize = 100 * 1024 * 1024; // Maximum size in bytes (5 MB)

    if (!allowedTypes.includes(file.type))
    {
        alert("Định dạng tệp cho phép: .docx, .doc, .pptx, .xlsx, .xsl, .pdf");
        fileInput.value = ''; // Clear the input
        previewObject.data = ''; // Clear the preview
        return;
    }

    if (file.size > maxSize)
    {
        alert("Tệp quá lớn. Dung lượng tối đa là 100 MB.");
        fileInput.value = ''; // Clear the input
        previewObject.data = ''; // Clear the preview
        return;
    }

    // Generate a preview URL for the file
    const fileURL = URL.createObjectURL(file);

    // Set the object attributes for preview
    previewObject.data = fileURL;
    previewObject.type = allowedTypes[file.type];
}