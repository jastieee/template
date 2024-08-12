function handleDownload() {
    const link = document.createElement('a');
    link.href = 'assets/Cruz_Jhustie-CV.pdf';
    link.download = 'Cruz_Jhustie-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener('DOMContentLoaded', () => {
    updateAge();
    const downloadButton = document.getElementById('download-resume');
    downloadButton.addEventListener('click', handleDownload);
});
