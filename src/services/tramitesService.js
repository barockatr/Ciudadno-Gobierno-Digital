/**
 * Simulates a call to an external government API to process a procedure.
 * @param {string} tramiteId - The ID of the procedure (e.g., 'CURP').
 * @param {object} payload - The data submitted by the user.
 * @returns {Promise<object>} - Resolves with a simulated file object.
 */
export const fetchDocumento = (tramiteId, payload) => {
    return new Promise((resolve, reject) => {
        console.log(`Processing request for ${tramiteId}...`, payload);

        setTimeout(() => {
            // Simulate success
            const success = true;

            if (success) {
                // Create a fake PDF content (using simple text for this mock)
                const mockContent = `
          DOCUMENTO OFICIAL
          -----------------
          TRÁMITE: ${tramiteId}
          FECHA: ${new Date().toLocaleDateString()}
          ID SOLICITUD: ${Math.random().toString(36).substr(2, 9).toUpperCase()}
          
          DATOS DEL SOLICITANTE:
          ${JSON.stringify(payload, null, 2)}
          
          Este es un documento simulado para fines de demostración.
          FIRMA DIGITAL: xxxx-xxxx-xxxx-xxxx
        `;

                // Create a Blob representing the file
                const blob = new Blob([mockContent], { type: "text/plain" }); // Using text/plain for simplicity in mock, ideally application/pdf

                resolve({
                    success: true,
                    data: blob,
                    fileName: `${tramiteId}_${Date.now()}.txt`, // Using .txt for the mock content
                    message: "Trámite procesado exitosamente.",
                });
            } else {
                reject(new Error("No se pudo procesar el trámite. Intente más tarde."));
            }
        }, 2000); // 2 second delay
    });
};
