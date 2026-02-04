/**
 * Handles the download of a file from a Blob or Base64 string.
 * @param {Blob} blob - The file content as a Blob.
 * @param {string} fileName - The name to save the file as.
 */
export const downloadFile = (blob, fileName) => {
    // Create a URL for the blob
    const url = window.URL.createObjectURL(blob);

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName); // Set filename

    // Append to body (required for Firefox), click, and remove
    document.body.appendChild(link);
    link.click();

    // Cleanup
    link.parentNode.removeChild(link);
    window.URL.revokeObjectURL(url);
};
